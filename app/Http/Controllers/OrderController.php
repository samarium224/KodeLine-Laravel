<?php

namespace App\Http\Controllers;

use App\Models\analysis;
use App\Models\Cart;
use App\Models\Order;
use App\Models\ProductAttributes;
use App\Models\Products;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Illuminate\Support\Facades\Auth;

class OrderController extends Controller
{
    public function checkout(Request $request)
    {
        $validate = $request->validate([
            'address' => 'required',
            'city' => 'nullable',
            'state' => 'nullable',
            'postal_code' => 'nullable',
            'phone' => 'required',

        ]);

        // Get the authenticated user's ID
        $user_id = Auth::id();

        if ($user_id == null) {
            $user_id = session()->getId();
            $username = 'guest';
        } else {
            $username = Auth::user()->name;
        }

        $Cartproducts = Cart::where('user_id', $user_id)->get();

        \Stripe\Stripe::setApiKey(env('STRIPE_SECRET_KEY'));
        $YOUR_DOMAIN = 'http://127.0.0.1:8000/';

        $lineItems = [];
        $totalPrice = 0;
        foreach ($Cartproducts as $product) {
            $totalPrice += $product->product_price;
            $lineItems[] = [
                'price_data' => [
                    'currency' => 'usd',
                    'unit_amount' => $product->product_price * 100,
                    'product_data' => [
                        'name' => $product->product_name,
                        'description' => $product->product_name,
                        'images' => [$product->imgUrl],
                    ],
                ],
                'quantity' => $product->product_quantity,
            ];
        }

        $checkout_session = \Stripe\Checkout\Session::create([
            'line_items' => $lineItems,
            'mode' => 'payment',
            'success_url' => route('checkout.success', [], true) . "?session_id={CHECKOUT_SESSION_ID}",
            'cancel_url' => route('checkout.cancel', [], true),
        ]);

        $unique_orderID = 'KL' . bin2hex(random_bytes(3));

        foreach ($Cartproducts as $product) {
            $order = Order::create([
                'order_id' => $unique_orderID,
                'username' => $username,
                'user_id' => $user_id,
                'address' => $request->address,
                'city' => $request->city,
                'state' => $request->state,
                'postal' => $request->postal_code,
                'phonenumber' => $request->phone,
                'session_id' => $checkout_session->id,
                'product_id' => $product->product_id,
                'attribute_id' => $product->attribute_id,
                'variantIndex' => $product->variantIndex,
                'product_name' => $product->product_name,
                'product_quantity' => $product->product_quantity,
                'total_price' => $totalPrice,
                'imgUrl' => $product->imgUrl,
            ]);
        }

        return Inertia::location($checkout_session->url);
    }

    public function payment_success(Request $request)
    {
        $stripe = new \Stripe\StripeClient(env('STRIPE_SECRET_KEY'));
        $session_id = $request->get('session_id');

        try {
            //code...
            $session = $stripe->checkout->sessions->retrieve($session_id);

            if (!$session_id) {
                throw new NotFoundHttpException;
            }

            $customer = $session->customer_details;
            $total_order = 0;
            $total_price = 0;
            $unit_sold = 0;
            $Revenue = 0;
            $usercart = null;

            $orders = Order::where('session_id', $session->id)->get();
            if (!$orders) {
                throw new NotFoundHttpException();
            }

            foreach ($orders as $order) {
                if ($order->payment_status === 0) {

                    $total_order++;
                    $total_price += $order->total_price;

                    $order->payment_status = 1;
                    $order->save();

                    //remove the cart items
                    $usercart = $order->user_id;
                    // reduce product count
                    $product_id = $order->product_id;
                    $attributeID = $order->attribute_id;
                    $variantID = $order->variantIndex;
                    $order_count = $order->product_quantity;

                    $unit_sold += $order_count;
                    $Revenue += $unit_sold * $total_price;
                    $variantStock = ProductAttributes::where('id', $attributeID)->value('stock');
                    if ($variantStock != null) {
                        $VariantStockIndex = explode(',', $variantStock);
                        $variantStock = (int) $VariantStockIndex[$variantID];
                        $newStock = $variantStock - $order_count;

                        $VariantStockIndex[$variantID] = $newStock;
                        $newStock = implode(',', $VariantStockIndex);

                        ProductAttributes::where('id', $attributeID)->update([
                            'stock' => $newStock,
                        ]);

                    } else {
                        Products::where('id', $product_id)->decrement('quantity', $order_count);
                    }

                }
            }

            Cart::where('user_id', $usercart)->delete();

            // Get the current month and year
            $currentMonthYear = Carbon::now()->format('M-Y');

            // Check if analysis record exists for the current month and year
            $analysis = analysis::where('M_Y', $currentMonthYear)->first();

            if ($analysis) {
                // Update existing record
                $analysis->increment('revenue', $Revenue);
                $analysis->increment('unit_sold', $unit_sold);
                $analysis->increment('total_sales_price', $total_price);
                $analysis->increment('total_orders', $total_order);
                $analysis->increment('customer_count', 1);
            } else {
                // Create new record
                $analysis = new Analysis;
                $analysis->M_Y = $currentMonthYear;
                $analysis->unit_sold = $unit_sold;
                $analysis->total_sales_price = $total_price;
                $analysis->total_orders = $total_order;
                $analysis->customer_count = 1;
                $analysis->save();
            }

            return Inertia::render('ThankYou', [
                'customer' => $customer,
            ]);
        } catch (\Throwable $th) {
            throw new NotFoundHttpException;
        }
    }

    public function cancel()
    {
        return redirect(route('home'));
    }
}

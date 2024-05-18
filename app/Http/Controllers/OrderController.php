<?php

namespace App\Http\Controllers;

use App\Events\OrderProcessed;
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
            'postal_code' => 'required',
            'phone' => 'required',
            'special_note' => 'nullable',

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
            $totalPrice += $product->product_price * $product->product_quantity;
            $lineItems[] = [
                'price_data' => [
                    'currency' => 'cad',
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

        $productID = [];
        $attribute_id = [];
        $variantIndex = [];
        $product_name = [];
        $product_quantity = [];
        $imgUrl = [];

        foreach ($Cartproducts as $product) {
            $productID[] = $product->product_id;
            $attribute_id[] = $product->attribute_id;
            $variantIndex[] = $product->variantIndex;
            $product_name[] = $product->product_name;
            $product_quantity[] = $product->product_quantity;
            $imgUrl[] = $product->imgUrl;
        }

        $productID = implode('|', $productID);
        $attribute_id = implode('|', $attribute_id);
        $variantIndex = implode('|', $variantIndex);
        $product_name = implode('|', $product_name);
        $product_quantity = implode('|', $product_quantity);
        $imgUrl = implode('|', $imgUrl);

        $order = Order::create([
            'order_id' => $unique_orderID,
            'username' => $username,
            'user_id' => $user_id,
            'address' => $request->address,
            'city' => $request->city,
            'state' => $request->state,
            'postal' => $request->postal_code,
            'userNote' => $request->special_note,
            'phonenumber' => $request->phone,
            'session_id' => $checkout_session->id,
            'product_id' => $productID,
            'attribute_id' => $attribute_id,
            'variantIndex' => $variantIndex,
            'product_name' => $product_name,
            'product_quantity' => $product_quantity,
            'total_price' => $totalPrice,
            'imgUrl' => $imgUrl,
        ]);

        return Inertia::location($checkout_session->url);
    }

    public function payment_success(Request $request)
    {
        //process the purchase
        $stripe = new \Stripe\StripeClient(env('STRIPE_SECRET_KEY'));
        $session_id = $request->get('session_id');

        // try {
        //code...
        $session = $stripe->checkout->sessions->retrieve($session_id);

        if (!$session_id) {
            throw new NotFoundHttpException;
        }

        $customer = $session->customer_details;

        $usercart = null;

        $order = Order::where('session_id', $session->id)->first();
        $order->email = $customer->email;
        $order->save();
        if (!$order) {
            throw new NotFoundHttpException();
        }

        OrderProcessed::dispatch($order);

        //remove the cart items
        $usercart = $order->user_id;
        Cart::where('user_id', $usercart)->delete();

        return Inertia::render('ThankYou', [
            'customer' => $customer,
        ]);

        // } catch (\Throwable $th) {
        //     throw new NotFoundHttpException;
        // }
    }

    public function cancel()
    {
        return redirect(route('home'));
    }
}

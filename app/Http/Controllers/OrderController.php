<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Order;
use App\Models\Products;
use Illuminate\Http\Request;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Illuminate\Support\Facades\Auth;


class OrderController extends Controller
{
    public function AddtoCart(Request $request){
        $validate = $request->validate([
            "product_id"=> "required|integer",
            "product_name"=> "required",
            "product_quantity"=> "required",
        ]);

        dd(session()->getId());

        // Retrieve the currently authenticated user...
        $username = $request->user()->value('name');
        $userid = $request->user()->value('id');
        $prduct_id = $request->product_id;
        $product_quantity = $request->product_quantity;

        $current_stock = Products::where('id', $prduct_id)->value('quantity');
        $unit_price = Products::where('id', $prduct_id)->value('price');

        if($product_quantity < $current_stock){
            $product_price = $product_quantity * $unit_price;
            Cart::insert([
                'username'=> $username,
                'user_id'=> $userid,
                'product_id'=> $prduct_id,
                'product_name'=> $request->product_name,
                'product_quantity'=> $product_quantity,
                'product_price'=> $product_price,
            ]);
        }
        else{
            return redirect()->route('allproducts')->with('message', 'Product stock out!');
        }

        return redirect()->route('allproducts')->with('message', 'Product added to cart successfully!');

    }

    public function checkout()
    {
        $products = Products::all();

        \Stripe\Stripe::setApiKey(env('STRIPE_SECRET_KEY'));
        $YOUR_DOMAIN = 'http://127.0.0.1:8000/';

        $lineItems = [];
        $totalPrice = 0;
        foreach ($products as $product) {
            $totalPrice += $product->price;
            $lineItems[] = [
                'price_data' => [
                    'currency' => 'usd',
                    'unit_amount' => $product->price * 100,
                    'product_data' => [
                        'name' => $product->product_name,
                        'description' => $product->product_short_description,
                        'images' => ['https://example.com/t-shirt.png'],
                    ],
                ],
                'quantity' => 1,
            ];
        }

        $checkout_session = \Stripe\Checkout\Session::create([
            'line_items' => $lineItems,
            'mode' => 'payment',
            'success_url' => route('checkout.success', [], true) . "?session_id={CHECKOUT_SESSION_ID}",
            'cancel_url' => route('checkout.cancel', [], true),
        ]);

        $order = Order::insert([
            'order_id'=> uniqid('order'),
            'username'=> 'guest',
            'session_id' => $checkout_session->id,
            'product_id'=> '1',
            'product_name' => 'test_value',
            'product_quantity' => '100',
            'total_price' => $totalPrice,
            'payment_status' => 'unpaid',
            'delivery_status'=> 'on progress',
        ]);

        return redirect($checkout_session->url);

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

            $order = Order::where('session_id', $session->id)->first();
            if (!$order) {
                throw new NotFoundHttpException();
            }
            if ($order->status === 'unpaid') {
                $order->status = 'paid';
                $order->save();
            }

            return view('test.success', compact('customer'));

        } catch (\Throwable $th) {
            throw new NotFoundHttpException;
        }


    }
}

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

    public function checkout(Request $request)
    {
        // Get the authenticated user's ID
        $user_id = Auth::id();

        if ($user_id == null) {
            $user_id = session()->getId();
            $username = 'guest';
        } else {
            $username = $request->user()->value('name');
            $userid = $request->user()->value('id');
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

        foreach ($Cartproducts as $product) {
            $order = Order::create([
                'order_id' => uniqid('order'),
                'username' => $username,
                'user_id' => $userid,
                'session_id' => $checkout_session->id,
                'product_id' => $product->id,
                'product_name' => $product->product_name,
                'product_quantity' => $product->product_quantity,
                'total_price' => $totalPrice,
                'phonenumber'=> '12324244',
                'address'=> 'myaddess',
                'imgUrl'=> $product->imgUrl,

            ]);
        }

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
            if ($order->payment_status === 0) {
                $order->payment_status = 1;
                $order->save();
            }

            return view('test.success', compact('customer'));
        } catch (\Throwable $th) {
            throw new NotFoundHttpException;
        }
    }

    public function cancel()
    {
        return redirect(route('home'));
    }
}

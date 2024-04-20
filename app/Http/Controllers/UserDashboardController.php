<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class UserDashboardController extends Controller
{
    public function Index()
    {
        // Get the authenticated user's ID
        $user_id = Auth::id();

        // Retrieve the user's orders
        $Userproducts = Order::where('user_id', $user_id)->get()->map(function ($item) {
            return [
                'imgUrl' => $item->imgUrl,
                'order_id' => $item->order_id,
                'product_name' => $item->product_name,
                'total_price' => $item->total_price,
                'product_quantity' => $item->product_quantity,
                'status' => $item->delivery_status,
            ];
        });

        // Pass the user's orders to the frontend
        return Inertia::render('Dashboard', [
            'Userproducts' => $Userproducts
        ]);
    }

}

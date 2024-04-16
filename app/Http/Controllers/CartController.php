<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth; // Import Auth facade

class CartController extends Controller
{
    // Show the current user's cart data
    public function index(Request $request)
    {
        // Get the authenticated user's ID
        $user_id = Auth::id();

        // Fetch cart data for the user
        $cartdata = Cart::where('user_id', $user_id)->get()->map(function ($item) {
            return [
                'itemID' => $item->id,
                'itemImgURL' => "",
                'itemTitle' => $item->product_name,
                'ageRange' => [0,3],
                'currentPrice' => $item->product_price,
                'oldPrice' => "",
                'quantity' => $item->product_quantity,
            ];
        })->toArray();

        // Return the cart data as JSON response
        return response()->json($cartdata);
    }
}

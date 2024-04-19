<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Products;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth; // Import Auth facade

class CartController extends Controller
{
    // Show the current user's cart data
    public function index(Request $request)
    {
        // Get the authenticated user's ID
        $user_id = Auth::id();

        if ($user_id == null) {
            $user_id = session()->getId();
        }
        // Fetch cart data for the user
        $cartdata = Cart::where('user_id', $user_id)->get()->map(function ($item) {
            return [
                'itemID' => $item->product_id,
                'itemImgURL' => $item->imgUrl,
                'itemTitle' => $item->product_name,
                'ageRange' => $item->ageRange,
                'currentPrice' => $item->product_price,
                'oldPrice' => "",
                'quantity' => $item->product_quantity,
            ];
        })->toArray();

        // Return the cart data as JSON response
        return response()->json($cartdata);
    }

    public function store(Request $request)
    {
        $validate = $request->validate([
            'itemID' => 'required|integer',
        ]);

        // dd(session()->getId());
        // Get the authenticated user's ID
        $user_id = Auth::id();

        if ($user_id == null) {
            $userid = session()->getId();
            $username = "guest";
        } else {
            // Retrieve the currently authenticated user...
            $username = $request->user()->value('name');
            $userid = $request->user()->value('id');
        }

        $product_id = $request->itemID;
        $product_quantity = 1;

        // Check if the product already exists in the user's cart
        $existingCartItem = Cart::where('user_id', $userid)->where('product_id', $product_id)->first();

        if ($existingCartItem) {
            // Product already exists in the cart, you can handle this case as needed
            return redirect()->route('home')->with('message', 'Product already exists in the cart');
        }

        // Product doesn't exist in the cart, proceed with adding it
        $product_info = Products::where('id', $product_id)->first();
        $current_stock = $product_info->quantity;

        $productImg = explode('|', $product_info->product_img);
        $productImg = count($productImg) > 1 ? $productImg[0] : $product_info->product_img;

        if ($product_quantity < $current_stock) {
            Cart::insert([
                'username' => $username,
                'user_id' => $userid,
                'product_id' => $product_id,
                'product_name' => $product_info->product_name,
                'imgUrl' => $productImg,
                'ageRange' => $product_info->ageRange,
                'product_quantity' => $product_quantity,
                'product_price' => $product_info->price,
            ]);
        } else {
            return redirect()->route('home')->with('message', 'Product stock out!');
        }

        return redirect()->route('home')->with('message', 'Product added to cart successfully!');
    }

    public function updateCartItems(Request $request)
    {
        $itemId = $request->itemId;
        // Get the authenticated user's ID
        $user_id = Auth::id();

        if ($user_id == null) {
            $userid = session()->getId();
            $username = "guest";
        } else {
            // Retrieve the currently authenticated user...
            $username = $request->user()->name; // Use ->name directly
            $userid = $request->user()->id; // Use ->id directly
        }

        $cart_id = Cart::where('user_id', $user_id)->where('product_id', $itemId)->value('id');

        Cart::findOrFail($cart_id)->increment('product_quantity', 1);

        // return response()->json($request);
    }

    public function DecCartItems(Request $request){
        $itemId = $request->itemId;
        // Get the authenticated user's ID
        $user_id = Auth::id();

        if ($user_id == null) {
            $userid = session()->getId();
            $username = "guest";
        } else {
            // Retrieve the currently authenticated user...
            $username = $request->user()->name; // Use ->name directly
            $userid = $request->user()->id; // Use ->id directly
        }

        $cart_id = Cart::where('user_id', $user_id)->where('product_id', $itemId)->value('id');

        Cart::findOrFail($cart_id)->decrement('product_quantity', 1);
    }

    public function RemoveCartItem(Request $request){
        $itemId = $request->itemId;
        // Get the authenticated user's ID
        $user_id = Auth::id();

        if ($user_id == null) {
            $userid = session()->getId();
            $username = "guest";
        } else {
            // Retrieve the currently authenticated user...
            $username = $request->user()->name; // Use ->name directly
            $userid = $request->user()->id; // Use ->id directly
        }

        $cart_id = Cart::where('user_id', $user_id)->where('product_id', $itemId)->value('id');

        Cart::findOrFail($cart_id)->delete();
    }

}

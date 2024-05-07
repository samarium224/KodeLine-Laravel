<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\ProductAttributes;
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

            $current_stock = Products::where('id', $item->product_id)->value('quantity');

            if($item->attribute_id != null){
                $current_stock = ProductAttributes::where('id', $item->attribute_id)->value('stock');
                $current_stock = explode(',',$current_stock)[$item->variantIndex];
            }

            return [
                'itemID' => $item->product_id,
                'itemImgURL' => $item->imgUrl,
                'itemTitle' => $item->product_name,
                'color' => $item->color,
                'size' => $item->size,
                'currentPrice' => $item->product_price,
                'on_stock' => $current_stock,
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
            'color' => 'nullable',
            'sizeIndex' => 'nullable',
        ]);

        $product_id = $request->itemID;
        $variantIndex = $request->sizeIndex == null ? 0 : $request->sizeIndex;
        $sizeName = null;
        $priceData = null;
        $attribute_id = null;

        // Get the authenticated user's ID
        $user_id = Auth::id();

        if ($user_id == null) {
            $user_id = session()->getId();
            $username = "guest";
        } else {
            // Retrieve the currently authenticated user...
            $username = Auth::user()->name;
        }

        // Product doesn't exist in the cart, proceed with adding it
        $product_info = Products::with('attributes')->where('id', $product_id)->first();

        $current_stock = $product_info->quantity;
        $productImg = explode('|', $product_info->product_img);
        $productImg = count($productImg) > 1 ? $productImg[0] : $product_info->product_img;

        foreach($product_info->attributes as $attribute){
            if($attribute->value == $request->color){
                $sizeName = explode(',', $attribute->sizes)[$variantIndex];
                $current_stock = explode(',', $attribute->stock)[$variantIndex];
                $priceData = explode(',',$attribute->price)[$variantIndex];
                $productImg = explode('|',$attribute->imageUrls)[0];
                $attribute_id = $attribute->id;
            }
        }

        // Check if the product already exists in the user's cart
        // $existingCartItem = Cart::where('user_id', $user_id)
        // ->where('product_id', $product_id)
        // ->where('attribute_id', $attribute_id)->first();

        // if ($existingCartItem) {
        //     // Product already exists in the cart, you can handle this case as needed
        //     return redirect()->route('home')->with('message', 'Product already exists in the cart');
        // }

        if ($current_stock > 0) {
            Cart::create([
                'username' => $username,
                'user_id' => $user_id,
                'product_id' => $product_id,
                'attribute_id' => $attribute_id,
                'variantIndex' => $variantIndex,
                'product_name' => $product_info->product_name,
                'imgUrl' => $productImg,
                'color' => $request->color,
                'size' => $sizeName,
                'product_price' => $priceData,
            ]);
        } else {
            return redirect()->route('home')->with('message', 'Product stock out!');
        }

        return redirect()->route('home')->with('message', 'Product added to cart successfully!');
    }

    public function updateCartItems(Request $request)
    {
        $request->validate([
            'itemId'=> 'required|integer',
        ]);

        $itemId = $request->itemId;

        // Get the authenticated user's ID
        $user_id = Auth::id();

        if ($user_id == null) {
            $user_id = session()->getId();
        }

        $cart_id = Cart::where('user_id', $user_id)->where('product_id', $itemId)->value('id');

        Cart::findOrFail($cart_id)->increment('product_quantity', 1);

        // return response()->json($request);
    }

    public function DecCartItems(Request $request){
        $request->validate([
            'itemId'=> 'required|integer',
        ]);

        $itemId = $request->itemId;

        // Get the authenticated user's ID
        $user_id = Auth::id();

        if ($user_id == null) {
            $user_id = session()->getId();
        }

        $cart_id = Cart::where('user_id', $user_id)->where('product_id', $itemId)->value('id');

        Cart::findOrFail($cart_id)->decrement('product_quantity', 1);
    }

    public function RemoveCartItem(Request $request){
        $request->validate([
            'itemId'=> 'required|integer',
        ]);

        $itemId = $request->itemId;

        // Get the authenticated user's ID
        $user_id = Auth::id();

        if ($user_id == null) {
            $user_id = session()->getId();
        }

        $cart_id = Cart::where('user_id', $user_id)->where('product_id', $itemId)->value('id');

        Cart::findOrFail($cart_id)->delete();
    }

}

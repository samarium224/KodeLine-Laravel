<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\PreOrderItem;
use Illuminate\Http\Request;

class DashboardOrderController extends Controller
{
    //order section
    public function Orders()
    {
        $orders = Order::latest()->get();
        return view('admin.AllOrders', compact('orders'));
    }

    public function PreOrderItem(){
        return view('admin.orders.preOrderItem');
    }

    public function OrderUnpaid(){
        $title = "Unpaid Order List";
        $orders = Order::where('payment_status', 0)->get();
        return view('admin.orders.orderListing', compact('orders', 'title'));
    }

    public function OrderPending(){
        $title = "Pending Order List";
        $orders = Order::where('delivery_status', 0);
        return view('admin.orders.orderListing', compact('orders', 'title'));
    }

    public function OrderComplete(){
        $title = "Completed Delivery List";
        $orders = Order::where('delivery_status', 1);
        return view('admin.orders.orderListing', compact('orders', 'title'));
    }

    public function StorePreOrder(Request $request){
        // Validate the incoming request data
        $validatedData = $request->validate([
            'product_name' => 'required|string|max:255',
            'price' => 'required',
            'compare_price' => 'required',
            'quantity' => 'required|integer',
            'product_short_description' => 'required|string',
            'product_long_description' => 'required|string',
            'product_img.*' => 'required|image|mimes:jpeg,png,jpg,gif,webp|max:5048',
            'ageRange.*' => 'required',
            'ageGroup.*' => 'nullable',
            'sizeGroup.*' => 'nullable',
            'colorGroup.*' => 'nullable',
            'quantityGroup.*' => 'nullable|integer',
            'imageVariations.*' => 'nullable|image|mimes:jpeg,png,jpg,gif,webp|max:5048',
        ]);

        $product_img_array = array();
        if ($files = $request->file('product_img')) {
            foreach ($files as $file) {
                $timestamp = microtime(true) * 10000; // High resolution timestamp
                $randomString = bin2hex(random_bytes(5)); // Generates a random string
                $image_name = $timestamp . '_' . $randomString . '.' . $file->getClientOriginalExtension();
                $file->move(public_path('uploads'), $image_name);
                $img_url = 'uploads/' . $image_name;
                $product_img_array[] = $img_url;
            }
        }

        if ($request->file('imageVariations') != null) {
            $img_variation = array();
            if ($vfiles = $request->file('imageVariations')) {
                foreach ($vfiles as $vfile) {
                    $timestamp = microtime(true) * 10000; // High resolution timestamp
                    $randomString = bin2hex(random_bytes(5)); // Generates a random string
                    $vimage_name = $timestamp . '_' . $randomString . '.' . $vfile->getClientOriginalExtension();
                    $vfile->move(public_path('uploads'), $vimage_name);
                    $vimg_url = 'uploads/' . $vimage_name;
                    $img_variation[] = $vimg_url;
                }
            }
        } else {
            $img_variation = ["none"];
        }

        $image_set = implode('|', $product_img_array);
        $ageRange = implode('|', $request->ageRange);
        $ageGroup = implode('|', $request->ageGroup);
        $sizeGroup = implode('|', $request->sizeGroup);
        $colorGroup = implode('|', $request->colorGroup);
        $quantityGroup = implode('|', $request->quantityGroup);
        $imgVariationGroup = implode('|', $img_variation);

        // Create a new product
        PreOrderItem::insert([
            'product_name' => $validatedData['product_name'],
            'price' => $validatedData['price'],
            'compare_price' => $validatedData['compare_price'],
            'quantity' => $validatedData['quantity'],
            'product_short_description' => $validatedData['product_short_description'],
            'product_long_description' => $validatedData['product_long_description'],
            'product_img' => $image_set,
            'slug' => strtolower(str_replace(' ', '-', $request->product_name)),
            'ageRange' => $ageRange,
            'ageGroup' => $ageGroup,
            'sizeGroup' => $sizeGroup,
            'colorGroup' => $colorGroup,
            'quantityGroup' => $quantityGroup,
            'imageVariations' => $imgVariationGroup,
        ]);

        // Redirect back or to a success page
        return redirect()->route('allproducts')->with('success', 'Product added successfully!');

    }
}

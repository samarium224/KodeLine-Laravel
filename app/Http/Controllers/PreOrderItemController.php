<?php

namespace App\Http\Controllers;

use App\Models\PreOrderAttributes;
use Illuminate\Http\Request;
use App\Models\PreOrderItem;

class PreOrderItemController extends Controller
{
    //handle pre-order items
    public function PreOrderItem(){
        return view('admin.PreOrder.preOrderItem');
    }

    public function ViewPreOrderItem(){
        $products = PreOrderItem::paginate(10);
        return view('admin.PreOrder.preOrderView', compact('products'));
    }

    public function StorePreOrder(Request $request){
        // Validate the incoming request data
        $validatedData = $request->validate([
            'product_name' => 'required|string|max:255',
            'price' => 'required',
            'compare_price' => 'required',
            'quantity' => 'required|integer',
            'product_short_description' => 'required|string',
            'product_long_description' => 'nullable|string',
            'product_img.*' => 'required|image|mimes:jpeg,png,jpg,gif,webp|max:5048',
            'ageRange.*' => 'required',
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

        // Create a new product
        PreOrderItem::create([
            'product_name' => $validatedData['product_name'],
            'price' => $validatedData['price'],
            'compare_price' => $validatedData['compare_price'],
            'quantity' => $validatedData['quantity'],
            'product_short_description' => $validatedData['product_short_description'],
            'product_long_description' => $validatedData['product_long_description'],
            'product_img' => $image_set,
            'slug' => strtolower(str_replace(' ', '-', $request->product_name)),
            'ageRange' => $ageRange,
        ]);

        // Redirect back or to a success page
        return redirect()->route('order.preOrderItem.view')->with('success', 'Product added successfully!');

    }

    public function editPreOrder($id){
        $productinfo = PreOrderItem::findOrFail($id);
        return view('admin.PreOrder.preOrderEdit', compact('productinfo'));
    }

    public function updatePreOrder(Request $request)
    {
        $validatedData = $request->validate([
            'product_id' => 'required',
            'product_name' => 'required|string|max:255',
            'price' => 'required',
            'compare_price'=> 'required',
            'quantity' => 'required|integer',
            'product_short_description' => 'required|string',
            'product_long_description' => 'required|string',
            'ageRange.*' => 'required',
            'ageGroup.*' => 'nullable',
            'sizeGroup.*' => 'nullable',
            'colorGroup.*' => 'nullable',
            'quantityGroup.*' => 'nullable|integer',
            'imageVariations.*' => 'nullable|image|mimes:jpeg,png,jpg,gif,webp|max:5048',
        ]);


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
            // implode here for the condition safety
            $imgVariationGroup = implode('|', $img_variation);
        } else {
            $imgVariationGroup = PreOrderItem::where('id', $request->product_id)->value('imageVariations');
        }

        $ageRange = implode('|', $request->ageRange);
        $ageGroup = implode('|', $request->ageGroup);
        $sizeGroup = implode('|', $request->sizeGroup);
        $colorGroup = implode('|', $request->colorGroup);
        $quantityGroup = implode('|', $request->quantityGroup);


        //get the product id
        $product_id = $request->product_id;

        PreOrderItem::findOrFail($product_id)->update([
            'product_name' => $validatedData['product_name'],
            'price' => $validatedData['price'],
            'quantity' => $validatedData['quantity'],
            'compare_price'=> $request->compare_price,
            'product_short_description' => $validatedData['product_short_description'],
            'product_long_description' => $validatedData['product_long_description'],
            'slug' => strtolower(str_replace(' ', '-', $request->product_name)),
            'ageRange' => $ageRange,
            'ageGroup' => $ageGroup,
            'sizeGroup' => $sizeGroup,
            'colorGroup' => $colorGroup,
            'quantityGroup' => $quantityGroup,
            'imageVariations' => $imgVariationGroup,
        ]);

        return redirect()->route('order.preOrderItem.view')->with('success', 'Product Updated successfully!');
    }

    public function deletePreOrder($id)
    {

        $product = PreOrderItem::findOrFail($id);

        // Split the product image URLs into an array
        $imageUrls = explode('|', $product->product_img);

        // Delete each associated image file
        foreach ($imageUrls as $imageUrl) {
            $imagePath = public_path($imageUrl);
            if (file_exists($imagePath)) {
                unlink($imagePath);
            }
        }

        // Delete the product
        $product->delete();

        return redirect()->route('order.preOrderItem.view')->with(
            'message',
            'Product Deleted Successfully'
        );
    }

    public function ConfigVariant($id)
    {
        $product = PreOrderItem::with('attributes')->where('id', $id)->first();
        return view('admin.PreOrder.variant.Variations', compact('product'));
    }

    public function StoreVariant(Request $request)
    {
        $validatedData = $request->validate([
            'product_id' => 'required|integer',
            'variation_option' => 'required',
            'ColorValues.*' => 'required',
        ]);

        // dd($validatedData);
        $id = $request->product_id;
        // handle database
        foreach ($request->ColorValues as $colors) {
            PreOrderAttributes::create([
                'product_id' => $id,
                'attribute' => $request->variation_option,
                'value' => $colors,
            ]);
        }


        $product = PreOrderItem::findOrFail($id);
        return view('admin.variant.Variations', compact('product'));
    }

    public function StoreVariantItems(Request $request){
        $validatedata = $request->validate([
            'product_id' => 'required',
            'attribute_id.*' => 'required|integer',
            'sizes.*' => 'required',
            'price.*' => 'required',
            'stocks.*' => 'required',
        ]);


        foreach($request->sizes as $i => $size){
            $id = $request->attribute_id[$i];
            PreOrderAttributes::findOrFail($id)->update([
                'sizes' => $size,
                'stock' => $request->stocks[$i],
                'price' => $request->price[$i],
            ]);
        }

        $product = PreOrderItem::with('attributes')->where('id', $request->product_id)->first();
        return view('admin.PreOrder.variant.Variations', compact('product'));
    }

    public function SetVariantImages($id){
        $variant = PreOrderAttributes::findOrFail($id);

        return view('admin.PreOrder.variant.configImages', compact('variant'));
    }

    public function VariantImageStore(Request $request){
        $validateData = $request->validate([
            'attribute_id' => 'required|integer',
            'variant_img.*' => 'required|image|mimes:jpeg,png,jpg,gif,webp|max:5048'
        ]);

        $attribute_id = $request->attribute_id;
        $productImages = '';

        if ($request->file('variant_img') != null) {
            $img = array();
            if ($files = $request->file('variant_img')) {
                foreach ($files as $file) {
                    $timestamp = microtime(true) * 10000; // High resolution timestamp
                    $randomString = bin2hex(random_bytes(5)); // Generates a random string
                    $image_name = $timestamp . '_' . $randomString . '.' . $file->getClientOriginalExtension();
                    $file->move(public_path('uploads/variants'), $image_name);
                    $img_url = 'uploads/variants/' . $image_name;
                    $img[] = $img_url;
                }
            }
            // implode here for the condition safety
            $productImages = implode('|', $img);
        }

        PreOrderAttributes::findOrFail($attribute_id)->update([
            'imageUrls' => $productImages,
        ]);

        $product_id = PreOrderAttributes::where('id', $attribute_id)->value('product_id');
        $product = PreOrderItem::with('attributes')->where('id', $product_id)->first();
        return view('admin.PreOrder.variant.Variations', compact('product'));
    }
}

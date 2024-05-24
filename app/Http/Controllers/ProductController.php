<?php

namespace App\Http\Controllers;
use App\Models\Category;
use App\Models\ProductAttributes;
use App\Models\Products;
use App\Models\SubCategory;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    //all the function related to products
    public function All_Products()
    {
        $products = Products::where('product_type', 0)->orderBy('id', 'desc')->paginate(10);
        return view('admin.products.AllProducts', compact('products'));
    }

    public function Add_Products()
    {
        $categories = Category::latest()->get();
        $subcategories = Subcategory::latest()->get();
        return view('admin.products.AddProduct', compact('categories', 'subcategories'));
    }

    public function Store_Products(Request $request)
    {
        // Validate the incoming request data
        $validatedData = $request->validate([
            'product_name' => 'required|string|max:255',
            'price' => 'required',
            'discount_price' => 'nullable',
            'quantity' => 'nullable|integer',
            'product_short_description' => 'nullable|string',
            'product_long_description' => 'nullable',
            'product_category_id' => 'required',
            'product_subcategory_id' => 'required',
            'product_img.*' => 'required|image|mimes:jpeg,png,jpg,gif,webp|max:5048',
            'ageRange.*' => 'required',
        ]);

        // dd($validatedData);

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

        $image_set = implode('|', $product_img_array);
        $ageRange = implode('|', $request->ageRange);

        // end of null safety
        $category_id = $request->product_category_id;
        $subcategory_id = $request->product_subcategory_id;

        if ($category_id != 0) {
            $category_name = Category::where('id', $category_id)->value('category_name');
        } else {
            $category_name = "none";
        }
        if ($subcategory_id != 0) {
            $subcategory_name = SubCategory::where('id', $subcategory_id)->value('subcategory_name');
        } else {
            $subcategory_name = "none";
        }
        // handle out of stock selling and other tic marks
        $continue_selling = $request->continue_selling;
        $featured = $request->featured;
        $best_selling = $request->best_selling;

        //handle product price and stock
        if($request->discount_price == null){
            $compare_price = $request->price;
        }else{
            $compare_price = $request->discount_price;
        }

        if($request->quantity == null){
            $request->quantity = 0;
        }

        // Create a new product
        Products::insert([
            'product_name' => $validatedData['product_name'],
            'price' => $validatedData['price'],
            'quantity' => $request->quantity,
            'compare_price' => $compare_price,
            'product_short_description' => $validatedData['product_short_description'],
            'product_long_description' => $request->product_long_description,
            'product_category_name' => $category_name,
            'product_category_id' => $category_id,
            'product_subcategory_name' => $subcategory_name,
            'product_subcategory_id' => $subcategory_id,
            'product_img' => $image_set,
            'slug' => strtolower(str_replace(' ', '-', $request->product_name)),
            'ageRange' => $ageRange,
            'continue_selling' => $continue_selling,
            'featured' => $featured,
            'best_selling' => $best_selling,
        ]);

        try {
            //code...
            Category::where('id', $category_id)->increment('product_count', 1);
            SubCategory::where('id', $subcategory_id)->increment('product_count', 1);
        } catch (\Throwable $th) {
            //throw $th; do nothing
            return redirect()->route('allproducts')->with('success', 'Product added successfully!');
        }

        // Redirect back or to a success page
        return redirect()->route('allproducts')->with('success', 'Product added successfully!');
    }

    public function EditProductImage($id)
    {
        $productinfo = Products::findOrFail($id);
        return view('admin.products.EditProductImg', compact('productinfo'));
    }

    public function UpdateProductImage(Request $request)
    {
        $validatedData = $request->validate([
            'product_img.*' => 'required|image|mimes:jpeg,png,jpg,gif,webp|max:2048', // Adjust the image size limit as needed
            'product_id' => 'required|integer'
        ]);

        $product_id = $request->product_id;

        if ($request->file('product_img') != null) {
            $img = array();
            if ($files = $request->file('product_img')) {
                foreach ($files as $file) {
                    $timestamp = microtime(true) * 10000; // High resolution timestamp
                    $randomString = bin2hex(random_bytes(5)); // Generates a random string
                    $image_name = $timestamp . '_' . $randomString . '.' . $file->getClientOriginalExtension();
                    $file->move(public_path('uploads'), $image_name);
                    $img_url = 'uploads/' . $image_name;
                    $img[] = $img_url;
                }
            }
            // implode here for the condition safety
            $productImages = implode('|', $img);
        } else {
            $productImages = Products::where('id', $product_id)->value('product_img');
        }

        Products::findOrFail($product_id)->update([
            'product_img' => $productImages,
        ]);

        return redirect()->route('allproducts')->with('success', 'Product Images Updated successfully!');
    }

    public function EditProduct($id)
    {
        $categories = Category::latest()->get();
        $subcategories = Subcategory::latest()->get();
        $productinfo = Products::with('attributes')->where('id', $id)->first();
        // dd($productinfo);
        return view('admin.products.EditProduct', compact('productinfo', 'categories', 'subcategories'));
    }

    public function productDetails($id)
    {
        $product = Products::findOrFail($id);
        // Assuming 'imageVariations' and other fields are stored as pipe-separated values
        $product->product_img = explode('|', $product->product_img);
        $product->imageVariations = explode('|', $product->imageVariations);
        $product->ageRange = explode('|', $product->ageRange);
        $product->ageGroup = explode('|', $product->ageGroup);
        $product->sizeGroup = explode('|', $product->sizeGroup);
        $product->colorGroup = explode('|', $product->colorGroup);
        $product->quantityGroup = explode('|', $product->quantityGroup);

        return view('admin.products.productdetails', compact('product'));
    }

    public function UpdateProduct(Request $request)
    {
        $validatedData = $request->validate([
            'product_id' => 'required|integer',
            'product_name' => 'required|string|max:255',
            'price' => 'required',
            'discount_price' => 'nullable',
            'quantity' => 'nullable|integer',
            'product_short_description' => 'nullable|string',
            'product_long_description' => 'nullable',
            'product_category_id' => 'required',
            'product_subcategory_id' => 'required',
            'ageRange.*' => 'required',
        ]);

        // dd($validatedData);
        //get the product id
        $product_id = $request->product_id;

        $ageRange = implode('|', $request->ageRange);

        // handle out of stock selling and other tic marks
        $continue_selling = $request->continue_selling;
        $featured = $request->featured;
        $best_selling = $request->best_selling;

        $category_id = $request->product_category_id;
        $subcategory_id = $request->product_subcategory_id;

        if ($category_id != 0) {
            $category_name = Category::where('id', $category_id)->value('category_name');
        } else {
            $category_name = "none";
        }
        if ($subcategory_id != 0) {
            $subcategory_name = SubCategory::where('id', $subcategory_id)->value('subcategory_name');
        } else {
            $subcategory_name = "none";
        }

        $preCategoryId = Products::where("id", $product_id)->value('product_category_id');
        $newCategoryId = $category_id;
        $preSubcategoryId = Products::where("id", $product_id)->value('product_subcategory_id');
        $newSubcategoryId = $subcategory_id;

        // handle category change
        if ($preCategoryId != $newCategoryId && $newCategoryId != 0) {
            Category::where('id', $category_id)->increment('product_count', 1);
            if ($preCategoryId != 0) {
                Category::where('id', $preCategoryId)->decrement('product_count', 1);
            }
        } else {
            Category::where('id', $preCategoryId)->decrement('product_count', 1);
        }

        // handle subcategory change
        if ($preSubcategoryId != $newSubcategoryId && $newSubcategoryId != 0) {
            SubCategory::where('id', $subcategory_id)->increment('product_count', 1);
            if ($preSubcategoryId != 0) {
                SubCategory::where('id', $preSubcategoryId)->decrement('product_count', 1);
            }
        } else {
            SubCategory::where('id', $preSubcategoryId)->decrement('product_count', 1);
        }

        //handle product price and stock
        if($request->discount_price == null){
            $compare_price = $request->price;
        }else{
            $compare_price = $request->discount_price;
        }

        if($request->quantity == null){
            $request->quantity = 0;
        }

        Products::findOrFail($product_id)->update([
            'product_name' => $validatedData['product_name'],
            'price' => $validatedData['price'],
            'quantity' => $request->quantity,
            'compare_price' => $compare_price,
            'product_short_description' => $validatedData['product_short_description'],
            'product_long_description' => $validatedData['product_long_description'],
            'product_category_name' => $category_name,
            'product_category_id' => $category_id,
            'product_subcategory_name' => $subcategory_name,
            'product_subcategory_id' => $subcategory_id,
            'slug' => strtolower(str_replace(' ', '-', $request->product_name)),
            'ageRange' => $ageRange,
            'continue_selling' => $continue_selling,
            'featured' => $featured,
            'best_selling' => $best_selling,
        ]);

        return redirect()->route('allproducts')->with('success', 'Product Updated successfully!');
    }

    public function DeleteProduct($id)
    {

        $product = Products::findOrFail($id);
        // Split the product image URLs into an array
        $imageUrls = explode('|', $product->product_img);

        // Delete each associated image file
        foreach ($imageUrls as $imageUrl) {
            $imagePath = public_path($imageUrl);
            if (file_exists($imagePath)) {
                unlink($imagePath);
            }
        }

        $preCategoryId = Products::where("id", $id)->value('product_category_id');
        $preSubcategoryId = Products::where("id", $id)->value('product_subcategory_id');

        // handle category delete
        Category::where('id', $preCategoryId)->decrement('product_count', 1);
        SubCategory::where('id', $preSubcategoryId)->decrement('product_count', 1);

        // Delete the product
        $product->delete();

        return redirect()->route('allproducts')->with(
            'message',
            'Product Deleted Successfully'
        );
    }


    //handle product variant here
    public function ConfigVariant($id)
    {

        $product = Products::with('attributes')->where('id', $id)->first();
        return view('admin.variant.Variations', compact('product'));
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
            ProductAttributes::create([
                'product_id' => $id,
                'attribute' => $request->variation_option,
                'value' => $colors,
            ]);
        }


        $product = Products::findOrFail($id);
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
            ProductAttributes::findOrFail($id)->update([
                'sizes' => $size,
                'stock' => $request->stocks[$i],
                'price' => $request->price[$i],
            ]);

            if($i == 0){
                Products::findOrFail($request->product_id)->update([
                    'price' => explode(',', $request->price[$i])[0],
                ]);
            }
        }

        $product = Products::with('attributes')->where('id', $request->product_id)->first();
        return view('admin.variant.Variations', compact('product'));
    }

    public function SetVariantImages($id){
        $variant = ProductAttributes::findOrFail($id);

        return view('admin.variant.configImages', compact('variant'));
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

        ProductAttributes::findOrFail($attribute_id)->update([
            'imageUrls' => $productImages,
        ]);

        $product_id = ProductAttributes::where('id', $attribute_id)->value('product_id');
        $product = Products::with('attributes')->where('id', $product_id)->first();
        return view('admin.variant.Variations', compact('product'));
    }

    public function DeleteVariant($id){
        ProductAttributes::findOrFail($id)->delete();

        return redirect()->back();
    }
}

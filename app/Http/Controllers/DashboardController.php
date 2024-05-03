<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Order;
use App\Models\ProductAttributes;
use App\Models\Products;
use App\Models\SubCategory;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function Index()
    {
        $orders = Order::orderBy("id", "desc")->paginate(5);
        return view('admin.dashboard', compact('orders'));
    }

    public function analytics()
    {
        return view('admin.Performance');
    }

    public function All_Category()
    {
        $categories = Category::latest()->get();
        return view('admin.AllCetegory', compact('categories'));
    }

    public function All_Category_Add()
    {
        $categories = Category::latest()->get();
        return view('admin.AddNewCategory', compact('categories'));
    }

    public function All_Category_Store(Request $request)
    {
        $request->validate([
            'category_name' => 'required|unique:categories',
            'category_img' => 'required|image|mimes:jpeg,png,jpg,gif,webp|max:5048',
            'cat_headerImg_PC' => 'required|image|mimes:jpeg,png,jpg,gif,webp|max:5048',
            'cat_headerImg_mobile' => 'required|image|mimes:jpeg,png,jpg,gif,webp|max:5048',
            'category_title' => 'required',
            'category_subtitle' => 'required',
        ]);

        if ($file = $request->file('category_img')) {
            $timestamp = microtime(true) * 10000; // High resolution timestamp
            $randomString = bin2hex(random_bytes(5)); // Generates a random string
            $image_name = $timestamp . '_' . $randomString . '.' . $file->getClientOriginalExtension();
            $file->move(public_path('uploads/collections'), $image_name);
            $img_url = 'uploads/collections/' . $image_name;
        }

        if ($file = $request->file('cat_headerImg_PC')) {
            $timestamp = microtime(true) * 10000; // High resolution timestamp
            $randomString = bin2hex(random_bytes(5)); // Generates a random string
            $image_name = $timestamp . '_' . $randomString . '.' . $file->getClientOriginalExtension();
            $file->move(public_path('uploads/collections/contents'), $image_name);
            $header_url = 'uploads/collections/contents/' . $image_name;
        }

        if ($file = $request->file('cat_headerImg_mobile')) {
            $timestamp = microtime(true) * 10000; // High resolution timestamp
            $randomString = bin2hex(random_bytes(5)); // Generates a random string
            $image_name = $timestamp . '_' . $randomString . '.' . $file->getClientOriginalExtension();
            $file->move(public_path('uploads/collections/contents'), $image_name);
            $mobileHeader_url = 'uploads/collections/contents/' . $image_name;
        }

        Category::insert([
            'category_name' => $request->category_name,
            'category_img' => $img_url,
            'cat_headerImg_PC' => $header_url,
            'cat_headerImg_mobile' => $mobileHeader_url,
            'category_title' => $request->category_title,
            'category_subtitle' => $request->category_subtitle,
            'slug' => strtolower(str_replace(' ', '-', $request->category_name))
        ]);

        return redirect()->route('allcategory')->with(
            'message',
            'Category Added Successfully'
        );
    }

    public function All_Category_Edit($id)
    {
        $category = Category::findOrFail($id);

        return view('admin.EditCategory', compact('category'));
    }

    public function All_Category_Update(Request $request)
    {
        $category_id = $request->category_id;

        $request->validate([
            'category_name' => 'required',
            'category_img' => 'required|image|mimes:jpeg,png,jpg,gif,webp|max:5048',
            'cat_headerImg_PC' => 'required|image|mimes:jpeg,png,jpg,gif,webp|max:5048',
            'cat_headerImg_mobile' => 'required|image|mimes:jpeg,png,jpg,gif,webp|max:5048',
            'category_title' => 'required',
            'category_subtitle' => 'required',
        ]);

        if ($file = $request->file('category_img')) {
            $timestamp = microtime(true) * 10000; // High resolution timestamp
            $randomString = bin2hex(random_bytes(5)); // Generates a random string
            $image_name = $timestamp . '_' . $randomString . '.' . $file->getClientOriginalExtension();
            $file->move(public_path('uploads/collections'), $image_name);
            $img_url = 'uploads/collections/' . $image_name;
        }

        if ($file = $request->file('cat_headerImg_PC')) {
            $timestamp = microtime(true) * 10000; // High resolution timestamp
            $randomString = bin2hex(random_bytes(5)); // Generates a random string
            $image_name = $timestamp . '_' . $randomString . '.' . $file->getClientOriginalExtension();
            $file->move(public_path('uploads/collections/contents'), $image_name);
            $header_url = 'uploads/collections/contents/' . $image_name;
        }

        if ($file = $request->file('cat_headerImg_mobile')) {
            $timestamp = microtime(true) * 10000; // High resolution timestamp
            $randomString = bin2hex(random_bytes(5)); // Generates a random string
            $image_name = $timestamp . '_' . $randomString . '.' . $file->getClientOriginalExtension();
            $file->move(public_path('uploads/collections/contents'), $image_name);
            $mobileHeader_url = 'uploads/collections/contents/' . $image_name;
        }

        $category = Category::findOrFail($category_id);
        $oldName = $category->category_name;
        $newName = $request->category_name;

        Category::findOrFail($category_id)->update([
            'category_name' => $newName,
            'category_img' => $img_url,
            'cat_headerImg_PC' => $header_url,
            'cat_headerImg_mobile' => $mobileHeader_url,
            'category_title' => $request->category_title,
            'category_subtitle' => $request->category_subtitle,
            'slug' => strtolower(str_replace(' ', '-', $request->category_name))
        ]);

        SubCategory::where('category_id', $category_id)
            ->update(['category_name' => $newName]);

        Products::where('product_category_name', $oldName)
            ->update(['product_category_name' => $newName]);

        return redirect()->route('allcategory')->with(
            'message',
            'Category Updated Successfully'
        );
    }

    public function Delete_Category($id)
    {
        $category = Category::findOrFail($id);

        // Delete all associated image files
        $imagePaths = [
            public_path($category->category_img),
            public_path($category->cat_headerImg_PC),
            public_path($category->cat_headerImg_mobile),
            // Add more paths for other image attributes if necessary
        ];

        foreach ($imagePaths as $imagePath) {
            if (file_exists($imagePath)) {
                unlink($imagePath);
            }
        }

        Products::where('product_category_id', $category->id)->update([
            'product_category_name' => 'none',
            'product_category_id' => 0,
        ]);

        // Delete the category
        $category->delete();

        return redirect()->route('allcategory')->with(
            'message',
            'Category Deleted Successfully'
        );
    }

    public function Sub_Category()
    {
        $subcategories = SubCategory::latest()->get();

        return view('admin.AllSubCategory', compact('subcategories'));
    }

    public function Sub_Category_Add()
    {
        $categories = Category::latest()->get();
        $subcategories = SubCategory::latest()->get();
        $GroupedByCategory = $subcategories->groupBy('category_name');

        return view('admin.AddSubCategory', compact('categories', 'subcategories', 'GroupedByCategory'));
    }

    public function Store_Subcategory(Request $request)
    {
        $request->validate([
            'subcategory_name' => 'required',
            'category_id' => ['required', 'integer', 'min:1', 'max:100']
        ]);

        $category_id = $request->category_id;
        $category_name = Category::where('id', $category_id)->value('category_name');

        SubCategory::insert([
            'subcategory_name' => $request->subcategory_name,
            'slug' => strtolower(str_replace(' ', '-', $request->subcategory_name)),
            'category_id' => $category_id,
            'category_name' => $category_name
        ]);

        Category::where('id', $category_id)->increment('subcategory_count', 1);

        return redirect()->route('addsubcategory')->with(
            'message',
            'Sub Category Added Successfully'
        );
    }

    public function Edit_SubCategory($id)
    {
        $subcategory_info = SubCategory::findOrFail($id);
        $categories = Category::latest()->get();

        return view('admin.EditSubCategory', compact('subcategory_info'));
    }

    public function SubCategory_Update(Request $request)
    {
        $subcategory_id = $request->subcategory_id;

        $request->validate([
            'subcategory_name' => 'required|unique:sub_categories'
        ]);

        SubCategory::findOrFail($subcategory_id)->update([
            'subcategory_name' => $request->subcategory_name,
            'slug' => strtolower(str_replace(' ', '-', $request->subcategory_name))
        ]);

        return redirect()->route('addsubcategory')->with(
            'message',
            'Sub Category Updated Successfully'
        );
    }

    public function Delete_SubCategory($id)
    {
        $category_id = SubCategory::where('id', $id)->value('category_id');
        SubCategory::findOrFail($id)->delete();

        Category::where('id', $category_id)->decrement('subcategory_count', 1);

        return redirect()->route('addsubcategory')->with(
            'message',
            'Sub Category Deleted Successfully'
        );
    }

    public function All_Products()
    {
        $products = Products::paginate(10);
        return view('admin.AllProducts', compact('products'));
    }

    public function Add_Products()
    {
        $categories = Category::latest()->get();
        $subcategories = Subcategory::latest()->get();
        return view('admin.AddProduct', compact('categories', 'subcategories'));
    }

    public function Store_Products(Request $request)
    {
        // Validate the incoming request data
        $validatedData = $request->validate([
            'product_name' => 'required|string|max:255',
            'price' => 'required',
            'compare_price' => 'required',
            'quantity' => 'required|integer',
            'color' => 'required',
            'size' => 'required',
            'product_short_description' => 'required|string',
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
        // Create a new product
        Products::insert([
            'product_name' => $validatedData['product_name'],
            'price' => $validatedData['price'],
            'compare_price' => $validatedData['compare_price'],
            'quantity' => $validatedData['quantity'],
            'product_short_description' => $validatedData['product_short_description'],
            'product_long_description' => $request->product_long_description,
            'color' => $validatedData['color'],
            'size' => $validatedData['size'],
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
        return view('admin.EditProductImg', compact('productinfo'));
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
        return view('admin.EditProduct', compact('productinfo', 'categories', 'subcategories'));
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

        return view('admin.productdetails', compact('product'));
    }

    public function UpdateProduct(Request $request)
    {
        $validatedData = $request->validate([
            'product_id' => 'required',
            'product_name' => 'required|string|max:255',
            'price' => 'required',
            'compare_price' => 'required',
            'quantity' => 'required|integer',
            'color' => 'required',
            'size' => 'required',
            'product_short_description' => 'required|string',
            'product_long_description' => 'nullable|string',
            'product_category_id' => 'required',
            'product_subcategory_id' => 'required',
            'ageRange.*' => 'required',
            'variation_option.*' => 'nullable',
            'attribute_id.*' => 'nullable',
            'valueGroup.*' => 'nullable',
            'quantityGroup.*' => 'nullable|integer',
            'priceGroup.*' => 'nullable|integer',
            'imageVariations.*' => 'nullable|image|mimes:jpeg,png,jpg,gif,webp|max:5048',
        ]);

        // dd($validatedData);
        //get the product id
        $product_id = $request->product_id;

        if (isset($validatedData['variation_option'])) {
            foreach ($validatedData['variation_option'] as $i => $attributes) {
                // current attribute id
                $attribute_id = $request->attribute_id[$i];
                //handle image here
                if ($request->file('imageVariations') != null) {
                    if ($vfiles = $request->file('imageVariations')) {
                        if (isset($vfiles[$i])) {
                            $vfile = $vfiles[$i];
                            $timestamp = microtime(true) * 10000; // High resolution timestamp
                            $randomString = bin2hex(random_bytes(5)); // Generates a random string
                            $vimage_name = $timestamp . '_' . $randomString . '.' . $vfile->getClientOriginalExtension();
                            $vfile->move(public_path('uploads'), $vimage_name);
                            $vimg_url = 'uploads/' . $vimage_name;
                            $img_variation = $vimg_url;
                        } else {
                            $img_variation = "";
                        }
                    }
                } else {
                    $img_variation = ProductAttributes::where('product_id', $product_id)->value('imageUrls');
                }

                //handle attributes
                $attribute = $attributes;
                $value = $request->valueGroup[$i];
                $stock = $request->quantityGroup[$i];
                $price = $request->priceGroup[$i];

                // handle database
                ProductAttributes::findOrFail($attribute_id)->update([
                    'product_id' => $product_id,
                    'attribute' => $attribute,
                    'value' => $value,
                    'imageUrls' => $img_variation,
                    'stock' => $stock,
                    'price' => $price
                ]);
            }
        }

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

        Products::findOrFail($product_id)->update([
            'product_name' => $validatedData['product_name'],
            'price' => $validatedData['price'],
            'quantity' => $validatedData['quantity'],
            'compare_price' => $request->compare_price,
            'color' => $request->color,
            'size' => $request->size,
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
        // dd(count($product->attributes));
        return view('admin.Variations', compact('product'));
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
        return view('admin.Variations', compact('product'));
    }

    public function StoreVariantItems(Request $request){
        $validatedata = $request->validate([
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
        }
        dd($validatedata);
    }

}

<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Products;
use App\Models\SubCategory;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function Index()
    {
        return view('admin.dashboard');
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
            // 'category_title'=> 'required',
            // 'category_subtitle'=> 'required',
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
            'category_title' => 'Wrap Your Little Ones in Love',
            'category_subtitle' => "Simplify parenting decisions with our thoughtfully curated kid's fashion",
            'slug' => strtolower(str_replace(' ', '-', $request->category_name))
        ]);

        return redirect()->route('allcategory')->with(
            'message',
            'Category Added Successfully'
        );
    }

    public function All_Category_Edit($id)
    {
        $category_info = Category::findOrFail($id);

        return view('admin.EditCategory', compact('category_info'));
    }

    public function All_Category_Update(Request $request)
    {
        $category_id = $request->category_id;

        $request->validate([
            'category_name' => 'required|unique:categories'
        ]);

        $category = Category::findOrFail($category_id);
        $oldName = $category->category_name;
        $newName = $request->category_name;

        Category::findOrFail($category_id)->update([
            'category_name' => $newName,
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
        $products = Products::latest()->get();
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
            'product_short_description' => 'required|string',
            'product_long_description' => 'required|string',
            'product_category_id' => 'required',
            'product_subcategory_id' => 'required',
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
            'product_long_description' => $validatedData['product_long_description'],
            'product_category_name' => $category_name,
            'product_category_id' => $category_id,
            'product_subcategory_name' => $subcategory_name,
            'product_subcategory_id' => $subcategory_id,
            'product_img' => $image_set,
            'slug' => strtolower(str_replace(' ', '-', $request->product_name)),
            'ageRange' => $ageRange,
            'ageGroup' => $ageGroup,
            'sizeGroup' => $sizeGroup,
            'colorGroup' => $colorGroup,
            'quantityGroup' => $quantityGroup,
            'imageVariations' => $imgVariationGroup,
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
            'product_img' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048', // Adjust the image size limit as needed
            'product_id' => 'required|integer'
        ]);

        $product_id = $request->product_id;
        $image = $request->file('product_img');
        $img_name = hexdec(uniqid()) . '.' . $image->getClientOriginalExtension();
        $request->product_img->move(public_path('uploads'), $img_name);
        $img_url = 'uploads/' . $img_name;

        Products::findOrFail($product_id)->update([
            'product_img' => $img_url,
        ]);

        return redirect()->route('allproducts')->with('success', 'Product Updated successfully!');
    }

    public function EditProduct($id)
    {
        $categories = Category::latest()->get();
        $subcategories = Subcategory::latest()->get();
        $productinfo = Products::findOrFail($id);
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
            'quantity' => 'required|integer',
            'product_short_description' => 'required|string',
            'product_long_description' => 'required|string',
            'product_category_id' => 'required',
            'product_subcategory_id' => 'required',
            'ageRange.*' => 'required',
            'ageGroup.*' => 'nullable',
            'sizeGroup.*' => 'nullable',
            'colorGroup.*' => 'nullable',
            'quantityGroup.*' => 'nullable|integer',
        ]);

        $ageRange = implode('|', $request->ageRange);
        $ageGroup = implode('|', $request->ageGroup);
        $sizeGroup = implode('|', $request->sizeGroup);
        $colorGroup = implode('|', $request->colorGroup);
        $quantityGroup = implode('|', $request->quantityGroup);
        // handle out of stock selling
        $continue_selling = $request->continue_selling;
        //get the product id
        $product_id = $request->product_id;

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

        Products::findOrFail($product_id)->update([
            'product_name' => $validatedData['product_name'],
            'price' => $validatedData['price'],
            'quantity' => $validatedData['quantity'],
            'product_short_description' => $validatedData['product_short_description'],
            'product_long_description' => $validatedData['product_long_description'],
            'product_category_name' => $category_name,
            'product_category_id' => $category_id,
            'product_subcategory_name' => $subcategory_name,
            'product_subcategory_id' => $subcategory_id,
            'slug' => strtolower(str_replace(' ', '-', $request->product_name)),
            'ageRange' => $ageRange,
            'ageGroup' => $ageGroup,
            'sizeGroup' => $sizeGroup,
            'colorGroup' => $colorGroup,
            'quantityGroup' => $quantityGroup,
            'continue_selling' => $continue_selling
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

        // Delete the product
        $product->delete();

        return redirect()->route('allproducts')->with(
            'message',
            'Product Deleted Successfully'
        );
    }

    public function PendingOrder()
    {
        return view('admin.pendingOrder');
    }
}

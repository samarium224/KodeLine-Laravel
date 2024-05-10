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
        $date_today = date("Y-m-d");
        $next_month = date("Y-m-d", strtotime("+1 month", strtotime($date_today)));
        $prev_month = date("Y-m-d", strtotime("-1 month", strtotime($date_today)));


        $orders = Order::whereBetween('created_at', [$prev_month, $next_month])
            ->paginate(5);
            // dd($orders);
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
            'category_img' => 'nullable|image|mimes:jpeg,png,jpg,gif,webp|max:5048',
            'cat_headerImg_PC' => 'nullable|image|mimes:jpeg,png,jpg,gif,webp|max:5048',
            'cat_headerImg_mobile' => 'nullable|image|mimes:jpeg,png,jpg,gif,webp|max:5048',
            'category_title' => 'required',
            'category_subtitle' => 'required',
        ]);

        if ($file = $request->file('category_img')) {
            $timestamp = microtime(true) * 10000; // High resolution timestamp
            $randomString = bin2hex(random_bytes(5)); // Generates a random string
            $image_name = $timestamp . '_' . $randomString . '.' . $file->getClientOriginalExtension();
            $file->move(public_path('uploads/collections'), $image_name);
            $img_url = 'uploads/collections/' . $image_name;
        }else{
            $img_url = Category::where('id', $category_id)->value('category_img');
        }

        if ($file = $request->file('cat_headerImg_PC')) {
            $timestamp = microtime(true) * 10000; // High resolution timestamp
            $randomString = bin2hex(random_bytes(5)); // Generates a random string
            $image_name = $timestamp . '_' . $randomString . '.' . $file->getClientOriginalExtension();
            $file->move(public_path('uploads/collections/contents'), $image_name);
            $header_url = 'uploads/collections/contents/' . $image_name;
        }else{
            $header_url = Category::where('id', $category_id)->value('cat_headerImg_PC');
        }

        if ($file = $request->file('cat_headerImg_mobile')) {
            $timestamp = microtime(true) * 10000; // High resolution timestamp
            $randomString = bin2hex(random_bytes(5)); // Generates a random string
            $image_name = $timestamp . '_' . $randomString . '.' . $file->getClientOriginalExtension();
            $file->move(public_path('uploads/collections/contents'), $image_name);
            $mobileHeader_url = 'uploads/collections/contents/' . $image_name;
        }else{
            $mobileHeader_url = Category::where('id', $category_id)->value('cat_headerImg_mobile');
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
            'Category Added Successfully'
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
            'Category Updated Successfully'
        );
    }

    public function Delete_SubCategory($id)
    {
        $category_id = SubCategory::where('id', $id)->value('category_id');
        SubCategory::findOrFail($id)->delete();

        Category::where('id', $category_id)->decrement('subcategory_count', 1);

        return redirect()->route('addsubcategory')->with(
            'message',
            'Category Deleted Successfully'
        );
    }



}

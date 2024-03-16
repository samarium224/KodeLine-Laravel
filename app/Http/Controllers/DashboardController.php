<?php

namespace App\Http\Controllers;

use App\Models\Category;
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
        return view('admin.AddNewCategory');
    }

    public function All_Category_Store(Request $request)
    {
        $request->validate([
            'category_name' => 'required|unique:categories'
        ]);

        Category::insert([
            'category_name' => $request->category_name,
            'slug' => strtolower(str_replace(' ', '-', $request->category_name))
        ]);

        return redirect()->route('allcategory')->with('message',
        'Category Added Successfully');
    }

    public function All_Category_Edit($id){
        $category_info = Category::findOrFail($id);

        return view('admin.EditCategory', compact('category_info'));
    }

    public function All_Category_Update(Request $request){
        $category_id = $request-> category_id;

        $request->validate([
            'category_name' => 'required|unique:categories'
        ]);

        Category::findOrFail($category_id)->update([
            'category_name' => $request->category_name,
            'slug' => strtolower(str_replace(' ', '-', $request->category_name))
        ]);

        return redirect()->route('allcategory')->with('message',
        'Category Updated Successfully');
    }

    public function Delete_Category($id){
        Category::findOrFail($id)->delete();

        return redirect()->route('allcategory')->with('message',
        'Category Deleted Successfully');
    }

    public function Sub_Category()
    {
        $subcategories = SubCategory::latest()->get();

        return view('admin.AllSubCategory', compact('subcategories'));
    }

    public function Sub_Category_Add()
    {
        $categories = Category::latest()->get();
        return view('admin.AddSubCategory', compact('categories'));
    }

    public function Store_Subcategory(Request $request)
    {
        $request->validate([
            'subcategory_name' => 'required|unique:sub_categories',
            'category_id' => 'required'
        ]);

        $category_id = $request->category_id;
        $category_name = Category::where('id', $category_id)->value('category_name');

        SubCategory::insert([
            'subcategory_name' => $request->subcategory_name,
            'slug' => strtolower(str_replace(' ', '-', $request->subcategory_name)),
            'category_id' => $category_id,
            'category_name' => $category_name
        ]);

        Category::where('id', $category_id)->increment('subcategory_count',1);

        return redirect()->route('subcategory')->with('message',
        'Sub Category Added Successfully');
    }

    public function All_Products()
    {
        return view('admin.allCategory');
    }

    public function Add_Product()
    {
        return view('admin.allCategory');
    }

    public function PendingOrder()
    {
        return view('admin.pendingOrder');
    }
}

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

        Category::findOrFail($category_id)->update([
            'category_name' => $request->category_name,
            'slug' => strtolower(str_replace(' ', '-', $request->category_name))
        ]);

        return redirect()->route('allcategory')->with(
            'message',
            'Category Updated Successfully'
        );
    }

    public function Delete_Category($id)
    {
        Category::findOrFail($id)->delete();

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

        Category::where('id', $category_id)->increment('subcategory_count', 1);

        return redirect()->route('subcategory')->with(
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

        return redirect()->route('subcategory')->with(
            'message',
            'Sub Category Updated Successfully'
        );
    }

    public function Delete_SubCategory($id)
    {
        $category_id = SubCategory::where('id', $id)->value('category_id');
        SubCategory::findOrFail($id)->delete();

        Category::where('id', $category_id)->decrement('subcategory_count', 1);

        return redirect()->route('subcategory')->with(
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

    public function Store_Products(Request $request){
        // Validate the incoming request data
        $validatedData = $request->validate([
            'product_name' => 'required|string|max:255',
            'price' => 'required',
            'quantity' => 'required|integer',
            'product_short_description' => 'required|string',
            'product_long_description' => 'required|string',
            'product_category_id' => 'required',
            'product_subcategory_id' => 'required',
            'product_img' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048', // Adjust the image size limit as needed
        ]);

        $category_id = $request->product_category_id;
        $subcategory_id = $request->product_subcategory_id;

        $category_name = Category::where('id', $category_id)->value('category_name');
        $subcategory_name = SubCategory::where('id',$subcategory_id)->value('subcategory_name');

        // Store the product image
        $image = $request->file('product_img');
        $img_name = hexdec(uniqid()).'.'.$image->getClientOriginalExtension();
        $request->product_img->move(public_path('uploads'),$img_name);
        $img_url = 'uploads/' . $img_name;

        // Create a new product
        Products::insert([
            'product_name' => $validatedData['product_name'],
            'price' => $validatedData['price'],
            'quantity' => $validatedData['quantity'],
            'product_short_description' => $validatedData['product_short_description'],
            'product_long_description' => $validatedData['product_long_description'],
            'product_category_name' => $category_name,
            'product_category_id' => $category_id,
            'product_subcategory_name' => $subcategory_name,
            'product_subcategory_id' => $subcategory_id,
            'product_img' => $img_url,
            'slug' => strtolower(str_replace(' ', '-', $request->product_name))
        ]);

        Category::where('id', $category_id)->increment('product_count',1);
        SubCategory::where('id', $subcategory_id)->increment('product_count',1);


        // Redirect back or to a success page
        return redirect()->route('allproducts')->with('success', 'Product added successfully!');
    }

    public function EditProductImage($id){
        $productinfo = Products::findOrFail($id);
        return view('admin.EditProductImg', compact('productinfo'));
    }

    public function UpdateProductImage(Request $request){
        $validatedData = $request->validate([
            'product_img' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048', // Adjust the image size limit as needed
            'product_id' => 'required|integer'
        ]);

        $product_id = $request->product_id;
        $image = $request->file('product_img');
        $img_name = hexdec(uniqid()).'.'.$image->getClientOriginalExtension();
        $request->product_img->move(public_path('uploads'),$img_name);
        $img_url = 'uploads/' . $img_name;

        Products::findOrFail($product_id)->update([
            'product_img' => $img_url,
        ]);

        return redirect()->route('allproducts')->with('success', 'Product Updated successfully!');
    }

    public function EditProduct($id){
        $categories = Category::latest()->get();
        $subcategories = Subcategory::latest()->get();
        $productinfo = Products::findOrFail($id);
        return view('admin.EditProduct', compact('productinfo','categories', 'subcategories'));
    }

    public function UpdateProduct(Request $request){
        $validatedData = $request->validate([
            'product_id' => 'required',
            'product_name' => 'required|string|max:255',
            'price' => 'required',
            'quantity' => 'required|integer',
            'product_short_description' => 'required|string',
            'product_long_description' => 'required|string',
            'product_category_id' => 'required',
            'product_subcategory_id' => 'required',
        ]);

        $product_id = $request->product_id;

        $category_id = $request->product_category_id;
        $subcategory_id = $request->product_subcategory_id;

        $category_name = Category::where('id', $category_id)->value('category_name');
        $subcategory_name = SubCategory::where('id',$subcategory_id)->value('subcategory_name');

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
            'slug' => strtolower(str_replace(' ', '-', $request->product_name))
        ]);

        return redirect()->route('allproducts')->with('success', 'Product Updated successfully!');
    }

    public function DeleteProduct($id){

        Products::findOrFail($id)->delete();

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

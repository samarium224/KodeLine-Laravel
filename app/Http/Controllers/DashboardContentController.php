<?php

namespace App\Http\Controllers;

use App\Models\Content;
use Illuminate\Http\Request;

class DashboardContentController extends Controller
{
    public function PreOrderContent()
    {
        $contents = Content::where('content_name', 'preordercontent')->get();
        return view("admin.content.preOrderList", compact('contents'));
    }

    public function addPreOrderContent(){
        return view("admin.content.PreOrder");
    }

    public function ContentView()
    {
        $contents = Content::latest()->get();
        return view("admin.content.view", compact("contents"));
    }

    public function SliderItemsView()
    {
        $contents = Content::where('content_name', 'SliderItems')->get();
        return view("admin.content.sliderItems", compact("contents"));
    }

    public function HeaderItemsView()
    {
        $contents = Content::where('content_name', 'logoItems')->first();
        return view("admin.content.headerItems", compact("contents"));
    }

    public function SliderItemsCreate()
    {
        return view('admin.content.sliderItemsAdd');
    }

    public function edit($id){
        $content = Content::where('id', $id)->first();
        return view('admin.content.sliderItemsEdit', compact('content'));
    }

    public function SliderItemStore(Request $request)
    {
        $request->validate([
            'category_img' => 'required|image|mimes:jpeg,png,jpg,gif,webp|max:5048',
            'cat_headerImg_PC' => 'required|image|mimes:jpeg,png,jpg,gif,webp|max:5048',
            'title' => 'nullable',
            'subtitle' => 'nullable',
        ]);

        if ($file = $request->file('category_img')) {
            $timestamp = microtime(true) * 10000; // High resolution timestamp
            $randomString = bin2hex(random_bytes(5)); // Generates a random string
            $image_name = $timestamp . '_' . $randomString . '.' . $file->getClientOriginalExtension();
            $file->move(public_path('uploads/content'), $image_name);
            $img_url = 'uploads/content/' . $image_name;
        }

        if ($file = $request->file('cat_headerImg_PC')) {
            $timestamp = microtime(true) * 10000; // High resolution timestamp
            $randomString = bin2hex(random_bytes(5)); // Generates a random string
            $image_name = $timestamp . '_' . $randomString . '.' . $file->getClientOriginalExtension();
            $file->move(public_path('uploads/content'), $image_name);
            $header_url = 'uploads/content/' . $image_name;
        }

        Content::create([
            'content_name' => 'SliderItems',
            'title' => $request->title,
            'subtitle' => $request->subtitle,
            'HomePageImg' => $img_url,
            'MobileImg' => $header_url,
            'viewPageImg' => 'N/A',
        ]);


        return redirect()->route('content.slider')->with(
            'message',
            'Slider Content Added Successfully'
        );
    }


    public function SliderItemUpdate(Request $request)
    {
        $request->validate([
            'content_id' => 'required',
            'category_img' => 'nullable|image|mimes:jpeg,png,jpg,gif,webp|max:5048',
            'cat_headerImg_PC' => 'nullable|image|mimes:jpeg,png,jpg,gif,webp|max:5048',
            'title' => 'nullable',
            'subtitle' => 'nullable',
        ]);

        $id = $request->content_id;

        if ($file = $request->file('category_img')) {
            $timestamp = microtime(true) * 10000; // High resolution timestamp
            $randomString = bin2hex(random_bytes(5)); // Generates a random string
            $image_name = $timestamp . '_' . $randomString . '.' . $file->getClientOriginalExtension();
            $file->move(public_path('uploads/content'), $image_name);
            $img_url = 'uploads/content/' . $image_name;
        }else{
            $img_url = Content::where('id', $id)->value('HomePageImg');
        }

        if ($file = $request->file('cat_headerImg_PC')) {
            $timestamp = microtime(true) * 10000; // High resolution timestamp
            $randomString = bin2hex(random_bytes(5)); // Generates a random string
            $image_name = $timestamp . '_' . $randomString . '.' . $file->getClientOriginalExtension();
            $file->move(public_path('uploads/content'), $image_name);
            $header_url = 'uploads/content/' . $image_name;
        }else{
            $header_url = Content::where('id', $id)->value('MobileImg');
        }

        Content::findOrFail($id)->update([
            'content_name' => 'SliderItems',
            'title' => $request->title,
            'subtitle' => $request->subtitle,
            'HomePageImg' => $img_url,
            'MobileImg' => $header_url,
        ]);


        return redirect()->route('content.slider')->with(
            'message',
            'Slider Content Updated Successfully'
        );
    }

    public function UpdatePreOrderContent(Request $request)
    {
        $request->validate([
            'category_img' => 'required|image|mimes:jpeg,png,jpg,gif,webp|max:5048',
            'cat_headerImg_PC' => 'required|image|mimes:jpeg,png,jpg,gif,webp|max:5048',
            'cat_headerImg_mobile' => 'required|image|mimes:jpeg,png,jpg,gif,webp|max:5048',
            'title' => 'nullable',
            'subtitle' => 'nullable',
        ]);

        if ($file = $request->file('category_img')) {
            $timestamp = microtime(true) * 10000; // High resolution timestamp
            $randomString = bin2hex(random_bytes(5)); // Generates a random string
            $image_name = $timestamp . '_' . $randomString . '.' . $file->getClientOriginalExtension();
            $file->move(public_path('uploads/content'), $image_name);
            $img_url = 'uploads/content/' . $image_name;
        }

        if ($file = $request->file('cat_headerImg_PC')) {
            $timestamp = microtime(true) * 10000; // High resolution timestamp
            $randomString = bin2hex(random_bytes(5)); // Generates a random string
            $image_name = $timestamp . '_' . $randomString . '.' . $file->getClientOriginalExtension();
            $file->move(public_path('uploads/content'), $image_name);
            $header_url = 'uploads/content/' . $image_name;
        }

        if ($file = $request->file('cat_headerImg_mobile')) {
            $timestamp = microtime(true) * 10000; // High resolution timestamp
            $randomString = bin2hex(random_bytes(5)); // Generates a random string
            $image_name = $timestamp . '_' . $randomString . '.' . $file->getClientOriginalExtension();
            $file->move(public_path('uploads/content'), $image_name);
            $mobileHeader_url = 'uploads/content/' . $image_name;
        }

        $content = Content::where('content_name', 'preordercontent')->first();
        if ($content == null) {
            Content::create([
                'content_name' => 'preordercontent',
                'title' => $request->title,
                'subtitle' => $request->subtitle,
                'HomePageImg' => $img_url,
                'MobileImg' => $header_url,
                'viewPageImg' => $mobileHeader_url,
            ]);
        } else {
            Content::where('content_name', 'preordercontent')->update([
                'title' => $request->title,
                'subtitle' => $request->subtitle,
                'HomePageImg' => $img_url,
                'MobileImg' => $header_url,
                'viewPageImg' => $mobileHeader_url,
            ]);
        }

        return redirect()->route('content.preorder')->with(
            'message',
            'Pre Order Content Updated Successfully'
        );
    }

    //applogo
    public function LlogoUpdate(Request $request){
        $validator = $request->validate([
            'light_logo' => 'required|image|mimes:jpeg,png,jpg,gif,svg,webp|max:5048'
        ]);

        if ($file = $request->file('light_logo')) {
            $timestamp = microtime(true) * 10000; // High resolution timestamp
            $randomString = bin2hex(random_bytes(5)); // Generates a random string
            $image_name = $timestamp . '_' . $randomString . '.' . $file->getClientOriginalExtension();
            $file->move(public_path('uploads/content/logo'), $image_name);
            $img_url = 'uploads/content/logo/' . $image_name;
        }

        $content = Content::where('content_name', 'logoItems')->first();
        if ($content == null) {
            Content::create([
                'content_name' => 'logoItems',
                'HomePageImg' => $img_url,
            ]);
        } else {
            Content::where('content_name', 'logoItems')->update([
                'HomePageImg' => $img_url,
            ]);
        }

        return redirect()->route('content.header')->with(
            'message',
            'Logo Updated Successfully'
        );
    }


    public function DlogoUpdate(Request $request){
        $validator = $request->validate([
            'dark_logo' => 'required|image|mimes:jpeg,png,jpg,gif,svg,webp|max:5048'
        ]);

        if ($file = $request->file('dark_logo')) {
            $timestamp = microtime(true) * 10000; // High resolution timestamp
            $randomString = bin2hex(random_bytes(5)); // Generates a random string
            $image_name = $timestamp . '_' . $randomString . '.' . $file->getClientOriginalExtension();
            $file->move(public_path('uploads/content/logo'), $image_name);
            $img_url = 'uploads/content/logo/' . $image_name;
        }

        $content = Content::where('content_name', 'logoItems')->first();
        if ($content == null) {
            Content::create([
                'content_name' => 'logoItems',
                'MobileImg' => $img_url,
            ]);
        } else {
            Content::where('content_name', 'logoItems')->update([
                'MobileImg' => $img_url,
            ]);
        }

        return redirect()->route('content.header')->with(
            'message',
            'Dark Logo Updated Successfully'
        );
    }

    public function destroy($id)
    {
        Content::findOrFail($id)->delete();

        return redirect()->route('content.all')->with(
            'message',
            'Content Deleted Successfully'
        );
    }
}

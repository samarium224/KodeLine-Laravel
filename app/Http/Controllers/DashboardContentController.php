<?php

namespace App\Http\Controllers;

use App\Models\Content;
use Illuminate\Http\Request;

class DashboardContentController extends Controller
{
    public function PreOrderContent()
    {
        return view("admin.content.PreOrder");
    }

    public function ContentView(){
        $contents = Content::latest()->get();
        return view("admin.content.view", compact("contents"));
    }

    public function UpdatePreOrderContent(Request $request)
    {
        $request->validate([
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
                'HomePageImg' => $img_url,
                'MobileImg' => $header_url,
                'viewPageImg' => $mobileHeader_url,
            ]);
        } else {
            Content::where('content_name', 'preordercontent')->update([
                'HomePageImg' => $img_url,
                'MobileImg' => $header_url,
                'viewPageImg' => $mobileHeader_url,
            ]);
        }

        return redirect()->route('content.all')->with(
            'message',
            'Pre Order Content Updated Successfully'
        );
    }

    public function destroy($id){
        Content::findOrFail($id)->delete();

        return redirect()->route('content.all')->with(
            'message',
            'Content Deleted Successfully'
        );
    }
}

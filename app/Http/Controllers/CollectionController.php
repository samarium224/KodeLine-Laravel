<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Products;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CollectionController extends Controller
{
    public function Index(Request $request){
        $validatedData = $request->validate([
            "id"=> "required|integer",
        ]);

        $id = $request->get("id");

        $collections = Category::all()->map(function ($item) {
            return [
                'collection_name' => $item->category_name,
                'collection_id'=> $item->id,
            ];
        });

        try {
            //code...
            $collection_info = Category::where("id", $id)->get()->map(function ($item) {
                return [
                    'category_name' => $item->category_name,
                    'title' => $item->category_title,
                    'subtitle' => $item->category_subtitle,
                    'category_img' => $item->category_img,
                    'backgroundImgURL' => $item->cat_headerImg_PC,
                    'mobileBackgroundImgURL' => $item->cat_headerImg_mobile,
                    'reverseAlign' => $item->reverseAlign,
                    'backgroundPosition' => "right top",
                ];
            });

            $CollectionItemList = Products::where('product_category_id', $id)->take(30)->get()->map(function ($item) {
                // Assuming 'ageRange' is a string like "3|6", we split it into an array.
                $ageRangeArray = explode('|', $item->ageRange);
                return [
                    'itemID' => $item->id,
                    'imgURL' => $item->product_img,
                    'itemTitle' => $item->product_name,
                    'ageRange' => $ageRangeArray, // This will now be an array, e.g., [3, 6]
                    'currentPrice' => $item->price,
                    'oldPrice' => $item->compare_price,
                ];
            });

            // dd($collection_info[0]);

            return Inertia::render('Collection',[
                'collections' => $collections,
                'collection_info' => $collection_info[0],
                'collectionItemList'=> $CollectionItemList,
            ]);
        } catch (\Throwable $th) {
            //throw $th;
            return redirect()->back()->with('error', $th->getMessage());
        }


    }


}

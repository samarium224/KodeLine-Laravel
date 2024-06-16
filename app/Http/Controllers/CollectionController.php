<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Content;
use App\Models\PreOrderItem;
use App\Models\Products;
use App\Models\SubCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CollectionController extends Controller
{

    public function Index(Request $request){
        $validatedData = $request->validate([
            "id"=> "required|integer",
            "category_id" => "nullable"
        ]);

        $id = $request->get("id");
        $selected_category_id = $request->get("category_id");

        $SelectedCategories = SubCategory::where('category_id', $id)->get()->map(function ($item){
            return [
                'selectedSubCat' => $item->subcategory_name,
                'selectedSubCatID' => $item->id
            ];
        });

        $collections = Category::all()->map(function ($item) {
            $subcategoryInfo = SubCategory::where('category_id', $item->id)->get();
            $subcategory = [];
            $subcategory_id = [];
            foreach($subcategoryInfo as $subcat){
                $subcategory[] = $subcat->subcategory_name;
                $subcategory_id[] = $subcat->id;
            }
            return [
                'collection_name' => $item->category_name,
                'collection_id' => $item->id,
                'subcategories' => $subcategory,
                'subcategory_id' => $subcategory_id,
                'ImgUrl' => $item->cat_headerImg_PC,
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

            $CollectionItemList = Products::where('product_category_id', $id)->get()->map(function ($item) {
                // Assuming 'ageRange' is a string like "3|6", we split it into an array.
                $ageRangeArray = explode('|', $item->ageRange);
                return [
                    'itemID' => $item->id,
                    'imgURL' => $item->product_img,
                    'itemTitle' => $item->product_name,
                    'ageRange' => $ageRangeArray, // This will now be an array, e.g., [3, 6]
                    'currentPrice' => $item->price,
                    'oldPrice' => $item->compare_price,
                    'categoryName' => $item->product_subcategory_name,
                    'categoryID' => $item->product_subcategory_id
                ];
            });

            $preOrderContent = Content::where('content_name', 'preordercontent')->first();
            $preOrderItems = Products::where('product_type', 1)->get()->map(function ($item) {
                $ageRangeArray = explode('|', $item->ageRange);
                return [
                    'itemID' => $item->id,
                    'imgURL' => $item->product_img,
                    'itemTitle' => $item->product_name,
                    'ageRange' => $ageRangeArray,
                    'currentPrice' => $item->price,
                    'oldPrice' => $item->compare_price,
                    'buttonText' => "PRE ORDER",
                ];
            });

            // dd($collection_info[0]);
            $appLogo = [
                'LogoLight' => Content::where('content_name', 'logoItems')->value('HomePageImg'),
                'LogoDark' => Content::where('content_name', 'logoItems')->value('MobileImg'),
            ];
            return Inertia::render('Collection',[
                'collections' => $collections,
                'collection_info' => $collection_info[0],
                'selectedCategoryID' => $selected_category_id,
                'selectedCategories' => $SelectedCategories,
                'collectionItemList'=> $CollectionItemList,
                'preOrderContent' => $preOrderContent,
                'preOrderItems' => $preOrderItems,
                'AppLogo' => $appLogo,
            ]);
        } catch (\Throwable $th) {
            //throw $th;
            return redirect()->back()->with('error', $th->getMessage());
        }


    }

    public function FeaturedItemLoad(Request $request){

        $id = 1;
        $selected_category_id = $request->get("category_id");

        $SelectedCategories = SubCategory::where('category_id', $id)->get()->map(function ($item){
            return [
                'selectedSubCat' => $item->subcategory_name,
                'selectedSubCatID' => $item->id
            ];
        });

        $collections = Category::all()->map(function ($item) {
            $subcategoryInfo = SubCategory::where('category_id', $item->id)->get();
            $subcategory = [];
            $subcategory_id = [];
            foreach($subcategoryInfo as $subcat){
                $subcategory[] = $subcat->subcategory_name;
                $subcategory_id[] = $subcat->id;
            }
            return [
                'collection_name' => $item->category_name,
                'collection_id' => $item->id,
                'subcategories' => $subcategory,
                'subcategory_id' => $subcategory_id,
                'ImgUrl' => $item->cat_headerImg_PC,
            ];
        });

        try {
            //code...
            $collection_info = [
                    'category_name' => "",
                    'title' => "",
                    'subtitle' => "Shop our must-have picks!",
                    'category_img' => "../assets/Final Edit_4.png",
                    'backgroundImgURL' => "../assets/Final Edit_4.png",
                    'mobileBackgroundImgURL' => "../assets/Final Edit_4_Mobile Version.png",
                    'reverseAlign' => false,
                    'backgroundPosition' => "right top",
                ];

            $CollectionItemList = Products::where('featured', 'true')->get()->map(function ($item) {
                // Assuming 'ageRange' is a string like "3|6", we split it into an array.
                $ageRangeArray = explode('|', $item->ageRange);
                return [
                    'itemID' => $item->id,
                    'imgURL' => $item->product_img,
                    'itemTitle' => $item->product_name,
                    'ageRange' => $ageRangeArray, // This will now be an array, e.g., [3, 6]
                    'currentPrice' => $item->price,
                    'oldPrice' => $item->compare_price,
                    'categoryName' => $item->product_subcategory_name,
                    'categoryID' => $item->product_subcategory_id
                ];
            });

            $preOrderContent = Content::where('content_name', 'preordercontent')->first();
            $preOrderItems = Products::where('product_type', 1)->get()->map(function ($item) {
                $ageRangeArray = explode('|', $item->ageRange);
                return [
                    'itemID' => $item->id,
                    'imgURL' => $item->product_img,
                    'itemTitle' => $item->product_name,
                    'ageRange' => $ageRangeArray,
                    'currentPrice' => $item->price,
                    'oldPrice' => $item->compare_price,
                    'buttonText' => "PRE ORDER",
                ];
            });

            // dd($collection_info[0]);
            $appLogo = [
                'LogoLight' => Content::where('content_name', 'logoItems')->value('HomePageImg'),
                'LogoDark' => Content::where('content_name', 'logoItems')->value('MobileImg'),
            ];
            return Inertia::render('Collection',[
                'collections' => $collections,
                'collection_info' => $collection_info,
                'selectedCategoryID' => $selected_category_id,
                'selectedCategories' => $SelectedCategories,
                'collectionItemList'=> $CollectionItemList,
                'preOrderContent' => $preOrderContent,
                'preOrderItems' => $preOrderItems,
                'AppLogo' => $appLogo,
            ]);
        } catch (\Throwable $th) {
            // throw $th;
            return redirect()->back()->with('error', $th->getMessage());
        }


    }


}

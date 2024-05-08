<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Content;
use App\Models\PreOrderItem;
use App\Models\Products;
use App\Models\SubCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class HomepageController extends Controller
{
    //load product in homepage
    public function index()
    {
        $signatureItemsList = Products::where('featured', 'true')->take(10)->get()->map(function ($item) {
            // Assuming 'ageRange' is a string like "3|6", we split it into an array.
            $ageRangeArray = explode('|', $item->ageRange);
            $product_img = explode('|', $item->product_img);

            if (count($product_img) != 1) {
                $product_img = $product_img[0];
            }

            return [
                'itemID' => $item->id,
                'imgURL' => $product_img,
                'itemTitle' => $item->product_name,
                'ageRange' => $ageRangeArray, // This will now be an array, e.g., [3, 6]
                'currentPrice' => $item->price,
                'oldPrice' => $item->compare_price,
                'collection_id' => $item->product_category_id,
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


        $featuredcollections = Products::select('product_category_name', 'product_category_id')
            ->where('featured', 'true')
            ->distinct('product_category_name')
            ->get()
            ->map(function ($item) {
                return [
                    'collection_name' => $item->product_category_name,
                    'collection_id' => $item->product_category_id,
                ];
            });

        $products = Products::all();

        $collectionItemList = $products
            ->reject(function ($product) {
                return $product->product_category_name === 'none';
            })
            ->groupBy('product_category_name')
            ->map(function ($group, $categoryName) {
                return [
                    'categoryID' => Products::where('product_category_name', $categoryName)->value('product_category_id'),
                    'categoryTitle' => $categoryName,
                    'categorySubtitle' => Category::where('category_name', $categoryName)->value('category_title'),
                    'categoryImage' => Category::where('category_name', $categoryName)->value('category_img'),
                    'categoryItemList' => $group->take(4)->map(function ($product) {
                        $ageRangeArray = explode('|', $product->ageRange);
                        $product_img = explode('|', $product->product_img);

                        if (count($product_img) != 1) {
                            $product_img = $product_img[0];
                        }
                        return [
                            'itemID' => $product->id,
                            'imgURL' => $product_img,
                            'itemTitle' => $product->product_name,
                            'ageRange' => $ageRangeArray, // This will now be an array, e.g., [3, 6]
                            'currentPrice' => $product->price,
                            'oldPrice' => $product->compare_price,
                            // Include other product attributes you need
                        ];
                    })->values(), // Reset keys on the products array for JSON-friendly output
                ];
            })->values(); // Reset keys on the collections array for JSON-friendly output

        //bestselling
        $bestsellingItems = Products::where('best_selling', 'true')->get()->map(function ($item) {
            $ageRangeArray = explode('|', $item->ageRange);
            $product_img = explode('|', $item->product_img);

            if (count($product_img) != 1) {
                $product_img = $product_img[0];
            }

            return [
                'itemID' => $item->id,
                'imgURL' => $product_img,
                'itemTitle' => $item->product_name,
                'ageRange' => $ageRangeArray,
                'currentPrice' => $item->price,
                'oldPrice' => $item->compare_price,
                'collection_id' => $item->product_category_id,
            ];
        });

        $bestsellingCategories = Products::select('product_category_name', 'product_category_id')
            ->where('best_selling', 'true')
            ->distinct('product_category_name')
            ->get()
            ->map(function ($item) {
                return [
                    'collection_name' => $item->product_category_name,
                    'collection_id' => $item->product_category_id,
                ];
            });

        // dd($bestsellingCategories);

        // preorderitem
        $preOrderContent = Content::where('content_name', 'preordercontent')->first();
        $preOrderItems = PreOrderItem::all()->map(function ($item) {
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
        // dd($collections);
        return Inertia::render('Welcome', [
            'signatureItemsList' => $signatureItemsList,
            'collectionItemList' => $collectionItemList,
            'collections' => $collections,
            'featuredcollection' => $featuredcollections,
            'bestsellingItems' => $bestsellingItems,
            'bestsellingCollection' => $bestsellingCategories,
            'preOrderContent' => $preOrderContent,
            'preOrderItems' => $preOrderItems,
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
        ]);
    }
}

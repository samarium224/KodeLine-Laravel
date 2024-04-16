<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Products;
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
                'oldPrice' => $item->compare_price, // Assuming you have a separate column for old price
            ];
        });

        $collections = Category::all()->map(function ($item) {
            return [
                'collection_name' => $item->category_name,
                'collection_id' => $item->id,
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
                    'categoryImage' => Category::where('category_name', $categoryName)->value('category_img'),
                    'categoryMobileQuote' => [
                        'title' => "Sun-kissed Style",
                        'subtitle' => "For Every Little Princess",
                    ],
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
            ];
        });
        // dd($collections);
        return Inertia::render('Welcome', [
            'signatureItemsList' => $signatureItemsList,
            'collectionItemList' => $collectionItemList,
            'collections' => $collections,
            'featuredcollection' => $featuredcollections,
            'bestsellingItems' => $bestsellingItems,
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
        ]);
    }
}

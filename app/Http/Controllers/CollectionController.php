<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Products;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CollectionController extends Controller
{
    public function Index(Request $request){

        $collections = Category::all()->map(function ($item) {
            return [
                $item->category_name,
            ];
        });
        $id = $request->get("id");

        $collection_name = Category::where("id", $id)->value('category_name');

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

        return Inertia::render('Collection',[
            'collections' => $collections,
            'collection_name' => $collection_name,
            'collectionItemList'=> $CollectionItemList,
        ]);
    }
}

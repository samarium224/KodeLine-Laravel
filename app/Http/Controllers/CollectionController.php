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

        $product = Products::where("product_category_id", $id)->get();
        $collection_name = Category::where("id", $id)->value('category_name');
        
        return Inertia::render('Collection',[
            'collections' => $collections,
            'collection_name' => $collection_name
        ]);
    }
}

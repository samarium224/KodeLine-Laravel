<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Products;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ShowcaseProduct extends Controller
{
    public function ShowItem(Request $request){
        $id = $request->get('id');

        $collections = Category::all()->map(function ($item) {
            return [
                'collection_name' => $item->category_name,
                'collection_id'=> $item->id,
            ];
        });

        $ProductItem = Products::where('id', $id)->get()->map(function ($item) {
            // Assuming 'ageRange' is a string like "3|6", we split it into an array.
            $ageRangeArray = explode('|', $item->ageRange);
            $product_img = explode('|', $item->product_img);
            $colorGroup = explode('|', $item->colorGroup);
            $sizeGroup = explode('|', $item->sizeGroup);
            return [
                'itemName' => $item->product_name,
                'imgURL' => [
                    'primary' => $product_img,
                    'secondary' => $product_img,
                ],
                'price' => $item->price,
                'colorVariants' => $colorGroup,
                'sizes' => ["3 Years", "4 Years", "5 years"],
                'itemDescription' => [
                    'title' => $item->product_short_description,
                    'desc' => $item->product_long_description,
                ],
            ];
        });

        return Inertia::render('ItemShowcase',[
            'collections' => $collections,
            'product' => $ProductItem[0],
        ]);
    }
}

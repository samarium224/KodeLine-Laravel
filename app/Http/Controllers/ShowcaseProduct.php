<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Content;
use App\Models\PreOrderItem;
use App\Models\Products;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ShowcaseProduct extends Controller
{
    public function ShowItem(Request $request)
    {
        $validatedData = $request->validate([
            "id" => "required|integer",
        ]);

        $id = $request->get('id');

        // $product = Products::with('attributes')->where('id', $id)->first();
        // dd($product->attributes);
        // try {
            //code...
            $collections = Category::all()->map(function ($item) {
                return [
                    'collection_name' => $item->category_name,
                    'collection_id' => $item->id,
                ];
            });

            $ProductItem = Products::with('attributes')->where('id', $id)->get()->map(function ($item) {
                // Assuming 'ageRange' is a string like "3|6", we split it into an array.
                $ageRangeArray = explode('|', $item->ageRange);
                $product_img = explode('|', $item->product_img);
                $colorGroup = [];
                $sizeGroup = [];
                $imgvariation = [];
                // Accessing colorGroup and sizeGroup from attributes relationship
                if (count($item->attributes)!=0) {
                    foreach ($item->attributes as $attribute) {
                        $imgvariation[] = $attribute->imageUrls;
                        if ($attribute->attribute == 'color') {
                            $colorGroup[] = $attribute->value;
                        } elseif ($attribute->attribute == 'size') {
                            $sizeGroup[] = $attribute->value;
                        }
                    }
                }else{
                    $imgvariation = array_slice($product_img, 1);
                }

                return [
                    'itemName' => $item->product_name,
                    'imgURL' => [
                        'primary' => $product_img[0],
                        'secondary' => $imgvariation,
                    ],
                    'price' => $item->price,
                    'colorVariants' => $colorGroup,
                    'stock' => $item->quantity,
                    'sizes' => $sizeGroup,
                    'attributes' => $item->attributes,
                    'itemDescription' => [
                        'title' => $item->product_short_description,
                        'desc' => $item->product_long_description,
                    ],
                ];
            });

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

            return Inertia::render('ItemShowcase', [
                'collections' => $collections,
                'product' => $ProductItem[0], //don't touch it works
                'preOrderContent' => $preOrderContent,
                'preOrderItems' => $preOrderItems,
            ]);
        // } catch (\Throwable $th) {
            //throw $th;
            // return redirect()->route('home');
        // }
    }

    public function ShowPreorderItem(Request $request)
    {
        $validatedData = $request->validate([
            "id" => "required|integer",
        ]);

        $id = $request->get('id');
        try {
            //code...
            $collections = Category::all()->map(function ($item) {
                return [
                    'collection_name' => $item->category_name,
                    'collection_id' => $item->id,
                ];
            });

            $ProductItem = PreOrderItem::where('id', $id)->get()->map(function ($item) {
                // Assuming 'ageRange' is a string like "3|6", we split it into an array.
                $ageRangeArray = explode('|', $item->ageRange);
                $product_img = explode('|', $item->product_img);
                $colorGroup = explode('|', $item->colorGroup);
                $sizeGroup = explode('|', $item->sizeGroup);
                $imgvariation = explode('|', $item->imageVariations);
                return [
                    'itemName' => $item->product_name,
                    'imgURL' => [
                        'primary' => $product_img[0],
                        'secondary' => $imgvariation,
                    ],
                    'price' => $item->price,
                    'colorVariants' => $colorGroup,
                    'sizes' => ["3 Years", "4 Years", "5 years"],
                    'itemDescription' => [
                        'title' => $item->product_short_description,
                        'desc' => $item->product_long_description,
                    ],
                    'itemType' => 'PreordereItem',
                ];
            });

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

            return Inertia::render('ItemShowcase', [
                'collections' => $collections,
                'product' => $ProductItem[0], //don't touch it works
                'preOrderContent' => $preOrderContent,
                'preOrderItems' => $preOrderItems,
            ]);
        } catch (\Throwable $th) {
            //throw $th;
            return redirect()->route('home');
        }
    }
}

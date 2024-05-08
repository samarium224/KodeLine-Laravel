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
            'id' => 'required|integer',
            'color' => 'required|integer'
        ]);

        $id = $request->get('id');
        $color_id = $request->get('color');

        // $product = Products::with('attributes')->where('id', $id)->first();
        // dd($product->attributes);
        try {
            //code...
            $collections = Category::all()->map(function ($item) {
                return [
                    'collection_name' => $item->category_name,
                    'collection_id' => $item->id,
                ];
            });

            $ProductItem = Products::with('attributes')->where('id', $id)->get()->map(function ($item) use ($color_id) {
                // dd($color_id);
                if ($color_id == null) {
                    $color_id = 0;
                }
                $product_img = explode('|', $item->product_img);
                $colorGroup = [];
                $imgvariation = [];
                $sizeGroup = [];
                $stockGroup = [];
                $priceGroup = [];
                $colorImg = [];
                // Accessing colorGroup and sizeGroup from attributes relationship
                if (count($item->attributes) != 0) {
                    foreach ($item->attributes as $key => $attribute) {
                        if ($key == $color_id) {
                            $sizeGroup = explode(',', $attribute->sizes);
                            $stockGroup = explode(',', $attribute->stock);
                            $priceGroup = explode(',', $attribute->price);
                            $imgvariation = explode('|', $attribute->imageUrls);
                            $product_img = $imgvariation[0];
                        }
                        $colorGroup[] = $attribute->value;
                        $tempImg = explode('|', $attribute->imageUrls);
                        $colorImg[] = $tempImg[0];
                    }
                    $imgvariation = array_slice($imgvariation, 1);
                } else {
                    $imgvariation = array_slice($product_img, 1);
                    $product_img = $product_img[0];
                    $stockGroup = array ($item->quantity);
                    $priceGroup = array ($item->price);
                }

                return [
                    'itemID' => $item->id,
                    'colorID' => (int) $color_id,
                    'itemName' => $item->product_name,
                    'imgURL' => [
                        'primary' => $product_img,
                        'secondary' => $imgvariation,
                    ],
                    'price' => $priceGroup,
                    'colorVariants' => [
                        'colorName' => $colorGroup,
                        'colorImg' => $colorImg,
                    ],
                    'stock' => $stockGroup,
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
        } catch (\Throwable $th) {
            // throw $th;
            return redirect()->route('home');
        }
    }

    public function ShowPreorderItem(Request $request)
    {
        $validatedData = $request->validate([
            'id' => 'required|integer',
            'color' => 'required|integer'
        ]);

        $id = $request->get('id');
        $color_id = $request->get('color');

        try {
            //code...
            $collections = Category::all()->map(function ($item) {
                return [
                    'collection_name' => $item->category_name,
                    'collection_id' => $item->id,
                ];
            });

            $ProductItem = PreOrderItem::with('attributes')->where('id', $id)->get()->map(function ($item) use ($color_id) {
                // dd($color_id);
                if ($color_id == null) {
                    $color_id = 0;
                }
                $product_img = explode('|', $item->product_img);
                $colorGroup = [];
                $imgvariation = [];
                $sizeGroup = [];
                $stockGroup = [];
                $priceGroup = [];
                $colorImg = [];
                // Accessing colorGroup and sizeGroup from attributes relationship
                if (count($item->attributes) != 0) {
                    foreach ($item->attributes as $key => $attribute) {
                        if ($key == $color_id) {
                            $sizeGroup = explode(',', $attribute->sizes);
                            $stockGroup = explode(',', $attribute->stock);
                            $priceGroup = explode(',', $attribute->price);
                            $imgvariation = explode('|', $attribute->imageUrls);
                            $product_img = $imgvariation[0];
                        }
                        $colorGroup[] = $attribute->value;
                        $tempImg = explode('|', $attribute->imageUrls);
                        $colorImg[] = $tempImg[0];
                    }
                    $imgvariation = array_slice($imgvariation, 1);
                } else {
                    $imgvariation = array_slice($product_img, 1);
                    $product_img = $product_img[0];
                    $stockGroup = array ($item->quantity);
                    $priceGroup = array ($item->price);
                }

                return [
                    'itemID' => $item->id,
                    'colorID' => (int) $color_id,
                    'itemName' => $item->product_name,
                    'imgURL' => [
                        'primary' => $product_img,
                        'secondary' => $imgvariation,
                    ],
                    'price' => $priceGroup,
                    'colorVariants' => [
                        'colorName' => $colorGroup,
                        'colorImg' => $colorImg,
                    ],
                    'stock' => $stockGroup,
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
        } catch (\Throwable $th) {
            //throw $th;
            return redirect()->route('home');
        }
    }

    public function getVarient(Request $request)
    {

    }
}

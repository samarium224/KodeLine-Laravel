<?php

namespace App\Http\Controllers;

use App\Models\Products;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class HomepageController extends Controller
{
    //load product in homepage
    public function index()
    {
        $signatureItemsList = Products::all()->map(function ($item) {
            // Assuming 'ageRange' is a string like "3|6", we split it into an array.
            $ageRangeArray = explode('|', $item->ageRange);

            return [
                'itemTitle' => $item->product_name,
                'ageRange' => $ageRangeArray, // This will now be an array, e.g., [3, 6]
                'currentPrice' => $item->price,
                'oldPrice' => $item->compare_price, // Assuming you have a separate column for old price
            ];
        });

        return Inertia::render('Welcome', [
            'signatureItemsList' => $signatureItemsList,
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
        ]);
    }

}

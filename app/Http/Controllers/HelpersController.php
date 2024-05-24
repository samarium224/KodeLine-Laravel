<?php

namespace App\Http\Controllers;

use App\Models\Products;
use Illuminate\Http\Request;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class HelpersController extends Controller
{
    public function sort($sortID) {
        // Define the valid column names
        $validColumns = ['id', 'product_name', 'product_category_id', 'continue_selling'];

        // Validate the column name
        if (!in_array($sortID, $validColumns)) {
            throw new NotFoundHttpException;
        }

        // Proceed with sorting if the column name is valid
        $columnName = $sortID;
        $direction = 'asc';
        $products = Products::orderBy($columnName, $direction)->paginate(10);

        return view('admin.products.AllProducts', compact('products'));
    }

}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class UserAddressController extends Controller
{
    //
    public function Index(Request $request){
        return inertia::render('Proceed');
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class DashboardCustomerController extends Controller
{
    public function ViewCustomers(){
        $customers = User::paginate(10);
        return view("admin.customers.users", compact("customers"));
    }

    public function ViewGuest(){

    }
}

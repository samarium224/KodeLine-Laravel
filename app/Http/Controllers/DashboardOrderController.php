<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;

class DashboardOrderController extends Controller
{
    //order section
    public function Orders()
    {
        $orders = Order::latest()->get();
        return view('admin.AllOrders', compact('orders'));
    }

    public function PreOrderItem(){
        return view('admin.orders.preOrderItem');
    }

    public function OrderUnpaid(){
        $title = "Unpaid Order List";
        $orders = Order::where('payment_status', 0)->get();
        return view('admin.orders.orderListing', compact('orders', 'title'));
    }

    public function OrderPending(){
        $title = "Pending Order List";
        $orders = Order::where('delivery_status', 0);
        return view('admin.orders.orderListing', compact('orders', 'title'));
    }

    public function OrderComplete(){
        $title = "Completed Delivery List";
        $orders = Order::where('delivery_status', 1);
        return view('admin.orders.orderListing', compact('orders', 'title'));
    }

    public function CompleteDelivery($id){
        dd($id);
    }
}

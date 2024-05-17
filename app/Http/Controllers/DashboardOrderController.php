<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;

class DashboardOrderController extends Controller
{
    //order section
    public function Orders()
    {
        $title = "All orders";
        $orders = Order::latest()->paginate(25);
        return view('admin.orders.orderListing', compact('orders', 'title'));
    }

    public function OrderUnpaid(){
        $title = "Unpaid Order List";
        $orders = Order::where('payment_status', 0)->paginate(25);
        return view('admin.orders.orderListing', compact('orders', 'title'));
    }

    public function OrderPending(){
        $title = "Pending Order List";
        $orders = Order::where('delivery_status', 0)->paginate(25);
        return view('admin.orders.orderListing', compact('orders', 'title'));
    }

    public function OrderComplete(){
        $title = "Completed Delivery List";
        $orders = Order::where('delivery_status', 1)->paginate(25);
        return view('admin.orders.orderListing', compact('orders', 'title'));
    }

    public function OrderReturned(){
        $title = "Returned order List";
        $orders = Order::where('Isreturned', 1)->paginate(25);
        return view('admin.orders.orderListing', compact('orders', 'title'));
    }

    public function CompleteDelivery($id){
        Order::findOrFail($id)->update([
            'delivery_status' => 1,
        ]);

        return redirect()->back();
    }

    public function ReturnProduct($id){
        Order::findOrFail($id)->update([
            'Isreturned' => 1,
            'delivery_status' => 0,
            'payment_status' => 0,
        ]);

        return redirect()->back();
    }

    public function OrderDelete($id){
        Order::findOrFail($id)->delete();

        return redirect()->back()->with(
            'message',
            'Order Entry Deleted Successfully'
        );
    }


}

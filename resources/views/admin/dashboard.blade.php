@extends('admin.dashboardcore')

@section('page-title', 'Dashboard')

@section('page-heading', 'Dashboard')
@section('page-active-heading', 'Dashboard')

@section('dashboard-content')
    <!-- Start Page Content -->
    <div class="row">
        <div class="col-md-3">
            <div class="card p-30">
                <div class="media">
                    <div class="media-left meida media-middle">
                        <span><i class="fa fa-usd f-s-40 color-primary"></i></span>
                    </div>
                    <div class="media-body media-text-right">
                        <h2>
                            @php
                                $revenue = 0;
                                if($analytics !=null){
                                    $revenue = $analytics->revenue;
                                }
                            @endphp
                            {{ $revenue }}
                        </h2>
                        <p class="m-b-0">total revenue</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card p-30">
                <div class="media">
                    <div class="media-left meida media-middle">
                        <span><i class="fa fa-shopping-cart f-s-40 color-success"></i></span>
                    </div>
                    <div class="media-body media-text-right">
                        <h2>
                            @php
                                $order = 0;
                                if($analytics !=null){
                                    $order = $analytics->total_orders;
                                }
                            @endphp
                            {{ $order }}
                        </h2>
                        <p class="m-b-0">total order</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card p-30">
                <div class="media">
                    <div class="media-left meida media-middle">
                        <span><i class="fa fa-archive f-s-40 color-warning"></i></span>
                    </div>
                    <div class="media-body media-text-right">
                        <h2>
                            @php
                                $customer = 0;
                                if($analytics !=null){
                                    $customer = $analytics->customer_count;
                                }
                            @endphp
                            {{ $customer }}
                        </h2>
                        <p class="m-b-0">total customer</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card p-30">
                <div class="media">
                    <div class="media-left meida media-middle">
                        <span><i class="fa fa-user f-s-40 color-danger"></i></span>
                    </div>
                    <div class="media-body media-text-right">
                        <h2>
                            @php
                                $avg_order = 0;
                                if($analytics !=null){
                                    $totalSales = $analytics->total_sales_price;
                                    $totalOrders = $analytics->total_orders;

                                    if($totalOrders != 0){
                                        $avg_order = $totalSales/$totalOrders;
                                    }else{
                                        $avg_order = 0;
                                    }
                                }
                            @endphp
                            {{ $avg_order }}
                        </h2>
                        <p class="m-b-0">avg. order value</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-title">
                    <h4>Recent Orders </h4>
                </div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col" class="border-0">
                                    ID
                            </th>
                            <th scope="col" class="border-0">
                                    Order ID
                            </th>
                            <th scope="col" class="border-0">Product Img</th>
                            <th scope="col" class="border-0">
                                    Product
                            </th>
                            <th scope="col" class="border-0">User</th>
                            <th scope="col" class="border-0">Phone Number</th>
                            <th scope="col" class="border-0">Address</th>
                            <th scope="col" class="border-0">Quantity</th>
                            <th scope="col" class="border-0">Total Price</th>
                            <th scope="col" class="border-0">Payment Status</th>
                            <th scope="col" class="border-0">Delivery Status</th>
                            <th scope="col" class="border-0">Return Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($orders as $order)
                            <tr>
                                <th scope="row">{{ $order->id }}</th>
                                <td>{{ $order->order_id }}</td>
                                <td> <img src="{{ asset($order->imgUrl) }}" width="100px" alt=""> </td>
                                <td>{{ $order->product_name }}</td>
                                <td>{{ $order->username }}</td>
                                <td>{{ $order->phonenumber }}</td>
                                <td>{{ $order->address }}</td>
                                <td>{{ $order->product_quantity }}</td>
                                <td>{{ $order->total_price }}</td>
                                <td>
                                    @if ($order->payment_status != 1)
                                        <span class="badge badge-danger px-2 py-1">unpaid</span>
                                    @else
                                        <span class="badge badge-success px-2 py-1">paid</span>
                                    @endif
                                </td>
                                </td>
                                <td>
                                    @if ($order->delivery_status != 1)
                                        <span class="badge badge-danger px-2 py-1">pending</span>
                                        <br>
                                        <a href="{{ route('order.deliverycomplete', $order->id) }}"
                                            class="btn text-dark">
                                            <i class="fa fa-check-square-o" aria-hidden="true"></i>
                                            mark complete
                                        </a>
                                    @else
                                        <span class="badge badge-success px-2 py-1">completed</span>
                                    @endif

                                </td>
                                <td>
                                    @if ($order->Isreturned != 1)
                                        <a href="{{ route('order.returnProduct', $order->id) }}" class="btn btn-secondary btn-sm">requested</a>
                                    @else
                                        this product has been returned
                                    @endif
                                </td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
                <div class="my-3 d-flex justify-content-center">
                    {{ $orders->onEachSide(1)->links() }}
                </div>
            </div>
        </div>
    </div>
    <!-- End PAge Content -->

@endsection

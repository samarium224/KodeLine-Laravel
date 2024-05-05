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
                        <h2>568120</h2>
                        <p class="m-b-0">Total Revenue</p>
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
                        <h2>1178</h2>
                        <p class="m-b-0">Sales</p>
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
                        <h2>25</h2>
                        <p class="m-b-0">Stores</p>
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
                        <h2>847</h2>
                        <p class="m-b-0">Customer</p>
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
                            <th scope="col" class="border-0"><a class="text-dark"
                                    href="{{ route('product.sort', 'id') }}">
                                    ID </a>
                            </th>
                            <th scope="col" class="border-0"><a class="text-dark"
                                    href="{{ route('product.sort', 'product_name') }}">
                                    Order ID </a>
                            </th>
                            <th scope="col" class="border-0">Product Img</th>
                            <th scope="col" class="border-0"><a class="text-dark"
                                    href="{{ route('product.sort', 'product_category_id') }}">
                                    Product</a>
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
                                        <a href="{{route('order.deliverycomplete')}}" class="btn btn-light btn-sm">mark as complete</a>
                                    @else
                                        <span class="badge badge-success px-2 py-1">completed</span>
                                    @endif

                                </td>
                                <td>
                                    <a href="" class="btn btn-secondary btn-sm">requested</a>
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

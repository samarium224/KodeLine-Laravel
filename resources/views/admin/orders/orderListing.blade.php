@extends('admin.dashboardcore')

@section('page-title', 'Dashboard | Order List')

@section('page-heading', $title)
@section('page-active-heading', 'Orders')

@section('dashboard-content')
    @if (session()->has('message'))
        <div class="alert alert-info">
            {{ session()->get('message') }}
        </div>
    @endif
    @foreach ($orders as $order)
        @php
            $attribute_id = explode('|', $order->attribute_id);
            $variantIndex = explode('|', $order->variantIndex);
            $product_name = explode('|', $order->product_name);
            $product_quantity = explode('|', $order->product_quantity);
            $imgUrl = explode('|', $order->imgUrl);

            $Count = count($product_name);
        @endphp
        <div class="card">
            <div class="row mx-2 justify-content-between gx-0">
                <div class="col-md-2">
                    <div class="card-subtitle">
                        <b>Order Info</b>
                        <div class="mt-2">
                            Order UID: {{ $order->order_id }}<br>
                            Purchased Item: {{ $Count }}<br>
                            Total Price: {{ $order->total_price }}
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card-subtitle">
                        <div class="row">
                            <div class="mt-2 col-md-6">
                                <b>Customer Info</b> <br>
                                Username: {{ $order->username }} <br>
                                Email: {{ $order->email }}<br>
                                Phone: {{ $order->phonenumber }}<br>
                                userNote: {{ $order->userNote }}<br>
                            </div>
                            <div class="mt-2 col-md-6">
                                <b>Customer Shiping Address</b> <br>
                                Address: {{ $order->address }}<br>
                                city: {{ $order->city }}<br>
                                state: {{ $order->state }}<br>
                                postal: {{ $order->postal }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-1 d-flex align-items-center flex-column text-center">
                    <div class="card-subtitle">
                        <b>Payment Status</b>
                    </div>
                    <div>
                        @if ($order->payment_status != 1)
                            <span class="badge badge-danger px-2 py-1">unpaid</span>
                        @else
                            <span class="badge badge-success px-2 py-1">paid</span>
                        @endif
                    </div>
                </div>
                <div class="col-md-1 d-flex align-items-center flex-column text-center">
                    <div class="card-subtitle">
                        <b>Delivery Status</b>
                    </div>
                    @if ($order->delivery_status != 1)
                        <div>
                            <span class="badge badge-danger px-2 py-1">pending</span>
                        </div>
                        <div>
                            <a href="{{ route('order.deliverycomplete', $order->id) }}" class="btn btn-light btn-sm">
                                mark as complete</a>
                        </div>
                    @else
                        <div class="badge badge-success px-2 py-1">completed</div>
                    @endif


                </div>
                <div class="col-md-1 d-flex align-items-center flex-column text-center">
                    <div class="card-subtitle">
                        <b>Return Status</b>
                    </div>
                    <div>
                        @if ($order->Isreturned != 1)
                            <a href="{{ route('order.returnProduct', $order->id) }}"
                                class="btn btn-secondary btn-sm">requested</a>
                        @else
                            this product has been returned
                        @endif
                    </div>
                </div>
                <div class="col-md-1 d-flex align-items-center flex-column text-center">
                    <div class="card-subtitle">
                        <b>Delete</b>
                    </div>
                    <div>
                        <a href="{{ route('order.delete', $order->id) }}">
                            <i class="fa fa-trash-o delete-variation mt-2"
                                style="font-size: 20px; color: #4d4d4d; cursor: pointer;"></i>
                        </a>
                    </div>
                </div>
            </div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col" class="border-0">
                            Index
                        </th>
                        <th scope="col" class="border-0">Product</th>
                        <th scope="col" class="border-0">
                            Product Name
                        </th>
                        <th scope="col" class="border-0">Qty</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($product_name as $key => $item)
                        <tr>
                            <th scope="row">{{ $key + 1}}</th>
                            <td> <img src="{{ asset($imgUrl[$key]) }}" width="60px" alt="product-img"> </td>
                            <td>{{ $product_name[$key] }}</td>
                            <td>{{ $product_quantity[$key] }}</td>
                        </tr>
                    @endforeach

                </tbody>
            </table>
        </div>
    @endforeach
    <div class="my-3 d-flex justify-content-center">
        {{ $orders->onEachSide(1)->links() }}
    </div>

@endsection

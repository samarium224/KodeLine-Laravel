@extends('admin.dashboardcore')

@section('page-title', 'Dashboard | Orders')

@section('page-heading', 'Order List')
@section('page-active-heading', 'Orders')

@section('dashboard-content')
    @if (session()->has('message'))
        <div class="alert alert-info">
            {{ session()->get('message') }}
        </div>
    @endif
    <div class="card">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col" class="border-0"><a class="text-dark" href="{{ route('product.sort', 'id') }}">
                            ID </a>
                    </th>
                    <th scope="col" class="border-0"><a class="text-dark"
                            href="{{ route('product.sort', 'product_name') }}">
                            Order ID </a>
                    </th>
                    <th scope="col" class="border-0"><a class="text-dark"
                            href="{{ route('product.sort', 'product_category_id') }}">
                            Product Name</a>
                    </th>
                    <th scope="col" class="border-0">Username</th>
                    <th scope="col" class="border-0">Quantity</th>
                    <th scope="col" class="border-0">Total Price</th>
                    <th scope="col" class="border-0">Payment Status</th>
                    <th scope="col" class="border-0">Delivery Status</th>
                    <th scope="col" class="border-0">Action</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($orders as $order)
                    <tr>
                        <th scope="row">{{ $order->id }}</th>
                        <td><a href="">{{ $order->order_id }}</a></td>
                        <td>{{ $order->product_name }}</td>
                        <td>{{ $order->username }}</td>
                        <td>{{ $order->product_quantity }}</td>
                        <td>{{ $order->total_price }}</td>
                        <td><span class="badge badge-warning p-2">
                            {{ $order->payment_status }}</span></td>
                        </td>
                        <td>{{ $order->delivery_status }}</td>
                        <td>
                            <a href="" class="btn btn-secondary btn-sm">mark as</a>
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>
@endsection

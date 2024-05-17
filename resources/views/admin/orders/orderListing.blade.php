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
    <div class="card">
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
                    <th scope="col" class="border-0">Delete</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($orders as $order)
                    <tr>
                        <th scope="row">{{ $order->id }}</th>
                        <td>{{ $order->order_id }}</td>
                        <td> <img src="{{ asset($order->imgUrl) }}" width="60px" alt="product-img"> </td>
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
                                    class="btn btn-light btn-sm">mark as complete</a>
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
                        <td>
                            <a href="{{ route('order.delete', $order->id) }}">
                                <i class="fa fa-trash-o delete-variation mt-2"
                                    style="font-size: 20px; color: #4d4d4d; cursor: pointer;"></i>
                            </a>
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
        <div class="my-3 d-flex justify-content-center">
            {{ $orders->onEachSide(1)->links() }}
        </div>
    </div>
@endsection

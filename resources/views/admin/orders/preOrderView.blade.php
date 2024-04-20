@extends('admin.dashboardcore')

@section('page-title', 'Dashboard | Pre Order Products')

@section('page-heading', 'Product List')
@section('page-active-heading', 'Pre Order Products')

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
                    <th scope="col" class="border-0"><a class="text-dark"
                        href="{{ route('product.sort', 'id') }}">
                        ID </a>
                    </th>
                    <th scope="col" class="border-0">Product Image</th>
                    <th scope="col" class="border-0"><a class="text-dark"
                        href="{{ route('product.sort', 'product_name') }}">
                        Product Name </a>
                    </th>
                    <th scope="col" class="border-0">Quantity</th>
                    <th scope="col" class="border-0">Unit Price</th>
                    <th scope="col" class="border-0 w-10">
                        <a class="text-dark"
                        href="{{ route('product.sort', 'continue_selling') }}">
                        Continue selling
                        </a>
                    </th>
                    <th scope="col" class="border-0">Action</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($products as $product)
                    <tr>
                        <th scope="row">{{ $product->id }}</th>
                        <td>
                            @php
                                $product_img = explode('|', $product->product_img);
                                if (count($product_img) != 1) {
                                    $product_img = $product_img[0];
                                } else {
                                    $product_img = $product->product_img;
                                }
                            @endphp
                            <img src="{{ asset($product_img) }}" alt="" width="100px"><br>
                            <a href="{{ route('editproductimg', $product->id) }}"
                                class="btn btn-outline-dark btn-sm mt-2">Change Image</a>
                        </td>
                        <td><a href="{{ route('productdetails', $product->id) }}">{{ $product->product_name }}</a></td>
                        <td>{{ $product->quantity }}</td>
                        <td>{{ $product->price }}</td>
                        @php
                            if ($product->continue_selling == null) {
                                $outstock_sell = 'no';
                            } else {
                                $outstock_sell = 'yes';
                            }
                        @endphp
                        <td>{{ $outstock_sell }}</td>
                        <td>
                            <a href="{{ route('preorder.edit', $product->id) }}" class="btn btn-secondary btn-sm">edit</a>
                            <a href="{{ route('preorder.delete', $product->id) }}" class="btn btn-dark btn-sm">delete</a>
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
        <div class="my-5 d-flex justify-content-center">
                {{$products->onEachSide(1)->links()}}
        </div>
    </div>
@endsection

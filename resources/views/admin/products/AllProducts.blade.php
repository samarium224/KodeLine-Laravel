@extends('admin.dashboardcore')

@section('page-title', 'Dashboard | Products')

@section('page-heading', 'Product List')
@section('page-active-heading', 'Products')

@section('dashboard-content')
    <div class="card">
        <div class="card-title text-dark mb-3">
            <b>Add a new product</b>
            <hr>
            <a href="{{ route('addproducts') }}">
                <button class="btn btn-sm btn-dark px-3">
                    <i class="fa fa-plus" aria-hidden="true"></i> new product
                </button>
            </a>
        </div>
    </div>
    <div class="card">
        @if (session()->has('message'))
            <div class="alert alert-info">
                {{ session()->get('message') }}
            </div>
        @endif
        <table class="table">
            <thead>
                <tr>
                    <th scope="col" class="border-0">
                        <a class="text-dark" href="{{ route('product.sort', 'id') }}">
                            ID
                            <i class="fa fa-sort-numeric-asc" aria-hidden="true"></i>
                        </a>
                    </th>
                    <th scope="col" class="border-0 text-dark">Product Image</th>
                    <th scope="col" class="border-0"><a class="text-dark"
                            href="{{ route('product.sort', 'product_name') }}">
                            Product Name
                            <i class="fa fa-sort-alpha-asc" aria-hidden="true"></i>
                        </a>
                    </th>
                    <th scope="col" class="border-0">
                        <a class="text-dark" href="{{ route('product.sort', 'product_category_id') }}">
                            Collection
                            <i class="fa fa-sort-alpha-asc" aria-hidden="true"></i>
                        </a>
                    </th>
                    <th scope="col" class="border-0 text-dark">Category</th>
                    <th scope="col" class="border-0 text-dark">In Stock</th>
                    <th scope="col" class="border-0 text-dark">Unit Price</th>
                    <th scope="col" class="border-0">
                        <a class="text-dark" href="{{ route('product.sort', 'continue_selling') }}">
                            Continue selling
                            <i class="fa fa-sort-alpha-asc" aria-hidden="true"></i>
                        </a>
                    </th>
                    <th scope="col" class="border-0 text-dark">Variants</th>
                    <th scope="col" class="border-0 text-dark">Delete Item</th>
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
                            <img src="{{ asset($product_img) }}" alt="" width="60px"><br>
                            <a href="{{ route('editproductimg', $product->id) }}" class="text-secondary text-sm mt-2">
                                <u>change image</u>
                                <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                            </a>
                        </td>
                        <td>
                            <a href="{{ route('editproduct', $product->id) }}" class="text-dark">
                                <u>{{ $product->product_name }}
                                    <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                                </u>
                            </a>
                        </td>
                        <td>{{ $product->product_category_name }}</td>
                        <td>{{ $product->product_subcategory_name }}</td>
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
                            <a href="{{ route('config.variant', $product->id) }}"
                                class="btn btn-dark btn-sm px-3">configure
                                <i class="fa fa-cog" aria-hidden="true"></i>
                            </a>
                        </td>
                        <td>
                            <a href="{{ route('deleteproduct', $product->id) }}" class="text-dark text-lg">
                                <i class="fa fa-trash-o" aria-hidden="true"></i>
                            </a>
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
        <div class="my-5 d-flex justify-content-center">
            {{ $products->onEachSide(1)->links() }}
        </div>
    </div>
@endsection

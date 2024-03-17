@extends('admin.dashboard')

@section('page-title', 'all-products')

@section('content')
    @if (session()->has('message'))
        <div class="alert alert-success">
            {{ session()->get('message') }}
        </div>
    @endif
    <table class="table">
        <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Product Image</th>
                <th scope="col">Product Name</th>
                <th scope="col">Category Name</th>
                <th scope="col">Sub Category Name</th>
                <th scope="col">Product Quantity</th>
                <th scope="col">Product Price</th>
                <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($products as $product)
                <tr>
                    <th scope="row">{{ $product->id }}</th>
                    <td>
                        <img src="{{ '../'. $product->product_img}}" alt="" width="100px"><br>
                        <a href="{{ route('editproductimg', $product->id) }}" class="btn btn-outline-success btn-sm mt-3">Change Image</a>
                    </td>
                    <td>{{ $product->product_name }}</td>
                    <td>{{ $product->product_category_name }}</td>
                    <td>{{ $product->product_subcategory_name }}</td>
                    <td>{{ $product->quantity }}</td>
                    <td>{{ $product->price }}</td>
                    <td>
                        <a href="{{ route('editproduct', $product->id) }}" class="btn btn-info">edit</a>
                        <a href="{{ route('deleteproduct', $product->id) }}" class="btn btn-warning">delete</a>
                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>
@endsection

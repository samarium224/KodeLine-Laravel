@extends('admin.dashboard')

@section('page-title', 'edit-product-img')

@section('content')
    <div class="container">
        <h1>Add New Product</h1>
        @if ($errors->any())
            <div class="alert alert-danger">
                <ul>
                    @foreach ($errors->all() as $error)
                        <li>{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
        @endif
        <form action="{{ route('updateproductimg') }}" method="POST" enctype="multipart/form-data">
            @csrf
            <div class="form-group mb-3">
                <input type="hidden" name="product_id" value="{{ $productinfo->id }}">
                <label for="product_name" class="mb-3">Product Name:</label>
                <input type="text" id="product_name" disabled value="{{ $productinfo->product_name }}"
                    name="product_name" placeholder="Product Name" class="form-control">
            </div>

            <div class="form-group mb-3">
                <label for="price" class="mb-3">Previous Image</label> <br>
                <img src="{{ asset($productinfo->product_img) }}" alt="">
            </div>

            <div class="form-group mb-3">
                <label for="product_img" class="mb-3">New Product Image</label>
                <input type="file" id="product_img" name="product_img" class="form-control">
            </div>

            <button type="submit" class="btn btn-primary mt-3">Add Product</button>
        </form>
    </div>
@endsection

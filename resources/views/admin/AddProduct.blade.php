@extends('admin.dashboard')

@section('page-title', 'add-products')

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
        <form action="{{ route('storeproduct') }}" method="POST" enctype="multipart/form-data">
            @csrf
            <div class="form-group mb-3">
                <label for="product_name" class="mb-3">Product Name:</label>
                <input type="text" id="product_name" name="product_name" placeholder="Product Name" class="form-control">
            </div>

            <div class="form-group mb-3">
                <label for="price" class="mb-3">Price:</label>
                <input type="number"min="0" step="0.01" id="price" name="price" placeholder="Price" class="form-control">
            </div>

            <div class="form-group mb-3">
                <label for="quantity" class="mb-3">Quantity:</label>
                <input type="number" id="quantity" name="quantity" placeholder="Quantity" class="form-control">
            </div>

            <div class="form-group mb-3">
                <label for="product_short_description" class="mb-3">Short Description:</label>
                <textarea id="product_short_description" name="product_short_description" placeholder="Short Description" class="form-control"></textarea>
            </div>

            <div class="form-group mb-3">
                <label for="product_long_description" class="mb-3">Long Description:</label>
                <textarea id="product_long_description" name="product_long_description" placeholder="Long Description" class="form-control"></textarea>
            </div>

            <div class="form-group mb-3">
                <label for="product_category" class="mb-3">Category:</label>
                <select id="product_category_id" name="product_category_id" class="form-select">
                    <option selected>Choose a category</option>
                    @foreach ($categories as $category)
                        <option value="{{ $category->id }}">{{ $category->category_name }}</option>
                    @endforeach
                </select>
            </div>

            <div class="form-group mb-3">
                <label for="product_subcategory" class="mb-3">Subcategory:</label>
                <select id="product_subcategory_id" name="product_subcategory_id" class="form-select">
                    <option selected>Choose a subcategory</option>
                    @foreach ($subcategories as $subcategory)
                        <option value="{{ $subcategory->id }}">{{ $subcategory->subcategory_name }}</option>
                    @endforeach
                </select>
            </div>

            <div class="form-group mb-3">
                <label for="product_img" class="mb-3">Product Image:</label>
                <input type="file" id="product_img" name="product_img" class="form-control">
            </div>

            <button type="submit" class="btn btn-primary mt-3">Add Product</button>
        </form>
    </div>
@endsection

@extends('admin.dashboardcore')

@section('page-title', 'Dashboard | Products')

@section('page-heading', 'Edit Product')
@section('page-active-heading', 'Products')

@section('dashboard-content')
    <style>
        .dropzone {
            border: 2px dashed #ebebeb;
            border-radius: 5px;
            padding: 60px;
            text-align: center;
            color: #3d3d3d;
            cursor: pointer;
        }

        .dropzone.over {
            background-color: #f8f9fa;
        }

        .image-preview {
            margin-top: 10px;
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .image-preview img {
            max-width: 100px;
            max-height: 100px;
            border-radius: 5px;
        }

        .upload-img-icon {
            border: 2px dashed #ccc;
            height: 100px;
            background-color: #f9f9f9;
            position: relative;
            cursor: pointer;
        }
    </style>
    <div class="container-fluid">
        @if ($errors->any())
            <div class="alert alert-danger">
                <ul>
                    @foreach ($errors->all() as $error)
                        <li>{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
        @endif
        <form action="{{ route('updateproduct') }}" method="POST" enctype="multipart/form-data">
            @csrf
            <div class="row">
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-body">
                            <div class="card-subtitle text-dark">
                                <b>Product Name</b>
                            </div>
                            <div class="form-group mb-3">
                                <input type="hidden" name="product_id" value="{{ $productinfo->id }}">
                                <input type="text" id="product_name" name="product_name"
                                    value="{{ $productinfo->product_name }}" placeholder="Short sleeve t-shirt"
                                    class="form-control">
                            </div>
                            <div class="card-subtitle text-dark mt-4">
                                <b>Short Description</b>
                            </div>
                            <div class="form-group mb-3">
                                <input type="text" id="product_name" name="product_short_description"
                                    value="{{ $productinfo->product_short_description }}"
                                    placeholder="Write a short description of your product" class="form-control">
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-body">
                            <div class="card-subtitle text-dark mt-4">
                                <b>Description</b>
                            </div>
                            <textarea class="textarea_editor form-control" name="product_long_description" rows="15"
                                placeholder="Enter text ..." style="height:350px">{{ $productinfo->product_long_description }}</textarea>
                        </div>
                    </div>

                    {{-- <div class="card">
                        <div class="card-body">
                            <div class="card-subtitle text-dark"><b>Media</b></div>
                            <div id="dropzone" class="dropzone">Drag and drop up to 5 images here or click to select</div>
                            <input type="file" id="product_img" name="product_img[]" accept="image/*" multiple
                                style="display: none;">
                            <div id="image-preview" class="image-preview"></div>
                        </div>
                    </div> --}}

                    <div class="card">
                        <div class="card-body">
                            <div class="card-subtitle text-dark"><b>Pricing</b></div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="card-subtitle mt-3">Price</div>
                                    <input type="number" min="0" step="0.01" id="price" name="price"
                                        value="{{ $productinfo->price }}" placeholder="0.00" class="form-control">
                                </div>
                                <div class="col-md-6">
                                    <div class="card-subtitle mt-3">Compare at price</div>
                                    <input type="number" min="0" step="0.01" id="price" name="compare_price"
                                        value="{{ $productinfo->compare_price }}" placeholder="0.00" class="form-control">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-body">
                            <div class="card-subtitle text-dark"><b>Size and Color</b></div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="card-subtitle mt-3">Size</div>
                                    <input type="text" id="size" name="size" placeholder="3 years" value="{{$productinfo->size}}"
                                        class="form-control">
                                </div>
                                <div class="col-md-6">
                                    <div class="card-subtitle mt-3">Color</div>
                                    <input type="text" id="color" name="color" placeholder="Warm Vanilla" value="{{$productinfo->color}}"
                                        class="form-control">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-body">
                            <div class="card-subtitle text-dark"><b>Inventory</b></div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group mb-3">
                                        <div class="card-subtitle mt-3">Quantity</div>
                                        <input type="number" id="quantity" name="quantity" placeholder="1000"
                                            value="{{ $productinfo->quantity }}" class="form-control">
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="form-group mb-3">
                                        <div class="card-subtitle mt-3">Age range (min)</div>
                                        <input type="number" id="quantity" name="ageRange[]" placeholder="2"
                                            value="{{ $productinfo->ageRange[0] }}" class="form-control">
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="form-group mb-3">
                                        <div class="card-subtitle mt-3">Age range (max)</div>
                                        <input type="number" id="quantity" name="ageRange[]" placeholder="6"
                                            value="{{ $productinfo->ageRange[2] }}" class="form-control">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="px-3 mt-3">
                                    <input type="checkbox" name="continue_selling" style="width: 15px; height: 15px;"
                                        {{ $productinfo->continue_selling ? 'checked' : '' }}>
                                    <span>Continue selling when out of stock</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <div class="card-subtitle text-dark">
                                <b>Product organization</b>
                            </div>
                            <div class="card-subtitle mt-3">Select collection for your product</div>
                            <select id="product_category_id" name="product_category_id" class="form-control">
                                <option value="0">Select collection</option>
                                @foreach ($categories as $category)
                                    <option value="{{ $category->id }}"
                                        {{ $productinfo->product_category_id == $category->id ? 'selected' : '' }}>
                                        {{ $category->category_name }}
                                    </option>
                                @endforeach
                            </select>

                            <div class="card-subtitle mt-3">Select Category</div>
                            <select id="product_subcategory_id" name="product_subcategory_id" class="form-control">
                                <option value="0">Select category</option>
                                @foreach ($subcategories as $subcategory)
                                    <option value="{{ $subcategory->id }}"
                                        {{ $productinfo->product_subcategory_id == $subcategory->id ? 'selected' : '' }}>
                                        {{ $subcategory->subcategory_name }}
                                    </option>
                                @endforeach
                            </select>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <div class="card-subtitle text-dark">
                                <b>Product Display</b>
                            </div>
                            <div class="px-3 mt-3">
                                <input type="checkbox" value="true" name="featured" style="width: 15px; height: 15px;"
                                    {{ $productinfo->featured ? 'checked' : '' }}>
                                <span>Featured Item</span>
                            </div>
                            <div class="px-3 mt-3">
                                <input type="checkbox" value="true" name="best_selling"
                                    style="width: 15px; height: 15px;" {{ $productinfo->best_selling ? 'checked' : '' }}>
                                <span>Best Selling</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button type="submit" class="btn btn-dark btn-sm mt-3">Save Product</button>
        </form>
    </div>
    <script src="{{ asset('js/dropimage.js') }}"></script>
@endsection

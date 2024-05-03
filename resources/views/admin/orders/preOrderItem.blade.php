@extends('admin.dashboardcore')

@section('page-title', 'Dashboard | Pre Order Item')

@section('page-heading', 'Add New Pre Order Item')
@section('page-active-heading', 'Pre Order Item')

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
        <form action="{{ route('preorder.store') }}" method="POST" enctype="multipart/form-data">
            @csrf
            <div class="row">
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-body">
                            <div class="card-subtitle text-dark">
                                <b>Product Name</b>
                            </div>
                            <div class="form-group mb-3">
                                <input type="text" id="product_name" name="product_name"
                                    placeholder="Short sleeve t-shirt" class="form-control" required>
                            </div>
                            <div class="card-subtitle text-dark mt-4">
                                <b>Short Description</b>
                            </div>
                            <div class="form-group mb-3">
                                <input type="text" id="product_name" name="product_short_description"
                                    placeholder="Write a short description of your product" class="form-control" required>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-body">
                            <div class="card-subtitle text-dark mt-4">
                                <b>Description</b>
                            </div>
                            <textarea class="textarea_editor form-control" name="product_long_description" rows="15"
                                placeholder="Enter text ..." style="height:350px"></textarea>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-body">
                            <div class="card-subtitle text-dark"><b>Media</b></div>
                            <div id="dropzone" class="dropzone">Drag and drop up to 5 images here or click to select</div>
                            <input type="file" id="product_img" name="product_img[]" accept="image/*"
                                style="opacity: 0;" required>
                            <div id="image-preview" class="image-preview"></div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-body">
                            <div class="card-subtitle text-dark"><b>Pricing</b></div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="card-subtitle mt-3">Price</div>
                                    <input type="number" min="0" step="0.01" id="price" name="price"
                                        placeholder="0.00" class="form-control" required>
                                </div>
                                <div class="col-md-6">
                                    <div class="card-subtitle mt-3">Compare at price</div>
                                    <input type="number" min="0" step="0.01" id="price" name="compare_price"
                                        placeholder="0.00" class="form-control" required>
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
                                            class="form-control" required>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="form-group mb-3">
                                        <div class="card-subtitle mt-3">Age range (min)</div>
                                        <input type="number" id="quantity" name="ageRange[]" placeholder="2"
                                            class="form-control" required>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="form-group mb-3">
                                        <div class="card-subtitle mt-3">Age range (max)</div>
                                        <input type="number" id="quantity" name="ageRange[]" placeholder="6"
                                            class="form-control" required>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="px-3 mt-3">
                                    <input type="checkbox" value="true" name="continue_selling"
                                        style="width: 15px; height: 15px;">
                                    <span>Continue selling when out of stock</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card variation-section">
                        <div class="card-body">
                            <div class="row mb-2">
                                <div class="col-md-9">
                                    <div class="card-subtitle text-dark"><b>Add variation</b></div>
                                </div>
                                <div class="col-md-3 text-right">
                                    <button class="btn btn-dark btn-sm" type="button" id="addVariation"><i
                                            class="fa fa-plus"></i> Add
                                        Variation</button>
                                </div>
                            </div>
                            <div class="variation row" id="variationTemplate">
                                <div class="col-md-2 mb-3 pr-0">
                                    <div class="upload-img-icon" style="position: relative;">
                                        <input type="file" name="imageVariations[]" accept="image/*"
                                            class="form-control image-upload"
                                            style="opacity: 0; position: absolute; width: 100%; height: 100%; cursor: pointer;">
                                        <i class="fa fa-upload"
                                            style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 24px; color: #999;"></i>
                                    </div>
                                </div>
                                <div class="col-md-2 mb-3 pr-0">
                                    <input type="text" name="ageGroup[]" class="form-control" placeholder="Age">
                                </div>
                                <div class="col-md-2 mb-3 pr-0">
                                    <input type="text" name="sizeGroup[]" class="form-control" placeholder="Size">
                                </div>
                                <div class="col-md-2 mb-3 pr-0">
                                    <input type="text" name="colorGroup[]" class="form-control" placeholder="Color">
                                </div>
                                <div class="col-md-2 mb-3 pr-0">
                                    <input type="number" name="quantityGroup[]" min="1" class="form-control"
                                        placeholder="Quantity">
                                </div>
                                <!-- Delete Button -->
                                <div class="col-md-1 mb-3 ml-5">
                                    <i class="fa fa-trash-o delete-variation mt-2"
                                        style="font-size: 24px; color: #999; cursor: pointer;"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <button type="submit" class="btn btn-dark btn-sm mt-3">Save Product</button>
        </form>
    </div>
    <script src="{{ asset('js/dropimage.js') }}"></script>
    <script src="{{ asset('js/addvariation.js') }}"></script>

@endsection

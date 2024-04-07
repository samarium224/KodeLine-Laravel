@extends('admin.dashboardcore')

@section('page-title', 'Dashboard | Products')

@section('page-heading', 'Edit Product Image')
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
        <form action="{{ route('updateproductimg') }}" method="POST" enctype="multipart/form-data">
            @csrf
            <div class="row">
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-title"><b>Product Name</b></div>

                        <div class="form-group my-3">
                            <input type="hidden" name="product_id" value="{{ $productinfo->id }}">
                            <input type="text" id="product_name" disabled value="{{ $productinfo->product_name }}"
                                name="product_name" placeholder="Product Name" class="form-control">
                        </div>

                        <div>
                            <div class="card-title my-3"><b>New Product Images</b></div>
                            <div id="dropzone" class="dropzone">Drag and drop up to 5 images here or click to select</div>
                            <input type="file" id="product_img" name="product_img[]" accept="image/*" multiple
                                style="opacity: 0;" required>
                            <div id="image-preview" class="image-preview"></div>
                        </div>

                        <button type="submit" class="btn btn-primary mt-3">Save</button>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-title my-3"><b>Previous Product Images</b></div>
                        @php
                            $product_img = explode('|', $productinfo->product_img);
                        @endphp
                        <div class="form-group mb-3">
                            <div class="row">
                                @foreach ($product_img as $image)
                                    <div class="col-md-6 mb-3">
                                        <img class="img-thumbnail" src="{{ asset($image) }}" alt="product-img">
                                    </div>
                                @endforeach
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
    <script src="{{ asset('js/dropimage.js') }}"></script>
@endsection

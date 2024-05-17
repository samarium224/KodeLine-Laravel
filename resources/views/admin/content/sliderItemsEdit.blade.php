@extends('admin.dashboardcore')

@section('page-title', 'Dashboard | Add Slider Items')

@section('page-heading', 'Add Slider Items')
@section('page-active-heading', 'Add Slider Items')

@section('dashboard-content')
    <style>
        .dropzone {
            border: 2px dashed #ebebeb;
            border-radius: 5px;
            padding: 60px;
            height: 100%;
            text-align: center;
            color: #3d3d3d;
            cursor: pointer;
        }

        .dropzone-text {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
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
            max-width: 100%;
            /* max-height: 100px; */
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
        <form action="{{ route('content.slider.update') }}" method="POST" enctype="multipart/form-data">
            @csrf
            <div class="card">
                <input type="hidden" value="{{ $content->id }}" name="content_id">
                <div class="card-title text-secondary mb-3">
                    <b>Hero Section Title</b>
                    <p class="my-2 card-subtitle">Title will appear in the home page in front of the image</p>
                </div>
                <div class="form-group">
                    <input type="text" id="category_title" name="title" class="form-control"
                        placeholder="e.g. Coming Soon!" value="{{ $content->title }}" required>
                </div>
                <div class="card-title text-secondary mb-3">
                    <b>Hero Section Subtitle</b>
                    <p class="my-2 card-subtitle">subtitle will appear bellow the title</p>
                </div>
                <div class="form-group">
                    <input type="text" id="category_description" name="subtitle" class="form-control"
                        value="{{ $content->subtitle }}"
                        placeholder="e.g. Simplify parenting decisions with our thoughtfully curated kid's fashion"
                        required>
                </div>
            </div>
            <div class="card">
                <div>
                    <div class="card-title text-secondary"><b>Slider Image</b></div>
                    <div class="row">
                        <div class="col-md-8">
                            <div id="dropzone1" class="dropzone">
                                <div class="dropzone-text">Drag and drop image or click to select</div>
                            </div>
                            <input type="file" id="product_img1" name="category_img" accept="image/*" style="opacity: 0;"
                                >
                        </div>
                        <div class="col-md-4">
                            <div id="image-preview1" class="image-preview">
                                <img src="{{ asset('assets/admin_select_an_image.jpg') }}" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-title text-secondary mb-3">
                    <b>Mobile View Image</b>
                </div>
                <div>
                    <div class="row">
                        <div class="col-md-4">
                            <div id="image-preview2" class="image-preview">
                                <img src="{{ asset('assets/admin_col_mobile.jpg') }}" alt="">
                            </div>
                        </div>
                        <div class="col-md-8">
                            <div id="dropzone2" class="dropzone">
                                <div class="dropzone-text">Drag and drop image or click to select</div>
                            </div>
                            <input type="file" id="product_img2" name="cat_headerImg_PC" accept="image/*"
                                style="opacity: 0;">
                        </div>
                    </div>
                </div>
            </div>

            <button type="submit" class="btn btn-dark px-5">Save</button>

        </form>


    </div>
    <script src="{{ asset('js/singledropimage.js') }}"></script>

@endsection

@extends('admin.dashboardcore')

@section('page-title', 'Dashboard | Slider Items')

@section('page-heading', 'Slider Items')
@section('page-active-heading', 'Slider Items')

@section('dashboard-content')
    <style>
        .dropzone {
            border: 2px dashed #262626;
            border-radius: 5px;
            padding: 20px;
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
            margin-top: 0px;
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .image-preview img {
            max-width: 100%;
            max-height: 200px;
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
    <div class="card">
        <div class="card-title text-dark mb-3">
            <b>Change Application Logo</b>
        </div>
        <div class="logomenu-container">
            <form action="{{ route('content.lightlogo.update') }}" method="POST" enctype="multipart/form-data">
                @csrf
                <div class="card-title mt-3">
                    <b>White Logo</b>
                </div>
                <div class="row">
                    <div class="col-md-8">
                        <div id="dropzone1" class="dropzone">
                            <div class="dropzone-text">Drag and drop image or click to select</div>
                        </div>
                        <input type="file" id="product_img1" name="light_logo" accept="image/*" style="opacity: 0;"
                            required>
                    </div>
                    <div class="col-md-4 bg-dark">
                        <div id="image-preview1" class="image-preview">
                            @if ($contents != null)
                                <img src="{{ asset($contents->HomePageImg) }}" alt="">
                            @else
                                <img src="{{ asset('assets/logo.svg') }}" alt="App Logo">
                            @endif
                        </div>
                    </div>
                </div>
                <div class="mt-3">
                    <button class="btn btn-sm btn-dark px-3" type="submit">
                        {{-- <i class="fa fa-plus" aria-hidden="true"></i> --}}
                        change logo
                    </button>
                </div>
            </form>
        </div>

        <div class="logomenu-container">
            <form action="{{ route('content.darklogo.update') }}" method="POST" enctype="multipart/form-data">
                @csrf
                <div class="card-title mt-3">
                    <b>Dark Logo</b>
                </div>
                <div class="row">
                    <div class="col-md-8">
                        <div id="dropzone1" class="dropzone">
                            <div class="dropzone-text">Drag and drop image or click to select</div>
                        </div>
                        <input type="file" id="product_img2" name="dark_logo" accept="image/*" style="opacity: 0;"
                            required>
                    </div>
                    <div class="col-md-4 bg-secondary">
                        <div id="image-preview2" class="image-preview">
                            @if ($contents != null)
                                <img src="{{ asset($contents->MobileImg) }}" alt="">
                            @else
                                <img src="{{ asset('assets/Kodeline kids_Black Logo.svg') }}" alt="App Logo">
                            @endif
                        </div>
                    </div>
                </div>
                <div class="mt-3">
                    <button type="submit" class="btn btn-sm btn-dark px-3">
                        {{-- <i class="fa fa-plus" aria-hidden="true"></i> --}}
                        change logo
                    </button>
                </div>
            </form>
        </div>
    </div>

    <script src="{{ asset('js/singledropimage.js') }}"></script>
@endsection

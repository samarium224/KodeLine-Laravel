@extends('admin.dashboardcore')

@section('page-title', 'Dashboard | Products')

@section('page-heading', 'Edit Product Image')
@section('page-active-heading', 'Products')

@section('dashboard-content')
    <link href="https://unpkg.com/filepond@^4/dist/filepond.css" rel="stylesheet" />
    <link href="https://unpkg.com/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css" rel="stylesheet" />

    <!-- add before </body> -->
    <script src="https://unpkg.com/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.js"></script>
    <script src="https://unpkg.com/filepond-plugin-file-validate-type/dist/filepond-plugin-file-validate-type.js"></script>
    <script src="https://unpkg.com/filepond/dist/filepond.js"></script>

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
        <form action="{{ route('updateproductimg') }}" method="POST" id="ImageSubmitForm" enctype="multipart/form-data">
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
                            <input type="file" class="filepond" name="product_img" multiple credits="false">
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
    <script src="https://unpkg.com/filepond@^4/dist/filepond.js"></script>
    <script>
        // Register the plugin
        FilePond.registerPlugin(FilePondPluginImagePreview);
        FilePond.registerPlugin(FilePondPluginFileValidateType);
        // Get a reference to the file input element
        const inputElement = document.querySelector('input[type="file"]');

        // Create a FilePond instance
        const pond = FilePond.create(inputElement, {
            acceptedFileTypes: ['image/jpeg', 'image/png', 'image/jpg', 'image/gif', 'image/webp'],
            fileValidateTypeLabelExpectedTypesMap: {
                'image/jpeg': '.jpeg',
                'image/png': '.png',
                'image/jpg': '.jpg',
                'image/gif': '.gif',
                'image/webp': '.webp'
            },
            fileValidateTypeDetectType: (source, type) => new Promise((resolve, reject) => {
                // Do custom type detection here and resolve with the type
                resolve(type);
            })
        });

        // remove previously uploaded images
        fetch('/revertOnload', {
            headers: {
                'X-CSRF-TOKEN': '{{ csrf_token() }}'
            }
        });

        FilePond.setOptions({
            server: {
                process: '/MutImgUpload',
                revert: '/revertImgUpload',
                headers: {
                    'X-CSRF-TOKEN': '{{ csrf_token() }}'
                }
            },
        });
    </script>
    {{-- <script src="{{ asset('js/dropimage.js') }}"></script> --}}
@endsection

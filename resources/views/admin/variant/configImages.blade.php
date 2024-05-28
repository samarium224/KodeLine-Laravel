@extends('admin.dashboardcore')

@section('page-title', 'Dashboard | Product Variants Image')

@section('page-heading', 'Edit Product Variants Image')
@section('page-active-heading', 'Product Variants Image')

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
        <form action="{{ route('varientImage.store') }}" method="POST" enctype="multipart/form-data">
            @csrf
            <div class="row">
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-title"><b>Add Images for {{ $variant->value }} color</b></div>

                        <div class="form-group mb-3">
                            <input type="hidden" name="attribute_id" value="{{ $variant->id }}">
                            <div class="card-subtitle mx-2">When users click on a color, corresponding images will be
                                displayed for their viewing.</div>
                            <input type="text" id="product_name" disabled value="{{ $variant->value }}" name="color"
                                class="form-control">
                        </div>

                        <div>
                            <div class="card-title my-3"><b>Add Product Variant Images</b></div>
                            <input type="file" class="filepond" name="product_img" multiple credits="false">
                            <div id="image-preview" class="image-preview"></div>
                        </div>

                        <button type="submit" class="btn btn-primary mt-3 px-4 py-1">Save</button>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-title my-3"><b>Previous Product Images</b></div>
                        @php
                            $product_img = explode('|', $variant->imageUrls);
                        @endphp
                        <div class="form-group mb-3">
                            <div class="row">
                                @foreach ($product_img as $image)
                                    <div class="col-md-6 mb-3">
                                        <img class="img-thumbnail" src="{{ asset($image) }}" alt="no variant images set">
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
            }
        });
    </script>
    {{-- <script src="{{ asset('js/dropimage.js') }}"></script> --}}
@endsection

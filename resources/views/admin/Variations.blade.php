@extends('admin.dashboardcore')

@section('page-title', 'Dashboard | Products')

@section('page-heading', 'Manage Variations')
@section('page-active-heading', 'Manage Product Variations')

@section('dashboard-content')

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
        <div class="card">
            <div class="card-title text-dark mb-3">
                <b>Product Details</b>
            </div>
            <div class="row">
                <div class="col-md-2">
                    @php
                        $product_img = explode('|', $product->product_img);
                        if (count($product_img) != 1) {
                            $product_img = $product_img[0];
                        } else {
                            $product_img = $product->product_img;
                        }
                    @endphp
                    <img src="{{ asset($product_img) }}" alt="{{ $product->product_name }}" width="60px">
                </div>
                <div class="col-md-10">
                    <div class="card-subtitle m-0">Product Name: {{ $product->product_name }}</div>
                    <div class="card-subtitle m-0">Unit Price: ${{ $product->price }}</div>
                    <div class="card-subtitle m-0">In Stock: {{ $product->quantity }}</div>
                </div>
            </div>
        </div>
        @if (count($product->attributes) != 0)
            <div class="card">
                <form action="{{ route('variant.nextstep.store') }}" method="post">
                    @csrf
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col" class="border-0">
                                    Image
                                </th>
                                <th scope="col" class="border-0">
                                    Variant
                                </th>
                                <th scope="col" class="border-0">
                                    Sizes
                                </th>
                                <th scope="col" class="border-0">
                                    Price
                                </th>
                                <th scope="col" class="border-0">Available</th>
                                <th scope="col" class="border-0"></th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach ($product->attributes as $attribute)
                                <tr>
                                    <input type="hidden" value="{{ $attribute->id }}" name="attribute_id[]">
                                    <th scope="row">
                                        <a href="{{ route('setVarientImage', $attribute->id) }}">
                                            @php
                                                $variant_img = explode('|', $attribute->imageUrls);
                                            @endphp
                                            @if ($variant_img[0] != null)
                                                <img src="{{ asset($variant_img[0]) }}" alt="" width="60px">
                                            @else
                                                <i class="fa fa-picture-o mt-2" style="font-size: 24px"
                                                    aria-hidden="true"></i>
                                            @endif
                                        </a>
                                    </th>
                                    <th scope="row">{{ $attribute->value }}</th>
                                    <td>
                                        <input type="text" name="sizes[]" value="{{ $attribute->sizes }}"
                                            class="form-control" placeholder="e.g. 3 years, 4 years, 5 years" required>
                                    </td>
                                    <td><input type="text" name="price[]" value="{{ $product->price }}"
                                            class="form-control" required></td>
                                    <td><input type="text" name="stocks[]" value="{{ $product->quantity }}"
                                            class="form-control" required></td>
                                    <td>
                                        <a href="{{ route('variant.delete', $attribute->id) }}">
                                            <i class="fa fa-trash-o delete-variation mt-2"
                                                style="font-size: 20px; color: #4d4d4d; cursor: pointer;"></i>
                                        </a>
                                    </td>
                                </tr>
                            @endforeach
                        </tbody>
                    </table>
                    <button type="submit" class="btn btn-sm btn-dark my-3">save</button>
                </form>
            </div>
        @else
            @include('admin.variant.variantNewTable');
            <script src="{{ asset('js/addvariation.js') }}"></script>
        @endif



    </div>

@endsection

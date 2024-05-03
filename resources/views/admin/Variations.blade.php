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
                                    Variant
                                </th>
                                <th scope="col" class="border-0">
                                    Sizes
                                </th>
                                <th scope="col" class="border-0">
                                    Price
                                </th>
                                <th scope="col" class="border-0">Available</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach ($product->attributes as $attribute)
                                <tr>
                                    <input type="hidden" value="{{ $attribute->id }}" name="attribute_id[]">
                                    <th scope="row">{{ $attribute->value }}</th>
                                    <td>
                                        <input type="text" name="sizes[]" class="form-control" placeholder="e.g. 3 years"
                                            required>
                                    </td>
                                    <td><input type="text" name="price[]" value="{{ $product->price }}"
                                            class="form-control" required></td>
                                    <td><input type="text" name="stocks[]" value="{{ $product->quantity }}"
                                            class="form-control" required></td>
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

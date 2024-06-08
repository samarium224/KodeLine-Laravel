@extends('admin.dashboardcore')

@section('page-title', 'Dashboard | Collection')

@section('page-heading', 'Collection List')
@section('page-active-heading', 'Collection')

@section('dashboard-content')
    <div class="card">
        <div class="card-title text-dark mb-3">
            <b>Add a new collection</b>
            <hr>
            <a href="{{ route('addcategory') }}">
                <button class="btn btn-sm btn-dark px-4 py-1">
                    <i class="fa fa-plus" aria-hidden="true"></i>
                    new collection
                </button>
            </a>
        </div>
    </div>
    <div class="card">
        @if (session()->has('message'))
            <div class="alert alert-info">
                {{ session()->get('message') }}
            </div>
        @endif
        <div class="card-title text-dark mb-3">
            <b>Collections</b>
        </div>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Index</th>
                    <th scope="col">Collection Name</th>
                    <th scope="col">Category</th>
                    <th scope="col">Product Count
                        <a href="{{route('product.update.count')}}" class="text-dark">
                            <i class="fa fa-refresh" aria-hidden="true"></i>
                        </a>
                    </th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($categories as $key => $category)
                    <tr>
                        <th scope="row">{{ $key + 1}} </th>
                        <td>
                            <a href="{{ route('editcategory', $category->id) }}" class="text-dark">
                                <u>
                                    {{ $category->category_name }}
                                    <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                                </u>
                            </a>
                        </td>
                        <td>{{ $category->subcategory_count }}</td>
                        <td>{{ $category->product_count }}</td>
                        <td>
                            <a href="{{ route('deletecategory', $category->id) }}" class="text-dark text-lg">
                                <i class="fa fa-trash-o" aria-hidden="true"></i>
                            </a>
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>
@endsection

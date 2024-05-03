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
                <button class="btn btn-sm btn-dark px-2">
                    Add new collection
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
                    <th scope="col">ID</th>
                    <th scope="col">Collection Name</th>
                    <th scope="col">Category</th>
                    <th scope="col">Product Count</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($categories as $category)
                    <tr>
                        <th scope="row">{{ $category->id }}</th>
                        <td>{{ $category->category_name }}</td>
                        <td>{{ $category->subcategory_count }}</td>
                        <td>{{ $category->product_count }}</td>
                        <td>
                            <a href="{{ route('editcategory', $category->id) }}" class="btn btn-secondary btn-sm">edit</a>
                            <a href="{{ route('deletecategory', $category->id) }}" class="btn btn-dark btn-sm">delete</a>
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>
@endsection

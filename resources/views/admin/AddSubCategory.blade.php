@extends('admin.dashboardcore')

@section('page-title', 'Dashboard | Collection')

@section('page-heading', 'Add New Collection')
@section('page-active-heading', 'Collection')

@section('dashboard-content')
    <div class="container">
        <h1>Add New Category</h1>
        @if ($errors->any())
            <div class="alert alert-danger">
                <ul>
                    @foreach ($errors->all() as $error)
                        <li>{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
        @endif
        <form action="{{ route('storesubcategory') }}" method="POST">
            @csrf
            <div class="form-group mb-3">
                <label class="mb-3" for="category_name">Category Name:</label>
                <input type="text" id="subcategory_name" placeholder="subcategory name" name="subcategory_name" class="form-control">
            </div>
            <select name="category_id" class="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                @foreach ($categories as $category)
                    <option value="{{ $category->id }}">{{ $category->category_name }}</option>
                @endforeach
            </select>
            <button type="submit" class="btn btn-primary mt-3">Add Sub Category</button>
        </form>
    </div>
@endsection

@extends('admin.dashboardcore')

@section('page-title', 'Dashboard | Category')

@section('page-heading', 'Edit Category')
@section('page-active-heading', 'Category')
@section('page-title', 'edit-category')

@section('dashboard-content')
    <div class="container">
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
            <div class="card-title">
                Edit Category
            </div>
            <form action="{{ route('updatesubcategory') }}" method="POST">
                @csrf
                <div class="form-group mb-3">
                    <input type="text" hidden name="subcategory_id" value="{{ $subcategory_info->id }}">
                    <label class="mb-3" for="category_name">Category Name:</label>
                    <input type="text" id="category_name" name="subcategory_name"
                        value="{{ $subcategory_info->subcategory_name }}" class="form-control">
                </div>

                <button type="submit" class="btn btn-dark mt-3 px-4 py-1">Edit Category</button>
            </form>
        </div>
    </div>
@endsection

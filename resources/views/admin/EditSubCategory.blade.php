@extends('admin.dashboardcore')

@section('page-title', 'Dashboard | Products')

@section('page-heading', 'Edit Product Image')
@section('page-active-heading', 'Products')
@section('page-title', 'edit-subcategory')

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
        <form action="{{ route('updatesubcategory') }}" method="POST">
            @csrf
            <div class="form-group mb-3">
                <input type="text" hidden name="subcategory_id" value="{{$subcategory_info-> id}}">
                <label class="mb-3" for="category_name">Sub Category Name:</label>
                <input type="text" id="category_name" name="subcategory_name" value="{{$subcategory_info-> subcategory_name}}" class="form-control">
            </div>

            <button type="submit" class="btn btn-primary mt-3">Edit Sub Category</button>
        </form>
    </div>
@endsection

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
        <form action="{{ route('storecategory') }}" method="POST">
            @csrf
            <div class="form-group">
                <label class="mb-3" for="category_name">Category Name:</label>
                <input type="text" id="category_name" name="category_name" class="form-control">
            </div>
            <button type="submit" class="btn btn-primary mt-3">Add Category</button>
        </form>
    </div>
@endsection

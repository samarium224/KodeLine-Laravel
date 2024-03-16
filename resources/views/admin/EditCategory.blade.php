@extends('admin.dashboard')

@section('title', 'edit-category')

@section('content')
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
        <form action="{{ route('updatecategory') }}" method="POST">
            @csrf
            <div class="form-group">
                <input type="text" hidden name="category_id" value="{{$category_info-> id}}">
                <label class="mb-3" for="category_name">Category Name:</label>
                <input type="text" id="category_name" name="category_name" value="{{$category_info-> category_name}}" class="form-control">
            </div>
            <button type="submit" class="btn btn-primary mt-3">Edit Category</button>
        </form>
    </div>
@endsection

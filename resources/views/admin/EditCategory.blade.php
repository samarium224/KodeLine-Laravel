@extends('admin.dashboardcore')

@section('page-title', 'Dashboard | Collection')

@section('page-heading', 'Edit Collection')
@section('page-active-heading', 'Collection')

@section('dashboard-content')
    <div class="container">
        <h1>Edit Collection</h1>
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
                <label class="mb-3" for="category_name">Collection Name:</label>
                <input type="text" id="category_name" name="category_name" value="{{$category_info-> category_name}}" class="form-control">
            </div>
            <button type="submit" class="btn btn-primary mt-3">Edit Collection</button>
        </form>
    </div>
@endsection

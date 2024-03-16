@extends('admin.dashboard')

@section('page-title', 'all-category')

@section('content')
    @if (session()->has('message'))
        <div class="alert alert-success">
            {{ session()->get('message') }}
        </div>
    @endif
    <table class="table">
        <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Category Name</th>
                <th scope="col">Sub Category</th>
                <th scope="col">slug</th>
                <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($categories as $category)
                <tr>
                    <th scope="row">{{ $category->id }}</th>
                    <td>{{ $category->category_name }}</td>
                    <td>{{ $category->subcategory_count }}</td>
                    <td>{{ $category->slug }}</td>
                    <td>
                        <a href="{{ route('editcategory', $category->id) }}" class="btn btn-info">edit</a>
                        <a href="{{ route('deletecategory', $category->id)}}" class="btn btn-warning">delete</a>
                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>
@endsection

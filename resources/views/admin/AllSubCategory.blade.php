@extends('admin.dashboard')

@section('page-title', 'all-subcategory')

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
                <th scope="col">Subcategory Name</th>
                <th scope="col">Category Name</th>
                <th scope="col">slug</th>
                <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($subcategories as $subcategory)
                <tr>
                    <th scope="row">{{ $subcategory->id }}</th>
                    <td>{{ $subcategory->subcategory_name }}</td>
                    <td>{{ $subcategory->category_name }}</td>
                    <td>{{ $subcategory->slug }}</td>
                    <td>
                        <a href="{{ route('editcategory', $subcategory->id) }}" class="btn btn-info">edit</a>
                        <a href="{{ route('deletecategory', $subcategory->id)}}" class="btn btn-warning">delete</a>
                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>
@endsection

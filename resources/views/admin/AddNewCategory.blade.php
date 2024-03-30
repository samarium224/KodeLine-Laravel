@extends('admin.dashboardcore')

@section('page-title', 'Dashboard | Collection')

@section('page-heading', 'Add New Collection')
@section('page-active-heading', 'Collection')

@section('dashboard-content')
    <div class="container-fluid">
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
            <div class="card">
                <div class="card-title text-dark mb-3">
                    <b>Add New Collection</b>
                </div>
                <div class="form-group">
                    <input type="text" id="category_name" name="category_name" class="form-control"
                        placeholder="e.g. Summer collection">
                </div>
                <button type="submit" class="btn btn-dark">Save</button>
            </div>
        </form>

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
                                <a href="{{ route('editcategory', $category->id) }}"
                                    class="btn btn-secondary btn-sm">edit</a>
                                <a href="{{ route('deletecategory', $category->id) }}"
                                    class="btn btn-dark btn-sm">delete</a>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>

@endsection

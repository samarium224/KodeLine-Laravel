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
        <form action="{{ route('storesubcategory') }}" method="POST">
            @csrf
            <div class="card">
                <div class="card-body">
                    <div class="card-title text-dark">
                        <b> Add New Category </b>
                    </div>
                    <div class="form-group mb-3">
                        <input type="text" id="subcategory_name" placeholder="category name e.g. dress"
                            name="subcategory_name" class="form-control">
                    </div>
                    <select name="category_id" class="form-control">
                        <option selected value="0">select collection</option>
                        @foreach ($categories as $category)
                            <option value="{{ $category->id }}">{{ $category->category_name }}</option>
                        @endforeach
                    </select>
                    <button type="submit" class="btn btn-dark mt-3 btn-sm">Save Category</button>
                </div>
            </div>
        </form>

        {{-- subcategory table --}}
        <div class="card">
            <div class="card-title text-dark">
                <b>Category</b>
            </div>
            @if (session()->has('message'))
                <div class="alert alert-info">
                    {{ session()->get('message') }}
                </div>
            @endif
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Category Name</th>
                        <th scope="col">Collection Name</th>
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
                                <a href="{{ route('editsubcategory', $subcategory->id) }}" class="btn btn-secondary btn-sm">edit</a>
                                <a href="{{ route('deletesubcategory', $subcategory->id) }}"
                                    class="btn btn-dark btn-sm">delete</a>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>
@endsection

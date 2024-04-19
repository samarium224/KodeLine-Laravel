@extends('admin.dashboardcore')

@section('page-title', 'Dashboard | Guest')

@section('page-heading', 'Guest')
@section('page-active-heading', ' Guest')

@section('dashboard-content')
    @if (session()->has('message'))
        <div class="alert alert-info">
            {{ session()->get('message') }}
        </div>
    @endif
    <div class="card">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col" class="border-0"><a class="text-dark" href="{{ route('product.sort', 'id') }}">
                            ID </a>
                    </th>
                    <th scope="col" class="border-0"><a class="text-dark"
                            href="{{ route('product.sort', 'product_name') }}">
                            Username </a>
                    </th>
                    <th scope="col" class="border-0"><a class="text-dark"
                            href="{{ route('product.sort', 'product_category_id') }}">
                            Email</a>
                    </th>
                    <th scope="col" class="border-0">Phone</th>
                    <th scope="col" class="border-0">address</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($customers as $customer)
                    <tr>
                        <th scope="row">{{ $customer->id }}</th>
                        <td><a href="">{{ $customer->name }}</a></td>
                        <td>{{ $customer->email }}</td>
                        <td>{{ $customer->phone }}</td>
                        <td>{{ $customer->address }}</td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>
@endsection

@extends('admin.dashboardcore')

@section('page-title', 'Dashboard | Users')

@section('page-heading', 'Users')
@section('page-active-heading', ' Users')

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
                    <th scope="col" class="border-0">
                            ID
                    </th>
                    <th scope="col" class="border-0">
                            Username
                    </th>
                    <th scope="col" class="border-0">
                            Email
                    </th>
                    <th scope="col" class="border-0">Phone</th>
                    <th scope="col" class="border-0">address</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($customers as $customer)
                    <tr>
                        <th scope="row">{{ $customer->id }}</th>
                        <td>{{ $customer->name }}</td>
                        <td>{{ $customer->email }}</td>
                        <td>{{ $customer->phone }}</td>
                        <td>{{ $customer->address }}</td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>
        <div class="my-5 d-flex justify-content-center">
            {{ $customers->onEachSide(1)->links() }}
        </div>
@endsection

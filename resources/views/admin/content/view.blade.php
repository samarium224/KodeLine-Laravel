@extends('admin.dashboardcore')

@section('page-title', 'Dashboard | Content List')

@section('page-heading', 'Contents')
@section('page-active-heading', 'Contents')

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
                        Content
                    </th>
                    <th scope="col" class="border-0 w-25">
                        Title
                    </th>
                    <th scope="col" class="border-0 w-20">
                        Subtitle
                    </th>
                    <th scope="col" class="border-0">
                        Home Page Image
                    </th>
                    <th scope="col" class="border-0">Mobile View Image</th>
                    <th scope="col" class="border-0">View Page Image</th>
                    <th scope="col" class="border-0">Delete Section</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($contents as $content)
                    <tr>
                        <th scope="row">{{ $content->id }}</th>
                        <td>
                            {{ $content->content_name }}
                        </td>
                        <td>
                            {{ $content->title }}
                        </td>
                        <td>
                            {{ $content->subtitle }}
                        </td>
                        <td class="w-20">
                            <img class="img-fluid" src="{{ asset($content->HomePageImg) }}"
                                alt="{{ $content->HomePageImg }}" width="60px">
                        </td>
                        <td class="w-20">
                            <img class="img-fluid" src="{{ asset($content->MobileImg) }}"
                            alt="{{ $content->MobileImg }}" width="60px">
                        </td>
                        <td class="w-20">
                            <img class="img-fluid" src="{{ asset($content->viewPageImg) }}"
                                alt="{{ $content->viewPageImg }}" width="60px">
                        </td>
                        <td class="w-10">
                            <a href="{{ route('content.delete', $content->id) }}" class="btn btn-secondary btn-sm">delete</a>
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>
@endsection

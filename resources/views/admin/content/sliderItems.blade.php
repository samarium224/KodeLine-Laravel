@extends('admin.dashboardcore')

@section('page-title', 'Dashboard | Slider Items')

@section('page-heading', 'Slider Items')
@section('page-active-heading', 'Slider Items')

@section('dashboard-content')
    <div class="card">
        <div class="card-title text-dark mb-3">
            <b>Add a new slider content</b>
            <hr>
            <a href="{{ route('content.slider.add') }}">
                <button class="btn btn-sm btn-dark px-3">
                    <i class="fa fa-plus" aria-hidden="true"></i>
                    new slider item
                </button>
            </a>
        </div>
    </div>
    <div class="card">
        @if (session()->has('message'))
            <div class="alert alert-info">
                {{ session()->get('message') }}
            </div>
        @endif
        <table class="table">
            <thead>
                <tr>
                    <th scope="col" class="border-0">
                        ID
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
                    <th scope="col" class="border-0">Delete</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($contents as $content)
                    <tr>
                        <th scope="row">{{ $content->id }}</th>

                        <td>
                            <a href="{{ route('content.edit', $content->id) }}" class="text-dark">
                                <u>
                                    {{ $content->title }}
                                    <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                                </u>
                            </a>
                        </td>
                        <td>
                            {{ $content->subtitle }}
                        </td>
                        <td>
                            <img class="img-fluid" src="{{ asset($content->HomePageImg) }}"
                                alt="{{ $content->HomePageImg }}" width="60px">
                        </td>
                        <td>
                            <img class="img-fluid" src="{{ asset($content->MobileImg) }}" alt="{{ $content->MobileImg }}"
                                width="60px">
                        </td>

                        <td class="w-20">
                            <a href="{{ route('content.delete', $content->id) }}"
                                class="text-dark text-lg">
                                <i class="fa fa-trash-o" aria-hidden="true"></i>
                            </a>
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>
@endsection

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- Tell the browser to be responsive to screen width -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <!-- Favicon icon -->
    <link rel="icon" type="image/png" sizes="16x16" href="images/favicon.png">
    <title>@yield('page-title')</title>
    <!-- Bootstrap Core CSS -->
    <link href="{{ asset('css/lib/bootstrap/bootstrap.min.css') }}" rel="stylesheet">
    <!-- Custom CSS -->
    <link rel="stylesheet" href="{{ asset('css/lib/html5-editor/bootstrap-wysihtml5.css') }}" />
    <link href="{{ asset('css/lib/calendar2/semantic.ui.min.css') }}" rel="stylesheet">
    <link href="{{ asset('css/lib/calendar2/pignose.calendar.min.css') }} " rel="stylesheet">
    <link href="{{ asset('css/lib/owl.carousel.min.css') }} " rel="stylesheet" />
    <link href="{{ asset('css/lib/owl.theme.default.min.css') }} " rel="stylesheet" />
    <link href="{{ asset('css/helper.css') }} " rel="stylesheet">
    <link href="{{ asset('css/style.css') }} " rel="stylesheet">
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:** -->
    <!--[if lt IE 9]>
    <script src="https:**oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https:**oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
<![endif]-->
</head>

<body class="fix-header fix-sidebar">
    <!-- Preloader - style you can find in spinners.css -->
    <div class="preloader">
        <svg class="circular" viewBox="25 25 50 50">
            <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2"
                stroke-miterlimit="10" />
        </svg>
    </div>
    <!-- Main wrapper  -->
    <div id="main-wrapper">
        <!-- header header  -->
        <div class="header">
            <nav class="navbar top-navbar navbar-expand-md navbar-dark" data-bs-theme="dark">
                <!-- Logo -->
                <div class="navbar-header">
                    <a class="navbar-brand" href="{{route('home')}}">
                        <!-- Logo icon -->
                        <b><img src="{{ asset('assets/Logo.svg') }}" width="150px" alt="homepage"
                                class="dark-logo" /></b>
                        <!--End Logo icon -->
                        <!-- Logo text -->
                        <!-- <span><img src="images/logo-text.png" alt="homepage" class="dark-logo" /></span> -->

                    </a>
                </div>
                <!-- End Logo -->
                <div class="navbar-collapse">
                    <!-- toggle and nav items -->
                    <ul class="navbar-nav mr-auto mt-md-0">
                        <!-- This is  -->
                        <li class="nav-item"> <a class="nav-link nav-toggler hidden-md-up text-muted  "
                                href="javascript:void(0)"><i class="mdi mdi-menu"></i></a> </li>
                        {{-- <li class="nav-item m-l-10"> <a class="nav-link sidebartoggler hidden-sm-down text-muted  "
                                href="javascript:void(0)"><i class="ti-menu"></i></a> </li> --}}
                        <!-- Messages -->

                        <!-- End Messages -->
                    </ul>
                    <!-- User profile and search -->
                    <ul class="navbar-nav my-lg-0">
                        <!-- Search -->
                        <!-- Comment -->
                        <li class="nav-item d-flex align-items-center">
                            <a href="/" class="text-white mx-3">My Store</a>
                        </li>
                        <!-- Profile -->
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle text-muted" href="#" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false"><img
                                    src="{{ asset('assets/K Logo.jpg') }}" alt="user"
                                    class="profile-pic" /></a>
                            <div class="dropdown-menu dropdown-menu-right animated zoomIn">
                                <ul class="dropdown-user">
                                    {{-- <li><a href="#"><i class="ti-user"></i> Profile</a></li>
                                    <li><a href="#"><i class="ti-settings"></i> Setting</a></li> --}}
                                    <li><a href="{{route('dashboard')}}"><i class="fa fa-power-off"></i>Logout</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        <!-- End header header -->
        <!-- Left Sidebar  -->
        <div class="left-sidebar">
            <!-- Sidebar scroll-->
            <!-- Sidebar navigation-->
            <nav class="sidebar-nav">
                <ul id="sidebarnav">
                    <li class="nav-devider"></li>
                    <li>
                        <a class="has-arrow" href="{{ route('admin.dashboard')}}" aria-expanded="false">
                            <i class="fa fa-home"></i>
                            <span class="hide-menu text-white">Home
                                {{-- <span class="label label-rouded label-primary pull-right">2</span></span> --}}
                        </a>
                        {{-- <ul aria-expanded="false" class="collapse text-white">
                            <li><a href="{{ route('admin.dashboard')}} " class="text-white">Analytics</a></li>
                        </ul> --}}
                    </li>
                    <hr class="side-hr">
                    <li>
                        <a class="has-arrow" href="#performance" aria-expanded="false">
                            <i class="fa fa-bar-chart"></i>
                            <span class="hide-menu text-white">Performance
                                {{-- <span class="label label-rouded label-primary pull-right">2</span></span> --}}
                        </a>
                        <ul aria-expanded="false" class="collapse">
                            <li><a href="{{ route('admin.performance')}}">Analytics</a></li>
                        </ul>
                    </li>
                    <hr class="side-hr">
                    <li><a class="has-arrow" href="#collection" aria-expanded="false">
                            <i class="fa fa-shopping-bag"></i>
                            <span class="hide-menu">Orders</span></a>
                        <ul aria-expanded="false" class="collapse">
                            <li><a href="{{ route('order.viewOrders') }}">Order list</a></li>
                            <li><a href="{{ route('order.unpaid') }}">Unpaid Orders</a></li>
                            <li><a href="{{ route('order.pending') }}">Pending Orders</a></li>
                            <li><a href="{{ route('order.complete') }}">Completed Orders</a></li>
                            <li><a href="{{ route('order.returned') }}">Returned Orders</a></li>
                        </ul>
                    </li>
                    <hr class="side-hr">
                    <li>
                        <a class="has-arrow" href="#product" aria-expanded="false">
                            <i class="fa fa-shopping-cart"></i>
                            <span class="hide-menu">Products</span></a>
                        <ul aria-expanded="false" class="collapse">
                            <li><a href="{{ route('allcategory') }}">Collections</a></li>
                            <li><a href="{{ route('addsubcategory') }}">Category</a></li>
                            <li><a href="{{ route('allproducts') }}">Inventory</a></li>
                            {{-- <li><a href="{{ route('addproducts') }}">Add Product</a></li>
                            <li><a href="{{ route('addcategory') }}">Add Collection</a></li> --}}
                        </ul>
                    </li>
                    <hr class="side-hr">
                    <li>
                        <a class="has-arrow" href="#preorder" aria-expanded="false">
                            <i class="fa fa-cart-plus"></i>
                            <span class="hide-menu">Pre Order</span></a>
                        <ul aria-expanded="false" class="collapse">
                            <li><a href="{{ route('order.preOrderItem.view') }}">Pre Order Items</a></li>
                        </ul>
                    </li>
                    <hr class="side-hr">
                    <li><a class="has-arrow" href="#collection" aria-expanded="false">
                            <i class="fa fa-user"></i>
                            <span class="hide-menu">Customers</span></a>
                        <ul aria-expanded="false" class="collapse">
                            <li><a href="{{route('admin.viewusers')}}">Users</a></li>
                            <li><a href="{{route('admin.viewguests')}}">Guests</a></li>
                        </ul>
                    </li>
                    <hr class="side-hr">
                    <li> <a class="has-arrow" href="#content" aria-expanded="false">
                            <i class="fa fa-database"></i>
                            <span class="hide-menu">Content</span></a>
                        <ul aria-expanded="false" class="collapse">
                            <li><a href="{{route('content.all')}}">Contents</a></li>
                            <li><a href="{{route('content.preorder')}}">Pre Order Section</a></li>
                            <li><a href="{{route('content.slider')}}">Slider Section</a></li>
                            <li><a href="{{route('content.preorder')}}">Services Section</a></li>
                        </ul>
                    </li>
                    <hr class="side-hr">
                </ul>
            </nav>
            <!-- End Sidebar navigation -->

            <!-- End Sidebar scroll-->
        </div>
        <!-- End Left Sidebar  -->
        <!-- Page wrapper  -->
        <div class="page-wrapper">
            <!-- Bread crumb -->
            <div class="row page-titles">
                <div class="col-md-5 align-self-center">
                    <h3 class="text-dark">@yield('page-heading')</h3>
                </div>
                <div class="col-md-7 align-self-center">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                        <li class="breadcrumb-item active">@yield('page-active-heading')</li>
                    </ol>
                </div>
            </div>
            <!-- End Bread crumb -->
            <!-- Container fluid  -->
            <div class="container-fluid">
                @yield('dashboard-content')

            </div>
            <!-- End Container fluid  -->
        </div>
        <!-- End Page wrapper  -->
    </div>
    <!-- End Wrapper -->
    <!-- All Jquery -->
    <script src="{{ asset('js/lib/jquery/jquery.min.js') }}"></script>
    <!-- Bootstrap tether Core JavaScript -->
    <script src="{{ asset('js/lib/bootstrap/js/popper.min.js') }}"></script>
    <script src="{{ asset('js/lib/bootstrap/js/bootstrap.min.js') }}"></script>
    <!-- slimscrollbar scrollbar JavaScript -->
    <script src="{{ asset('js/jquery.slimscroll.js') }}"></script>
    <!--Menu sidebar -->
    <script src="{{ asset('js/sidebarmenu.js') }}"></script>
    <!--stickey kit -->
    <script src="{{ asset('js/lib/sticky-kit-master/dist/sticky-kit.min.js') }}"></script>
    <!--Custom JavaScript -->


    <!--editor kit -->
    <script src="{{ asset('js/lib/html5-editor/wysihtml5-0.3.0.js') }}"></script>
    <script src="{{ asset('js/lib/html5-editor/bootstrap-wysihtml5.js') }}"></script>
    <script src="{{ asset('js/lib/html5-editor/wysihtml5-init.js') }}"></script>


    <script src="{{ asset('js/lib/calendar-2/moment.latest.min.js') }} "></script>
    <!-- scripit init-->
    <script src="{{ asset('js/lib/calendar-2/semantic.ui.min.js') }} "></script>
    <!-- scripit init-->
    <script src="{{ asset('js/lib/calendar-2/prism.min.js') }}"></script>
    <!-- scripit init-->
    <script src="{{ asset('js/lib/calendar-2/pignose.calendar.min.js') }}"></script>
    <!-- scripit init-->
    <script src="{{ asset('js/lib/calendar-2/pignose.init.js') }} "></script>

    <script src="{{ asset('js/lib/owl-carousel/owl.carousel.min.js') }} "></script>
    <script src="{{ asset('js/lib/owl-carousel/owl.carousel-init.js') }} "></script>
    <script src="{{ asset('js/scripts.js') }} "></script>
    <!-- scripit init-->

    <script src="{{ asset('js/custom.min.js') }} "></script>

    {{-- charts --}}
    <script src="{{ asset('js/lib/chart-js/Chart.bundle.js') }}"></script>
    <script src="{{ asset('js/lib/chart-js/chartjs-init.js') }}"></script>
</body>

</html>

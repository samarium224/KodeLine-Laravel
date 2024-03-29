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
    {{-- <div class="preloader">
        <svg class="circular" viewBox="25 25 50 50">
			<circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10" /> </svg>
    </div> --}}
    <!-- Main wrapper  -->
    <div id="main-wrapper">
        <!-- header header  -->
        <div class="header">
            <nav class="navbar top-navbar navbar-expand-md navbar-dark" data-bs-theme="dark">
                <!-- Logo -->
                <div class="navbar-header">
                    <a class="navbar-brand" href="index.html">
                        <!-- Logo icon -->
                        <b><img src="{{ asset('KidslineAssets/Logo Final_White.png') }}" width="100px" alt="homepage"
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
                        <li class="nav-item m-l-10"> <a class="nav-link sidebartoggler hidden-sm-down text-muted  "
                                href="javascript:void(0)"><i class="ti-menu"></i></a> </li>
                        <!-- Messages -->

                        <!-- End Messages -->
                    </ul>
                    <!-- User profile and search -->
                    <ul class="navbar-nav my-lg-0">

                        <!-- Search -->

                        <!-- Comment -->

                        <!-- Profile -->
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle text-muted  " href="#" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false"><img src="images/users/5.jpg" alt="user"
                                    class="profile-pic" /></a>
                            <div class="dropdown-menu dropdown-menu-right animated zoomIn">
                                <ul class="dropdown-user">
                                    <li><a href="#"><i class="ti-user"></i> Profile</a></li>
                                    <li><a href="#"><i class="ti-wallet"></i> Balance</a></li>
                                    <li><a href="#"><i class="ti-email"></i> Inbox</a></li>
                                    <li><a href="#"><i class="ti-settings"></i> Setting</a></li>
                                    <li><a href="#"><i class="fa fa-power-off"></i> Logout</a></li>
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
            <div class="scroll-sidebar">
                <!-- Sidebar navigation-->
                <nav class="sidebar-nav">
                    <ul id="sidebarnav">
                        <li class="nav-devider"></li>
                        <li class="nav-label">Home</li>
                        <li> <a class="has-arrow" href="#" aria-expanded="false">
                                <i class="fa fa-home"></i>
                                <span class="hide-menu">Dashboard
                                    {{-- <span class="label label-rouded label-primary pull-right">2</span></span> --}}
                            </a>
                            <ul aria-expanded="false" class="collapse">
                                <li><a href="">Ecommerce </a></li>
                                <li><a href="">Analytics </a></li>
                            </ul>
                        </li>
                        <li class="nav-label">Products</li>
                        <li> <a class="has-arrow" href="" aria-expanded="false">
                                <i class="fa fa-shopping-cart"></i>
                                <span class="hide-menu">Inventory</span></a>
                            <ul aria-expanded="false" class="collapse">
                                <li><a href="{{ route('addproducts') }}">Add new product</a></li>
                                <li><a href="{{ route('allproducts') }}">Product List</a></li>
                                <li><a href="email-inbox.html">Collections</a></li>
                                <li><a href="email-inbox.html">Category</a></li>
                            </ul>
                        </li>
                        <li> <a class="has-arrow  " href="#" aria-expanded="false">
                                <i class="fa fa-bookmark"></i>
                                <span class="hide-menu">Collections</span></a>
                            <ul aria-expanded="false" class="collapse">
                                <li><a href="{{ route('addcategory') }}">Add New Collection</a></li>
                                <li><a href="{{ route('allcategory') }}">Collection List</a></li>
                            </ul>
                        </li>
                        <li> <a class="has-arrow" href="#" aria-expanded="false">
                                <i class="fa fa-th-large"></i>
                                <span class="hide-menu">Category</span></a>
                            <ul aria-expanded="false" class="collapse">
                                <li><a href="{{ route('addsubcategory') }}">Add New Category</a></li>
                                <li><a href="{{ route('subcategory') }}">Category List</a></li>
                            </ul>
                        </li>
                        <li class="nav-label">Orders</li>
                        <li> <a class="has-arrow" href="#" aria-expanded="false">
                                <i class="fa fa-credit-card"></i>
                                <span class="hide-menu">Order List</span></a>
                            <ul aria-expanded="false" class="collapse">
                                <li><a href="email-compose.html">Pending Orders</a></li>
                                <li><a href="email-read.html">Unpaid Orders</a></li>
                                <li><a href="email-inbox.html">Completed Orders</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                <!-- End Sidebar navigation -->
            </div>
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
</body>

</html>

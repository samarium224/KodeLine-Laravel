<html>

<head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <title>@yield('page-title')</title>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous">
    </script>
</head>

<body>
    <div class="row container-fluid">
        <div class="col-3 border rounded px-3">
            <div class="display-5 my-3">
                Admin page
            </div>
            <code>here have some links</code>
            <h5>Order</h5>
            <p>Drafts</p>
            <p>Abandoned checkouts</p>

            <h5><a href="{{ route('allproducts') }}"> Products </a></h5>
            <p><a href="{{ route('addproducts') }}">Add Products</a></p>
            <p><a href="{{ route('addcategory') }}">Add Category</a></p>
            <p><a href="{{ route('allcategory') }}">All Category</a></p>
            <p><a href="">Collections</a></p>
            <p><a href="">Inventory</a></p>
            <p><a href="">Gift cards</a></p>

            <h5>Sub Categories</h5>
            <p><a href="{{ route('subcategory') }}">All Sub Category</a></p>
            <p><a href="{{ route('addsubcategory') }}">Add Sub Category</a></p>

            <h5>Customers</h5>
            <p><a href="">Segments</a></p>

            <h5>Content</h5>
            <p><a href="">Changeable contents</a></p>
        </div>
        <div class="col-9 py-5">
            @yield('content')
        </div>


    </div>
</body>

</html>

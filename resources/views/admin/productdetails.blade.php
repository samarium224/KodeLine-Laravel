<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>{{ $product->product_name }} Details</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
</head>
<body>
<div class="container mt-4">
    <h1>{{ $product->product_name }}</h1>
    <p><strong>Price:</strong> ${{ $product->price }}</p>
    <p><strong>Description:</strong> {{ $product->product_short_description }}</p>
    <p><strong>Details:</strong> {{ $product->product_long_description }}</p>
    <p><strong>Category:</strong> {{ $product->product_category_name }}</p>
    <p><strong>Subcategory:</strong> {{ $product->product_subcategory_name }}</p>

    <form action="{{route('checkout')}}" method="POST">
        @csrf
        <button class="btn btn-dark" type="submit">checkout</button>
    </form>

    <form action="{{route('addtocart')}}" method="POST">
        @csrf
        <input type="hidden" name="product_id" value="{{ $product->id }}">
        <input type="hidden" name="product_name" value="{{ $product->product_name }}">
        <input type="number" name="product_quantity">
        <button class="btn btn-secondary my-3" type="submit">add to cart</button>
    </form>

    <h3>Images</h3>
    @foreach ($product->product_img as $img)
        <img src="{{ asset($img) }}" alt="Product Image" style="width: 100px; height: 100px;">
    @endforeach

    <h3>Variations</h3>
    @foreach ($product->sizeGroup as $index => $age)
        <div>
            <p><strong>Age Range:</strong> {{ $age }}</p>
            <p><strong>Age Group:</strong> {{ $product->ageGroup[$index] }}</p>
            <p><strong>Size:</strong> {{ $product->sizeGroup[$index] }}</p>
            <p><strong>Color:</strong> {{ $product->colorGroup[$index] }}</p>
            <p><strong>Quantity:</strong> {{ $product->quantityGroup[$index] }}</p>
            <img src="{{ asset($product->imageVariations[$index]) }}" alt="Variation Image" style="width: 100px; height: 100px;">
        </div>
    @endforeach
</div>
</body>
</html>

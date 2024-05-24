<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta property="og:title" content="kodeline" />
        <meta name="description" content="Step into a world where online shopping feels effortless and full of love!
        With top-notch products and pocket-friendly prices, let's navigate parenthood together, hassle-free.">
        <meta name="keywords" content="kodeline">
        <meta name="author" content="kodeline">
        <meta property="og:image" content="../assets/Final Edit_1_Black Shadow.png" />
        <title inertia>{{ config('app.name', 'kodeline') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>

<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/exp', function(){
    return Inertia::render('Experiment');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified', 'role:user'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware(['auth', 'role:user'])->group(function(){
    Route::controller(DashboardController::class)->group(function(){
        Route::get('/admin/dashboard', 'Index');
        // all category
        Route::get('/admin/all-category', 'All_Category')->name('allcategory');
        Route::get('/admin/add-category', 'All_Category_Add')->name('addcategory');
        Route::post('/admin/add-category-store', 'All_Category_Store')->name('storecategory');
        Route::get('/admin/add-category-edit/{id}', 'All_Category_Edit')->name('editcategory');
        Route::post('/admin/update-category', 'All_Category_Update')->name('updatecategory');
        Route::get('/admin/update-category/{id}', 'Delete_Category')->name('deletecategory');
        // sub category
        Route::get('/admin/sub-category', 'Sub_Category')->name('subcategory');
        Route::get('/admin/sub-add-category', 'Sub_Category_Add')->name('addsubcategory');
        Route::post('/admin/store-subcategory', 'Store_Subcategory')->name('storesubcategory');

        // products
        Route::get('/admin/all-products', 'All_Products')->name('allproducts');
        Route::get('/admin/add-product', 'Add_Product')->name('addproduct');
        // order
        Route::get('/admin/pending-order', 'PendingOrder')->name('pendingorder');

    });
});

require __DIR__.'/auth.php';

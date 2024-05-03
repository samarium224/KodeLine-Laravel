<?php

use App\Http\Controllers\CartController;
use App\Http\Controllers\CollectionController;
use App\Http\Controllers\DashboardContentController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DashboardCustomerController;
use App\Http\Controllers\DashboardOrderController;
use App\Http\Controllers\HelpersController;
use App\Http\Controllers\HomepageController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ShowcaseProduct;
use App\Http\Controllers\SubCategoryController;
use App\Http\Controllers\UserDashboardController;
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

Route::get('/', [HomepageController::class, 'Index'])->name('home');

//user dashboard
Route::get('/dashboard', [UserDashboardController::class,'Index'])->middleware(['auth', 'verified'])->name('dashboard');

//payment routes
Route::get('/checkout', [OrderController::class, 'checkout'])->name('checkout');
Route::get('/checkout/success', [OrderController::class, 'payment_success'])->name('checkout.success');
Route::get('/checkout/failed', [OrderController::class, 'cancel'])->name('checkout.cancel');

// front-end-routes
Route::get('/collection', [CollectionController::class, 'Index'])->name('collection');
Route::get('/itemshowcase', [ShowcaseProduct::class, 'ShowItem'])->name('itemshowcase');
Route::get('/preordershowcase', [ShowcaseProduct::class, 'ShowPreorderItem'])->name('preordershowcase');

// cart route
Route::post('/cart', [CartController::class, 'store'])->name('addtocart');
Route::get('/cartItems', [CartController::class, 'index'])->name('cartItems');
Route::get('/updateCartInc', [CartController::class, 'updateCartItems'])->name('updateIncQty');
Route::get('/updateCartDec', [CartController::class, 'DecCartItems'])->name('updateDecQty');
Route::get('/RemoveCartItem', [CartController::class, 'RemoveCartItem'])->name('removeitem');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware(['auth', 'role:admin'])->group(function () {
    Route::controller(DashboardController::class)->group(function () {
        Route::get('/admin/dashboard', 'Index')->name('admin.dashboard');
        Route::get('/admin/performance', 'analytics')->name('admin.performance');
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
        Route::get('admin/edit-subcategory/{id}', 'Edit_SubCategory')->name('editsubcategory');
        Route::post('admin/update-subcategory', 'SubCategory_Update')->name('updatesubcategory');
        Route::get('admin/delete-subcategory/{id}', 'Delete_SubCategory')->name('deletesubcategory');
        // products
        Route::get('/admin/all-products', 'All_Products')->name('allproducts');
        Route::get('/admin/add-products', 'Add_Products')->name('addproducts');
        Route::post('/admin/store-product', 'Store_Products')->name('storeproduct');
        Route::get('admin/edit-product-image/{id}', 'EditProductImage')->name('editproductimg');
        Route::post('admin/update-product-image', 'UpdateProductImage')->name('updateproductimg');
        Route::get('admin/edit-product/{id}', 'EditProduct')->name('editproduct');
        Route::post('admin/update-product', 'UpdateProduct')->name('updateproduct');
        Route::get('admin/delete-product/{id}', 'DeleteProduct')->name('deleteproduct');
        Route::get('admin/product-variant-configure/{id}', 'ConfigVariant')->name('config.variant');
        Route::post('admin/product-variant-store', 'StoreVariant')->name('variant.store');
        Route::post('admin/product-variant-items-store', 'StoreVariantItems')->name('variant.nextstep.store');
        Route::get('admin/product-details/{id}', 'productDetails')->name('productdetails');
    });

    Route::controller(DashboardOrderController::class)->group(function () {
        // order
        Route::get('/admin/orders', 'Orders')->name('order.viewOrders');
        Route::get('/admin/preOrdersItem', 'PreOrderItem')->name('order.preOrderItem');
        Route::get('/admin/viewpreOrdersItem', 'ViewPreOrderItem')->name('order.preOrderItem.view');
        Route::get('/admin/orders/unpaid', 'OrderUnpaid')->name('order.unpaid');
        Route::get('/admin/orders/pending', 'OrderPending')->name('order.pending');
        Route::get('/admin/orders/complete', 'OrderComplete')->name('order.complete');
        Route::get('/admin/orders/returned', 'OrderReturned')->name('order.returned');
        Route::post('/admin/preorder/store', 'StorePreOrder')->name('preorder.store');
        Route::get('/admin/preorder/edit/{id}', 'editPreOrder')->name('preorder.edit');
        Route::post('/admin/preorder/update', 'updatePreOrder')->name('preorder.update');
        Route::get('/admin/preorder/delete/{id}', 'deletePreOrder')->name('preorder.delete');
    });

    Route::controller(DashboardCustomerController::class)->group(function () {
        //customers
        Route::get('/admin/view-customers', 'ViewCustomers')->name('admin.viewusers');
        Route::get('/admin/view-guest', 'ViewGuest')->name('admin.viewguests');
    });

    Route::controller(DashboardContentController::class)->group(function () {
        //content
        Route::get('/admin/ContentpreOrder', 'PreOrderContent')->name('content.preorder');
        Route::post('/admin/ContentpreOrder/edit', 'UpdatePreOrderContent')->name('content.preorder.store');
        Route::get('/admin/contentview', 'ContentView')->name('content.all');
        Route::get('/admin/content/delete/{id}', 'destroy')->name('content.delete');
    });

    // product utilities
    Route::get('/admin/all-products/sort/{sortID}', [HelpersController::class, 'Sort'])->name('product.sort');
    Route::get('/admin/customers/sort/{sortID}', [HelpersController::class, 'SortCustomer'])->name('customers.sort');
    //ajax subcategory
    Route::get('/getSubcategories/{categoryId}', [SubCategoryController::class, 'getSubcategories']);
});

require __DIR__ . '/auth.php';

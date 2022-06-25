<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/', [\App\Http\Controllers\HomeController::class, 'index'])->name('home')->middleware(['verify.shopify']);
Route::get('/login', [\App\Http\Controllers\HomeController::class, 'login'])->name('login');
Route::group(['prefix' => 'api'], function (){
   Route::get('/products/search', [\App\Http\Controllers\ProductController::class, 'search']);
   Route::get('/collections/search', [\App\Http\Controllers\CollectionController::class, 'search']);
});

Route::get('/{path}', [\App\Http\Controllers\HomeController::class, 'index']);
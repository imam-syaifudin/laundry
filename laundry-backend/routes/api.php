<?php

use App\Http\Controllers\PaketController;
use App\Http\Controllers\PelangganController;
use App\Http\Controllers\TransaksiController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Pelanggan Routes
route::get('/pelanggan/cari/{keyword}',[PelangganController::class,'cari']);
route::get('/pelanggan/all',[PelangganController::class,'all']);
route::resource('pelanggan',PelangganController::class);


// Paket Routes
route::get('/paket/cari/{keyword}',[PaketController::class,'cari']);
route::resource('paket',PaketController::class);

// Transaksi Routes
route::get('/transaksi/cari/{keyword}',[TransaksiController::class,'cari']);
route::resource('transaksi',TransaksiController::class);

// // Detail Transaksi Routes
// route::get('/detailtransaksi/cari/{keyword}',[DetailTransaksi::class,'cari']);
// route::resource('detailtransaksi',DetailTransaksi::class);

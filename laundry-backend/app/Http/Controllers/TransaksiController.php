<?php

namespace App\Http\Controllers;

use App\Models\Transaksi;
use Exception;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class TransaksiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index() 
    {
        //
        
        $transaksi = Transaksi::all();
        return response()->json($transaksi);
    }

    public function cari($keyword)
    {

        $transaksi = Transaksi::where('no_nota', 'like', "%" . $keyword . "%")
            ->orWhere('kd_pelanggan', 'like', "%" . $keyword . "%")
            ->orWhere('tanggal_transaksi', 'like', "%" . $keyword . "%")
            ->orWhere('total_bayar', 'like', "%" . $keyword . "%")
            ->get();
        return $transaksi->count() > 0 ?
            response()->json([
                'msg' => 'transaksi berhasil ditemukan',
                'data' => $transaksi
            ])
            :
            response()->json([
                'msg' => 'transaksi gagal ditemukan',
            ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create() 
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        try {

            $request->validate([
                'kd_pelanggan' => 'unique:transaksis'
            ]);

            Transaksi::create($request->all());

        
            return response()->json([
                'msg' => 'transaksi berhasil ditambahkan'
            ]);
        } catch (Exception $error) {
            return response()->json([
                'msg' => 'transaksi gagal ditambahkan'
            ], 422);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Transaksi $transaksi)
    {
        //
        return response()->json($transaksi);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Transaksi $transaksi) 
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Transaksi $transaksi)
    {
        //
        try {

            if ( $request->kd_pelanggan != $transaksi->kd_pelanggan ){
                $request->validate([
                    'kd_pelanggan' => 'unique:transaksis'
                ]);
            }

            $transaksi->update($request->all());
            return response()->json([
                'msg' => 'transaksi berhasil di update',
                'data' => $transaksi,
            ]);
        } catch (Exception $error) {
            return response()->json([
                'msg' => 'transaksi gagal di update'
            ], 422);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Transaksi $transaksi)
    {
        //
        try {
            $transaksi->delete();
            return response()->json([
                'msg' => 'transaksi berhasil di hapus'
            ]);
        } catch (Exception $error) {
            return response()->json([
                'msg' => 'transaksi gagal di hapus'
            ], 422);
        }
    }
}

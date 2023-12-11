<?php

namespace App\Http\Controllers;

use App\Models\Paket;
use Exception;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class PaketController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $paket = Paket::all();
        return response()->json($paket);
    }

    public function cari($keyword)
    {

        $paket = Paket::where('kd_paket', 'like', "%" . $keyword . "%")
            ->orWhere('nama_paket', 'like', "%" . $keyword . "%")
            ->orWhere('jenis_paket', 'like', "%" . $keyword . "%")
            ->orWhere('harga', 'like', "%" . $keyword . "%")
            ->get();
        return $paket->count() > 0 ?
            response()->json([
                'msg' => 'paket berhasil ditemukan',
                'data' => $paket
            ])
            :
            response()->json([
                'msg' => 'paket gagal ditemukan',
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

            Paket::create($request->all());

        
            return response()->json([
                'msg' => 'paket berhasil ditambahkan'
            ]);
        } catch (Exception $error) {
            return response()->json([
                'msg' => 'paket gagal ditambahkan'
            ], 422);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Paket $paket)
    {
        //
        return response()->json($paket);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Paket $paket)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Paket $paket)
    {
        //
        try {

            $paket->update($request->all());
            return response()->json([
                'msg' => 'paket berhasil di update',
                'data' => $paket,
            ]);
        } catch (Exception $error) {
            return response()->json([
                'msg' => 'paket gagal di update'
            ], 422);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Paket $paket)
    {
        //
        try {
            $paket->delete();
            return response()->json([
                'msg' => 'paket berhasil di hapus'
            ]);
        } catch (Exception $error) {
            return response()->json([
                'msg' => 'paket gagal di hapus'
            ], 422);
        }
    }
}

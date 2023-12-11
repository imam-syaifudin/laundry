<?php

namespace App\Http\Controllers;

use App\Models\Pelanggan;
use Exception;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class PelangganController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $pelanggan = Pelanggan::paginate(5);
        return response()->json($pelanggan);
    }
    public function testWeb()
    {
        //
        $pelanggan = Pelanggan::paginate(5);
        return view('pelanggan',compact('pelanggan'));
    }
    
    public function all()
    {
        //
        $pelanggan = Pelanggan::all();
        return response()->json($pelanggan);
    }

    public function cari($keyword)
    {

        $pelanggan = Pelanggan::where('kd_pelanggan', 'like', "%" . $keyword . "%")
            ->orWhere('nama', 'like', "%" . $keyword . "%")
            ->orWhere('alamat', 'like', "%" . $keyword . "%")
            ->orWhere('notelp', 'like', "%" . $keyword . "%")
            ->paginate(5)
            ->withQueryString();
            
        return $pelanggan->count() > 0 ?
            response()->json([
                'msg' => 'pelanggan berhasil ditemukan',
                'val' => $pelanggan
            ])
            :
            response()->json([
                'msg' => 'pelanggan gagal ditemukan',
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

            Pelanggan::create($request->all());

        
            return response()->json([
                'msg' => 'pelanggan berhasil ditambahkan'
            ]);
        } catch (Exception $error) {
            return response()->json([
                'msg' => 'pelanggan gagal ditambahkan'
            ], 422);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Pelanggan $pelanggan)
    {
        //
        return response()->json($pelanggan);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Pelanggan $pelanggan)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Pelanggan $pelanggan)
    {
        //
        try {

            $pelanggan->update($request->all());
            return response()->json([
                'msg' => 'pelanggan berhasil di update',
                'data' => $pelanggan,
            ]);
        } catch (Exception $error) {
            return response()->json([
                'msg' => 'pelanggan gagal di update'
            ], 422);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Pelanggan $pelanggan)
    {
        //

        try {
            $pelanggan->delete();
            return response()->json([
                'msg' => 'pelanggan berhasil di hapus'
            ]);
        } catch (Exception $error) {
            return response()->json([
                'msg' => 'pelanggan gagal di hapus'
            ], 422);
        }
    }
}

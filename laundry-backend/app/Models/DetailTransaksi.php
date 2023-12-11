<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DetailTransaksi extends Model
{
    use HasFactory;
    protected $guarded = [];
    protected $primaryKey = 'kd_detail';
    public $incrementing = false;

    public function transaksi(){
        return $this->belongsTo(Transaksi::class,'no_nota');
    }
    public function paket(){
        return $this->belongsTo(Paket::class,'kd_paket');
    }
}

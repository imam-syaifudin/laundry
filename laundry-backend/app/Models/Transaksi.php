<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaksi extends Model
{
    use HasFactory;
        protected $guarded = [];
        protected $primaryKey = 'no_nota';
        public $incrementing = false;

        public function pelanggan(){
            return $this->belongsTo(Pelanggan::class,'kd_pelanggan');
        }
        
        public function detailtransaksi(){
            return $this->hasMany(DetailTransaksi::class,'no_nota');
        }
}

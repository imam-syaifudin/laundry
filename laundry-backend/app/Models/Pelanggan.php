<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pelanggan extends Model
{
    use HasFactory;
    protected $guarded = [];
    protected $primaryKey = 'kd_pelanggan';
    public $incrementing = false;


    public function transaksi(){
        return $this->hasMany(Transaksi::class,'kd_pelanggan');
    }
}

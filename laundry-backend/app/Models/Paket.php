<?php

namespace App\Models;

use Egulias\EmailValidator\Result\Reason\DetailedReason;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Paket extends Model
{
    use HasFactory;
    
    protected $guarded = [];
    protected $primaryKey = 'kd_paket';
    public $incrementing = false;

    public function detailtransaksi(){
        return $this->hasMany(DetailTransaksi::class,'kd_paket');
    }
}

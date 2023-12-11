<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Paket;
use App\Models\Pelanggan;
use App\Models\Transaksi;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        User::create([
            'name'=>'Muhammad Imam',
            'email'=>'admin@gmail.com',
            'password'=> bcrypt('12345'),
        ]);
        
        // Pelanggan::factory(50)->create();
        // Paket::factory(50)->create();
        // Transaksi::factory(50)->create();
        
    }
}

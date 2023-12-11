<?php

namespace Database\Factories;

use App\Models\Pelanggan;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Pelanggan>
 */
class PelangganFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */



    public function definition(): array
    {
        static $number = 1;

        return [
            //
            'kd_pelanggan' => "KD_000" . $number++,
            'nama' => $this->faker->name,
            'alamat' => $this->faker->text(35),
            'notelp' => $this->faker->phoneNumber,
        ];

    }
}

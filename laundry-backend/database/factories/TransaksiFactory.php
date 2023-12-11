<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Transaksi>
 */
class TransaksiFactory extends Factory
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
            'no_nota' => "NT_000" . $number++,
            'kd_pelanggan' => "KD_000" . $this->faker->numberBetween(1,5),
            'tanggal_transaksi' => $this->faker->dateTimeBetween(),
        ];
    }
}

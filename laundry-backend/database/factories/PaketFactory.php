<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Paket>
 */
class PaketFactory extends Factory
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
            'kd_paket' => "PKT_000" . $number++,
            'nama_paket' => ucwords($this->faker->word()),
            'jenis_paket' => $this->faker->text(10),
            'harga' => $this->faker->numberBetween($min = 5000, $max = 10000),
        ];

    }
}

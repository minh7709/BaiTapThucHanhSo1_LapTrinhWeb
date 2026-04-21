<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Product::query()->upsert([
            [
                'name' => 'iPhone 16 Series',
                'brand' => 'Apple',
                'description' => 'Chip A18 - Hieu nang dinh cao',
                'price' => 24990000,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Samsung Galaxy S24',
                'brand' => 'Samsung',
                'description' => 'Galaxy AI - Tro ly thong minh',
                'price' => 22990000,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Xiaomi 14 Ultra',
                'brand' => 'Xiaomi',
                'description' => 'Camera Leica chuyen nghiep',
                'price' => 19990000,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'AirPods Pro 2',
                'brand' => 'Apple',
                'description' => 'Am thanh dinh cao',
                'price' => 5990000,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ], ['name'], ['brand', 'description', 'price', 'updated_at']);
    }
}

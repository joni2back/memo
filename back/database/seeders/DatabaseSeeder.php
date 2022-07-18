<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        Models\Memotest::create([
            'name' => 'Memo one',
        ])->images()->createMany([
            [
                'url' => 'https://cdn-icons-png.flaticon.com/512/135/135074.png',
            ],
            [
                'url' => 'https://cdn-icons-png.flaticon.com/512/135/135041.png',
            ],
            [
                'url' => 'https://cdn-icons-png.flaticon.com/512/135/135077.png',
            ],
            [
                'url' => 'https://cdn-icons-png.flaticon.com/512/135/135043.png',
            ],
        ]);

        Models\Memotest::create([
            'name' => 'Memo two',
        ])->images()->createMany([
            [
                'url' => 'https://cdn-icons-png.flaticon.com/512/135/135702.png',
            ],
            [
                'url' => 'https://cdn-icons-png.flaticon.com/512/135/135542.png',
            ],
            [
                'url' => 'https://cdn-icons-png.flaticon.com/512/135/135706.png',
            ],
            [
                'url' => 'https://cdn-icons-png.flaticon.com/512/135/135598.png',
            ],
        ]);

    }
}

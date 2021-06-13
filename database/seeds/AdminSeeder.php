<?php

use Illuminate\Database\Seeder;
use App\User;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => '111',
            'email' => '111@com',
            'password' => bcrypt('111'),
            'role' => ('admin')
        ]);
    }
}

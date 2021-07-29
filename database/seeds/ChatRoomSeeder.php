<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ChatRoomSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('chat__rooms')->insert([
            'name'=>'11111'
        ]);

        DB::table('chat__rooms')->insert([
            'name'=>'22222'
        ]);
    }
}

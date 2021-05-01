<?php

use Illuminate\Database\Seeder;

class device_types extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('device_types')->insert([
            'name' => "水電",
            'created_at' => date("Y/m/d/H/i/s"),
        ]);

        DB::table('device_types')->insert([
            'name' => "消防",
            'created_at' => date("Y/m/d/H/i/s"),
        ]);
    }
}

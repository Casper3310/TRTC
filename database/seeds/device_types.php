<?php

use Illuminate\Database\Seeder;
use App\Device_device_types;

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
            'type' => "水電",
            'device'=>"照明",
            'created_at' => date("Y/m/d/H/i/s"),
        ]);

        DB::table('device_types')->insert([
            'type' => "水電",
            'device'=>"插座",
            'created_at' => date("Y/m/d/H/i/s"),
        ]);

        DB::table('device_types')->insert([
            'type' => "水電",
            'device'=>"泵浦",
            'created_at' => date("Y/m/d/H/i/s"),
        ]);

        DB::table('device_types')->insert([
            'type' => "水電",
            'device'=>"接地箱",
            'created_at' => date("Y/m/d/H/i/s"),
        ]);

        DB::table('device_types')->insert([
            'type' => "消防",
            'device'=>"偵煙器",
            'created_at' => date("Y/m/d/H/i/s"),
        ]);

        DB::table('device_types')->insert([
            'type' => "消防",
            'device'=>"消防箱",
            'created_at' => date("Y/m/d/H/i/s"),
        ]);

    }
}

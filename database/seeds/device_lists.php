<?php

use Illuminate\Database\Seeder;

class device_lists extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('device_lists')->insert([
            'device_types_id' => 1,
            'name' => "照明",
            'created_at' => date("Y/m/d/H/i/s"),
        ]);
        DB::table('device_lists')->insert([
            'device_types_id' => 1,
            'name' => "插座",
            'created_at' => date("Y/m/d/H/i/s"),
        ]);
        DB::table('device_lists')->insert([
            'device_types_id' => 1,
            'name' => "接地箱",
            'created_at' => date("Y/m/d/H/i/s"),
        ]);
        DB::table('device_lists')->insert([
            'device_types_id' => 1,
            'name' => "泵浦",
            'created_at' => date("Y/m/d/H/i/s"),
        ]);

        DB::table('device_lists')->insert([
            'device_types_id' => 2,
            'name' => "偵煙器",
            'created_at' => date("Y/m/d/H/i/s"),
        ]);
        DB::table('device_lists')->insert([
            'device_types_id' => 2,
            'name' => "消防箱",
            'created_at' => date("Y/m/d/H/i/s"),
        ]);
        DB::table('device_lists')->insert([
            'device_types_id' => 2,
            'name' => "泵浦",
            'created_at' => date("Y/m/d/H/i/s"),
        ]);
    }
}

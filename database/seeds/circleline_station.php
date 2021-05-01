<?php

use Illuminate\Database\Seeder;

class circleline_station extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('circleline__stations')->insert([
            'codename' => 'b1',
            'stations_name' => "南機場",
            'created_at' => date("Y/m/d/H/i/s"),
        ]);

        DB::table('circleline__stations')->insert([
            'codename' => 'Y07',
            'stations_name' => "十四張",
            'created_at' => date("Y/m/d/H/i/s"),
        ]);

        DB::table('circleline__stations')->insert([
            'codename' => 'Y08',
            'stations_name' => "秀朗橋",
            'created_at' => date("Y/m/d/H/i/s"),
        ]);

        DB::table('circleline__stations')->insert([
            'codename' => 'Y09',
            'stations_name' => "景平",
            'created_at' => date("Y/m/d/H/i/s"),
        ]);

        DB::table('circleline__stations')->insert([
            'codename' => 'Y10',
            'stations_name' => "景安",
            'created_at' => date("Y/m/d/H/i/s"),
        ]);

        DB::table('circleline__stations')->insert([
            'codename' => 'Y11',
            'stations_name' => "中和",
            'created_at' => date("Y/m/d/H/i/s"),
        ]);

        DB::table('circleline__stations')->insert([
            'codename' => 'Y12',
            'stations_name' => "橋和",
            'created_at' => date("Y/m/d/H/i/s"),
        ]);

        DB::table('circleline__stations')->insert([
            'codename' => 'Y13',
            'stations_name' => "中原",
            'created_at' => date("Y/m/d/H/i/s"),
        ]);

        DB::table('circleline__stations')->insert([
            'codename' => 'Y14',
            'stations_name' => "板新",
            'created_at' => date("Y/m/d/H/i/s"),
        ]);

        DB::table('circleline__stations')->insert([
            'codename' => 'Y15',
            'stations_name' => "板橋",
            'created_at' => date("Y/m/d/H/i/s"),
        ]);

        DB::table('circleline__stations')->insert([
            'codename' => 'Y16',
            'stations_name' => "新埔民生",
            'created_at' => date("Y/m/d/H/i/s"),
        ]);

        DB::table('circleline__stations')->insert([
            'codename' => 'Y17',
            'stations_name' => "頭前庄",
            'created_at' => date("Y/m/d/H/i/s"),
        ]);

        DB::table('circleline__stations')->insert([
            'codename' => 'Y18',
            'stations_name' => "幸福",
            'created_at' => date("Y/m/d/H/i/s"),
        ]);

        DB::table('circleline__stations')->insert([
            'codename' => 'Y19',
            'stations_name' => "新北產業園區",
            'created_at' => date("Y/m/d/H/i/s"),
        ]);
    }
}

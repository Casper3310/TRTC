<?php

use Illuminate\Database\Seeder;

class device_relationships extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($station = 1; $station < 15; $station++) {
            for ($device_type = 1; $device_type < 7; $device_type++) {
                DB::table('device_type_stations')->insert([
                    'Circleline_Station_id' => $station,
                    'device_types_id' => $device_type,
                ]);
            };
        }
    }
}

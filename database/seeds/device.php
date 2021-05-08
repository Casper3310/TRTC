<?php

use Illuminate\Database\Seeder;

class device extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        /*for ($i=1; $i <=14 ; $i++) { 
            for ($j=1; $j <=2 ; $j++) { 
                if ($j==1) {
                    for ($k=1; $k <=4 ; $k++) { 
                        DB::table('devices')->insert([
                            'Circleline_Station_id' => $i,
                            'device_types_id' => $j,
                            'device_lists_id' => $k,
                            'created_at' => date("Y/m/d/H/i/s"),
                        ]);
                    }
                }
                else{
                    for ($k=5; $k <=7 ; $k++) { 
                        DB::table('devices')->insert([
                            'Circleline_Station_id' => $i,
                            'device_types_id' => $j,
                            'device_lists_id' => $k,
                            'created_at' => date("Y/m/d/H/i/s"),
                        ]);
                    }
                }
                
            }
        }*/
    }
}

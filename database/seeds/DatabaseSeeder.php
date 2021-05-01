<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(circleline_station::class);
        $this->call(device_types ::class);
        $this->call(device_lists ::class);
        $this->call(device ::class);

    }
}

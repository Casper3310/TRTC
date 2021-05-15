<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDeviceTypeStationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('device_type_stations', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('Circleline_Station_id');
            $table->unsignedBigInteger('device_types_id');

            $table->foreign('Circleline_Station_id')
                    ->references('id')
                    ->on('circleline__stations')
                    ->onDelete('cascade');

            $table->foreign('device_types_id')
            ->references('id')
            ->on('device_types')
            ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('device_type_stations');
    }
}

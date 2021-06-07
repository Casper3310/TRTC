<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDeviceEarthsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('device_earths', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('Circleline_Station_id');
            $table->string('name');
            $table->string('place');
            $table->text('image');
            $table->timestamps();

            $table->foreign('Circleline_Station_id')
            ->references('id')
            ->on('circleline__stations')
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
        Schema::dropIfExists('device_earths');
    }
}

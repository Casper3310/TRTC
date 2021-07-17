<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTempSensersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('temp_sensers', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('Circleline_Station_id');
            $table->string('place');
            $table->integer('temperature')->default(0);
            $table->integer('humidity')->default(0);
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
        Schema::dropIfExists('temp_sensers');
    }
}

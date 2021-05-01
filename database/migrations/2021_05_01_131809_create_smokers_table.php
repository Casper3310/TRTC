<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSmokersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('smokers', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('place');
            $table->text('image');
            $table->unsignedBigInteger('device_lists_id');
            $table->unsignedBigInteger('device_types_id');
            $table->unsignedBigInteger('Circleline_Station_id');
            $table->timestamps();

            $table->foreign('device_lists_id')
            ->references('id')
            ->on('device_lists')
            ->onDelete('cascade');

            $table->foreign('device_types_id')
            ->references('id')
            ->on('device_types')
            ->onDelete('cascade');

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
        Schema::dropIfExists('smokers');
    }
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDeviceListsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('device_lists', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->unsignedBigInteger('device_types_id');
            $table->timestamps();

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
        Schema::dropIfExists('device_lists');
    }
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('game_sessions', function (Blueprint $table) {
            $table->id();
            $table->unsignedTinyInteger('number_of_pairs')->nullable();
            $table->unsignedTinyInteger('retries')->nullable();
            $table->enum('state', ['started', 'completed'])->default('started');
            $table->unsignedBigInteger('memotest_id');
            $table->timestamps();
        });

        Schema::table('game_sessions', function(Blueprint $table) {
			$table->foreign('memotest_id')->references('id')->on('memotests')
				->onDelete('cascade')
                ->onUpdate('cascade');
		});
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('game_sessions');
    }
};

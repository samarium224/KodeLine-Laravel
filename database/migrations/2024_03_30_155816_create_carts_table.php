<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('carts', function (Blueprint $table) {
            $table->id();
            $table->string('username');
            $table->string('user_id');
            $table->integer('product_id');
            $table->integer('attribute_id');
            $table->integer('variantIndex');
            $table->string('product_name');
            $table->string('imgUrl');
            $table->string('color');
            $table->string('size');
            $table->integer('product_quantity')->default(1);
            $table->double('product_price');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('carts');
    }
};

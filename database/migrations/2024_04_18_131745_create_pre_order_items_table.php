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
        Schema::create('pre_order_items', function (Blueprint $table) {
            $table->id();
            $table->string('product_name');
            $table->text('product_short_description');
            $table->text('product_long_description');
            $table->double('price');
            $table->double('compare_price');
            $table->text('product_img');
            $table->integer('quantity');
            $table->string('slug');
            $table->string('ageRange');
            $table->string('ageGroup');
            $table->string('sizeGroup');
            $table->string('colorGroup');
            $table->string('quantityGroup');
            $table->text('imageVariations');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pre_order_items');
    }
};

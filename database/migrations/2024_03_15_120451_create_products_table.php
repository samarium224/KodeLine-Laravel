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
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->integer('product_type')->default(0); /** [0 => product ; 1=> pre-order] **/
            $table->string('product_name');
            $table->text('product_short_description')->nullable();
            $table->text('product_long_description')->nullable();
            $table->double('price');
            $table->double('compare_price')->nullable();
            $table->string('product_category_name');
            $table->integer('product_category_id');
            $table->string('product_subcategory_name');
            $table->integer('product_subcategory_id');
            $table->text('product_img');
            $table->integer('quantity')->default(0);
            $table->string('slug');
            $table->string('ageRange');
            $table->string('continue_selling')->default('false')->nullable();
            $table->string('featured')->default('false')->nullable();
            $table->string('best_selling')->default('false')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};

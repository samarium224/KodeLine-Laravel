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
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->string('order_id');
            $table->string('username');
            $table->string('user_id');
            $table->string('address');
            $table->string('city')->nullable();
            $table->string('state')->nullable();
            $table->string('postal')->nullable();
            $table->string('userNote')->nullable();
            $table->string('phonenumber');
            $table->string('session_id');
            $table->integer('product_id');
            $table->integer('attribute_id')->default(0);
            $table->integer('variantIndex')->nullable();
            $table->string('product_name');
            $table->string('imgUrl');
            $table->integer('product_quantity');
            $table->double('total_price');
            $table->boolean('payment_status')->default(0);
            $table->boolean('delivery_status')->default(0);
            $table->boolean('Isreturned')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};

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
            $table->string('phonenumber');
            $table->string('address');
            $table->string('session_id');
            $table->string('product_id');
            $table->string('product_name');
            $table->string('imgUrl');
            $table->string('product_quantity');
            $table->double('total_price');
            $table->boolean('payment_status')->default(0);
            $table->boolean('delivery_status')->default(0);
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

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'order_id',
        'username',
        'session_id',
        'product_id',
        'product_name',
        'product_quantity',
        'total_price',
        'payment_status',
        'delivery_status',
    ];
}

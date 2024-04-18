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
        'user_id',
        'phonenumber',
        'address',
        'session_id',
        'product_id',
        'product_name',
        'imgUrl',
        'product_quantity',
        'total_price',
        'payment_status',
        'delivery_status',
    ];
}

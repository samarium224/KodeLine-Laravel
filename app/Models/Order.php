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
        'email',
        'address',
        'city',
        'state',
        'postal',
        'phonenumber',
        'userNote',
        'session_id',
        'product_id',
        'attribute_id',
        'variantIndex',
        'product_name',
        'imgUrl',
        'product_quantity',
        'total_price',
        'payment_status',
        'delivery_status',
        'Isreturned'
    ];
}

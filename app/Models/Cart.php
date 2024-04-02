<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    use HasFactory;
    protected $fillable = [
        'username',
        'user_id',
        'product_id',
        'product_name',
        'product_quantity',
        'product_price'
    ];
}

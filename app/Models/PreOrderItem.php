<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PreOrderItem extends Model
{
    use HasFactory;

    protected $fillable = [
        'product_name',
        'product_short_description',
        'product_long_description',
        'price',
        'compare_price',
        'product_img',
        'quantity',
        'slug',
        'ageRange',
        'ageGroup',
        'sizeGroup',
        'colorGroup',
        'quantityGroup',
        'imageVariations',
    ];
}

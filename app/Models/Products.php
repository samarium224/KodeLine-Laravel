<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    use HasFactory;
    protected $fillable = [
        'product_name',
        'product_short_description',
        'product_long_description',
        'price',
        'product_category_name',
        'product_category_id',
        'product_subcategory_name',
        'product_subcategory_id',
        'product_img',
        'slug',
    ];
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PreOrderAttributes extends Model
{
    use HasFactory;

    protected $fillable = [
        'product_id',
        'attribute',
        'value',
        'sizes',
        'imageUrls',
        'stock',
        'price',
    ];
}

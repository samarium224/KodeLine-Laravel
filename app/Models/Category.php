<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;
    protected $fillable = [
        'category_name',
        'category_title',
        'category_subtitle',
        'category_img',
        'cat_headerImg_PC',
        'cat_headerImg_mobile',
        'reverseAlign',
        'slug',
    ];
}

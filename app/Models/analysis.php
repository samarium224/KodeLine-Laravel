<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class analysis extends Model
{
    use HasFactory;
    protected $fillable = [
        'M_Y',
        'revenue',
        'unit_sold',
        'total_sales_price',
        'total_orders',
        'customer_count',
    ];
}

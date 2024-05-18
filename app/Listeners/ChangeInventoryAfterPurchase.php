<?php

namespace App\Listeners;

use App\Events\OrderProcessed;
use App\Models\analysis;
use App\Models\Cart;
use App\Models\Order;
use App\Models\ProductAttributes;
use App\Models\Products;
use Carbon\Carbon;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class ChangeInventoryAfterPurchase
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(OrderProcessed $event): void
    {
        $order = $event->order;
        $total_order = 0;
        $total_price = 0;
        $unit_sold = 0;
        $Revenue = 0;

        if ($order->payment_status === 0) {
            Order::findOrFail($order->id)->update([
                'payment_status' => 1,
            ]);
        }

        // Convert the exploded arrays to integers
        $productID = array_map('intval', explode('|', $order->product_id));
        $attribute_id = array_map('intval', explode('|', $order->attribute_id));
        $variantIndex = array_map('intval', explode('|', $order->variantIndex));
        $product_quantity = array_map('intval', explode('|', $order->product_quantity));

        foreach ($product_quantity as $i => $PurchaseItem) {
            //required for analytics
            $total_order++;
            $unit_sold += $PurchaseItem;

            // reduce product count
            $product_id = $productID[$i];
            $attributeID = $attribute_id[$i];
            $variantID = $variantIndex[$i];
            $order_count = $product_quantity[$i];

            $variantStock = ProductAttributes::where('id', $attributeID)->value('stock');
            if ($variantStock != null) {
                $VariantStockIndex = explode(',', $variantStock);
                $variantStock = (int) $VariantStockIndex[$variantID];
                $newStock = $variantStock - $order_count;

                $VariantStockIndex[$variantID] = $newStock;
                $newStock = implode(',', $VariantStockIndex);

                ProductAttributes::where('id', $attributeID)->update([
                    'stock' => $newStock,
                ]);

            } else {
                Products::where('id', $product_id)->decrement('quantity', $order_count);
            }

        }

        $total_price = $order->total_price;
        $Revenue = $unit_sold * $total_price;

        // Get the current month and year
        $currentMonthYear = Carbon::now()->format('M-Y');

        // Check if analysis record exists for the current month and year
        $analysis = analysis::where('M_Y', $currentMonthYear)->first();

        if ($analysis) {
            // Update existing record
            $analysis->increment('revenue', $Revenue);
            $analysis->increment('unit_sold', $unit_sold);
            $analysis->increment('total_sales_price', $total_price);
            $analysis->increment('total_orders', $total_order);
            $analysis->increment('customer_count', 1);
        } else {
            // Create new record
            $analysis = new Analysis;
            $analysis->M_Y = $currentMonthYear;
            $analysis->revenue = $Revenue;
            $analysis->unit_sold = $unit_sold;
            $analysis->total_sales_price = $total_price;
            $analysis->total_orders = $total_order;
            $analysis->customer_count = 1;
            $analysis->save();
        }

    }
}

<?php

namespace App\Listeners;

use App\Events\OrderProcessed;
use App\Models\analysis;
use App\Models\Cart;
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

        if ($order->payment_status === 0) {

            $order->payment_status = 1;
            $order->save();

            // reduce product count
            $product_id = $order->product_id;
            $attributeID = $order->attribute_id;
            $variantID = $order->variantIndex;
            $order_count = $order->product_quantity;

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


    }
}

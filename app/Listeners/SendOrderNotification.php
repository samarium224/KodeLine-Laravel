<?php

namespace App\Listeners;

use App\Events\OrderProcessed;
use App\Mail\OrderSuccessMail;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Mail;

class SendOrderNotification
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
        Mail::to('samir.fazal225@gmail.com')->send(new OrderSuccessMail($event->order));
    }
}

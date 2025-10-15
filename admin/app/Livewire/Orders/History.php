<?php

namespace App\Livewire\Orders;

use Livewire\Component;
use App\Models\Order;

class History extends Component
{
    public $orders;

    public function mount()
    {
        // Fetch all non-active (completed or cancelled) orders
        $this->orders = Order::whereIn('status', ['completed', 'cancelled'])
            ->latest()
            ->get();
    }

    public function render()
    {
        return view('livewire.orders.history', [
            'orders' => $this->orders,
        ])->layout('layouts.admin', ['title' => 'Order History']);
    }
}

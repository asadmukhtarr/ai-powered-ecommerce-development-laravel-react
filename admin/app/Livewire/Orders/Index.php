<?php

namespace App\Livewire\Orders;

use Livewire\Component;
use App\Models\Order;

class Index extends Component
{
    public $orders;

    public function mount()
    {
        // Fetch all active orders (you can adjust condition as needed)
        $this->orders = Order::where('status', 'active')->latest()->get();
    }

    public function render()
    {
        return view('livewire.orders.index', [
            'orders' => $this->orders
        ])->layout('layouts.admin', ['title' => 'Orders']);
    }
}

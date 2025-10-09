<?php

namespace App\Livewire\Orders;

use Livewire\Component;

class History extends Component
{
    public function render()
    {
        return view('livewire.orders.history')->layout('layouts.admin',['title' => 'Order History']);
    }
}

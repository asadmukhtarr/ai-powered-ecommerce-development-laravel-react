<?php

namespace App\Livewire\Orders;

use Livewire\Component;

class Show extends Component
{
    public function render()
    {
        return view('livewire.orders.show')->layout('layouts.admin',['title' => 'Show Order']);
    }
}

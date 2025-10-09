<?php

namespace App\Livewire\Products;

use Livewire\Component;

class Edit extends Component
{
    public function render()
    {
        return view('livewire.products.edit')->layout('layouts.admin',['title' => 'Edit Product']);
    }
}

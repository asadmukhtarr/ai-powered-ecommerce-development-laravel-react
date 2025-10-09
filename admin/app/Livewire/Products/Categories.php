<?php

namespace App\Livewire\Products;

use Livewire\Component;

class Categories extends Component
{
    public function render()
    {
        return view('livewire.products.categories')->layout('layouts.admin',['title' => 'Categories']);
    }
}

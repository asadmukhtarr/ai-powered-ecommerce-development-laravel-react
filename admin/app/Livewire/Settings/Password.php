<?php

namespace App\Livewire\Settings;

use Livewire\Component;

class Password extends Component
{
    public function render()
    {
        return view('livewire.settings.password')->layout('layouts.admin',['title' => 'Change Password']);
    }
}

<?php

namespace App\Livewire\Users;

use Livewire\Component;

class Ban extends Component
{
    public function render()
    {
        return view('livewire.users.ban')->layout('layouts.admin',['title' => 'Ban Users']);
    }
}

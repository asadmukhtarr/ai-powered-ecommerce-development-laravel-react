<?php

namespace App\Livewire\Settings;

use Livewire\Component;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class Password extends Component
{
    public $current_password;
    public $new_password;
    public $confirm_password;

    public function updatePassword()
    {
        $this->validate([
            'current_password' => 'required',
            'new_password' => 'required|min:6|confirmed',
            'confirm_password' => 'required|same:new_password',
        ]);

        $user = Auth::user();

        // Check current password
        if (!Hash::check($this->current_password, $user->password)) {
            session()->flash('error', 'Your current password is incorrect.');
            return;
        }

        // Update password
        $user->password = Hash::make($this->new_password);
        $user->save();

        // Reset input fields
        $this->reset(['current_password', 'new_password', 'confirm_password']);

        session()->flash('success', 'Password updated successfully.');
    }

    public function render()
    {
        return view('livewire.settings.password')->layout('layouts.admin', ['title' => 'Change Password']);
    }
}

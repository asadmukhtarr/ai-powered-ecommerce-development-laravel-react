<?php

namespace App\Livewire\Users;

use Livewire\Component;
use Livewire\WithPagination;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class Index extends Component
{
    use WithPagination;

    public $userId;
    public $name, $email, $password;
    public $isEdit = false;
    public $confirmDeleteId = null;

    protected $rules = [
        'name' => 'required|min:3',
        'email' => 'required|email|unique:users,email',
        'password' => 'required|min:6',
    ];

    // Reset pagination when search, update or delete
    protected $listeners = ['deleteConfirmed' => 'deleteUser'];

    public function resetForm()
    {
        $this->reset(['name', 'email', 'password', 'isEdit', 'userId']);
        $this->resetErrorBag();
    }

    public function store()
    {
        $this->validate();

        $user = new User();
        $user->name = $this->name;
        $user->email = $this->email;
        $user->password = Hash::make($this->password);
        $user->is_admin = 1;
        $user->save();

        session()->flash('message', '✅ User added successfully!');
        $this->resetForm();
    }

    public function edit($id)
    {
        $user = User::findOrFail($id);
        $this->userId = $id;
        $this->name = $user->name;
        $this->email = $user->email;
        $this->password = ''; // Leave empty
        $this->isEdit = true;

        // Remove unique rule for email when editing
        $this->rules['email'] = 'required|email|unique:users,email,' . $id;
        $this->resetErrorBag();
    }

    public function update()
    {
        $this->validate([
            'name' => 'required|min:3',
            'email' => 'required|email|unique:users,email,' . $this->userId,
            'password' => 'nullable|min:6',
        ]);

        $user = User::findOrFail($this->userId);
        $user->update([
            'name' => $this->name,
            'email' => $this->email,
            'password' => $this->password ? Hash::make($this->password) : $user->password,
            'is_admin' => 1,
        ]);

        session()->flash('message', '✏️ User updated successfully!');
        $this->resetForm();
    }

    public function confirmDelete($id)
    {
        $this->confirmDeleteId = $id;
    }

    public function deleteUser()
    {
        $user = User::find($this->confirmDeleteId);
        if ($user) {
            $user->delete();
            session()->flash('message', '🗑️ User deleted successfully!');
        }
        $this->confirmDeleteId = null;
    }

    public function render()
    {
        $users = User::where('is_admin', 1)->latest()->paginate(10);
        return view('livewire.users.index', compact('users'))
            ->layout('layouts.admin', ['title' => 'All Users']);
    }
}

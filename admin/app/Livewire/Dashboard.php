<?php

namespace App\Livewire;

use Livewire\Component;
use App\Models\User;
use App\Models\Product;
use App\Models\Order;

class Dashboard extends Component
{
    public $totalUsers;
    public $totalProducts;
    public $activeOrders;
    public $completedOrders;
    public $totalRevenue;

    public function mount()
    {
        $this->totalUsers = User::where('is_admin',1)->count();
        $this->totalProducts = Product::count();
        $this->activeOrders = Order::where('status', 'active')->count();
        $this->completedOrders = Order::where('status', 'completed')->count();
        $this->totalRevenue = Order::where('status', 'completed')->sum('total_amount');
    }

    public function render()
    {
        return view('livewire.dashboard', [
            'totalUsers' => $this->totalUsers,
            'totalProducts' => $this->totalProducts,
            'activeOrders' => $this->activeOrders,
            'completedOrders' => $this->completedOrders,
            'totalRevenue' => $this->totalRevenue,
        ])->layout('layouts.admin', ['title' => 'Dashboard']);
    }
}

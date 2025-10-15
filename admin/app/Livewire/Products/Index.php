<?php

namespace App\Livewire\Products;

use Livewire\Component;
use App\Models\Product;
use Livewire\WithPagination;
use Illuminate\Support\Facades\Storage;

class Index extends Component
{
    use WithPagination;

    public $confirmDeleteId = null;

    protected $listeners = ['deleteConfirmed' => 'deleteProduct'];

    public function confirmDelete($id)
    {
        $this->confirmDeleteId = $id;
    }

    public function deleteProduct()
    {
        $product = Product::find($this->confirmDeleteId);
        if ($product) {
            if ($product->image && Storage::disk('public')->exists($product->image)) {
                Storage::disk('public')->delete($product->image);
            }
            $product->delete();
            session()->flash('message', '🗑️ Product deleted successfully!');
        }

        $this->confirmDeleteId = null;
    }

    public function render()
    {
        $products = Product::with('category')->latest()->paginate(10);
        return view('livewire.products.index', compact('products'))
            ->layout('layouts.admin', ['title' => 'All Products']);
    }
}

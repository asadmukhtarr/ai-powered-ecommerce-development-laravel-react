<?php

namespace App\Livewire\Products;

use Livewire\Component;
use Livewire\WithFileUploads;
use App\Models\Product;
use App\Models\Category;

class Create extends Component
{
    use WithFileUploads;

    public $categories;
    public $category_id, $name, $description, $price, $stock, $image;

    protected $rules = [
        'category_id' => 'required|exists:categories,id',
        'name' => 'required|min:3',
        'description' => 'nullable|max:500',
        'price' => 'required|numeric|min:0',
        'stock' => 'required|integer|min:0',
        'image' => 'nullable|image|max:2048', // Max 2MB
    ];

    public function mount()
    {
        $this->categories = Category::all();
    }

    public function store()
    {
        $this->validate();

        $imagePath = null;
        if ($this->image) {
            $imagePath = $this->image->store('products', 'public');
        }

        Product::create([
            'category_id' => $this->category_id,
            'name' => $this->name,
            'description' => $this->description,
            'price' => $this->price,
            'stock' => $this->stock,
            'image' => $imagePath,
        ]);

        session()->flash('message', '✅ Product created successfully!');
        $this->reset(['category_id', 'name', 'description', 'price', 'stock', 'image']);
    }

    public function render()
    {
        return view('livewire.products.create')
            ->layout('layouts.admin', ['title' => 'Create Product']);
    }
}

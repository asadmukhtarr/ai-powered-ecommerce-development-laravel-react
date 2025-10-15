<?php

namespace App\Livewire\Products;

use Livewire\Component;
use Livewire\WithFileUploads;
use App\Models\Product;
use App\Models\Category;
use Illuminate\Support\Facades\Storage;

class Edit extends Component
{
    use WithFileUploads;

    public $product;
    public $productId;
    public $categories;
    public $category_id, $name, $description, $price, $stock, $image, $oldImage;

    protected $rules = [
        'category_id' => 'required|exists:categories,id',
        'name' => 'required|min:3',
        'description' => 'nullable|max:500',
        'price' => 'required|numeric|min:0',
        'stock' => 'required|integer|min:0',
        'image' => 'nullable|image|max:2048',
    ];

    public function mount($id)
    {
        $this->product = Product::findOrFail($id);
        $this->productId = $id;
        $this->categories = Category::all();

        $this->category_id = $this->product->category_id;
        $this->name = $this->product->name;
        $this->description = $this->product->description;
        $this->price = $this->product->price;
        $this->stock = $this->product->stock;
        $this->oldImage = $this->product->image;
    }

    public function update()
    {
        $this->validate();

        $product = Product::findOrFail($this->productId);

        $imagePath = $this->oldImage;
        if ($this->image) {
            // Delete old image
            if ($this->oldImage && Storage::disk('public')->exists($this->oldImage)) {
                Storage::disk('public')->delete($this->oldImage);
            }
            // Upload new one
            $imagePath = $this->image->store('products', 'public');
        }

        $product->update([
            'category_id' => $this->category_id,
            'name' => $this->name,
            'description' => $this->description,
            'price' => $this->price,
            'stock' => $this->stock,
            'image' => $imagePath,
        ]);

        session()->flash('message', '✅ Product updated successfully!');
        return redirect()->route('admin.products.index');
    }

    public function render()
    {
        return view('livewire.products.edit')
            ->layout('layouts.admin', ['title' => 'Edit Product']);
    }
}

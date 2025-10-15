<?php

namespace App\Livewire\Products;

use Livewire\Component;
use App\Models\Category;

class Categories extends Component
{
    public $categories;
    public $name, $description, $category_id;
    public $isEdit = false;

    protected $rules = [
        'name' => 'required|min:3',
        'description' => 'nullable|max:255',
    ];

    public function render()
    {
        $this->categories = Category::latest()->get();
        return view('livewire.products.categories')
            ->layout('layouts.admin', ['title' => 'Categories']);
    }

    public function resetInputFields()
    {
        $this->name = '';
        $this->description = '';
        $this->category_id = null;
        $this->isEdit = false;
    }

    public function store()
    {
        $this->validate();

        Category::create([
            'name' => $this->name,
            'description' => $this->description,
        ]);

        session()->flash('message', 'Category created successfully.');
        $this->resetInputFields();
    }

    public function edit($id)
    {
        $category = Category::findOrFail($id);
        $this->category_id = $category->id;
        $this->name = $category->name;
        $this->description = $category->description;
        $this->isEdit = true;
    }

    public function update()
    {
        $this->validate();

        $category = Category::findOrFail($this->category_id);
        $category->update([
            'name' => $this->name,
            'description' => $this->description,
        ]);

        session()->flash('message', 'Category updated successfully.');
        $this->resetInputFields();
    }

    public function delete($id)
    {
        Category::findOrFail($id)->delete();
        session()->flash('message', 'Category deleted successfully.');
    }
}

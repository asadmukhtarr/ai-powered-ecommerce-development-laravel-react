<div>
    <div class="container py-4">
    <h3 class="fw-bold text-warning mb-3">
        <i class="fa fa-pencil me-2"></i> Edit Product
    </h3>

    {{-- Success Message --}}
    @if (session()->has('message'))
        <div class="alert alert-success alert-dismissible fade show">
            {{ session('message') }}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        </div>
    @endif

    <div class="card shadow-sm border-0">
        <div class="card-header bg-dark text-light">
            <i class="fa fa-cube me-2"></i> Update Product Information
        </div>
        <div class="card-body">
            <form wire:submit.prevent="update" enctype="multipart/form-data">
                <div class="row g-3">
                    <div class="col-md-6">
                        <label class="form-label fw-bold">Product Name</label>
                        <input type="text" wire:model="name" class="form-control">
                        @error('name') <span class="text-danger small">{{ $message }}</span> @enderror
                    </div>

                    <div class="col-md-6">
                        <label class="form-label fw-bold">Category</label>
                        <select wire:model="category_id" class="form-select">
                            <option value="">-- Select Category --</option>
                            @foreach($categories as $cat)
                                <option value="{{ $cat->id }}">{{ $cat->name }}</option>
                            @endforeach
                        </select>
                        @error('category_id') <span class="text-danger small">{{ $message }}</span> @enderror
                    </div>

                    <div class="col-md-6">
                        <label class="form-label fw-bold">Price</label>
                        <input type="number" wire:model="price" step="0.01" class="form-control">
                        @error('price') <span class="text-danger small">{{ $message }}</span> @enderror
                    </div>

                    <div class="col-md-6">
                        <label class="form-label fw-bold">Stock Quantity</label>
                        <input type="number" wire:model="stock" class="form-control">
                        @error('stock') <span class="text-danger small">{{ $message }}</span> @enderror
                    </div>

                    <div class="col-md-12">
                        <label class="form-label fw-bold">Description</label>
                        <textarea wire:model="description" class="form-control" rows="3"></textarea>
                        @error('description') <span class="text-danger small">{{ $message }}</span> @enderror
                    </div>

                    <div class="col-md-6">
                        <label class="form-label fw-bold">Product Image</label>
                        <input type="file" wire:model="image" class="form-control">
                        @error('image') <span class="text-danger small">{{ $message }}</span> @enderror

                        <div class="mt-3">
                            @if ($image)
                                <p class="text-muted small mb-1">New Image Preview:</p>
                                <img src="{{ $image->temporaryUrl() }}" width="120" class="rounded shadow-sm">
                            @elseif ($oldImage)
                                <p class="text-muted small mb-1">Current Image:</p>
                                <img src="{{ asset('storage/' . $oldImage) }}" width="120" class="rounded shadow-sm">
                            @endif
                        </div>
                    </div>
                </div>

                <div class="mt-4">
                    <button type="submit" class="btn btn-warning text-dark fw-bold px-4">
                        <i class="fa fa-save me-1"></i> Update Product
                    </button>
                    <a href="{{ route('admin.products.index') }}" class="btn btn-secondary ms-2">
                        <i class="fa fa-arrow-left me-1"></i> Back
                    </a>
                </div>
            </form>
        </div>
    </div>
</div>

</div>
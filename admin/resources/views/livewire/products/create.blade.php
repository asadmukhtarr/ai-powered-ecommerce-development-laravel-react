<div>
    <div class="container py-4">
    <h3 class="fw-bold text-warning mb-3">
        <i class="fa fa-plus-square me-2"></i> Add New Product
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
            <i class="fa fa-cube me-2"></i> Product Information
        </div>
        <div class="card-body">
            <form wire:submit.prevent="store" enctype="multipart/form-data">
                <div class="row g-3">
                    <div class="col-md-6">
                        <label class="form-label fw-bold">Product Name</label>
                        <input type="text" wire:model="name" class="form-control" placeholder="Enter product name">
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
                        <input type="number" wire:model="price" step="0.01" class="form-control" placeholder="Enter price">
                        @error('price') <span class="text-danger small">{{ $message }}</span> @enderror
                    </div>

                    <div class="col-md-6">
                        <label class="form-label fw-bold">Stock Quantity</label>
                        <input type="number" wire:model="stock" class="form-control" placeholder="Enter stock">
                        @error('stock') <span class="text-danger small">{{ $message }}</span> @enderror
                    </div>

                    <div class="col-md-12">
                        <label class="form-label fw-bold">Description</label>
                        <textarea wire:model="description" class="form-control" rows="3" placeholder="Optional description"></textarea>
                        @error('description') <span class="text-danger small">{{ $message }}</span> @enderror
                    </div>

                    <div class="col-md-6">
                        <label class="form-label fw-bold">Product Image</label>
                        <input type="file" wire:model="image" class="form-control">
                        @error('image') <span class="text-danger small">{{ $message }}</span> @enderror

                        {{-- Preview --}}
                        @if ($image)
                            <img src="{{ $image->temporaryUrl() }}" class="rounded mt-3" width="150">
                        @endif
                    </div>
                </div>

                <div class="mt-4">
                    <button type="submit" class="btn btn-warning text-dark fw-bold px-4">
                        <i class="fa fa-save me-1"></i> Save Product
                    </button>
                    <button type="reset" wire:click="$refresh" class="btn btn-secondary ms-2">Reset</button>
                </div>
            </form>
        </div>
    </div>
</div>

</div>

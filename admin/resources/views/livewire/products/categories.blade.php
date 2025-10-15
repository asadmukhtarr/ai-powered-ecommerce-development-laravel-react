<div>
        <div class="py-4">
            <h3 class="fw-bold text-warning mb-3">
                <i class="fa fa-tags me-2"></i> Manage Categories
            </h3>

            {{-- Success Message --}}
            @if (session()->has('message'))
                <div class="alert alert-success alert-dismissible fade show">
                    {{ session('message') }}
                    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                </div>
            @endif

            {{-- Add/Edit Form --}}
            <div class="card shadow-sm mb-4">
                <div class="card-header bg-dark text-light">
                    {{ $isEdit ? 'Edit Category' : 'Add New Category' }}
                </div>
                <div class="card-body">
                    <form wire:submit.prevent="{{ $isEdit ? 'update' : 'store' }}">
                        <div class="mb-3">
                            <label class="form-label fw-bold">Category Name</label>
                            <input type="text" wire:model="name" class="form-control" placeholder="Enter category name">
                            @error('name') <span class="text-danger small">{{ $message }}</span> @enderror
                        </div>

                        <div class="mb-3">
                            <label class="form-label fw-bold">Description</label>
                            <textarea wire:model="description" class="form-control" placeholder="Optional"></textarea>
                            @error('description') <span class="text-danger small">{{ $message }}</span> @enderror
                        </div>

                        <button type="submit" class="btn btn-warning text-dark fw-bold">
                            {{ $isEdit ? 'Update Category' : 'Add Category' }}
                        </button>
                        @if($isEdit)
                            <button type="button" wire:click="resetInputFields" class="btn btn-secondary ms-2">
                                Cancel
                            </button>
                        @endif
                    </form>
                </div>
            </div>
            {{-- Category Table --}}
            <div class="card shadow-sm">
                <div class="card-header bg-dark text-light">
                    <i class="fa fa-list me-2"></i> Category List
                </div>
                <div class="table-responsive">
                    <table class="table table-hover align-middle">
                        <thead class="table-warning">
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Created</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            @forelse ($categories as $index => $cat)
                                <tr>
                                    <td>{{ $index + 1 }}</td>
                                    <td class="fw-semibold">{{ $cat->name }}</td>
                                    <td>{{ $cat->description ?? '—' }}</td>
                                    <td>{{ $cat->created_at->format('d M Y') }}</td>
                                    <td>
                                        <button wire:click="edit({{ $cat->id }})" class="btn btn-sm btn-primary">
                                            <i class="fa fa-edit"></i>
                                        </button>
                                        <button wire:click="delete({{ $cat->id }})"
                                                class="btn btn-sm btn-danger"
                                                onclick="return confirm('Are you sure you want to delete this category?')">
                                            <i class="fa fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            @empty
                                <tr>
                                    <td colspan="5" class="text-center text-muted">No categories found.</td>
                                </tr>
                            @endforelse
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

</div>
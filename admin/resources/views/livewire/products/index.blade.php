<div>
    <div class="container py-4">
    <h3 class="fw-bold text-warning mb-3">
        <i class="fa fa-cubes me-2"></i> All Products
    </h3>

    {{-- Success Message --}}
    @if (session()->has('message'))
        <div class="alert alert-success alert-dismissible fade show">
            {{ session('message') }}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        </div>
    @endif

    <div class="d-flex justify-content-end mb-3">
        <a href="{{ route('admin.products.create') }}" class="btn btn-warning text-dark fw-bold">
            <i class="fa fa-plus"></i> Add Product
        </a>
    </div>

    <div class="card shadow-sm border-0">
        <div class="card-body p-0">
            <table class="table table-striped align-middle mb-0">
                <thead class="table-dark text-center">
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Created</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody class="text-center">
                    @forelse ($products as $index => $product)
                        <tr>
                            <td>{{ $products->firstItem() + $index }}</td>
                            <td>
                                @if ($product->image)
                                    <img src="{{ asset('storage/' . $product->image) }}" width="50" height="50"
                                        class="rounded shadow-sm" alt="Product">
                                @else
                                    <i class="fa fa-picture-o text-muted"></i>
                                @endif
                            </td>
                            <td class="fw-bold">{{ $product->name }}</td>
                            <td>{{ $product->category?->name ?? '—' }}</td>
                            <td>${{ number_format($product->price, 2) }}</td>
                            <td>{{ $product->stock }}</td>
                            <td>{{ $product->created_at->diffForHumans() }}</td>
                            <td>
                                <a href="{{ route('admin.products.edit', $product->id) }}"
                                   class="btn btn-sm btn-primary me-2">
                                    <i class="fa fa-pencil"></i>
                                </a>
                                <button wire:click="confirmDelete({{ $product->id }})"
                                        class="btn btn-sm btn-danger">
                                    <i class="fa fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                    @empty
                        <tr>
                            <td colspan="8" class="text-muted py-4">
                                <i class="fa fa-info-circle me-1"></i> No products found.
                            </td>
                        </tr>
                    @endforelse
                </tbody>
            </table>
        </div>

        <div class="card-footer bg-light">
            {{ $products->links() }}
        </div>
    </div>
    {{-- Delete Confirmation Modal --}}
    @if($confirmDeleteId)
        <div class="modal fade show d-block" tabindex="-1" style="background: rgba(0,0,0,0.5);">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header bg-danger text-white">
                        <h5 class="modal-title"><i class="fa fa-warning"></i> Confirm Delete</h5>
                        <button type="button" wire:click="$set('confirmDeleteId', null)" class="btn-close"></button>
                    </div>
                    <div class="modal-body text-center">
                        <p>Are you sure you want to delete this product?</p>
                    </div>
                    <div class="modal-footer">
                        <button wire:click="deleteProduct" class="btn btn-danger">Yes, Delete</button>
                        <button wire:click="$set('confirmDeleteId', null)" class="btn btn-secondary">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    @endif
</div>

</div>
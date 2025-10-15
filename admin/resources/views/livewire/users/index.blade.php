<div>
    <div class="container py-4">
    <h3 class="fw-bold text-warning mb-3">
        <i class="fa fa-users me-2"></i> Manage Admin Users
    </h3>

    {{-- Success Message --}}
    @if (session()->has('message'))
        <div class="alert alert-success alert-dismissible fade show">
            {{ session('message') }}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        </div>
    @endif

    {{-- User Form --}}
    <div class="card mb-4 shadow-sm border-0">
        <div class="card-header bg-dark text-light">
            <i class="fa fa-user-plus me-2"></i>
            {{ $isEdit ? 'Edit User' : 'Add New User' }}
        </div>
        <div class="card-body">
            <form wire:submit.prevent="{{ $isEdit ? 'update' : 'store' }}">
                <div class="row g-3">
                    <div class="col-md-4">
                        <label class="form-label fw-bold">Name</label>
                        <input type="text" wire:model="name" class="form-control" placeholder="Enter full name">
                        @error('name') <span class="text-danger small">{{ $message }}</span> @enderror
                    </div>

                    <div class="col-md-4">
                        <label class="form-label fw-bold">Email</label>
                        <input type="email" wire:model="email" class="form-control" placeholder="Enter email">
                        @error('email') <span class="text-danger small">{{ $message }}</span> @enderror
                    </div>

                    <div class="col-md-4">
                        <label class="form-label fw-bold">Password</label>
                        <input type="password" wire:model="password" class="form-control" placeholder="{{ $isEdit ? 'Leave blank to keep same' : 'Enter password' }}">
                        @error('password') <span class="text-danger small">{{ $message }}</span> @enderror
                    </div>
                </div>

                <div class="mt-4">
                    <button type="submit" class="btn btn-warning text-dark fw-bold px-4">
                        <i class="fa {{ $isEdit ? 'fa-save' : 'fa-plus' }} me-1"></i>
                        {{ $isEdit ? 'Update User' : 'Add User' }}
                    </button>
                    @if ($isEdit)
                        <button type="button" wire:click="resetForm" class="btn btn-secondary ms-2">
                            <i class="fa fa-undo me-1"></i> Cancel
                        </button>
                    @endif
                </div>
            </form>
        </div>
    </div>

    {{-- Users Table --}}
    <div class="card shadow-sm border-0">
        <div class="card-header bg-dark text-light">
            <i class="fa fa-list me-2"></i> Admin Users List
        </div>
        <div class="card-body p-0">
            <table class="table table-striped align-middle mb-0 text-center">
                <thead class="table-dark">
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Created</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    @forelse ($users as $index => $user)
                        <tr>
                            <td>{{ $users->firstItem() + $index }}</td>
                            <td class="fw-bold">{{ $user->name }}</td>
                            <td>{{ $user->email }}</td>
                            <td>{{ $user->created_at->diffForHumans() }}</td>
                            <td>
                                <button wire:click="edit({{ $user->id }})" class="btn btn-sm btn-primary me-2">
                                    <i class="fa fa-pencil"></i>
                                </button>
                                <button wire:click="confirmDelete({{ $user->id }})" class="btn btn-sm btn-danger">
                                    <i class="fa fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                    @empty
                        <tr>
                            <td colspan="5" class="text-muted py-3">
                                <i class="fa fa-info-circle me-1"></i> No admin users found.
                            </td>
                        </tr>
                    @endforelse
                </tbody>
            </table>
        </div>
        <div class="card-footer bg-light">
            {{ $users->links() }}
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
                        <p>Are you sure you want to delete this user?</p>
                    </div>
                    <div class="modal-footer">
                        <button wire:click="deleteUser" class="btn btn-danger">Yes, Delete</button>
                        <button wire:click="$set('confirmDeleteId', null)" class="btn btn-secondary">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    @endif
</div>

</div>
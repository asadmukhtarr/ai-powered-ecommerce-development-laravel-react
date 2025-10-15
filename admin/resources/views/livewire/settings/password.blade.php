<div>
    <div class="container py-5">
    <div class="row justify-content-center">
        <div class="col-md-6">
            <div class="card shadow-sm border-0 rounded-4">
                <div class="card-header bg-dark text-white fw-bold">
                    Change Password
                </div>

                <div class="card-body">
                    @if (session()->has('success'))
                        <div class="alert alert-success">
                            {{ session('success') }}
                        </div>
                    @endif

                    @if (session()->has('error'))
                        <div class="alert alert-danger">
                            {{ session('error') }}
                        </div>
                    @endif

                    <form wire:submit.prevent="updatePassword">
                        <div class="mb-3">
                            <label class="form-label fw-semibold">Current Password</label>
                            <input type="password" wire:model.defer="current_password" class="form-control" placeholder="Enter current password">
                            @error('current_password') <span class="text-danger small">{{ $message }}</span> @enderror
                        </div>

                        <div class="mb-3">
                            <label class="form-label fw-semibold">New Password</label>
                            <input type="password" wire:model.defer="new_password" class="form-control" placeholder="Enter new password">
                            @error('new_password') <span class="text-danger small">{{ $message }}</span> @enderror
                        </div>

                        <div class="mb-3">
                            <label class="form-label fw-semibold">Confirm New Password</label>
                            <input type="password" wire:model.defer="confirm_password" class="form-control" placeholder="Re-enter new password">
                            @error('confirm_password') <span class="text-danger small">{{ $message }}</span> @enderror
                        </div>

                        <div class="d-grid mt-4">
                            <button type="submit" class="btn btn-warning text-dark fw-bold">
                                <i class="fa fa-lock me-2"></i> Update Password
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

</div>
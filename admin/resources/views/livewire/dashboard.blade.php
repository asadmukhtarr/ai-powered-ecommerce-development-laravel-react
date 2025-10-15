<div>
   <div class="container py-5">
    <h3 class="fw-bold mb-4 text-dark">
        <i class="fa fa-tachometer text-warning me-2"></i> Admin Dashboard
    </h3>

    <div class="row g-4">
        <!-- Total Users -->
        <div class="col-md-3">
            <div class="card shadow-sm border-0 rounded-4 text-center p-3 bg-light">
                <div class="card-body">
                    <i class="fa fa-users fa-2x text-primary mb-2"></i>
                    <h5 class="fw-bold mb-1">{{ $totalUsers }}</h5>
                    <p class="text-muted small mb-0">Total Users</p>
                </div>
            </div>
        </div>

        <!-- Total Products -->
        <div class="col-md-3">
            <div class="card shadow-sm border-0 rounded-4 text-center p-3 bg-light">
                <div class="card-body">
                    <i class="fa fa-cubes fa-2x text-success mb-2"></i>
                    <h5 class="fw-bold mb-1">{{ $totalProducts }}</h5>
                    <p class="text-muted small mb-0">Total Products</p>
                </div>
            </div>
        </div>

        <!-- Active Orders -->
        <div class="col-md-3">
            <div class="card shadow-sm border-0 rounded-4 text-center p-3 bg-light">
                <div class="card-body">
                    <i class="fa fa-refresh fa-2x text-info mb-2"></i>
                    <h5 class="fw-bold mb-1">{{ $activeOrders }}</h5>
                    <p class="text-muted small mb-0">Active Orders</p>
                </div>
            </div>
        </div>

        <!-- Completed Orders -->
        <div class="col-md-3">
            <div class="card shadow-sm border-0 rounded-4 text-center p-3 bg-light">
                <div class="card-body">
                    <i class="fa fa-check-circle fa-2x text-success mb-2"></i>
                    <h5 class="fw-bold mb-1">{{ $completedOrders }}</h5>
                    <p class="text-muted small mb-0">Completed Orders</p>
                </div>
            </div>
        </div>
    </div>

    <div class="row g-4 mt-4">
        <!-- Total Revenue -->
        <div class="col-md-4">
            <div class="card shadow-sm border-0 rounded-4 text-center p-3 bg-warning bg-opacity-25">
                <div class="card-body">
                    <i class="fa fa-dollar fa-2x text-warning mb-2"></i>
                    <h4 class="fw-bold mb-1">${{ number_format($totalRevenue, 2) }}</h4>
                    <p class="text-muted small mb-0">Total Revenue</p>
                </div>
            </div>
        </div>

        <!-- Chart Placeholder -->
        <div class="col-md-8">
            <div class="card shadow-sm border-0 rounded-4">
                <div class="card-header bg-dark text-white fw-semibold">
                    <i class="fa fa-line-chart me-2"></i> Order Activity Overview
                </div>
                <div class="card-body text-center py-5 text-muted">
                    <i class="fa fa-bar-chart fa-3x mb-3 text-secondary"></i>
                    <p>Order analytics chart coming soon...</p>
                </div>
            </div>
        </div>
    </div>
</div>

</div>

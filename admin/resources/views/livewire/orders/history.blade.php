<div>
    <div class="container py-5">
    <div class="card shadow-sm border-0 rounded-4">
        <div class="card-header bg-dark text-white d-flex justify-content-between align-items-center">
            <h5 class="mb-0">Order History</h5>
            <span class="badge bg-secondary">{{ $orders->count() }} Orders</span>
        </div>

        <div class="card-body">
            @if($orders->isEmpty())
                <div class="alert alert-info text-center mb-0">
                    No past orders found.
                </div>
            @else
                <div class="table-responsive">
                    <table class="table table-bordered table-hover align-middle">
                        <thead class="table-dark text-center">
                            <tr>
                                <th>#</th>
                                <th>Order No</th>
                                <th>User</th>
                                <th>Total</th>
                                <th>Status</th>
                                <th>Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($orders as $order)
                                <tr>
                                    <td class="text-center">{{ $loop->iteration }}</td>
                                    <td>{{ $order->order_number ?? 'N/A' }}</td>
                                    <td>{{ $order->user->name ?? 'Guest' }}</td>
                                    <td>${{ number_format($order->total, 2) }}</td>
                                    <td class="text-center">
                                        @if($order->status === 'completed')
                                            <span class="badge bg-success">Completed</span>
                                        @elseif($order->status === 'cancelled')
                                            <span class="badge bg-danger">Cancelled</span>
                                        @else
                                            <span class="badge bg-secondary">{{ ucfirst($order->status) }}</span>
                                        @endif
                                    </td>
                                    <td>{{ $order->created_at->format('d M Y') }}</td>
                                    <td class="text-center">
                                        <button class="btn btn-sm btn-primary">
                                            <i class="fa fa-eye"></i>
                                        </button>
                                    </td>
                                </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
            @endif
        </div>
    </div>
</div>

</div>

<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>@yield('title', 'Admin Dashboard')</title>

    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="color-scheme" content="light dark">
    <meta name="theme-color" content="#007bff" media="(prefers-color-scheme: light)">
    <meta name="theme-color" content="#1a1a1a" media="(prefers-color-scheme: dark)">

    <!-- AdminLTE & Dependencies -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/overlayscrollbars@2.11.0/styles/overlayscrollbars.min.css">
    <link rel="stylesheet" href="{{ asset('css/adminlte.css') }}">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <!-- Laravel Vite / Livewire -->
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    @livewireStyles
</head>
<body class="layout-fixed fixed-header fixed-footer sidebar-expand-lg sidebar-open bg-body-tertiary">

<div class="app-wrapper">
    <!-- Header -->
    <nav class="app-header navbar navbar-expand bg-body">
        <div class="container-fluid">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" data-lte-toggle="sidebar" href="#">
                        <i class="bi bi-list"></i>
                    </a>
                </li>
                <li class="nav-item d-none d-md-block"><a href="#" class="nav-link">Home</a></li>
                <li class="nav-item d-none d-md-block"><a href="#" class="nav-link">Contact</a></li>
            </ul>

            <ul class="navbar-nav ms-auto">
                <li class="nav-item"><a class="nav-link" data-lte-toggle="fullscreen"><i class="bi bi-arrows-fullscreen"></i></a></li>
            </ul>
        </div>
    </nav>

    <!-- Sidebar -->
    <aside class="app-sidebar bg-body-secondary shadow" data-bs-theme="dark">
          <div class="sidebar-brand">
            <a href="{{ route('admin.dashboard') }}" class="brand-link">
                <span class="brand-text fw-light">AdminLTE 4</span>
            </a>
        </div>

       <style>
    /* Sidebar Custom Styling */
    .main-sidebar {
        background: linear-gradient(180deg, #0a0a0a, #1c1c1c);
        color: #fff;
        min-height: 100vh;
        border-right: 2px solid #ffc107;
    }

    .sidebar-wrapper {
        padding-top: 1rem;
    }

    .sidebar-menu .nav-link {
        color: #bbb;
        font-weight: 500;
        border-radius: 8px;
        transition: all 0.3s ease;
        margin: 2px 5px;
    }

    .sidebar-menu .nav-link:hover {
        background-color: rgba(255, 193, 7, 0.15);
        color: #ffc107;
        transform: translateX(4px);
    }

    .sidebar-menu .nav-link.active {
        background-color: #ffc107 !important;
        color: #000 !important;
        font-weight: 600;
    }

    .sidebar-menu .nav-icon {
        font-size: 1.1rem;
        margin-right: 8px;
        color: #ffc107;
        transition: color 0.3s ease;
    }

    .sidebar-menu .nav-link:hover .nav-icon {
        color: #fff;
    }

    .sidebar-menu .nav-treeview {
        margin-left: 10px;
        border-left: 2px solid rgba(255, 193, 7, 0.3);
        padding-left: 10px;
    }

    .sidebar-menu .nav-treeview .nav-link {
        font-size: 0.9rem;
    }

    .sidebar-menu .nav-treeview .nav-link:hover {
        background: rgba(255, 193, 7, 0.1);
    }

    /* Section headers (optional aesthetic) */
    .sidebar-section-title {
        color: #888;
        font-size: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        padding: 0.75rem 1rem 0.25rem;
    }
</style>

<div class="sidebar-wrapper">
    <nav class="mt-2">
        <ul class="nav sidebar-menu flex-column" data-lte-toggle="treeview" role="menu" data-accordion="false">

            <li class="sidebar-section-title">Main</li>
            <!-- 🧭 Dashboard -->
            <li class="nav-item">
                <a href="{{ route('admin.dashboard') }}" class="nav-link active">
                    <i class="nav-icon bi bi-speedometer2"></i>
                    <p>Dashboard</p>
                </a>
            </li>

            <li class="sidebar-section-title">Management</li>
            <!-- 🛒 Products -->
            <li class="nav-item">
                <a href="#" class="nav-link">
                    <i class="nav-icon bi bi-box-seam"></i>
                    <p>Products <i class="end bi bi-chevron-down"></i></p>
                </a>
                <ul class="nav nav-treeview">
                    <li class="nav-item">
                        <a href="{{ route('admin.products.index') }}" class="nav-link">
                            <i class="bi bi-list-ul nav-icon"></i>
                            <p>All Products</p>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="{{ route('admin.products.create') }}" class="nav-link">
                            <i class="bi bi-plus-square nav-icon"></i>
                            <p>Add Product</p>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="{{ route('admin.products.categories') }}" class="nav-link">
                            <i class="bi bi-tags nav-icon"></i>
                            <p>Categories</p>
                        </a>
                    </li>
                </ul>
            </li>

            <!-- 📦 Orders -->
            <li class="nav-item">
                <a href="#" class="nav-link">
                    <i class="nav-icon bi bi-cart-check"></i>
                    <p>Orders <i class="end bi bi-chevron-down"></i></p>
                </a>
                <ul class="nav nav-treeview">
                    <li class="nav-item">
                        <a href="{{ route('admin.orders.index') }}" class="nav-link">
                            <i class="bi bi-list-task nav-icon"></i>
                            <p>All Orders</p>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="{{ route('admin.orders.history') }}" class="nav-link">
                            <i class="bi bi-clock-history nav-icon"></i>
                            <p>Order History</p>
                        </a>
                    </li>
                </ul>
            </li>

            <!-- 👥 Users -->
            <li class="nav-item">
                <a href="#" class="nav-link">
                    <i class="nav-icon bi bi-people"></i>
                    <p>Users <i class="end bi bi-chevron-down"></i></p>
                </a>
                <ul class="nav nav-treeview">
                    <li class="nav-item">
                        <a href="{{ route('admin.users.index') }}" class="nav-link">
                            <i class="bi bi-person-lines-fill nav-icon"></i>
                            <p>All Users</p>
                        </a>
                    </li>
                </ul>
            </li>

            <li class="sidebar-section-title">System</li>
            <!-- ⚙️ Settings -->
            <li class="nav-item">
                <a href="{{ route('admin.settings.password') }}" class="nav-link">
                    <i class="nav-icon bi bi-gear"></i>
                    <p>Settings</p>
                </a>
            </li>

            <!-- 🧾 Reports -->
            <li class="nav-item">
                <a href="{{ route('admin.reports.index') }}" class="nav-link">
                    <i class="nav-icon bi bi-graph-up"></i>
                    <p>Reports</p>
                </a>
            </li>
        </ul>
    </nav>
</div>

    </aside>

    <!-- Main Content -->
    <main class="app-main">
        <div class="app-content p-3">
             {{ $slot }}
        </div>
    </main>

    <!-- Footer -->
    <footer class="app-footer text-center py-3 bg-body-secondary">
        <strong>&copy; {{ date('Y') }} Admin Panel</strong> — All rights reserved.
    </footer>
</div>

<!-- Scripts -->
<script src="https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/overlayscrollbars@2.11.0/browser/overlayscrollbars.browser.es6.min.js"></script>
<script src="{{ asset('js/adminlte.js') }}"></script>

@livewireScripts
</body>
</html>

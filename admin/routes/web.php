<?php

use Illuminate\Support\Facades\Route;
// 🧭 Dashboard
use App\Livewire\Dashboard;

// 🛒 Products Management
use App\Livewire\Products\Index as ProductsIndex;
use App\Livewire\Products\Create as ProductsCreate;
use App\Livewire\Products\Edit as ProductsEdit;
use App\Livewire\Products\Categories as ProductCategories;

// 📦 Orders Management
use App\Livewire\Orders\Index as OrdersIndex;
use App\Livewire\Orders\Show as OrdersShow;
use App\Livewire\Orders\History as OrdersHistory;

// 👥 User Management
use App\Livewire\Users\Index as UsersIndex;
use App\Livewire\Users\Show as UsersShow;
use App\Livewire\Users\Ban as UsersBan;

// ⚙️ Settings
use App\Livewire\Settings\Password as SettingsPassword;

// 🧾 Reports / Analytics
use App\Livewire\Reports\Index as ReportsIndex;


Route::get('/',function(){
    return view('auth.login');
});

Auth::routes();

Route::middleware('auth')->prefix('admin')->name('admin.')->group(function () {

    // 🧭 Dashboard
    Route::get('/', Dashboard::class)->name('dashboard');

    // 🛒 Products Management
    Route::get('/products', ProductsIndex::class)->name('products.index');
    Route::get('/products/create', ProductsCreate::class)->name('products.create');
    Route::get('/products/edit/{id}', ProductsEdit::class)->name('products.edit');
    Route::get('/categories', ProductCategories::class)->name('products.categories');

    // 📦 Orders Management
    Route::get('/orders', OrdersIndex::class)->name('orders.index');
    Route::get('/orders/{order}', OrdersShow::class)->name('orders.show');
    Route::get('/orders/history', OrdersHistory::class)->name('orders.history');

    // 👥 User Management
    Route::get('/users', UsersIndex::class)->name('users.index');
    Route::get('/users/{user}', UsersShow::class)->name('users.show');
    Route::get('/users/{user}/ban', UsersBan::class)->name('users.ban');

    // ⚙️ Settings
    Route::get('/settings/password', SettingsPassword::class)->name('settings.password');

    // 🧾 Reports / Analytics
    Route::get('/reports', ReportsIndex::class)->name('reports.index');
});

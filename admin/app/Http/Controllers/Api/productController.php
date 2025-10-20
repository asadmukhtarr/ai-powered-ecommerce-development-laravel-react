<?php 
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;

class ProductController extends Controller
{
    public function index()
    {
        return response()->json(Product::with('category:id,name')->get());
    }

    public function show($id)
    {
        return response()->json(Product::with('category:id,name')->findOrFail($id));
    }
}

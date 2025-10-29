<?php 
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Category;

class CategoryController extends Controller
{
    public function index()
    {
        return response()->json(Category::select('id','name')->get());
    }
    public function show($id){
        return response()->json(Category::find($id));
    }
}

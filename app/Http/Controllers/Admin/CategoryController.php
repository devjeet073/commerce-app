<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\CategoryResource;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class CategoryController extends Controller
{
    function index()
    {
        $page = request()->input('page', 1);
        $per_page = request()->input('per_page', 5);
        $categories = Category::paginate($per_page, ['*'], $page);

        return Inertia::render('Auth/Category/Index', [
            'status' => session('status'),
            'categories' => Inertia::merge(new CategoryResource($categories))
        ]);
    }

    public function store(Request $request)
    {
        $requestValidated = $request->validate([
            'name' => ['required', 'max:50'],
            'email' => ['required', 'max:50', 'email'],
        ]);
        Category::create($requestValidated);

        return to_route('category.index');
    }
}

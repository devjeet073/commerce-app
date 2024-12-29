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
        $sortColumnName = request()->input('sortColumnName', 'name');
        $sort = request()->input('sort', 'asc');
        $search = request()->input('search', '');
        $categories = Category::when(!empty($search), function ($q) use ($search) {
            $q->where('name', 'like', '%' . $search . '%');
        })->orderBy($sortColumnName, $sort)->paginate(5)->withQueryString();

        return Inertia::render('Auth/Category/Index', [
            'status' => session('status'),
            'filter' => ['search' => $search, 'sort' => ['columnName' => $sortColumnName, 'type' => $sort]],
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

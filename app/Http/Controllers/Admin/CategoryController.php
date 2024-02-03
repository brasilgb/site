<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Meta;
use App\Models\Category;
use App\Models\Settings;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;
use Illuminate\Support\Str;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
         $search = $request->get('q');

        $query = Category::with('posts')->orderBy('id', 'desc');

        if ($search) {
            $query->where('name', 'like', '%' . $search . '%');
        }

        $categories = $query->paginate(10);

        return Inertia::render('Admin/Categories/index', ['categories' => $categories]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $categories = Category::get();
        return Inertia::render('Admin/Categories/addCategory', ['categories' => $categories]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->all();
        $messages = [
            'required' => 'O campo :attribute deve ser preenchido!'
        ];
        $request->validate(
            [
                'name' => ['required'],
                'module' => ['required'],
            ],
            $messages,
            [
                'name' => 'categoria',
                'module' => 'módulo',
            ]
        );

        $data['parent'] = $request->parent;
        $data['slug'] = Str::slug('cat '.$request->name);
        Category::create($data);
        Session::flash('success', 'Categoria criada com sucesso!');
        return Redirect::route('categories.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function show(Category $category)
    {
        $parent = Category::orderByDesc('name')->get();
        return Inertia::render('Admin/Categories/editCategory', ['category' => $category, 'parent' => $parent]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function edit(Category $category)
    {
        return redirect()->route('categories.show', ['category' => $category->id]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Category $category)
    {
        $data = $request->all();

        $messages = [
            'required' => 'O campo :attribute deve ser preenchido!'
        ];
        $request->validate(
            [
                'name' => ['required'],
                'module' => ['required'],
            ],
            $messages,
            [
                'name' => 'categoria',
                'module' => 'módulo',
            ]
        );
        $data['slug'] = Str::slug('cat '.$request->name);
        $data['parent'] = $request->parent;
        $category->update($data);
        Session::flash('success', 'Categoria editada com sucesso!');
        return redirect()->route('categories.show', ['category' => $category->id]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy(Category $category)
    {
        $category->delete($category);
        Session::flash('success', 'Categoria deletada com sucesso!');
        return redirect()->route('categories.index');
    }
}

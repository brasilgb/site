<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Meta;
use App\Models\Category;
use App\Models\Post;
use App\Models\Settings;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;
use Illuminate\Support\Str;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {        
       
        $search = $request->get('q');

        $query = Post::with('categories')->where('type', 2)->orderBy('id', 'desc');

        if ($search) {
            $query->where('title', 'like', '%' . $search . '%');
        }

        $products = $query->paginate(10);

        return Inertia::render('Admin/Products/index', ['products' => $products]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $categories = Category::where('module', 2)->get();
        return Inertia::render('Admin/Products/addProduct', ['categories' => $categories]);
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
            'required' => 'O campo :attribute deve ser preenchido!',
            'numeric' => 'O campo :attribute somente números!',
        ];
        $request->validate(
            [
                'brand' => ['required'],
                'title' => ['required'],
                // 'summary' => ['required'],
                // 'content' => ['required'],
                'category_id' => ['required'],
                'featured' => ['required'],
                'valnormal' => ['nullable', 'numeric'],
                'valpromo' => ['nullable', 'numeric']
            ],
            $messages,
            [
                'brand' => 'marca',
                'title' => 'título',
                'summary' => 'resumo',
                'content' => 'conteúdo',
                'category_id' => 'categoria',
                'featured' => 'imagem destacada',
                'valnormal' => 'valor normal',
                'valpromo' => 'valor com desconto'
            ]
        );
        $storePath = public_path('storage/uploads');
        if (!file_exists($storePath)) {
            mkdir($storePath, 0777, true);
        };
        if ($request->hasfile('featured')) {
            $fileName = time() . '.' . $request->featured->extension();
            $request->featured->move($storePath, $fileName);
        }

        $data['slug'] = Str::slug('pro '.$request->title);
        $data['featured'] = $request->hasfile('featured') ? $fileName : Null;
        Post::create($data);

        $product = Post::orderByDesc('id')->first();
        $product->categories()->attach($request->category_id);

        Session::flash('success', 'Produto cadastrado com sucesso!');
        return redirect()->route('products.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Post  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Post $product)
    {
        $categories = Category::where('module', 2)->get();
        return Inertia::render('Admin/Products/editProduct', ['categories' => $categories, 'product' => $product, 'productCategory' => $product->categories]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Post  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Post $product)
    {

        return Redirect::route('products.show', ['product' => $product->id]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Post  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Post $product)
    {
        $data = $request->all();

        $messages = [
            'required' => 'O campo :attribute deve ser preenchido!',
            'numeric' => 'O campo :attribute somente números!',
        ];
        $request->validate(
            [
                'brand' => ['required'],
                'title' => ['required'],
                // 'summary' => ['required'],
                // 'content' => ['required'],
                // 'category_id' => ['required'],
                'featured' => ['required'],
                'valnormal' => ['nullable', 'numeric'],
                'valpromo' => ['nullable', 'numeric']
            ],
            $messages,
            [
                'brand' => 'marca',
                'title' => 'título',
                // 'summary' => 'resumo',
                // 'content' => 'conteúdo',
                // 'category_id' => 'categoria',
                'featured' => 'imagem destacada',
                'valnormal' => 'valor normal',
                'valpromo' => 'valor com desconto'
            ]
        );
        $storePath = public_path('storage/uploads');
        if ($request->hasfile('featured')) {
            $fileName = time() . '.' . $request->featured->extension();
            $request->featured->move($storePath, $fileName);
            if (file_exists($storePath . DIRECTORY_SEPARATOR . $product->featured)) {
                unlink($storePath . DIRECTORY_SEPARATOR . $product->featured);
            }
        }

        $data['slug'] = Str::slug('pro '.$request->title);
        $data['featured'] = $request->hasfile('featured') ? $fileName : $product->featured;
        $product->update($data);

        if ($request->category_id != null) {
            $producta = Post::find($product->id);
            $producta->categories()->sync($request->category_id);
        }

        Session::flash('success', 'Produto alterado com sucesso!');
        return Redirect::route('products.show', ['product' => $product->id]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Post  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Post $product)
    {
        $storePath = public_path('storage/uploads');
        if (file_exists($storePath . DIRECTORY_SEPARATOR . $product->featured)) {
            unlink($storePath . DIRECTORY_SEPARATOR . $product->featured);
        }
        $product->categories()->detach();
        $product->delete($product);

        Session::flash('success', 'Produto deletado com sucesso!');
        return Redirect::route('products.index');
    }
}

<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Meta;
use App\Models\Category;
use App\Models\Section;
use App\Models\Settings;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class SectionController extends Controller
{
    public function index()
    {        
       
        if (!Section::count()) :
            Section::create(['section1' => null]);
        endif;
        $section = Section::first();
        $categories = Category::get();

        return Inertia::render('Admin/Section/index', [ 'categories' => $categories, 'section' => $section]);
    }

    public function update(Request $request, Section $section) {
        $data = $request->all();
        $section->update($data);
        Session::flash('success', 'Home do site editada com sucesso!');
        return Redirect::route('sections.index');
    }
}

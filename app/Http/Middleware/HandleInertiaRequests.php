<?php

namespace App\Http\Middleware;

use App\Models\Category;
use App\Models\Post;
use App\Models\Settings;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'flash' => [
                'message' => fn () => $request->session()->get('success')
            ],
            'auth' => [
                'user' => $request->user(),
            ],
            'conf' => fn () => [
                Settings::orderBy('id', 'DESC')->first(),
            ],
            'cat' => fn () => [
                Category::where('active', 1)->with('subCategories')->orderBy('id', 'DESC')->get(),
            ],
            'pag' => fn () => [
                Post::where('type', 0)->orderBy('id', 'DESC')->get(),
            ],
            'userexist' => fn () => [
                DB::table('users')->where('id', '>', 1)->exists()
            ],
        ];
    }
}

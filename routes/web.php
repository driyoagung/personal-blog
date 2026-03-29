<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\PostController;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/login', function () {
    return Inertia::render('Auth/Login');
});

Route::prefix('admin')->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('Admin/Dashboard');
    });
    Route::get('posts', function () {
        return Inertia::render('Admin/Posts');
    });
    Route::get('projects', function () {
        return Inertia::render('Admin/Projects');
    });
    Route::get('categories', function () {
        return Inertia::render('Admin/Categories');
    });
    Route::get('settings', function () {
        return Inertia::render('Admin/Settings');
    });
});

Route::get('/contact', function () {
    return Inertia::render('Contact');
});

Route::get('/categories', function () {
    return Inertia::render('Categories');
});

Route::get('/projects', function () {
    return Inertia::render('Projects');
});

Route::get('/article', function () {
    return Inertia::render('Post');
});

Route::resource('posts', PostController::class);
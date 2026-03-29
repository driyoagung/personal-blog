<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\PostController;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
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
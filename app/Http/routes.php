<?php

/*
|--------------------------------------------------------------------------
| Routes File
|--------------------------------------------------------------------------
|
| Here is where you will register all of the routes in an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

// Unauthed
Route::get('/', function () { return view('unauthed.index'); });
Route::get('faq', function () { return view('unauthed.faq'); });
Route::get('about', function () { return view('unauthed.about'); });
Route::get('contact', function () { return view('unauthed.contact'); });

// Authed
Route::get('home', function () { return view('authed.index'); });

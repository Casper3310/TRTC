<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('Station', 'StationController');
Route::resource('Circleline_Station', 'CirclelineStationController');
Route::resource('DeviceList', 'DeviceListController');
Route::resource('DeviceType', 'DeviceTypeController');
Route::resource('Device', 'DeviceController');
Route::get('Device/{station}/{list}', 'DeviceController@Device');

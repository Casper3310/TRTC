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

Route::prefix('Device')->group(function(){
    Route::resource('DeviceEarth', 'DeviceEarthController');
    Route::resource('DeviceFireBox', 'DeviceFireBoxController');
    Route::resource('DeviceLight', 'DeviceLightController');
    Route::resource('DevicePump', 'DevicePumpController');
    Route::resource('DeviceSmokeDetector', 'DeviceSmokeDetectorController');
    Route::resource('DeviceSocket', 'DeviceSocketController');
});

Route::resource('Circleline_Station', 'CirclelineStationController');
Route::resource('Device', 'DeviceController');


Route::group(['prefix' => 'auth' ],function () {
    Route::post('register', 'AuthController@register');
    Route::post('login', 'AuthController@login');
    Route::group(['middleware' => 'auth:api' ],function () {
        Route::get('logout', 'AuthController@logout');
    });

});

Route::group(['prefix' => 'uesr' ],function () {
    Route::group(['middleware' => 'auth:api' ],function () {
        Route::post('create_water', function () {
            return response()->json(['message' => '水電操作', 'statu' => '200'], 200);
        })->middleware('scope:manipulate_water,do_anything');

        Route::post('create_fire', function () {
            return response()->json(['message' => '消防操作', 'statu' => '200'], 200);
        })->middleware('scope:manipulate_fire,manipulate_water');
    });
});

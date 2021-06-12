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


Route::prefix('auth')->group(function () {
    Route::post('register', 'AuthController@register');
    Route::post('login', 'AuthController@login');
    Route::middleware(['auth:api'])->group(function(){
        Route::get('logout', 'AuthController@logout');
    });
    
});



Route::group(['prefix' => 'uesr' ],function () {
    Route::group(['middleware' => 'auth:api' ],function () {
        Route::middleware(['scope:manipulate_water'])->group(function(){
            Route::post('create_water', function () {
                return response()->json(['message' => '水電操作', 'statu' => '200'], 200);
            }); 
        });
        
        Route::middleware(['scope:manipulate_fire'])->group(function(){
            Route::post('create_fire', function () {
                return response()->json(['message' => '消防操作', 'statu' => '200'], 200);
            });
        });
    });
    Route::post('create_fire', function () {
        return response()->json(['message' => '消防操作', 'statu' => '200'], 200);
    });
});

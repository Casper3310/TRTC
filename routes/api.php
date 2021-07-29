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

Route::get('aaa', 'AuthController@sss');

Route::prefix('Device')->group(function(){
    Route::middleware(['auth:api'])->group(function(){
        Route::middleware(['scope:manipulate_water'])->group(function(){
            Route::resource('DeviceEarth', 'DeviceEarthController',['except' => ['show']]);
            Route::resource('DeviceLight', 'DeviceLightController',['except' => ['show']]);
            Route::resource('DevicePump', 'DevicePumpController',['except' => ['show']]);
            Route::resource('DeviceSocket', 'DeviceSocketController',['except' => ['show']]);
        });
        Route::middleware(['scope:manipulate_fire'])->group(function(){
            Route::resource('DeviceFireBox', 'DeviceFireBoxController',['except' => ['show']]);
            Route::resource('DeviceSmokeDetector', 'DeviceSmokeDetectorController',['except' => ['show']]);
        });
    });
    
    Route::get('DeviceEarth/{DeviceEarth}', 'DeviceEarthController@show');
    Route::get('DeviceLight/{DeviceLight}', 'DeviceLightController@show');
    Route::get('DevicePump/{DevicePump}', 'DevicePumpController@show');
    Route::get('DeviceSocket/{DeviceSocket}', 'DeviceSocketController@show');
    Route::get('DeviceFireBox/{DeviceFireBox}', 'DeviceFireBoxController@show');
    Route::get('DeviceSmokeDetector/{DeviceSmokeDetector}', 'DeviceSmokeDetectorController@show');
    Route::resource('TempSenser', 'TempSenserController');

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

Route::prefix('Chat')->group(function () {
    Route::get('LoadChatUser', 'ChatController@LoadChatUser');
    Route::get('Room', 'ChatController@rooms');
    Route::get('Room/{roomId}/messages', 'ChatController@message');
    Route::post('Room/{roomId}/message', 'ChatController@newMessage');
});

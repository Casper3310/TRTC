<?php

namespace App\Http\Controllers;

use App\Station;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class StationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {     
        $station = Station::orderBy('created_at','desc')-> paginate();
        return response()->json($station, 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|min:3',
            'device' => 'required|min:3',
            'image' => 'required|image|mimes:jpeg,png,jpg'
        ]);
        $station = New Station();
        $station->name = $request->name;
        $station->device = $request->device;
        $path = $request->file('image')->store('station_image');
        $station->image = $path;
        if($station->save()){
            return response()->json($station, 200);
        }else{
            return response()->json($station, 500);
        };

        dd($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Station  $station
     * @return \Illuminate\Http\Response
     */
    public function show(Station $station)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Station  $station
     * @return \Illuminate\Http\Response
     */
    public function edit(Station $station)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Station  $station
     * @return \Illuminate\Http\Response
     */
    public function update( Request $request, $id)
    {  
        $request->validate([
            'name' => 'required|min:3',
            'device' => 'required|min:3'
        ]);
        $station = Station::find($id);
        $station->name = $request->name;
        $station->device = $request->device;
        $file = $request->file('image');
        if($file){
            $request->validate([
                'image' => 'image|mimes:jpeg,png,jpg'
            ]);
            Storage::delete($station->image);
            $path = $request->file('image')->store('station_image');
            $station->image = $path;
        }
        if($station->save()){
            return response()->json($station, 200);
        }else{
            return response()->json($station, 500);
        };
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Station  $station
     * @return \Illuminate\Http\Response
     */
    public function destroy( $id)
    {
        $item = Station::find($id);
        if($item->delete()){
            Storage::delete($item->image);
            return response()->json([
                'message'=>'成功刪除',
                'status'=>'200'
            ], 200);
        }else{
            return response()->json([
                'message'=>'錯誤',
                'status'=>'500'
            ], 500);
        }
    }
}

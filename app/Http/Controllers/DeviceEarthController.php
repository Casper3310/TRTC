<?php

namespace App\Http\Controllers;

use App\device_earth;
use Illuminate\Http\Request;

class DeviceEarthController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
            'Circleline_Station_id'=>'required|alpha_num',
            'name' => 'required',
            'place' => 'required',
            'image' => 'image|mimes:jpeg,png,jpg',
        ]);

        $Device = New device_earth();
        $Device->Circleline_Station_id = $request->Circleline_Station_id;
        $Device->name = $request->name;
        $Device->place = $request->place;
        $path="";
        if($request->file('image')){
            $path = $request->file('image')->store('image');
        }
        $Device->image = $path;
        if($Device->save()){
            return response()->json(["data"=>$Device,"message"=>"新增成功","statu_code"=>"200"], 200);
        }else{
            return response()->json(["data"=>$Device,"message"=>"新增失敗","statu_code"=>"500"], 500);
        };
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\device_earth  $device_earth
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
        $DeviceData = device_earth::where('Circleline_Station_id',$request->stationID)->orderBy('updated_at', 'desc')->get();
        return response()->json(["data"=>$DeviceData,"message"=>"成功","statu_code"=>"200"], 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\device_earth  $device_earth
     * @return \Illuminate\Http\Response
     */
    public function edit(device_earth $device_earth)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\device_earth  $device_earth
     * @return \Illuminate\Http\Response
     */
    public function update($DeviceId,Request $request)
    {
        $request->validate([
            'Circleline_Station_id'=>'required|alpha_num',
            'name' => 'required',
            'place' => 'required',
            'image' => 'image|mimes:jpeg,png,jpg',
        ]);

        $Device = device_earth::find($DeviceId);
        $Device->Circleline_Station_id = $request->Circleline_Station_id;
        $Device->name = $request->name;
        $Device->place = $request->place;
        $Device->updated_at = date('Y-m-d H:i:s');
        if($request->file('image')){
            if ($Device->image) {
                Storage::delete($Device->image);
            }
            $path = $request->file('image')->store('image');
            $Device->image = $path;
        }

        if($Device->save()){
            return response()->json(["data"=>$Device,"message"=>"更新成功","statu_code"=>"200"], 200);
        }else{
            return response()->json(["data"=>$Device,"message"=>"更新失敗","statu_code"=>"500"], 500);
        };        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\device_earth  $device_earth
     * @return \Illuminate\Http\Response
     */
    public function destroy($DeviceId)
    {
        $item = device_earth::find($DeviceId);
        if($item->delete()){
            if($item->image){
                Storage::delete($item->image);
            }
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

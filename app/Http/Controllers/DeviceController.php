<?php

namespace App\Http\Controllers;

use App\Device;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class DeviceController extends Controller
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
            'device_types_id' => 'required|alpha_num',
            'name' => 'required',
            'devicePlace' => 'required',
            'image' => 'image|mimes:jpeg,png,jpg',
        ]);

        $Device = New Device();
        $Device->Circleline_Station_id = $request->Circleline_Station_id;
        $Device->device_types_id = $request->device_types_id;
        $Device->name = $request->name;
        $Device->place = $request->devicePlace;
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
     * @param  \App\Device  $device
     * @return \Illuminate\Http\Response
     */
    public function show(Request $device)
    {
        $DeviceData = Device::where('Circleline_Station_id',$device->Circleline_Station_id)->where('device_types_id',$device->device_types_id)->get();
        return response()->json(["data"=>$DeviceData,"message"=>"成功","statu_code"=>"200"], 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Device  $device
     * @return \Illuminate\Http\Response
     */
    public function edit(Device $device)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Device  $device
     * @return \Illuminate\Http\Response
     */
    public function update( $id,Request $request)
    {
        $request->validate([
            'Circleline_Station_id'=>'required|alpha_num',
            'device_types_id' => 'required|alpha_num',
            'name' => 'required',
            'devicePlace' => 'required',
            'image' => 'image|mimes:jpeg,png,jpg',
        ]);

        $Device = Device::find($id);
        $Device->Circleline_Station_id = $request->Circleline_Station_id;
        $Device->device_types_id = $request->device_types_id;
        $Device->name = $request->name;
        $Device->place = $request->devicePlace;
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
     * @param  \App\Device  $device
     * @return \Illuminate\Http\Response
     */
    public function destroy( $DeviceId)
    {
        $item = Device::find($DeviceId);
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
    public function Device($station,$list)
    {
        $Device = Device::where('Circleline_Station_id', '=', $station)
                ->where('device_lists_id', '=', $list)
                ->get();
        
        return response()->json([
            'data'=> $Device,
            'message'=>'成功',
            'status'=>'200'
        ], 200);
    }
}

<?php

namespace App\Http\Controllers;

use App\Device_type;
use Illuminate\Http\Request;

class DeviceTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $DeviceType = DeviceType::orderBy('name','ASC')-> paginate();
        return response()->json($DeviceType, 200);
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Device_type  $device_type
     * @return \Illuminate\Http\Response
     */
    public function show(Device_type $device_type)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Device_type  $device_type
     * @return \Illuminate\Http\Response
     */
    public function edit(Device_type $device_type)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Device_type  $device_type
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Device_type $device_type)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Device_type  $device_type
     * @return \Illuminate\Http\Response
     */
    public function destroy(Device_type $device_type)
    {
        //
    }
}

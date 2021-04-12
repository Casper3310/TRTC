<?php

namespace App\Http\Controllers;

use App\DeviceList;
use Illuminate\Http\Request;

class DeviceListController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $DeviceList = DeviceList::orderBy('name','ASC')-> paginate();
        return response()->json($DeviceList, 200);
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
     * @param  \App\DeviceList  $deviceList
     * @return \Illuminate\Http\Response
     */
    public function show(DeviceList $deviceList)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\DeviceList  $deviceList
     * @return \Illuminate\Http\Response
     */
    public function edit(DeviceList $deviceList)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\DeviceList  $deviceList
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, DeviceList $deviceList)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\DeviceList  $deviceList
     * @return \Illuminate\Http\Response
     */
    public function destroy(DeviceList $deviceList)
    {
        //
    }
}

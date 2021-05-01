<?php

namespace App\Http\Controllers;

use App\light;
use Illuminate\Http\Request;

class LightController extends Controller
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\light  $light
     * @return \Illuminate\Http\Response
     */
    public function show($station_id)
    {
        $light = light::where('Circleline_Station_id','=',$station_id)->get();
        return response()->json(["data"=>$light,"message"=>"成功"], 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\light  $light
     * @return \Illuminate\Http\Response
     */
    public function edit(light $light)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\light  $light
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, light $light)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\light  $light
     * @return \Illuminate\Http\Response
     */
    public function destroy(light $light)
    {
        //
    }
}

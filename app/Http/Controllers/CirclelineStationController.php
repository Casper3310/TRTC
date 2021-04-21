<?php

namespace App\Http\Controllers;

use App\Circleline_Station;
use Illuminate\Http\Request;

class CirclelineStationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $station = Circleline_Station::orderBy('codename','ASC')-> paginate();
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Circleline_Station  $circleline_Station
     * @return \Illuminate\Http\Response
     */
    public function show($circleline_Station)
    {
        $station = Circleline_Station::find($circleline_Station);
        $station->Device_type;
        
        foreach ($station->Device_type as $key => $value) {
            $station->Device_type[$key]->DeviceList;
        };
        //return response()->json($station, 200);
        return response($station);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Circleline_Station  $circleline_Station
     * @return \Illuminate\Http\Response
     */
    public function edit(Circleline_Station $circleline_Station)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Circleline_Station  $circleline_Station
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Circleline_Station $circleline_Station)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Circleline_Station  $circleline_Station
     * @return \Illuminate\Http\Response
     */
    public function destroy(Circleline_Station $circleline_Station)
    {
        //
    }
}

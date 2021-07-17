<?php

namespace App\Http\Controllers;

use App\TempSenser;
use Illuminate\Http\Request;
use Carbon\Carbon;

class TempSenserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $TempSenser = TempSenser::orderBy('created_at','ASC')-> paginate();
        return response()->json($TempSenser, 200);
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
            'place' => 'required',
        ]);

        $TempSenser = New TempSenser();
        $TempSenser->Circleline_Station_id = $request->Circleline_Station_id;
        $TempSenser->place = $request->place;
        $TempSenser->temperature = $request->temperature;
        $TempSenser->humidity = $request->humidity;

        if($TempSenser->save()){
            return response()->json(["data"=>$TempSenser,"message"=>"新增成功","statu_code"=>"200"], 200);
        }else{
            return response()->json(["data"=>$TempSenser,"message"=>"新增失敗","statu_code"=>"500"], 500);
        };
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\TempSenser  $tempSenser
     * @return \Illuminate\Http\Response
     */
    public function show( Request $request)
    {
        //2021-07-16
        //$tempData = TempSenser::whereDate('created_at', '>=', $request->dateStart)
        //->whereDate('created_at', '<=', $request->dateEnd)->orderBy('created_at','ASC')->get();
        //return response()->json(["data"=>$tempData,"message"=>"成功","statu_code"=>"200"], 200);
        $tempData = TempSenser::whereDate('created_at', '=', $request->dateStart)->get();
        if(count($tempData) === 0){
            return response()->json(["message"=>"無資料","statu_code"=>"200"], 200);
        }
        else{         
            return response()->json(["data"=>$tempData,"message"=>"成功","statu_code"=>"200"], 200);
        }
        
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\TempSenser  $tempSenser
     * @return \Illuminate\Http\Response
     */
    public function edit(TempSenser $tempSenser)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\TempSenser  $tempSenser
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, TempSenser $tempSenser)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\TempSenser  $tempSenser
     * @return \Illuminate\Http\Response
     */
    public function destroy(TempSenser $tempSenser)
    {
        //
    }
}

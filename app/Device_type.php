<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Device_type extends Model
{
    public function Circleline_Station(){
        return $this->belongsToMany(Circleline_Station::class,'devices','device_types_id','Circleline_Station_id');
    }
    
    public function DeviceList(){
        return $this->hasMany(DeviceList::class,'devices','device_types_id','Device_types_id');
    }

}

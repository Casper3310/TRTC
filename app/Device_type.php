<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Device_type extends Model
{
    
    public function DeviceList(){
        return $this->hasMany(DeviceList::class,'Device_types_id');
    }

    public function Device(){
        return $this->hasMany(Device::class,'device_types_id');
    }

    public function Circleline_Station(){
        return $this->belongsToMany(Circleline_Station::class,'devices','device_types_id','Circleline_Station_id');
    }

}

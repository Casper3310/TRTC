<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Circleline_Station extends Model
{
    /*public function Device(){
        return $this->hasMany(Device::class,'Circleline_Station_id');
    }*/

    public function Device_type(){
        return $this->belongsToMany(Device_type::class,'devices','Circleline_Station_id','device_types_id');
    }

    public function DeviceList(){
        return $this->belongsToMany(DeviceList::class,'devices','Circleline_Station_id','device_lists_id');
    }

}

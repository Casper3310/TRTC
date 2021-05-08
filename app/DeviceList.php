<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DeviceList extends Model
{
    public function Circleline_Station(){
        return $this->belongsToMany(Circleline_Station::class,'devices','device_lists_id','Circleline_Station_id');
    }

    public function Device_type(){
        return $this->belongsToMany(Device_type::class,'devices','device_lists_id','device_types_id');
    }
    
}

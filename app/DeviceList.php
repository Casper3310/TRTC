<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DeviceList extends Model
{
    public function Device_type(){
        return $this->belongsTo(Device_type::class,'device_types_id');
    }

    public function Device(){
        return $this->hasMany(Device::class,'device_lists_id');
    }

    public function Circleline_Station(){
        return $this->belongsToMany(Circleline_Station::class,'devices','device_lists_id','Circleline_Station_id');
    }
}

<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Device extends Model
{
    public function Circleline_Station(){
        return $this->belongsTo(Circleline_Station::class,'Circleline_Station_id');
    }

    public function Device_type(){
        return $this->belongsTo(Device_type::class,'device_types_id');
    }

    public function DeviceList(){
        return $this->belongsTo(DeviceList::class,'device_lists_id');
    }
}

<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Device_type extends Model
{
    public function Circleline_Station(){
        return $this->belongsTo(Circleline_Station::class,'Circleline_Station_id');
    }
    
    public function DeviceList(){
        return $this->hasMany(DeviceList::class,'Device_types_id');
    }

}

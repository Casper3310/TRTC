<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DeviceList extends Model
{
    public function Device_type(){
        return $this->belongsTo(Device_type::class,'device_types_id');
    }
}

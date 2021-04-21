<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Device extends Model
{
    public function Device_list(){
        return $this->belongsTo(Device_list::class,'device_lists_id');
    }
}

<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Circleline_Station extends Model
{
    public function Device(){
        return $this->hasMany(Device::class,'Circleline_Station_id');
    }
}

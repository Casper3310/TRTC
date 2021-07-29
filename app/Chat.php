<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Chart extends Model
{
    public function Room(){
        return $this->hasOne('App\ChatRoom','id','Chat_Room_id');
    }

    public function user(){
        return $this->hasOne('App\User','id','User_id');
    }
}

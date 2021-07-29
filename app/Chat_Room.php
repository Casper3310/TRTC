<?php

namespace App;

//use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chat_Room extends Model
{
    //use HasFactory;
    
    public function messages(){
        return $this->hasMany('App\ChatMessage');
    }
}

<?php

namespace App\Http\Controllers;

use DB;

use App\Chat_Room;
use App\ChatMessage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ChatController extends Controller
{
    public function rooms( Request $request){
        return Chat_Room::all();
    }

    public function message(Request $request,$roomId){
        return ChatMessage::where('chat_room_id','=',$roomId)
        ->with('user')
        ->orderBy('created_at','DESC')
        ->get();
    }

    public function newMessage(Request $request,$roomId){
        $newMessage = new ChatMessage;
        $newMessage->user_id = $request->userId;
        $newMessage->Chat_Room_id = $roomId;
        $newMessage->message = $request->message;
        $newMessage->save();
        return $newMessage;
    }
   
}

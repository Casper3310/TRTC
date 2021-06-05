<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Auth;
use Carbon\Carbon;

class AuthController extends Controller
{
    public function register(Request $request)
    {

        $request->validate([
            'name' => 'required|string|max:20',
            'email' => 'required|string|email',
            'password' => 'required|string|confirmed'
        ]);

        $user = new User();

        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);

        if ($user->save()) {
            return response()->json(['mseeage' => '申請成功', 'statu' => '200'], 200);
        } else {
            return response()->json(['mseeage' => '失敗', 'statu' => '500'], 500);
        }
    }

    public function login(Request $request)
    {

        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
            'remember_me' => 'boolean'
        ]);
        if (!Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            return response()->json(['message' => '登入失敗', 'statu' => '500'], 500);
        }

        $user = $request->user();
        switch ($user->role) {
            case 'admin':
                $tokendata = $user->createToken('管理者', ['do_anything']);
                break;
            case 'water':
                $tokendata = $user->createToken('水系統', ['manipulate_water']);
                break;
            case 'fire':
                $tokendata = $user->createToken('消防系統', ['manipulate_fire']);
                break;
            default:
                # code...
                break;
        }
        $token = $tokendata->token;
        if ($request->remember_me) {
            $token->expires_at = Carbon::now()->addWeeks(1);
        }

        if ($token->save()) {
            return response()->json([
                'user' => $tokendata,
                'access_token' => $tokendata->accessToken,
                'token_type' => 'Bearer',
                'token_scope' => $tokendata->token->scopes[0],
                'expires_at' => Carbon::parse($tokendata->token->expires_at)->toDateTimeString(),
                'statu' => 200
            ], 200);
        }
    }

    public function logout(Request $request)
    {
        $request->user()->token()->revoke();
        return response()->json(['message' => '登出成功', 'statu' => '200'], 200);
    }
}

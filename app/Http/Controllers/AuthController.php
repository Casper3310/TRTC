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

        $headers = array(
            'Content-Type: multipart/form-data',
            'Authorization: Bearer R00oWyw0zUNwmP7YRwypGBKIamQiqkDjE78JKbinxIH'
        );
        $message = array(
            'message' => $request->name . "申請帳號，確認權限"
        );
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, "https://notify-api.line.me/api/notify");
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $message);
        curl_exec($ch);
        curl_close($ch);

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
                $tokendata = $user->createToken('管理者', ['manipulate_water', 'manipulate_fire']);
                break;
            case 'water':
                $tokendata = $user->createToken('新增刪除水系統', ['manipulate_water']);
                break;
            case 'fire':
                $tokendata = $user->createToken('新增刪除消防系統', ['manipulate_fire']);
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
                'accessToken' => $tokendata->accessToken,
                'token_type' => 'Bearer',
                'token_scopes' => $tokendata->token->scopes,
                'name' => $tokendata->token->name,
                'expires_at' => Carbon::parse($tokendata->token->expires_at)->toDateTimeString(),
                'statu' => 200,
            ], 200);
        }
    }

    public function logout(Request $request)
    {
        $request->user()->token()->revoke();
        return response()->json(['message' => '登出成功', 'statu' => '200'], 200);
    }
}

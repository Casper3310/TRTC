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
        //建立curl連線
        $ch = curl_init();
        //設定網址，表頭，方式
        curl_setopt($ch, CURLOPT_URL, "https://notify-api.line.me/api/notify");
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $message);
        //執行curl
        curl_exec($ch);
        //關閉curl連線
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
                $tokendata = $user->createToken('管理者', ['manipulate_water','manipulate_fire','manipulate_BMS','manipulate_AirConditioner','manipulate_Escalator','manipulate_elevator','Admin']);
                break;
            case 'water':
                $tokendata = $user->createToken('水電股', ['manipulate_water','manipulate_fire']);
                break;
            case 'air':
                $tokendata = $user->createToken('空調股', ['manipulate_BMS','manipulate_AirConditioner']);
                break;
            case 'ele':
                $tokendata = $user->createToken('電梯股', ['manipulate_Escalator','manipulate_elevator']);
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
                'user_name' => $user->name,
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

    public function sss()
    {
        $url = "https://trtccod.app/covid-health-report/actions.min.php";
        // 28135詹克家 28127邱資善 22214謝汶益 21513張展榮 28133陳志槐 28399陳彥誌 28389江智傑
        // 22185江秋遠 28138趙珮伶 28131周俊佑 20941沈旻頡 26566張智傑 26901朱宇凡 21288尤耀堂
        $ID_list = ["28129", "28135", "28127", "22214", "21513", "28399",
        "28133", "28399", "22185", "28138", "28131", "20941", "26566", "26901", "21288"];
        
        $data = array(
            'function' => "write-data", 
            'temp' => 36.4,
            'eid' => 1623,
            'symptom_fever' => false,
            'symptom_cough' => false,
            'symptom_tired' => false,
            'symptom_breathe' => false,
            'symptom_sorethroat' => false,
            'symptom_headache' => false,
            'symptom_muscleache' => false,
            'symptom_diarrhea' => false,
            'symptom_losttaste' => false);
            
        $header = array(
            'application/x-www-form-urlencoded; charset=UTF-8'
        );
        $user_agent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36';

        for ($i=0; $i < count($ID_list) ; $i++) { 
            $temp = rand(358,369)/10;
            $data['eid'] = $ID_list[$i];
            $data['temp'] = $temp;

            $curlobj = curl_init();
        curl_setopt($curlobj, CURLOPT_URL, $url);
        curl_setopt($curlobj, CURLOPT_RETURNTRANSFER, true); // 只是下載頁面內容，不直接
        curl_setopt($curlobj, CURLOPT_POST, 1); // 此請求為 post 請求
        curl_setopt($curlobj, CURLOPT_POSTFIELDS, http_build_query($data)); // 傳遞 post 參數
        curl_setopt($curlobj, CURLOPT_HTTPHEADER, $header); // 設置 HTTP Header
        curl_setopt($curlobj, CURLOPT_SSL_VERIFYPEER, FALSE);//爲php關閉curl驗證證書
        curl_setopt($curlobj, CURLOPT_USERAGENT, $user_agent); // 偽造一個 HTTP_USER_AGENT 信息，解決為將對象引用設置到對象的實例問題
        curl_exec($curlobj);
        curl_close($curlobj);
        };
        return curl_errno($curlobj);
    }
}

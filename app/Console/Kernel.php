<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        //
    ];

    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        // $schedule->command('inspire')->hourly();
        $schedule->call(function () {
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
        })->twiceDaily(9, 13);
    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}

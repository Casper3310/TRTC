<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;
use Laravel\Passport\Passport;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        // 'App\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        Passport::routes();
        //Scope 名稱陣列和 Scope 說明。Scope 說明可以是任何你希望的內容，並會在同意授權畫面上顯示給使用者
        Passport::tokensCan([
            'do_anything' => 'admin管理者',
            'manipulate_water' => 'water水電設備',
            'manipulate_fire' => 'fire消防設備',
            'read' => 'visitor其他'
        ]);
    }
}

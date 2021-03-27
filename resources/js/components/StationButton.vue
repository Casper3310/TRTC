<template>
<div>
<div>
        <p>選擇車站</p>
</div>
    <div class="stationbutton">
        <router-link class="btn btn-outline-primary btn-lg" to="b1" href="#">南機廠</router-link>
        <router-link class="btn btn-outline-primary btn-lg" to="Y8" href="#">Y8秀朗橋</router-link>
        <router-link class="btn btn-outline-primary btn-lg" to="Y9" href="#">Y9景平</router-link>
        <router-link class="btn btn-outline-primary btn-lg" to="Y10" href="#">Y10景安</router-link>
        <router-link class="btn btn-outline-primary btn-lg" to="Y11" href="#">Y11中和</router-link>
        <router-link class="btn btn-outline-primary btn-lg" to="Y12" href="#">Y12橋和</router-link>
        <router-link class="btn btn-outline-primary btn-lg" to="Y13" href="#">Y13中原</router-link>
        <router-link class="btn btn-outline-primary btn-lg" to="Y14" href="#">Y14板新</router-link>
        <router-link class="btn btn-outline-primary btn-lg" to="Y15" href="#">Y15板橋</router-link>
        <router-link class="btn btn-outline-primary btn-lg" to="Y16" href="#">Y16新埔民生</router-link>
        <router-link class="btn btn-outline-primary btn-lg" to="Y17" href="#">Y17頭前庄</router-link>
        <router-link class="btn btn-outline-primary btn-lg" to="Y18" href="#">Y18幸福</router-link>
        <router-link class="btn btn-outline-primary btn-lg" to="Y19" href="#">Y19新北產業園區</router-link>
    </div>
</div>
    
</template>
<style>
p{
    text-align: center;
    font-size: 50px;
}
.stationbutton{
    margin: auto;
    width: 800px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.stationbutton a{
    margin: 10px; 
}

</style>
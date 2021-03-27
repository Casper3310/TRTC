<template>
    <div>
        <p>水電設備</p>
        <hr>
        <div class="stationbutton">           
        <router-link class="btn btn-outline-primary btn-lg" to="Y9/light">照明</router-link>
        <router-link class="btn btn-outline-primary btn-lg" to="Y9/socket">插座</router-link>
        <router-link class="btn btn-outline-primary btn-lg" to="Y9/pump">泵浦</router-link>
        <router-link class="btn btn-outline-primary btn-lg" to="Y9/earth">接地箱</router-link>
        </div>
        <p>消防設備</p>
            <hr>
        <div class="stationbutton">
        <router-link class="btn btn-outline-primary btn-lg" to="Y9/smoker">偵煙器</router-link>
        <router-link class="btn btn-outline-primary btn-lg" to="Y9/water">水系統</router-link>
        </div>
    </div>
</template>
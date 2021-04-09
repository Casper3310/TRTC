<template>
    <div>
        <p>水電設備</p>
        <hr>
        <div class="stationbutton">           
        <router-link class="btn btn-outline-primary btn-lg" to="light" append>照明</router-link>
        <router-link class="btn btn-outline-primary btn-lg" to="socket" append>插座</router-link>
        <router-link class="btn btn-outline-primary btn-lg" to="pump" append>泵浦</router-link>
        <router-link class="btn btn-outline-primary btn-lg" to="earth" append>接地箱</router-link>
        </div>
        <p>消防設備</p>
            <hr>
        <div class="stationbutton">
        <router-link class="btn btn-outline-primary btn-lg" to="smoker" append>偵煙器</router-link>
        <router-link class="btn btn-outline-primary btn-lg" to="water" append>水系統</router-link>
        </div>
    </div>
</template>
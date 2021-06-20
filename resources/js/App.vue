<template>
    <div>
        <LoginBar></LoginBar>
        <router-link class="title alert alert-primary" to="/"
            >水電資料</router-link
        >
        <StationBar></StationBar>
        <router-view></router-view>
    </div>
</template>
<script>
import StationBar from "./components/StationBar.vue";
import SearchComponent from "./components/SearchComponent.vue";
import DeviceList from "./components/DeviceList.vue";
import LoginBar from "./components/LoginBar.vue";

export default {
    components: {
        StationBar,
        SearchComponent,
        DeviceList,
        LoginBar
    },
    mounted() {
        this.$store.dispatch("SetLogin");
    }
};
</script>
<style>
* {
    margin: 0;
    padding: 0;
    list-style: 0;
}
h1,
h2 {
    text-align: center;
}
.router-link-active {
    background-color: yellow;
    border: yellow 1px solid;
    transform: translateY(-5px);
}
.title {
    display: block;
    text-align: center;
    font-size: 40px;
}
</style>

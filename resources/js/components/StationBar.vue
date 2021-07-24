<template>
    <div>
        <ul class="list_ul">
            <router-link
                v-for="(item, index) in StationList"
                :key="index"
                :to="{ path: `/station/${item.id}` }"
            >
                {{ item.stations_name }}
            </router-link>
            <router-link to="/station/temp">
                溫溼度
            </router-link>
            <router-link v-if="this.$store.state.role.includes('Admin')" to="/">
                管理者頁面
            </router-link>
            <router-link to="/ChatList">
                聊天室
            </router-link>
        </ul>
    </div>
</template>
<script>
import * as stationData_serveice from "../serveices/stationData_serveice";

export default {
    data() {
        return {
            StationList: []
        };
    },
    computed: {},
    mounted() {
        this.LoadStationList();
    },
    methods: {
        LoadStationList: async function() {
            try {
                const res = await stationData_serveice.LoadStationList();
                this.StationList = res.data.data;
            } catch (error) {
                console.log(error);
                this.flashMessage.error({
                    message: "錯誤!",
                    time: 5000
                });
            }
        }
    }
};
</script>
<style>
.list_ul {
    display: flex;
    justify-content: center;
}
.list_ul a {
    align-items: center;
    list-style-type: none;
    border: rgb(7, 9, 139) 1px solid;
    padding: 2px;
    transform: translateY(0px);
}
.list_ul a:hover {
    background-color: yellow;
    border: yellow 1px solid;
    transform: translateY(-5px);
    transition: 0.5s;
    border: rgb(7, 9, 139) 1px solid;
}
</style>

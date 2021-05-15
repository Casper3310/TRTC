<template>
    <div>
        <div>
            <p>選擇車站</p>
        </div>
        <div class="stationbutton">
            <router-link
                v-for="(item, index) in station_list"
                :key="index"
                :to="{ path: `/${item.codename}` }"
                class="btn btn-outline-primary btn-lg"
            >
                {{ item.stations_name }}
            </router-link>
        </div>
    </div>
</template>
<script>
import * as CircleLine_serveice from "../serveices/CircleLine_serveice";

export default {
    data() {
        return {
            station_list: []
        };
    },
    mounted() {
        this.LoadStationList();
    },
    methods: {
        LoadStationList: async function() {
            try {
                const res = await CircleLine_serveice.LoadStationList();
                this.station_list = res.data.data;
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
p {
    text-align: center;
    font-size: 50px;
}
.stationbutton {
    margin: auto;
    width: 800px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.stationbutton a {
    margin: 10px;
}
</style>

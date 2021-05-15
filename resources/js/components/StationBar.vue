<template>
    <div>
        <ul class="list_ul">
            <router-link
                v-for="(item, index) in station_list"
                :key="index"
                :to="{ path: `/${item.codename}` }"
                @click="changeindex(index)"
            >
                {{ item.stations_name }}
            </router-link>
        </ul>
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
    computed: {
        StationList() {
            return this.$store.state.station;
        },
        stationindex() {
            return this;
        }
    },
    mounted() {
        this.$store.dispatch("Loadstation");
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
        },
        changeindex(index) {
            console.log("index");
            console.log(index);
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

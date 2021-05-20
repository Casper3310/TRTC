<template>
    <div>
        <ul class="list_ul">
            <router-link
                v-for="(item, index) in StationList.data"
                :key="index"
                :to="{ path: `/${item.codename}` }"
            >
                <button
                    class="btn btn-warning"
                    @click="ChangeStationID(item.id)"
                >
                    {{ item.stations_name }}
                </button>
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
    },
    methods: {
        ChangeStationID(StationID) {
            this.$store.commit("SetStationID", StationID);
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

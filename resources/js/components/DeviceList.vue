<template>
    <div>
        <div v-if="water.length">
            <p>水電設備</p>
            <hr />
            <div class="stationbutton">
                <router-link
                    v-for="(item, index) in water"
                    :key="index"
                    class="btn btn-outline-primary btn-lg"
                    :to="{
                        name: 'device',
                        params: { deviceID: item.pivot.device_types_id }
                    }"
                    >{{ item.device }}</router-link
                >
            </div>
        </div>
        <div v-if="fire.length">
            <p>消防設備</p>
            <hr />
            <div class="stationbutton">
                <router-link
                    v-for="(item, index) in fire"
                    :key="index"
                    class="btn btn-outline-primary btn-lg"
                    :to="{
                        name: 'device',
                        params: {
                            deviceID: item.pivot.device_types_id
                        }
                    }"
                    >{{ item.device }}</router-link
                >
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
import * as stationData_serveice from "../serveices/stationData_serveice";

export default {
    data() {
        return {
            DeviceList: []
        };
    },
    mounted() {
        this.LoadDeviceList();
    },
    computed: {
        DeviceType() {
            let SortType = [];
            let DeviceListlength = this.DeviceList.length;
            for (let i = 0; i < DeviceListlength; i++) {
                if (!SortType.includes(this.DeviceList[i].type)) {
                    SortType.push(this.DeviceList[i].type);
                }
            }
            return SortType;
        },
        water() {
            return this.DeviceList.filter(item => item.type == "水電");
        },
        fire() {
            return this.DeviceList.filter(item => item.type == "消防");
        }
    },
    methods: {
        LoadDeviceList: async function() {
            try {
                let stationID = parseInt(this.$route.params.stationID);
                const res = await stationData_serveice.LoadDeviceList(
                    stationID
                );
                this.DeviceList = res.data;
            } catch (error) {
                console.log(error);
                this.flashMessage.error({
                    message: "錯誤!",
                    time: 5000
                });
            }
        }
    },
    watch: {
        $route() {
            this.LoadDeviceList();
        }
    }
};
</script>

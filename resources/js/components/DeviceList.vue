<template>
    <div>
        <div>
            <p>水電設備</p>
            <hr />
            <div class="stationbutton">
                <button
                    class="btn btn-outline-primary btn-lg"
                    @click="SetDeviceName(1, '照明', 'DeviceLight')"
                >
                    照明
                </button>
                <button
                    class="btn btn-outline-primary btn-lg"
                    @click="SetDeviceName(2)"
                >
                    插座
                </button>
                <button
                    class="btn btn-outline-primary btn-lg"
                    @click="SetDeviceName(3)"
                >
                    接地
                </button>
                <button class="btn btn-outline-primary btn-lg">泵浦</button>
            </div>
        </div>
        <div>
            <p>消防設備</p>
            <hr />
            <div class="stationbutton"></div>
            <button class="btn btn-outline-primary btn-lg">偵煙器</button>
            <button class="btn btn-outline-primary btn-lg">消防箱</button>
        </div>
        <DevicePlane
            v-if="ShowList"
            :DeviceName="DeviceName"
            :DeviceEnName="DeviceEnName"
            :StationID="StationID"
        ></DevicePlane>
        <div v-else>sss</div>
    </div>
</template>
<script>
import DevicePlane from "./DevicePlane.vue";

export default {
    components: { DevicePlane },
    data() {
        return {
            DeviceName: "",
            DeviceEnName: "",
            StationID: 0,
            ShowList: false
        };
    },
    mounted() {},
    computed: {},
    methods: {
        SetDeviceName(StationID, DeviceName, DeviceEnName) {
            this.DeviceName = DeviceName;
            this.DeviceEnName = DeviceEnName;
            this.StationID = StationID;
            this.ShowList = true;
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
.stationbutton button {
    margin: 10px;
}
</style>

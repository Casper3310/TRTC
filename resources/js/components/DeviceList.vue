<template>
    <div>
        <div>
            <p>水電設備</p>
            <hr />
            <div class="stationbutton">
                <button
                    class="btn btn-outline-primary btn-lg"
                    @click="
                        SetDeviceName(
                            StationID,
                            '照明',
                            'DeviceLight',
                            '水電股'
                        )
                    "
                >
                    照明
                </button>
                <button
                    class="btn btn-outline-primary btn-lg"
                    @click="
                        SetDeviceName(
                            StationID,
                            '插座',
                            'DeviceSocket',
                            '水電股'
                        )
                    "
                >
                    插座
                </button>
                <button
                    class="btn btn-outline-primary btn-lg"
                    @click="
                        SetDeviceName(
                            StationID,
                            '接地',
                            'DeviceEarth',
                            '水電股'
                        )
                    "
                >
                    接地
                </button>
                <button
                    class="btn btn-outline-primary btn-lg"
                    @click="
                        SetDeviceName(StationID, '泵浦', 'DevicePump', '水電股')
                    "
                >
                    泵浦
                </button>
            </div>
        </div>
        <div>
            <p>消防設備</p>
            <hr />
            <div class="stationbutton">
                <button
                    class="btn btn-outline-primary btn-lg"
                    @click="
                        SetDeviceName(
                            StationID,
                            '偵煙器',
                            'DeviceSmokeDetector',
                            '水電股'
                        )
                    "
                >
                    偵煙器
                </button>
                <button
                    class="btn btn-outline-primary btn-lg"
                    @click="
                        SetDeviceName(
                            StationID,
                            '消防箱',
                            'DeviceFireBox',
                            '水電股'
                        )
                    "
                >
                    消防箱
                </button>
            </div>
        </div>
        <DevicePlane
            v-if="ShowList"
            :DeviceName="DeviceName"
            :DeviceEnName="DeviceEnName"
            :StationID="StationID"
            :role="role"
        ></DevicePlane>
        <p v-else>選擇設備</p>
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
            ShowList: false,
            role: ""
        };
    },
    mounted() {
        this.StationID = parseInt(this.$route.params.stationID);
    },
    computed: {},
    methods: {
        SetDeviceName(StationID, DeviceName, DeviceEnName, role) {
            this.DeviceName = DeviceName;
            this.DeviceEnName = DeviceEnName;
            this.StationID = StationID;
            this.ShowList = true;
            this.role = role;
        }
    },
    watch: {
        $route() {
            this.ShowList = false;
            this.StationID = parseInt(this.$route.params.stationID);
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

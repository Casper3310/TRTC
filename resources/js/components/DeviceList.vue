<template>
    <div>
        <p>水電設備</p>
        <hr />
        <div class="stationbutton">
            <router-link
                class="btn btn-outline-primary btn-lg"
                to="light"
                append
                >照明</router-link
            >
            <router-link
                class="btn btn-outline-primary btn-lg"
                to="socket"
                append
                >插座</router-link
            >
            <router-link class="btn btn-outline-primary btn-lg" to="pump" append
                >泵浦</router-link
            >
            <router-link
                class="btn btn-outline-primary btn-lg"
                to="earth"
                append
                >接地箱</router-link
            >
        </div>
        <p>消防設備</p>
        <hr />
        <div class="stationbutton">
            <router-link
                class="btn btn-outline-primary btn-lg"
                to="smoker"
                append
                >偵煙器</router-link
            >
            <router-link
                class="btn btn-outline-primary btn-lg"
                to="water"
                append
                >水系統</router-link
            >
        </div>
    </div>
</template>
<script>
import * as CircleLine_serveice from "../serveices/CircleLine_serveice";

export default {
    data() {
        return { DeviceList: [] };
    },
    mounted() {
        this.LoadDeviceList();
    },
    computed: {
        water() {
            let SortType = [];
            this.DeviceList.forEach(function(item) {
                if (!SortType.length) {
                    SortType.push(item.type);
                }
                SortType.forEach(function(item2) {
                    if (item.type != item2) {
                        SortType.push(item.type);
                    }
                });
            });
            SortType.pop();
            return SortType;
        }
    },
    methods: {
        LoadDeviceList: async function() {
            try {
                const res = await CircleLine_serveice.LoadDeviceList(1);
                this.DeviceList = res.data;
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

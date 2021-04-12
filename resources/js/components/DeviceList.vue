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
<script>
import * as DeviceList_serveice from '../serveices/DeviceList_serveice';

export default {
    data(){
        return{
            DeviceList:[],
            DeviceType:[]
        }
    },
    mounted(){
        this.LoadDeviceList();
    },
    methods:{
        LoadDeviceList:async function(){
            try {
                const res = await DeviceList_serveice.LoadDeviceList();
                this.DeviceList = res.data.data
            } catch (error) {
              console.log(error)
                this.flashMessage.error({
                    message: '錯誤!',
                    time:5000
                    });
            }
        },
        /*LoadDeviceType:async function(){
            try {
                const res = await DeviceList_serveice.LoadDeviceType();
                this.DeviceType = res.data.data
            } catch (error) {
              console.log(error)
                this.flashMessage.error({
                    message: '錯誤!',
                    time:5000
                    });
            }
        }*/
    }
}
</script>
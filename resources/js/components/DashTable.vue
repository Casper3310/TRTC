<template>
    <div>
        <div>
            <button class="btn btn-primary btn-sm" v-on:click="ShowDashTable">新增</button>
            <button class="btn btn-success btn-sm" >讀取</button>
            <button class="btn btn-warning btn-sm" >更新</button>
            <button class="btn btn-danger btn-sm" >刪除</button>
        </div>
        <b-modal ref="dashtable" hide-footer title="輸入資料">
            <div class="d-block">
                <form v-on:submit.prevent="Create">
                    <div class="form-group">
                        <label for="AAA">輸入AAA</label>
                        <input type="text" v-model="stationData.name" class="form-control" id="AAA" placeholder="輸入AAA">
                        <div class="feedback" v-if="error.name">{{error.name[0]}}</div>
                    </div>
                    <div class="form-group">
                        <label for="BBB">輸入BBB</label>
                        <input type="text" v-model="stationData.device" class="form-control" id="BBB" placeholder="BBB">
                        <div class="feedback" v-if="error.device">{{error.device[0]}}</div>
                    </div>
                </form>
                <form>
                    <div class="form-group">
                        <div v-if="stationData.image.name">
                            <img src="" ref="NewimageDisplay" alt="" class="NewimagePreview">
                        </div>
                        <label for="image">選擇圖片</label>
                        <input type="file" v-on:change="attachImage" ref="Newimage" class="form-control" id="image">
                        <div class="feedback" v-if="error.image">{{error.image[0]}}</div>
                    </div>
                </form>
                <hr>
                <div class="text-right">
                    <button type="button" class="btn btn-default" v-on:click="HideDashTable">取消</button>
                <button type="submit" class="btn btn-primary" v-on:click="Create">
                    <span class="fa fa-check">輸入</span>
                </button>
                </div>
            </div>
        </b-modal>
        <FlashMessage :position="'right top'"></FlashMessage>
    </div>
</template>
<script>
import * as stationData_serveice from '../serveices/stationData_serveice';

export default {
  name:'station',
  data(){
    return {
    stationlist:[],
    stationData:{
        name:"",
        device:"",
        image:"",
    },
    error:{}
    }
  },
  mounted(){
      this.LoadStationData();
  },
  methods:{
        LoadStationData:async function(){
            try {
                const res = stationData_serveice.LoadStationData();
                //this.stationlist = response.data.stationData.data;
                console.log(response)
            } catch (error) {
                this.flashMessage.error({
                    message: '錯誤!',
                    time:5000
                    });
                    console.log(error)
            }
        },
        attachImage(){
            this.stationData.image = this.$refs.Newimage.files[0];
            let reader = new FileReader();
            reader.addEventListener('load',function(){
                this.$refs.NewimageDisplay.src = reader.result;
            }.bind(this,false))
            //使用箭頭解決this
            //reader.addEventListener('load',(()=>{
            //    this.$refs.NewimageDisplay.src = reader.result;
            //}))
            reader.readAsDataURL(this.stationData.image);
            
        },
        HideDashTable(){
            this.$refs.dashtable.hide()
        },
        ShowDashTable(){
            this.$refs.dashtable.show()
        },
        Create: async function(){
            let formdata = new FormData();
            formdata.append('name',this.stationData.name);
            formdata.append('device',this.stationData.device);
            formdata.append('image',this.stationData.image);
            try {
                const res = await stationData_serveice.createStationData(formdata);
                this.HideDashTable();
                this.flashMessage.success({
                message: '成功輸入!',
                time:5000
                });
            } catch (error) {
                switch (error.response.status) {
                    case 422:
                        this.HideDashTable();
                        this.error = error.response.data.errors
                        break;               
                    default:
                        this.flashMessage.error({
                        message: '錯誤!',
                        time:5000
                        });
                        break;
                }
                
                
            }
        }
    }
}
</script>
<style >
.modal-backdrop{
    background-color: rgb(0,0,0,0.5) !important;
}
.NewimagePreview{
    width: 200px;
}
.feedback{
    color: red;
}
</style>
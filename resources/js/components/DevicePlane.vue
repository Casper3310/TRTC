<template>
    <div>
        <div>
          <h2>OO設備</h2>
          <button class="btn btn-primary btn-sm" v-on:click="ShowDashTable">新增</button>
            <div class="plane_content table">
              <table v-if="stationlist.length">
                <thead>
                  <tr>
                    <th scope="col">項次</th>
                    <th scope="col">盤名</th>
                    <th scope="col">位置</th>
                    <th scope="col">圖片</th>
                    <th scope="col">操作</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item,index) in stationlist" :key="index">
                    <td>{{index+1}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.device}}</td>
                    <td><img class="NewimagePreview" :src="`${$store.state.serverPath}/storage/${item.image}`" 
                    :alt="item.name"></td>
                    <td>
                      <div>  
                        <button class="btn btn-warning btn-sm" @click="EditStaionData(item,index)">更新</button>
                        <button class="btn btn-danger btn-sm" @click="DeleteStaionData(item,index)">刪除</button>
                      </div>      
                    </td>
                  </tr>
                </tbody>
              </table>
              <div v-else>無資料</div>
            </div>
        </div>
        <div>
  
        <b-modal ref="dashtable" hide-footer title="輸入資料">
            <div class="d-block">
                <form v-on:submit.prevent="SubmitDashtable">
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
                        <div v-if="stationData.image">
                            <img :src="`${$store.state.serverPath}/storage/${stationData.image}`" 
                             ref="NewimageDisplay" alt="" class="NewimagePreview">
                        </div>
                        <label for="image">選擇圖片</label>
                        <input type="file" v-on:change="attachImage" ref="Newimage" class="form-control" id="image">
                        <div class="feedback" v-if="error.image">{{error.image[0]}}</div>
                    </div>
                </form>
                <hr>
                <div class="text-right">
                    <button type="button" class="btn btn-default" v-on:click="HideDashTable">取消</button>
                <button type="submit" class="btn btn-primary" v-on:click="SubmitDashtable">
                    <span class="fa fa-check">輸入</span>
                </button>
                </div>
            </div>
        </b-modal>

        <FlashMessage :position="'right top'"></FlashMessage>
        </div>
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
    edit:null,
    index:null,
    error:{}
    }
  },
  mounted(){
      this.LoadStationData();
  },
  methods:{
        LoadStationData:async function(){
            try {
                const res = await stationData_serveice.LoadStationData();
                this.stationlist = res.data.data;
            } catch (error) {
              console.log(error)
                this.flashMessage.error({
                    message: '錯誤!',
                    time:5000
                    });
            }
        },
        DeleteStaionData:async function(item,index){
          if(window.confirm(`你確定刪除${item.name}`)){
            try {
              await stationData_serveice.DeleteStaionData(item.id);
              this.stationlist.splice(index,1)
            } catch (error) {
              console.log(error);
            }
          }
        },
        EditStaionData(item,index){
          this.stationData = item;
          this.$refs.dashtable.show()
          this.edit =item.id;
          this.index = index
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
            this.stationData={
                name:"",
                device:"",
                image:"",
            }
        },
        SubmitDashtable: async function(){
            let formdata = new FormData();
            formdata.append('name',this.stationData.name);
            formdata.append('device',this.stationData.device);
            formdata.append('image',this.stationData.image);
            try {
              if(this.edit ===null){
                const res = await stationData_serveice.createStationData(formdata);
                this.stationlist.unshift(res.data);
              }else{
                formdata.append('_method','put');
                const res = await stationData_serveice.UpdataStationData(this.stationData.id,formdata);
                this.edit =null;
                this.stationData.image = res.data.image
              }
                
                this.HideDashTable();
                this.flashMessage.success({
                message: '成功輸入!',
                time:5000
                });
                this.stationData={
                  name:"",
                  device:"",
                  image:"",
                }
                
            } catch (error) {
                switch (error.response.status) {
                    case 422:
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
<style>
.table{
  margin: auto;
  width: 800px;
}
.table table{
  width: 100%;
  border: black 1px solid;
}
.table thead{
  background-color: rgb(36, 138, 179);
  color: aliceblue;
}
.table tbody tr:nth-child(even){
  background-color: rgb(202, 141, 179);
}
.table tbody tr:hover{
  background-color: rgb(190, 201, 151);
}
.table th{
  border: black 1px solid;
}
.table td{
  border: black 1px solid;
  
}
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
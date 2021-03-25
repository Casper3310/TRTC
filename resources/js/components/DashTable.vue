<template>
    <div>
        <div>
            <button class="btn btn-primary btn-sm" v-on:click="ShowDashTable">create</button>
        </div>
        <b-modal ref="dashtable" hide-footer title="輸入資料">
            <div class="d-block">
                <form v-on:submit.prevent="Create">
                    <div class="form-group">
                        <label for="AAA">輸入AAA</label>
                        <input type="email" v-model="stationData.name" class="form-control" id="AAA" placeholder="輸入AAA">
                    </div>
                </form>
                <form>
                    <div class="form-group">
                        <label for="image">選擇圖片</label>
                        <input type="file" v-on:change="attachImage" class="form-control" id="image">
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
    </div>
</template>
<script>
export default {
  name:'station',
  data(){
    return {
      stationData:{
      name:"",
      device:"",
      image:"",
    }}
  },
  methods:{
        attachImage(){
            console.log("attachImage")
        },
        HideDashTable(){
            this.$refs.dashtable.hide()
        },
        ShowDashTable(){
            this.$refs.dashtable.show()
        },
        Create(){
            console.log("111")
        }
    }
}
</script>
<style >
.modal-backdrop{
    background-color: rgb(0,0,0,0.5) !important;
}
</style>
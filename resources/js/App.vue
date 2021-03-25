<template>
    <div>
        <h1 class="alert alert-primary">水電資料</h1>
        <StationBar></StationBar>
      <div class="row">
        <div class="col-12">   
          <router-view></router-view> 
          <DevicePlane></DevicePlane>
          <DevicePlane></DevicePlane>
          <DashTable></DashTable>
          
        </div>
      </div>
      
    </div>
</template>
<script>
import StationBar from './components/StationBar.vue'
import SearchComponent from './components/SearchComponent.vue'
import DevicePlane from './components/DevicePlane.vue'
import DashTable from './components/DashTable.vue'
export default {
    components:{
        StationBar,
        SearchComponent,
        DevicePlane,
        DashTable
    }
}
</script>
<style>
h1,h2 {
  text-align: center;
}
.router-link-active{
  
}
</style>
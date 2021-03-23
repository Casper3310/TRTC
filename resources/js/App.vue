<template>
    <div>
        <h1 class="alert alert-primary">水電資料</h1>
        <StationBar></StationBar>
      <div class="row">
        <div class="col-12">
          <h2>站設備列表</h2>
          <SearchComponent></SearchComponent>
          <DevicePlane></DevicePlane>
          <DevicePlane></DevicePlane>
        </div>
      </div>
    </div>
</template>
<script>
import StationBar from './components/StationBar.vue'
import SearchComponent from './components/SearchComponent.vue'
import DevicePlane from './components/DevicePlane.vue'
export default {
    components:{
        StationBar,
        SearchComponent,
        DevicePlane
    }
}
</script>
<template>
    <div class="">
        <ul class="list_ul">
          <router-link to="b1" href="#">南機廠</router-link>
          <router-link to="/Y8" >Y8秀朗橋</router-link>
          <router-link to="/Y9" >Y9景平</router-link>
          <router-link to="Y10">Y10景安</router-link>
          <router-link to="Y11">Y11中和</router-link>
          <router-link to="Y12">Y12橋和</router-link>
          <router-link to="Y13">Y13中原</router-link>
          <router-link to="Y14">Y14板新</router-link>
          <router-link to="Y15">Y15板橋</router-link>
          <router-link to="Y16">Y16新埔民生</router-link>
          <router-link to="Y17">Y17頭前庄</router-link>
          <router-link to="Y18">Y18幸福</router-link>
          <router-link to="Y19">Y19新北產業園區</router-link> 
        </ul>
      </div>
</template>
<style>
.list_ul{
    display: flex;
    justify-content: center;
    
}
.list_ul a{
    align-items:center;
    list-style-type: none;
    border: rgb(7, 9, 139) 1px solid;
    padding: 2px;
    transform: translateY(0px);
}
.list_ul a:hover{
    background-color: yellow;
    border: yellow 1px solid;
    transform: translateY(-5px);
    transition: 0.5s;
    border: rgb(7, 9, 139) 1px solid;
}

</style>
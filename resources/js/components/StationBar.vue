<template>
    <div class="">
        <ul class="list_ul">
          <li>
            <router-link to="b1" href="#">南機廠</router-link>
          </li>
          <li>
            <router-link to="/Y8" >Y8秀朗橋</router-link>
          </li>
          <li>
            <router-link to="/Y9" >Y9景平</router-link>
          </li>
          <li>
            <router-link to="10">Y10景安</router-link>
          </li>
          <li>
            <router-link to="11">Y11中和</router-link>
          </li>
          <li>
            <router-link to="12">Y12橋和</router-link>
          </li>
          <li>
            <router-link to="13">Y13中原</router-link>
          </li>
          <li>
            <router-link to="14">Y14板新</router-link>
          </li>
          <li>
            <router-link to="15">Y15板橋</router-link>
          </li>
          <li>
            <router-link to="16">Y16新埔民生</router-link>
          </li>
          <li>
            <router-link to="17">Y17頭前庄</router-link>
          </li>
          <li>
            <router-link to="18">Y18幸福</router-link>
          </li>
          <li>
            <router-link to="19">Y19新北產業園區</router-link>
          </li>
          
        </ul>
      </div>
</template>
<style>
.list_ul{
    display: flex;
    justify-content: center;
    
}
.list_ul li{
    align-items:center;
    list-style-type: none;
    border: rgb(7, 9, 139) 1px solid;
    padding: 2px;
    transform: translateY(0px);
}
.list_ul li:hover{
    background-color: yellow;
    border: yellow 1px solid;
    transform: translateY(-5px);
    transition: 0.5s;
    border: rgb(7, 9, 139) 1px solid;
}

</style>
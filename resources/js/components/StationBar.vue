<template>
    <div class="">
        <ul class="list_ul">
          <li>
            <router-link to="#" href="#">Y8秀朗橋</router-link>
          </li>
          <li>
            <router-link to="#" href="#">Y9景平</router-link>
          </li>
          <li>
            <router-link to="#" href="#">Y10景安</router-link>
          </li>
          <li>
            <router-link to="#" href="#">Y11中和</router-link>
          </li>
          <li>
            <router-link to="#" href="#">Y12橋和</router-link>
          </li>
          <li>
            <router-link to="#" href="#">Y13中原</router-link>
          </li>
          <li>
            <router-link to="#" href="#">Y14板新</router-link>
          </li>
          <li>
            <router-link to="#" href="#">Y15板橋</router-link>
          </li>
          <li>
            <router-link to="#" href="#">Y16新埔民生</router-link>
          </li>
          <li>
            <router-link to="#" href="#">Y17頭前庄</router-link>
          </li>
          <li>
            <router-link to="#" href="#">Y18幸福</router-link>
          </li>
          <li>
            <router-link to="#" href="#">Y19新北產業園區</router-link>
          </li>
          <li>
            <router-link to="#" href="#">南機廠</router-link>
          </li>
        </ul>
      </div>
</template>
<style scoped>
.list_ul{
    display: flex;
    justify-content: center;
    
}
.list_ul:hover{
    
}
.list_ul li{
    display: inline-block;
    border: rgb(7, 9, 139) 1px solid;
    padding: 2px;
    transform: translateY(0px);
}
.list_ul li:hover{
    background-color: yellow;
    border: yellow 1px solid;
    transform: translateY(-20px);
    transition: 0.5s;
}

</style>
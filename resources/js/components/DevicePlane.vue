<template>
    <div>
        <div>
          <h2>OO設備</h2>
            <div class="plane_content table">
              <table>
                <thead>
                  <tr>
                    <th scope="col">編號</th>
                    <th scope="col">盤名</th>
                    <th scope="col">位置</th>
                    <th scope="col">操作</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>sss</td>
                    <td>sss</td>
                    <td>sss</td>
                    <td><DashTable></DashTable></td>
                  </tr>
                  <tr>
                    <td>sss</td>
                    <td>sss</td>
                    <td>sss</td>
                    <td>sss</td>
                  </tr>
                  <tr>
                    <td>sss</td>
                    <td>sss</td>
                    <td>sss</td>
                    <td>sss</td>
                  </tr>
                  <tr>
                    <td>sss</td>
                    <td>sss</td>
                    <td>sss</td>
                    <td>sss</td>
                  </tr>
                  <tr>
                    <td>sss</td>
                    <td>sss</td>
                    <td>sss</td>
                    <td>sss</td>
                  </tr>
                </tbody>
              </table>
            </div>
        </div>
        
    </div>
</template>
<script>
import DashTable from './DashTable.vue'
export default {
    components:{
        DashTable
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
</style>
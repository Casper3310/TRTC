<template>
    <h1 class="test">{{test1}}</h1>
</template>
<script>
export default {
    name:'outsideComponents',
    props:{
        test1:{
            type:String,
            required:true,
        }
    }
    
}
</script>
<style>
    h1.test{
        color: red;
    }
</style>
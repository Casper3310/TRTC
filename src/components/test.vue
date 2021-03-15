<template>
    <h1 class="test">{{test}}</h1>
</template>
<script>
export default {
    name:'testComponent',
    data(){
        return{
            test:"testtttttt",
            test2:"t2222222"
        }
    }
}
</script>
<style scoped>
    h1.test{
        color: green;
    }
</style>
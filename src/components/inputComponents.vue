<template>
    <input class="testvmodel" type="text" v-model="inputText">
</template>
<script>
export default {
    name:"inputComponents",
    props:{
        text:{
            type:String,
            required:true
        }
    },
    computed:{
        inputText:{
            get(){
            return this.text
        },
        set(val){
            this.$emit('update:text',val)
            
        }
        }
    }
    
}
</script>
<style>
    input.testvmodel{
        height: 30px;
    }
</style>
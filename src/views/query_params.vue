<template>
    <div>
        <h1>query_params</h1>
        <p>{{day}}</p>
        <ul v-if="list.length">
            <li>

            </li>
        </ul>
    </div>
</template>
<script>
import test_store from '../store/test_store.js'
export default {
    computed:{
        day:{
            get(){
                return this.$store.state.test_store ? this.$store.state.test_store.day :0
            },
            set(val){
                //return this.$store.state.day = val
                this.$store.commit('setday',val)
            }
        },
        header(){
            return this.$store.state.test_store ? this.$store.state.test_store.header : []
        },
        list(){
            return this.$store.state.test_store ? this.$store.state.test_store.list :[]
        }
    },
    methods:{
        change(e){
            let day = this.day;
            if(e.keyCode===39)
            {
                day = day<10 ? day + 1: day
            }
            else if(e.keyCode===37)
            {
                day = day>0 ? day - 1: day
            }
            //this.day = day
            this.$router.replace({
                params:{
                    day
                }
            })
        }
    },
    mounted(){
        let day = parseInt(this.$route.params.day);
        //this.day = day
        this.$store.registerModule('test_store',test_store)
        this.$store.dispatch('getlist',day)
        document.addEventListener("keyup",this.change)
    },
    beforeDestroy(){
        this.$store.unregisterModule('test_store')
        document.removeEventListener("keyup",this.change);
    },
    watch:{
        $route(){
            let day = parseInt(this.$route.params.day);
            this.day = day
        }
    }
}
</script>
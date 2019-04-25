<style lang="" scoped>
    div{
        border: 1px solid blue;
        width: 230px;
        height: 120px;
        margin: 6px;padding: 6px ;
        display: inline;

    }
</style>

<template>
    <div>
        {{msg}}
        <input type="text" placeholder="我输入的会传给user-a" @input="vuex" v-model="name">


        <button @click="imVueX"> I'm VueX</button>
        
    </div>
</template>

<script>
import Bus from '@/utils/bus.js'

export default {
    data(){
        return{
            msg:'user-b',
            name:''
        }
    },
    methods:{
        vuex(e){ 
            Bus.$emit('vuex',e.data)            //通过Bus.$emit（）发送事件 
        },
        imVueX(){               //I'm VueX
        //1.取state  this.$store.getters.getinputValue 通过getters访问state 数据
            this.name 
           this.$store.dispatch('setname',this.name)

        }
    },
    computed:{
         
    }
}
</script>
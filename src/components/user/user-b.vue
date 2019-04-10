<style lang="" scoped>
    div{
        border: 1px solid blue;
        width: 230px;
        height: 100px;
        margin: 6px;padding: 6px 

    }
</style>

<template>
    <div>
        {{msg}}
        <input type="text" placeholder="我输入的会传给user-a" @input="vuex">
    </div>
</template>

<script>
import Bus from '@/utils/bus.js'

export default {
    data(){
        return{
            msg:'user-b'
        }
    },
    methods:{
        vuex(e){
            
            Bus.$emit('vuex',e.data)            //通过Bus.$emit（）发送事件
            
            
        }
    }
}
</script>
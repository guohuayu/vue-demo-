<style scoped>
div{
        width: 200PX;
        height: 200PX;
        border: pink 2px solid;
          margin: 6px;padding: 6px ;display: inline-block;
    }
    button{
        margin: 4px
    }
    H3{text-align: center}

</style>


<template>
    <div>
        <h3>I'm VueX</h3>
        {{getuserC}} <br>
        <button @click="setuserD">我自己改(同步)</button>
        <button @click="setuserC">D兄弟改变C兄弟的标题(同步)</button>
        <button @click="setuserA">C兄弟改变D兄弟的标题(异步)</button>

    </div>
</template>



<script>
export default {
    data(){
        return{

        }
    },
    computed:{
        getuserC(){
            return this.$store.state.userD
        }
    },
    methods:{
        setuserD(){
            this.$store.commit('setuserD','我是user D')
        },
        setuserC(){
            this.$store.commit('setuserC','兄弟D已经把C兄弟改了')
        },
        setuserA(){

        }
    }
}
</script>
<style scoped>
    .banner{
        width: 500px;
        height: 500px;
        border: 1px solid red
        ;position: relative;
        overflow: hidden;
    }
    .boy{
        width: 200px;
        height: 400px;
        border: blue 1px solid;  
        position: absolute;
    }
    .girl{
        width: 200px;
        height: 400px;
        border: pink 1px solid;  
        position: absolute;

    }
    .border{
        width: 40px;
        height: 200px;
        background: blue;
        top: 150px;
        right: -20px;
        position: absolute
    }
</style>

<template>

    <div class="banner"   >          空
        <div class="boy"   v-show="a" @mousedown="down" ref="boy" style="left:150px"  > 我是男生</div>
        <div class="girl"  v-show="b">我是女生</div>
        <div class="border" :style= "{ 'background':  b?'pink':'blue' }" ></div>
        <button @click="nan">男生</button>
        <button @click="nv">女生</button>

    </div>
</template>

<script>
import fallsVue from '../falls.vue';
export default {
    data(){
        return{
            a:true,
            b:false 
        }
    },
    methods:{
        nan(){
            this.a=true,
            this.b=false
        },
        nv(){
            this.a=false,
            this.b=true
        },
        down(e){
             
            this.move(e)
        },
        move(e){ 
        console.log(e.clientX);
        
          var Mouseoffset=  e.clientX-this.$refs.boy.offsetLeft ;
         
          
             this.$refs.boy.style.left=e.clientX-150+'px';
              console.log(e.clientX );
        }
    }
}
</script>
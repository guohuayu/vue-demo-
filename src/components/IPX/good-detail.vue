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
        position: absolute; 
    }
    .border:hover{
        background: red;
    transform:rotateZ(3600deg);
         opacity: 0.5;
        transition: 10s  
    }
</style>

<template>

    <div class="banner"   >          空
        <div class="boy"   v-show="boy" @mousedown.prevent="downboy" ref="boy"  style="left:150px"  > <-----往那移动 </div>
        <div class="girl"  v-show="girl"  @mousedown.prevent="downgirl" ref="girl" style="left:150px"> <-----往那移动 </div>
        <div class="border"   ></div>
        <button @click="nan">男生</button>
        <button @click="nv">女生</button>

    </div>
</template>

<script>
import fallsVue from '../falls.vue';
export default {
    data(){
        return{
            boy:true ,
            girl:false
        }
    },
    methods:{
        nan(){
            this.boy=true ,
            this.girl=false
        },
        nv(){
           this.boy=false ,
            this.girl=true
        },
        downboy(e){ 
         this.switchsex('boy',event,2)   
        },
        downgirl(e){ 
         this.switchsex('girl',event,1)     
        },
        switchsex (sex,e,num){                      //拖拽方法
          var disX=e.clientX-  parseInt(this.$refs[sex].style.left);  
             document.onmousemove=(e)=>{
               this.$refs[sex].style.left=e.clientX-disX+'px' 
                if (parseInt(this.$refs[sex].style.left)>=150) {  
                     this.$refs[sex].style.left=150+'px' 
                 }else if (parseInt(this.$refs[sex].style.left)<50) {
                    if (num===1) {
                        this.nan()
                    }else{ this.nv()}
                     this.$refs[sex].style.left=150+'px' 
                 } 
             }  
             document.onmouseup=function name(e) {
                 document.onmousemove=null  
             }  

        }
    }
}
</script>
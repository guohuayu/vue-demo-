<style scoped>
 
</style>

<template>
  <div id="app">
    <!-- <animation></animation>  动画旋转-->  
    <User></User>  
    <TimeDown endTimes="1584372000" :callback="TimeDownCallback" endText="已经结束了"></TimeDown>
    <This></This>
    <Falls></Falls>
   
    <Maps></Maps>  

  </div>
</template>

<script>
import animation from '@/components/animation';       //360deg旋转
import TimeDown from '@/components/TimeDown';       //时间倒计时
import This from '@/components/This';               //THis指向
import Maps from '@/components/maps';               //地图
import Falls from '@/components/falls' ;             //瀑布流
export default {
  name: 'App',
  components:{
    animation,TimeDown,This,Maps,Falls
  },
  data(){
    return{
      
    }
  },
  mounted:function(){ 

  },
  methods:{
    TimeDownCallback(){     //倒计时结束回调
       
      
    }
  },

  
}
</script>
 
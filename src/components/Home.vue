<style scoped>
</style>

<template>
  <div id="index"> 
     <animation></animation>   
     <User></User>  
     <TimeDown endTimes="1584372000" :callback="TimeDownCallback" endText="已经结束了"></TimeDown>  
     <This></This>  
      <Falls></Falls>  
     <Maps></Maps>  
    <GoodDetail>      <p>我是p插槽</p></GoodDetail>
  </div>
</template>

<script>
import animation from "@/components/animation"; //360deg旋转
import TimeDown from "@/components/TimeDown"; //时间倒计时
import This from "@/components/This"; //THis指向
import Maps from "@/components/maps"; //地图
import Falls from "@/components/falls"; //瀑布流
import GoodDetail from '@/components/IPX/good-detail';     //性别拖拽
export default { 
  components: {
    animation,
    TimeDown,
    This,
    Maps,
    Falls,GoodDetail
  },
  data() {
    return {};
  },
  created: function() {
     //this.$router.push({name:'Login'})
  },
  mounted: function() { 
    // 第一种
    // var arr=[]
    // for (let i = 0; i < 100; i++) {
    //   arr.push(i) 
    // }
    // console.log(arr); 
    console.log(this.$store.state.name);
    var arr=[1,2,3,3,4,5,66,7,7,5];
    var arr2=[]
    for (let i = 0; i < arr.length; i++) {
      if (arr2.indexOf(arr[i])==-1) {
        arr2.push(arr[i])
      }
      
    }
    console.log(arr2);
    
  },
  methods: {
    TimeDownCallback() {
      //倒计时结束回调
    }
  }
};
</script>
 
<style   scoped>
div {
  border: 1px solid blue;
  width: 230px;
  height: 150px;
  margin: 6px;
  padding: 6px;
}
span{
  font-size: 10px;
  font-weight: 900;
  color:crimson
}
</style>

<template>
  <div>
    {{msg}} <span>{{num}}</span>
    <button @click="emitParent">给user父发送数据</button>
    <button @click="numComputed" >num计算属性</button>

    <p>我是user-b传来的值：{{vuex}}</p>

    
  </div>
</template>

<script>
import Bus from '@/utils/bus.js'
export default {
    props:['ParentEmitChild'],
  data() {
    return {
      msg: "user-a",
      emitParentMsg: "给父user发送的信息",
      num: 1000,
      // vuex:''
    };
  },
  methods: {
    emitParent() {
      this.$emit("emitParent", this.emitParentMsg);
    },
    numComputed() {
      this.num -= 7;
    }
  },
  computed: { 
    vuex(){
      return this.$store.getters.getname
    }
  }, 
  mounted:function(){  
    //console.log(this.ParentEmitChild)           //打印父组件传的值
     
    // Bus.$on('vuex',(res)=>{                     //通过Bus.$on（）监听事件
    //     this.vuex=res 

    // })
  }
};
</script>
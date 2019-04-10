<style   scoped>
div {
  border: 1px solid blue;
  width: 230px;
  height: 100px;
  margin: 6px;
  padding: 6px;
}
</style>

<template>
  <div>
    {{msg}} {{num}}
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
      vuex:''
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
  computed: { }, 
  mounted:function(){  
    //console.log(this.ParentEmitChild)           //打印父组件传的值
     
    Bus.$on('vuex',(res)=>{                     //通过Bus.$on（）监听事件
        this.vuex=res 

    })
  }
};
</script>
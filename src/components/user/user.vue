<style lang="" scoped>
div {
  border: 1px solid red;
  width: 500px;
  height: 500px;
}
</style>

<template>
  <div  >
    {{msg}}
    收到子组件信息:{{childUserA}}
    <userA @emitParent="userA" ref="userA" :ParentEmitChild="{msg,childUserA}"></userA>
    <userB></userB> 
    <button @click="useUserAmethods">调用userA的方法</button>



    <userC></userC>
    <userD></userD> 
  </div>
</template>

<script>
import userA from "@/components/user/user-a";
import userB from "@/components/user/user-b";
import userC from "@/components/user/user-c";
import userD from "@/components/user/user-d";
export default {
  components: { userA, userB,userC,userD },
  data() {
    return {
      msg: "父用户组件",
      childUserA: ""
    };
  },
  methods: {
    userA(e) {
      this.childUserA = e;
    },
    useUserAmethods() {
      return this.$refs.userA.numComputed()
    }
  }
};
</script>
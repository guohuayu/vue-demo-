<style scoped>
* {
  margin: 0;
  padding: 0;
  font-size: 13px;
}
html,
body {
  width: 100%;
  height: 100%;
  background: #fff;
}
#container {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
}
#output {
  width: 100%;
  height: 100%;
}
.containerT {
  width: 400px;
  height: 300px;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -150px 0 0 -200px;
  border-radius: 3px;
}
.containerT h1 {
  font-size: 18px;
  -webkit-transition-duration: 1s;
  transition-duration: 1s;
  font-weight: 500;
}
form {
  padding: 20px 0;
  position: relative;
  z-index: 2;
  background: pink;
}
form input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: 0;
  border: 1px solid rgba(255, 255, 255, 0.4);
  background-color: rgba(255, 255, 255, 0.2);
  width: 200px;
  border-radius: 3px;
  padding: 8px 15px;
  margin: 0 auto 10px;
  display: block;
  text-align: center;
  font-size: 15px;
  color: #fff;
  -webkit-transition-duration: 0.25s;
  transition-duration: 0.25s;
  font-weight: 300;
}
form input:hover {
  background-color: rgba(255, 255, 255, 0.4);
}
form input:focus {
  background-color: #fff;
  width: 230px;
  color: #333;
}
form button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: 0;
  background-color: #fff;
  border: 0;
  padding: 10px 15px;
  color: #333;
  border-radius: 3px;
  width: 200px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  -webkit-transition-duration: 0.25s;
  transition-duration: 0.25s;
}
form button:hover {
  background-color: #f5f7f9;
}
</style>

<template>
  <div>
    <div id="container">
      <div id="output">
        <div class="containerT">
          <h1>用户登录</h1>
          <p>账号：123 进入首页</p>
          <p>账号：456 进入cart</p>
          <p>账号：789 进入瀑布流被劫拦跳转首页</p>
          <p>通过watch监听{{}}</p>
          <form class="form" id="entry_form">
            <input type="text" placeholder="用户名" id="entry_name" value="admin" v-model="usertext">
            <input type="password" placeholder="密码" id="entry_password" v-model="userpassword">
            <button type="button" id="entry_btn" @click="commit">登录</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usertext: "",
      userpassword: ""
    };
  },
  mounted: function() {
     
    //console.log(this.global.usertext,this.global.userpassword);
      
  },
  watch:{
    usertext(a,b){
      console.log(a,b); 
    }
  },
  methods: {
    commit() {
      this.global.usertext=this.usertext;
      this.global.userpassword=this.userpassword;
      if (this.usertext==123&&this.userpassword==123) {
        this.$router.push('Home')
      }else if(this.usertext==456&&this.userpassword==456){
        this.$router.push('/Cart') 
      }else{
        this.$router.push('Falls')
      }
    }
  }
};
</script>
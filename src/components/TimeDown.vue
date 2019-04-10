/* this指向    事件戳s倒计时 */
<style scoped>
  div{border:1px pink solid;margin-bottom:5px}
</style>
     
     
<template>
  <div>我是定时器
    <span>{{content}}</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      content: ""
    };
  },
  props: ["endTimes", "endText", "callback"],
  mounted() {
    this.countdowm(this.endTimes);
  
  },
  methods: {
    countdowm(timestamp) { 
      let timer = setInterval( ()=> {
        let nowTime = new Date(); //当前时间
        let endTime = new Date(timestamp * 1000);
        let t = endTime.getTime() - nowTime.getTime(); //剩余时间戳
        if (t > 0) {
          let day = Math.floor(t / 86400000);
          let hour = Math.floor((t / 3600000) % 24);
          let min = Math.floor((t / 60000) % 60);
          let sec = Math.floor((t / 1000) % 60);
          hour = hour < 10 ? "0" + hour : hour;
          min = min < 10 ? "0" + min : min;
          sec = sec < 10 ? "0" + sec : sec;
          let format = "";
          if (day > 0) {
            format = `${day}天${hour}小时${min}分${sec}秒`;
          }
          if (day <= 0 && hour > 0) {
            format = `${hour}小时${min}分${sec}秒`;
          }
          if (day <= 0 && hour <= 0) {
            format = `${min}分${sec}秒`;
          }
          this.content = format;
        } else {
          clearInterval(timer);
          this.content = this.endText;
          this._callback();
        }
      }, 1000);
    },
    _callback() {
      if (this.callback && this.callback instanceof Function) {
        this.callback();
      }
    }
  }
};
</script>
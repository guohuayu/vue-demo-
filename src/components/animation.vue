/* 旋转 */
<style lang="" scoped>
.animation {
  width: 200px;
  height: 200px;
  background: blue;
  text-align: center;
  line-height: 200px;
  transition: 10s;
  color: aqua;
  margin:10px auto;
}
/*  .animation:hover {
  transform: rotate(360deg);
}   */
</style>
<template>

  <div class="animation" @click="AnimationSwitch" @mousemove="Num">
    函数防抖 定时触发
    {{num}}</div>
</template>

<script>
export default {
  data() {
    return {
      deg: 9999,
      num:0,
      switch:true
    };
  },
  methods: {
    AnimationSwitch(e) {
      setInterval(() => {
        this.deg += 9999;
        document.querySelector(".animation").style.transform =
          "rotateZ(" + this.deg + "deg)";
        console.log(this.deg);
      }, 1000);
    },
    Num(){
      
      if (this.switch==false) {
        return
      }
      this.switch=false

       setTimeout(()=>{
       console.log('防抖了');
        
       this.switch=true
       },500)

      this.num++

    }
  },
  computed: {},
  watch: {},
  mounted: function() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

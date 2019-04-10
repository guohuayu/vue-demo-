/* 旋转 */
<style lang="" scoped>
.animation {
  width: 200px;
  height: 200px;
  background: blue;
  text-align: center;
  line-height: 200px;
  transition: 10s ; 

  margin: 200px auto;


}
/*  .animation:hover {
  transform: rotate(360deg);
}   */
</style>
<template>
  <div class="animation"  @click="AnimationSwitch">1animation</div>
</template>

<script>
export default {
  data() {
    return {
    deg:9999 
    };
  },
  methods: {
    AnimationSwitch(e){ 
      
      setInterval(()=>{
        this.deg+=9999 
        document.querySelector('.animation').style.transform="rotateZ("+this.deg+"deg)" 
        console.log(this.deg);  

      },1000)
      

    }
  },
  watch: {},
  mounted: function() {
     
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

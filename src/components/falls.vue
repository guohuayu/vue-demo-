/* 瀑布流 */
<style scoped>
* {
  margin: 0;
  padding: 0;
  position: relative;
}
.falls {
  width: 100%;
  height: 600px;
  overflow: scroll;
  border: 2px blue dashed;
}
img {
  width: 220px;
  position: absolute;
}
</style>

<template>
  <div class="falls">
    瀑布流
    <hr>
    <div v-for="(item,i) in imgList" :key="i" style="display:inline">
      <img :src="item.url" ref="imgs">
    </div>
    <hr>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgList: "",
      clientWidth: ""
    };
  },
  mounted: function() {
    this.req("https://www.apiopen.top/meituApi?page=4", "", res => {
      this.imgList = res.data.data;
    });
    setTimeout(() => {
      this.waterFall;
    }, 500);
    window.onresize = function() {  //定义窗口大小变更通知事件
      this.waterFall
      
    };
  }, 
  methods: {},
  computed: {
    waterFall() {
      var items = this.$refs.imgs;

      var gap = 10;
      var pageWidth = document.documentElement.clientWidth;
      var itemsWidth = items[0].offsetWidth;
      var columns = parseInt(pageWidth / (itemsWidth + gap));

      var oneHeight = [];
      for (var i = 0; i < items.length; i++) {
        if (i < columns) {
          //第一行定位
          items[i].style.top = 0;
          items[i].style.left = i * (itemsWidth + gap) + "px";
          oneHeight.push(items[i].offsetHeight);
        } else {
          //console.log(oneHeight); //为什么oneHeight一直在变??
          var minHeight = oneHeight[0]; //算数组的最小值******
          var index = 0;
          for (var j = 0; j < oneHeight.length; j++) {
            if (minHeight > oneHeight[j]) {
              minHeight = oneHeight[j];
              index = j; //最小列的下标
            }
          }
          items[i].style.top = oneHeight[index] + gap + "px"; //最小列的top
          items[i].style.left = items[index].offsetLeft + gap + "px"; //最小列的left

          oneHeight[index] = oneHeight[index] + gap + items[i].offsetHeight;
        }
      }
    }
  }
};
</script>


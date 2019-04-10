/* 瀑布流 */
<style scoped>
.falls {
  margin: 0;
  padding: 0;
  position: relative;
  width: 100%;
  height: 600px;
  overflow: scroll;
  border: 2px blue dashed;
}
img {
  width: 220px;
  position: absolute;
}
.caonima {
  position: relative;
  width: 220px;
  height: 200px;
}
.caonima > img {
  width: 220px;
  position: absolute;
}
</style>

<template>
  <div class="falls" @scroll="handleScroll" ref="falls">
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
    }, 800);
  },
  methods: {
    handleScroll(e) {
      //滚动条事件
      if (
        500 + e.target.scrollTop >=
        this.$refs.imgs[this.$refs.imgs.length - 1].offsetTop
      ) {
        // 模拟 ajax 获取数据
        var datas = this.imgList;
        let falls = document.querySelector(".falls");
        for (var i = 0; i < datas.length; i++) {
          var div = document.createElement("div");
          div.className = "caonima";
          div.innerHTML = '<img src="' + datas[i].url + '" alt="" style="">';
          falls.appendChild(div);
        }
        this.waterFall;
      } else {
        return;
      }
    }
  },
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
          oneHeight[index] = oneHeight[index] + gap + items[i].offsetHeight; //赋值最小的高度，然后重新计算数组里最小的值，重新定位---- 看了半天才懂
        }
      }
    }
  }
};
</script>


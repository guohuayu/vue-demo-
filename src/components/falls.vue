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
</style>

<template>
  <div class="falls" @scroll="handleScroll" ref="falls">
    瀑布流
    <button @click="testBtn">测试按钮</button>  <span>{{isMounted}}</span>
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
      clientWidth: "",
      isMounted: false
    };
  },
  mounted: function() {
    this.req("https://www.apiopen.top/meituApi?page=3", "", res => {
      this.imgList = res.data.data;
    });
    setTimeout(()=>{ 
       this.isMounted=true  
      },500) 

    window.onresize = () => this.waterFall(); 
    
  },
  updated: function() {
    //this.waterFall
    console.log("data数据更新");
    this.waterFall()
  },
  methods: {
    testBtn() {
      //测试按钮****
      var log = (...test) => console.log(...test),
        arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9],
        arr2 = [222, 31, 41, 19],
        arr3 = ["wocao", "haha", "hehe", "aa"];
      arr3.splice(2, 2, { name: "guohuayu" }); //splice最强数组方法
      arr1.push(...arr2);
      log(
        arr2.reduce((p, v, i, a) => {
          //数组累加器
          return p + v;
        })
      );
    },
    handleScroll(e) {
      //滚动条事件
      console.log(
        this.$refs.falls.offsetHeight + e.target.scrollTop,
        this.$refs.imgs[this.$refs.imgs.length - 1].offsetTop
      );
      if (
        this.$refs.falls.offsetHeight + e.target.scrollTop >=
        this.$refs.imgs[this.$refs.imgs.length - 1].offsetTop
      ) {
        console.log(this.$refs.falls.offsetHeight);

        this.imgList.push(...this.imgList);
        this.waterFall();

        /************ 以下是原生创建DOM写法************** */ // 模拟 ajax 获取数据
        /*         var datas = this.imgList;
        let falls = document.querySelector(".falls");
        for (var i = 0; i < datas.length; i++) {
          var div = document.createElement("div");
          div.className = "caonima";
          div.innerHTML = '<img src="' + datas[i].url + '" alt="" style="">';
          falls.appendChild(div);
        } */
        /************ 以上是原生创建DOM写法************** */
      } else {
        return;
      }
    },
    waterFall() {
      if (this.isMounted) {
        console.log(this.isMounted);
        
        var items = this.$refs.imgs;
        var gap = 10;
        var pageWidth = document.documentElement.clientWidth;
        var itemsWidth = items[0].offsetWidth;
        var columns = parseInt(pageWidth / (itemsWidth + gap));
        var oneHeight = [];
        for (var i = 0; i < items.length; i++) {
          if (i < columns) {
            //第一行定位
            items[i].style.top = 40+'px'; //40给上面留地方啊
            items[i].style.left = i * (itemsWidth + gap) + "px";
            oneHeight.push(items[i].offsetHeight);
          } else {
            //console.log(oneHeight);  
            var minHeight = oneHeight[0]; //算数组的最小值 
            var index = 0;
            for (var j = 0; j < oneHeight.length; j++) {
              if (minHeight > oneHeight[j]) {
                minHeight = oneHeight[j];
                index = j;  
              }
            }
            items[i].style.top = oneHeight[index]+40 + gap + "px"; //最小列的top
            items[i].style.left = items[index].offsetLeft + gap + "px"; //最小列的left
            oneHeight[index] = oneHeight[index] + gap + items[i].offsetHeight; //赋值最小的高度，然后重新计算数组里最小的值，重新定位 
          }
        }
      }else{'卧槽没走这里'}
    }
  },
  computed: {
    //计算属性nb!!
    /*     waterFall() { 
        var items = this.$refs.imgs; 
        var gap = 10;
        var pageWidth = document.documentElement.clientWidth;
        var itemsWidth = items[0].offsetWidth;
        var columns = parseInt(pageWidth / (itemsWidth + gap));
        var oneHeight = [];
        for (var i = 0; i < items.length; i++) {
          if (i < columns) {
            //第一行定位
            items[i].style.top = 20;
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
            items[i].style.top = oneHeight[index] + gap + 40 + "px"; //最小列的top
            items[i].style.left = items[index].offsetLeft + gap + "px"; //最小列的left
            oneHeight[index] = oneHeight[index] + gap + items[i].offsetHeight; //赋值最小的高度，然后重新计算数组里最小的值，重新定位---- 看了半天才懂
          }
        } 
    } */
  }
};
</script>


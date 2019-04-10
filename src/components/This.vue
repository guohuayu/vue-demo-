<style scoped>
div {
  border: 1px yellow solid;
}
</style>
<template>
  <div>
    {{name}}
    <button @click="test">测试下申明</button>
  </div>
</template>



<script>
export default {
  data() {
    return {
      name: "我是This"
    };
  },
  mounted: function() {
    /*    var obj =   function() {
        console.log(this);
      } 
    obj ();   */
    /* ************************************************************************* */
    // var obj = {
    //   name: "Ghuayu",
    //   greet: function() {
    //     console.log(this.name);
    //   }
    // };
    // //obj.greet()                     //普通函数输出Ghuayu
    // obj.greet.call(this); //普通函数改变this指向
    // obj.greet.call({ name: "ABC" }); // this输出 ABC
    /* ************************************************************************* */
    /* const obj = {
      a: {
        b: {
          c: {
            d: function(){
              console.log(this);
              
            }
          }
        }
      }
    };

    obj.a.b.c.d(obj); */

    var a1=this.add.call(this.sub,4,2) //改变调用方法

    
    
  },
  methods: {
    test() {
      var obj = {
        name: 1,
        b: function() {
          var name = 2;
          console.log(this);
        }
      };
      obj.b.call(this);
    },
    add(a,b){
      return a+b
    },
    sub(a,b){
      return a-b
    }
  }
};
</script>

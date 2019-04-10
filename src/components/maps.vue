<style lang="" scoped>
    #allmap {width: 500px;height: 400px;overflow: hidden;margin:0;font-family:"微软雅黑";}
</style>

<template>
    <div>
        <div id="allmap"></div>
    </div>
</template>


<script>

export default {
    // 百度地图API功能
    mounted:function(){
        var map = new BMap.Map("allmap");    // 创建Map实例
        map.centerAndZoom("杭州",12);     // 初始化地图,设置中心点坐标和地图级别
        //添加地图类型控件
        map.addControl(new BMap.MapTypeControl({
            mapTypes:[
                BMAP_NORMAL_MAP,
                BMAP_HYBRID_MAP
            ]}));	  
        map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
        map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
    }
	
}
</script>
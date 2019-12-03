<template>
  <div id="Swiper" :style="{marginTop:BoxHidden?'39.5vw':'0'}">
    <van-swipe :autoplay="3000" indicator-color="white" lazyComponent="true">
      <van-swipe-item v-for="(image, index) in images" :key="index" v-lazy-container = "{selector:'img',error:'xxx.jpg',loading:'imgLodding.jpg'} ">
        <img v-lazy="image" :data-src="image"/>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import { Swipe, SwipeItem } from "vant";
export default {
  name: "Swiper",
  components: { [Swipe.name]: Swipe, [SwipeItem.name]: SwipeItem},
  props:{
    BoxHidden:{
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      images: [
        "https://p1.lefile.cn/fes/cms/2019/12/01/93jp46gzfodhifqra4yblzqqhk2hbo180225.jpg",
        "https://p3.lefile.cn/fes/cms/2019/11/15/xoov2hqt5jzy9hrsvo07ml6dgfic8q663743.jpg",
        "https://p1.lefile.cn/fes/cms/2019/10/29/jifbmsq7o96grekg1kkq1m1vslghy4701210.jpg",
        "https://p2.lefile.cn/fes/cms/2019/12/02/p63jvh7n4m7f79m8gzra7lb2wh1jyf072838.jpg",
        "https://p1.lefile.cn/fes/cms/2019/12/02/uf2xxpbz0zcp9ff9tnhzxle1x59xyk624611.jpg",
        "https://p1.lefile.cn/fes/cms/2019/11/11/37h1fq66nxg6hkctcxk7m0whtlgimv959851.jpg",
        "https://p1.lefile.cn/fes/cms/2019/11/11/l7on1dyneuuy942czo8fxpp2ko9is0458709.jpg"
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
#Swiper {
  width: 100%;
  height: 43vw;
  margin-top: 39.5vw;
  /deep/ .van-swipe{
      width: 100%;
      height: 100%;
      img{ 
          width: 100%;
          height: 100%;
      }
      /deep/ .van-swipe__indicator--active{
          width: 7vw;
          border-radius: 25px;
      }
  }
}
</style>
<template>
  <div id="Community">

    <!-- 搜索栏模块 -->
    <Search :searchVal="value" :BoxHidden="BoxHidden"></Search>

    <!-- 轮播图模块 -->
    <Swiper :BoxHidden="BoxHidden" :images="images"></Swiper>

    <!-- 导航条模块 -->
    <CommunityNavBar></CommunityNavBar>

    <!-- 社区信息列表模块 -->
    <CommunityContiner></CommunityContiner>

    <!-- <van-button type="primary">社区</van-button> -->
</div>
  
</template>

<script>
import { Button } from "vant";
import Search from '../../../components/common/Search'
import Swiper from "@/components/common/Swiper";
import CommunityNavBar from "@/components/CommunityComponent/NavBar";
import CommunityContiner from "@/components/CommunityComponent/CommunityContiner";
export default {
  name: "Community",
  props:{
    BoxHidden:{
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      value:'搜索帖子、用户',
      images: [
        "https://p1.lefile.cn/fes/cms/2019/12/01/93jp46gzfodhifqra4yblzqqhk2hbo180225.jpg",
        "https://p3.lefile.cn/fes/cms/2019/11/15/xoov2hqt5jzy9hrsvo07ml6dgfic8q663743.jpg",
        "https://p1.lefile.cn/fes/cms/2019/10/29/jifbmsq7o96grekg1kkq1m1vslghy4701210.jpg",
        "https://p2.lefile.cn/fes/cms/2019/12/02/p63jvh7n4m7f79m8gzra7lb2wh1jyf072838.jpg",
        "https://p1.lefile.cn/fes/cms/2019/12/02/uf2xxpbz0zcp9ff9tnhzxle1x59xyk624611.jpg",
        "https://p1.lefile.cn/fes/cms/2019/11/11/37h1fq66nxg6hkctcxk7m0whtlgimv959851.jpg",
        "https://p1.lefile.cn/fes/cms/2019/11/11/l7on1dyneuuy942czo8fxpp2ko9is0458709.jpg"
      ],
    }; 
  },
  watch:{
    BoxHidden(newVal,oldVal){
      console.log(newVal)
    }
  },
  components: {
    [Button.name]: Button,Search,Swiper,CommunityNavBar,CommunityContiner
  },
  
};
</script>

<style lang="scss" scoped>
  #Community{
    padding-bottom: 12vw;
  }
</style>

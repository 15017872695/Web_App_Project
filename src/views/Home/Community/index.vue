<template>
  <div id="Community">

    <!-- 搜索栏模块 -->
    <Search :searchVal="value" :BoxHidden="BoxHidden"></Search>

    <!-- 轮播图模块 -->
    <Swiper :BoxHidden="BoxHidden"></Swiper>

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
      value:'搜索帖子、用户'
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

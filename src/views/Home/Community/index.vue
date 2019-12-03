<template>
  <div id="Community">

    <Search :searchVal="value"></Search>

    <!-- 轮播图模块 -->
    <Swiper ></Swiper>

    <van-button type="primary">社区</van-button>
</div>
  
</template>

<script>
import { Button } from "vant";
import Search from '../../../components/common/Search'
import Swiper from "@/components/common/Swiper";
export default {
  name: "Community",
  data() {
    return {
      value:'搜索帖子、用户'
    };
  },
  components: {
    [Button.name]: Button,Search,Swiper
  }
};
</script>

<style lang="scss" scoped>

</style>

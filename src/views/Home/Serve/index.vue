<template>
  <div id="Serve">
      <Search></Search>
      <van-button type="primary">服务</van-button>
</div>
  
</template>

<script>
import { Button } from "vant";
import Search from '@/components/Search'
export default {
  name: "Serve",
  data() {
    return {
      value:'搜索帖子、用户'
    };
  },
  components: {
    [Button.name]: Button,
    Search
  }
};
</script>

<style scoped>
</style>


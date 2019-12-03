<template>
  <div id="Community">
      <Search></Search>
      <van-button type="primary">社区</van-button>
</div>
  
</template>

<script>
import { Button } from "vant";
import Search from '../../../components/common/Search'
export default {
  name: "Community",
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

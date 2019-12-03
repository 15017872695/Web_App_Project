<template>
  <div id="Consult">
      <Search></Search>
      <van-button type="primary">咨询</van-button>
</div>
  
</template>

<script>
import { Button } from "vant";
import Search from '../../../components/common/Search'
export default {
  name: "Consult",
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



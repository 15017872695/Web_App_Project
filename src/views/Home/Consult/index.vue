<template>
  <div id="Consult">

      <!-- 搜索栏模块 -->
      <Search :searchVal="value" :BoxHidden="BoxHidden"></Search>

      <!-- 资讯列表栏模块 -->
      <ConsultContiner></ConsultContiner>

      <!-- <van-button type="primary">资讯</van-button> -->

</div> 
  
</template>

<script>
import { Button } from "vant";
import Search from '../../../components/common/Search'
import ConsultContiner from '../../../components/ConsultComponent/ConsultContiner'
export default {
  name: "Consult",
  data() { 
    return {
      value:'ThinkPad黑FUN礼'
    };
  },
  components: {
    [Button.name]: Button,Search,ConsultContiner
  },
  props: {
    BoxHidden:{
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>
  #Consult{
    padding-bottom: 12vw;
    margin-top: 39vw;
    background-color:#F2F2F2;
  }
</style>



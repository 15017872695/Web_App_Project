<template>
  <div id="Home">
    <!-- 首页顶部APP广告栏 -->
    <App-Title-Show-Box></App-Title-Show-Box>

    <!-- 首页主体内容路由出口 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

    <!-- 首页底部导航条 -->
    <footer-Nav-Bar></footer-Nav-Bar>
    
    <!-- 首页压屏窗广告栏 -->
    <md-landscape v-model="showPic">
      <img src="//manhattan.didistatic.com/static/manhattan/do1_6VL7HL8TYaUMsIfygfpz">
    </md-landscape>
  </div>
</template>

<script>
// 引入组件
import footerNavBar from "@/components/footerNavBar";
import AppTitleShowBox from "@/components/AppTitleShowBox";
import {Landscape} from 'mand-mobile'
export default {
  name: "Home",
  data() {
    return {
      showPic: false,
    }
  },
  // 注册组件
  components: {
    footerNavBar,
    AppTitleShowBox,
    [Landscape.name]: Landscape,
  },
  created(){
    this.hideShowPic();
  },
  methods:{
    hideShowPic(){
      this.showPic = true
    }
  }
};
</script>

<style scoped lang="scss">
#Home {
  width: 100%;
  height: 100%;
}
.md-landscape /deep/ .md-landscape-content{
  width: 100% !important;
  height: 100% !important;
  padding:30px;
  font-size:30px;
  line-height:1.5;
  color:#666;
}
</style>



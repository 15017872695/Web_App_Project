<template>
  <div id="Home" @touchstart="touchstart" @touchend="touchend">
    <!-- 首页顶部APP广告栏 -->
    <App-Title-Show-Box :BoxHidden="Hidden"></App-Title-Show-Box>

    <!-- 首页主体内容路由出口 -->
    <keep-alive>
      <router-view :BoxHidden="Hidden"></router-view>
    </keep-alive>

    <!-- 首页底部导航条 -->
    <footer-Nav-Bar :footerPathProps="footerPath"></footer-Nav-Bar>

    <!-- 首页压屏窗广告栏 -->
    <md-landscape v-model="showPic">
      <img src="//manhattan.didistatic.com/static/manhattan/do1_6VL7HL8TYaUMsIfygfpz" />
    </md-landscape>
  </div>
</template>

<script>
// 引入组件
import footerNavBar from "@/components/common/footerNavBar";
import AppTitleShowBox from "@/components/common/AppTitleShowBox";
import { Landscape } from "mand-mobile";
export default {
  name: "Home",
  data() {
    return {
      showPic: false,
      footerPath: "",
      startX:0,
      startY:0,
      Hidden:true,
    };
  },
  // 注册组件
  components: {
    footerNavBar,
    AppTitleShowBox,
    [Landscape.name]: Landscape
  },
  created() {
    this.hideShowPic();
  },
  methods: {
    hideShowPic() {
      this.showPic = true;
    },
    getDirection(startx, starty, endx, endy) {
      let angx = endx - startx;
      let angy = endy - starty;
      let result = 0;

      //如果滑动距离太短
      if (Math.abs(angx) < 2 && Math.abs(angy) < 2) {
        return result;
      }

      let angle = this.getAngle(angx, angy);
      if (angle >= -135 && angle <= -45) {
        result = 1;
      } else if (angle > 45 && angle < 135) {
        result = 2;
      } else if (
        (angle >= 135 && angle <= 180) ||
        (angle >= -180 && angle < -135)
      ) {
        result = 3;
      } else if (angle >= -45 && angle <= 45) {
        result = 4;
      }
      return result;
    },
    touchstart(e) {
      // console.log(e);
      this.startx = e.touches[0].pageX;
      this.starty = e.touches[0].pageY;
    },
    touchend(e) {
      // console.log(e);
      let endx, endy;
      endx = e.changedTouches[0].pageX;
      endy = e.changedTouches[0].pageY;
      let direction = this.getDirection(this.startx, this.starty, endx, endy);
      switch (direction) {
        case 0:
          // alert("未滑动！");
          break;
        case 1:
          // alert("向上！");
          this.Hidden = false;
          
          break;
        case 2:
          // alert("向下！");
          this.Hidden = true;
          break;
        case 3:
          // alert("向左！");
          break;
        case 4:
          // alert("向右！");
          break;
        default:
      }
    },
    getAngle(angx, angy) {
      return Math.atan2(angy, angx) * 180 / Math.PI;
    }
  },
  watch: {
    // 通过watch 来时刻监听 路由变化
    $route(to, from) {
      this.footerPath = to.fullPath;
    }
  }
};
</script>

<style scoped lang="scss">
#Home {
  width: 100%;
  height: 100%;
}
.md-landscape /deep/ .md-landscape-content {
  width: 100% !important;
  height: 100% !important;
  padding: 30px;
  font-size: 30px;
  line-height: 1.5;
  color: #666;
}
</style>



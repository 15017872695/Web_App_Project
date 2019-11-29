<template>
  <!-- 首页底部导航条 -->
  <div id="footerNavBar">
    <ul>
      <li
        v-for="(item,index) in NavBarData"
        :key="item+index"
        :style="activeIndex==index ? 'color:#F93722;' : ''"
        @click="goRoute(index,item.path)"
      >
        <i :class="item.icon"></i>
        <span>{{item.title}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "footerNavBar",
  data() {
    return {
      NavBarData: [
        {
          name: "Home",
          path: "/ShoppingMall",
          title: "首页",
          icon: "iconfont iconshouye"
        },
        {
          name: "Classify",
          path: "/Classify",
          title: "分类",
          icon: "iconfont iconfen_lei"
        },
        {
          name: "ShoppingCath",
          path: "/ShoppingCath",
          title: "购物车",
          icon: "iconfont icongouwuche"
        },
        { name: "My", path: "/My", title: "我的", icon: "iconfont iconwode1" }
      ],
      activeIndex: 0
    };
  },
  created() {},
  methods: {
    goRoute(index, newPath) {
      this.activeIndex = index;
      this.$router.push({ path: newPath });
    }
  }
};
</script>

<style scoped lang="scss">
#footerNavBar {
  width: 100%;
  height: 12vw;
  font-size: 3vw;
  position: fixed;
  bottom: 0;
  z-index: 100;
  background: #fff;
  box-shadow: 0 0 3px #eee;
  ul {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    li {
      flex: 1;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      i{
        font-size:4.5vw;
      }
    }
  }
}
</style>

<template>
  <div id="ShoppingMall">
    <!-- 顶部广告栏以及搜索栏模块 -->
    <Search :searchVal="value"></Search>

    <!-- 轮播图模块 -->
    <Swiper></Swiper>

    <!-- 导航栏模块 -->
    <ul class="ShoppingMall_NavBar">
      <li v-for="(item,index) in navBarList" :key="index">
        <img :src="item.imgUrl" :alt="item.name" />
        <span>{{item.name}}</span>
      </li>
    </ul>

    <!-- 限时秒杀模块 -->
    <Seckill></Seckill>

    <!-- <md-button  type="primary" plain>商城</md-button> -->
  </div>
</template>

<script>
import { Button } from "mand-mobile";
import Search from "@/components/Search";
import Swiper from "@/components/Swiper";
import Seckill from "@/components/Seckill";

export default {
  name: "ShoppingMall",
  data() {
    return {
      value: "联想钜惠不停",
      navBarList: [
        { name: "新品发布", imgUrl: require("@/assets/img/navBar1.png") },
        { name: "小新铺子", imgUrl: require("@/assets/img/navBar2.png") },
        { name: "拯救者联盟", imgUrl: require("@/assets/img/navBar3.png") },
        { name: "Think家族", imgUrl: require("@/assets/img/navBar4.png") },
        { name: "台式机", imgUrl: require("@/assets/img/navBar5.png") },
        { name: "lenovo手机", imgUrl: require("@/assets/img/navBar6.png") },
        { name: "智能", imgUrl: require("@/assets/img/navBar7.png") },
        { name: "选件", imgUrl: require("@/assets/img/navBar8.png") },
        { name: "服务", imgUrl: require("@/assets/img/navBar9.png") },
        { name: "更多", imgUrl: require("@/assets/img/navBar10.png") }
      ]
    };
  },
  components: {
    [Button.name]: Button,
    Search,
    Swiper,
    Seckill
  }
};
</script>

<style scoped lang="scss">
#ShoppingMall {
  display: flex;
  flex-direction: column;
  padding-bottom: 12vw;
  .ShoppingMall_NavBar {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    li {
      width: 18.3vw;
      height: 23vw;
      margin-top: 2vw;
      margin-left: 1.4vw;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      color: #4a4a4a;
      font-size: 3vw;
      img {
        width: 60%;
        margin-bottom: 2vw;
      }
    }
  }
}
</style>

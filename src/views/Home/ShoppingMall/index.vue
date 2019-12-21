<template>
  <div id="ShoppingMall">
    <!-- 顶部广告栏以及搜索栏模块 -->
    <Search :searchVal="value" :BoxHidden="BoxHidden"></Search>

    <!-- 轮播图模块 -->
    <Swiper :BoxHidden="BoxHidden"></Swiper>

    <!-- 导航栏模块 -->
    <ul class="ShoppingMall_NavBar">
      <li v-for="(item,index) in navBarList" :key="index">
        <img :src="item.imgUrl" :alt="item.name" />
        <span>{{item.name}}</span>
      </li>
    </ul>

    <!-- 限时秒杀模块 -->
    <Seckill></Seckill>

    <!-- 新品预约模块 -->
    <NewBooking></NewBooking>

    <!-- 扫尾货模块 -->
    <FinishGoods></FinishGoods>

    <!-- 图片广告模块 -->
    <ul class="ShoppingMall_ImgAdvertising">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>

    <!-- 华丽的分割线模块 -->
    <div id="divider">
      <van-divider :style="{ color: '#000', borderColor: '#000', padding: '0 50px' }">为你推荐</van-divider>
    </div>

    <!-- 推荐商品模块 -->
    <Recommend></Recommend>

    <!-- <md-button  type="primary" plain>商城</md-button> -->
  </div>
</template>

<script>
import { Button } from "mand-mobile";
import { Divider } from "vant";
import Search from "../../../components/common/Search";
import Swiper from "@/components/common/Swiper";
import Seckill from "@/components/HomeComponent/Seckill";
import NewBooking from "@/components/HomeComponent/NewBooking";
import FinishGoods from "@/components/HomeComponent/FinishGoods";
import Recommend from "@/components/HomeComponent/Recommend";

export default {
  name: "ShoppingMall",
  props:{
    BoxHidden:{
      type: Boolean,
      default: true
    }
  },
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
    [Button.name]: Button,Search,Swiper,Seckill,NewBooking,FinishGoods,[Divider.name]:Divider,Recommend
  },
  watch:{
    BoxHidden(newVal,oldVal){
      console.log(newVal)
    }
  },
  method:{
    goHome(){
      window.location.href='www.baidu.com'
    }
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
        height: 10vw;
        margin-bottom: 2vw;
      }
    }
  }
  .ShoppingMall_ImgAdvertising{
    width: 100%;
    height: 84vw;
    display: flex;
    flex-wrap: wrap;
    background:url('../../../assets/img/ImgAdvertising.jpg') no-repeat;
    background-size:100%;
    justify-content: space-around;
    li:nth-child(1),li:nth-child(2){
      width: 49vw; 
      height: 40vw;
    }
    li:nth-child(3),li:nth-child(4),li:nth-child(5){
      width: 32vw;
      height: 41vw;
    }
  }
  #divider{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:#eee;
    width: 100%;
    height: 14vw;
    /deep/ .van-divider{
      width: 100%;
    }
  }
}
</style>

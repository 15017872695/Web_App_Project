<template>
  <div id="ShoppingCath">
    <div class="Classify-TopNavBar"> 
      <i class="iconfont iconreturn" @click="back"></i>
      <span>购物车</span>
      <i class="iconfont iconmore" @click="showMainNav"></i>
    </div>
    <transition name="fade">
      <div class="main-nav" v-show="showNav">
        <ul>
          <li @click="goHome">
            <i class="iconfont iconshouye"></i>
            <span>首页</span>
          </li>
          <li>
            <i class="iconfont iconsousuo"></i>
            <span>搜索</span>
          </li>
          <li>
            <i class="iconfont iconwode1"></i>
            <span>个人中心</span>
          </li>
        </ul>
      </div>
    </transition>
    <div class="ShoppingCath-Continer">
      <div class="ShoppingCath-noShopping" v-if="ShoppingData.length < 1">
        <img src="../../assets/img/nopro.jpg" alt="购物车为空">
        <span>购物车空空如也，快去购物吧</span>
        <button @click="goHome">去逛逛</button>
      </div>
      <div class="ShoppingCath-yesShopping" v-else>2</div>
    </div>
    <!-- 华丽的分割线模块 -->
    <div id="divider">
      <van-divider :style="{ color: '#000', borderColor: '#000', padding: '0 50px' }">为你推荐</van-divider>
    </div>
    <Recommend></Recommend>
  </div>
</template>
    
<script>
import { Divider } from "vant";
import Recommend from "@/components/HomeComponent/Recommend"
export default {
  name: "ShoppingCath",
  data() {
    return {
      ShoppingData:[
        // {spName:'1'}
      ],
      showNav:false,
    };
  },
  components:{Recommend,[Divider.name]:Divider},
  mounted(){
    console.log(this.ShoppingData)
  },
  methods: {
    back(){
      this.$router.go(-1);//返回上一层
    },
    showMainNav(){
      this.showNav = !this.showNav;
    },
    goHome(){
       this.$router.push('/ShoppingMall')
    }
  }
};
</script>
    
<style scoped lang="scss">
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active, 2.1.8 版本以下 */ {
    opacity: 0
}
  #ShoppingCath{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .Classify-TopNavBar{
      width: 100%;
      height:auto;
      background:#E8E8E8;
      border-bottom: 1px solid silver;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1vw 5vw;
      box-sizing: border-box;
      font-size:4.5vw;
      .iconfont{
        font-size:6.5vw;
      }
    }
    .ShoppingCath-Continer{
      width: 100%;
      height: auto;
      display: flex;
      justify-content: center;
      .ShoppingCath-noShopping{
        display: flex;
        flex-direction: column;
        align-items:center;
        justify-content: center;
        img{
          margin: 10vw 0;
        }
        span{
          margin-top: 5vw;
          font-size:5vw;
          color: #959595;
        }
        button{
          width: 20vw;
          height: 8vw;
          border-radius: 2vw;
          background:#e0524b;
          color: #fff;
          font-size: 3.5vw;
          margin: 5vw 0;
        }
      }
    }
    .main-nav{
      width: 100%;
      height: 10vw;
      background:rgba(255,255,255,0.8);
      position: absolute;
      top:12vw;
      color: #000;
      display: flex;
      z-index:1000;
      
      ul{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        li{
          width: 20vw;
          font-size: 3vw;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 20px;
          .iconfont{
            margin-right: 5px;
          }
        }
      } 
    }
  }
</style>
    
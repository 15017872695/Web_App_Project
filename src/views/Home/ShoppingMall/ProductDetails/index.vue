<template>
  <div id="ProductDetails">
    <Swiper :BoxHidden="BoxHidden" :hidenIndicator="hidenIndicator" :images="images"></Swiper>
    <div class="Product-Top-One" v-show="TopOne">
      <i class="iconfont iconreturn" @click="back"></i>
      <i class="iconfont iconmore" @click="showMainNav"></i>
    </div>
    <div class="Product-Top-Two" v-show="TopTwo">
        <i class="iconfont iconreturn" @click="back"></i>
        <div class="selectInfoWapper">
            <span v-for="(item,index) in selectInfo" :key="index" @click="activeIndex(index)" :class="Index==index?'active':''">{{item}}</span>
        </div>
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
  </div>
</template>
<script>
import Swiper from "@/components/common/Swiper";
export default {
  name: "ProductDetails",
  props: {},
  components: { Swiper },
  data() {
    return {
      BoxHidden: false,
      hidenIndicator: true,
      images: [
        "https://p3.lefile.cn/product/adminweb/2019/03/04/DUSWQqh2DZFRJdFRMWNbBQwml-7087.jpg",
        "https://p4.lefile.cn/product/adminweb/2019/03/04/7yImeQRT6gHKaDivjamFyZlN1-8725.jpg",
        "https://p3.lefile.cn/product/adminweb/2019/03/04/rPe8T9dL8ISmaTswRgpdWNlEO-1296.jpg",
        "https://p2.lefile.cn/product/adminweb/2019/03/04/X1GtRUCOeXeLI2VZ4DLf5iPje-3746.jpg"
      ],
      TopOne: true,
      TopTwo: false,
      showNav: false,
      selectInfo:['商品','详情','配置','评价'],
      Index:0
    };
  },
  created() {},
  mounted() {},
  methods: {
    back() {
      this.$router.go(-1); //返回上一层
    },
    showMainNav() {
      this.showNav = !this.showNav;
    },
    goHome() {
      this.$router.push("/ShoppingMall");
    },
    activeIndex(index){
        console.log(index)
        this.Index = index;
    }
  }
};
</script>
<style scoped lang="scss">
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active, 2.1.8 版本以下 */ {
  opacity: 0;
}
#ProductDetails {
  width: 100%;
  height: 100%;
  #Swiper {
    height: 103vw;
    position: relative;
    /deep/ .custom-indicator {
      position: absolute;
      bottom: 0;
      right: 3vw;
      color: #4a4a4a;
      font-size: 4.5vw;
    }
  }
  .Product-Top-One,
  .Product-Top-Two {
    width: 100%;
    height: 13vw;
    position: fixed;
    top: 0;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 4vw;
    box-sizing: border-box;
    z-index: 9999;
    .iconfont {
      font-size: 5vw;
      color: #fff;
      background-color:#999;
      opacity: 0.7;
      border-radius: 50%;
      width: 6vw;
      height: 6vw;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    i:nth-child(2) {
      font-size: 6vw !important;
    }
    .selectInfoWapper{
        display: flex;
        span{
            margin-right:3vw;
            font-size:4vw;
            padding-bottom: 2vw;
        }
        .active{
            border-bottom: 0.5vw solid red;
        }
    }
  }
  .Product-Top-Two {
    z-index: 9998;
    .iconfont {
      font-size: 6vw;
      color: #000;
      background-color:#fff;
      opacity: 1;
      border-radius: 0;
      width: auto;
      height: auto;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    i:nth-child(2) {
      font-size: 8vw !important;
    }
  }
  .main-nav {
    width: 100%;
    height: 10vw;
    background: rgba(255, 255, 255, 0.8);
    position: fixed;
    top: 13vw;
    color: #000;
    display: flex;
    z-index: 1000;
    ul {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      li {
        width: 20vw;
        font-size: 3vw;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 20px;
        .iconfont {
          margin-right: 5px;
        }
      }
    }
  }
}
</style>
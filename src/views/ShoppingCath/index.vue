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
        <img src="../../assets/img/nopro.jpg" alt="购物车为空" />
        <span>购物车空空如也，快去购物吧</span>
        <button @click="goHome">去逛逛</button>
      </div>
      <div class="ShoppingCath-yesShopping" v-else>
        <div class="commodityItem" v-for="(item,index) in ShoppingData" :key="item+index">
          <div class="Item-Wapper">
            <van-checkbox v-model="item.checkBln"  @change="singleChecked(item.checkBln,index)" checked-color='#F7362C'></van-checkbox>
            <van-card
              :num="item.sum"
              :price="item.newPrice"
              :desc="item.info"
              :title="item.name"
              :thumb="item.imgUrl"
              :origin-price="item.oldPrice"
              :lazy-load="true"
            >
              <template #tags>
                <van-tag plain type="danger">新款</van-tag>
                <van-tag plain type="danger">一折</van-tag>
              </template>
              <template #footer>
                <van-button size="mini">+</van-button>
                <van-button size="mini">-</van-button>
              </template>
            </van-card>
          </div>
        </div>
      </div>
    </div>
    <div v-show="ShoppingData.length < 1">
      <!-- 华丽的分割线模块 -->
      <div id="divider">
        <van-divider :style="{ color: '#000', borderColor: '#000', padding: '0 50px' }">为你推荐</van-divider>
      </div>
      <Recommend></Recommend>
    </div>
    <van-submit-bar
      :price="3050"
      button-text="提交订单"
      @submit="onSubmit"
      v-show="ShoppingData.length >= 1"
    >
      <van-checkbox v-model="qxCheckedBln" @change="qxChecked(qxCheckedBln)" checked-color='#F7362C'>全选</van-checkbox>
      <template #tip>
        你的收货地址不支持同城送,
        <span @click="onClickEditAddress">修改地址</span>
      </template>
    </van-submit-bar>
  </div>
</template>
    
<script>
import { Divider, Card, Tag, Button, SubmitBar, Checkbox ,CheckboxGroup } from "vant";
import Recommend from "@/components/HomeComponent/Recommend";
// 引入状态管理器
import store from "@/store/index";
export default {
  name: "ShoppingCath",
  data() {
    return {
      ShoppingData: [],
      showNav: false,
      qxCheckedBln: false
    };
  },
  components: {
    Recommend,
    [Divider.name]: Divider,
    [Card.name]: Card,
    [Tag.name]: Tag,
    [Button.name]: Button,
    [SubmitBar.name]: SubmitBar,
    [Checkbox.name]: Checkbox,
    [CheckboxGroup.name]:CheckboxGroup
  },
  mounted() {
    let Data = JSON.parse(store.getters.shoppingData);
    console.log(Data)
    if(Data.shoppingData.length>0){
      this.ShoppingData = Data.shoppingData 
    }else{
      Data = [];
      this.ShoppingData = Data
    }
    this.qxAllFnc();
    console.log(this.ShoppingData)
  },
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
    // 提交订单
    onSubmit(inner) {
      console.log(inner)
    },
    onClickEditAddress() {},
    singleChecked(checkBln,index){
      this.ShoppingData[index].checkBln = checkBln;
      this.qxAllFnc();
      // 提交actions
      store.dispatch("ADD_COMMODITY", this.ShoppingData);
    },
    qxChecked(checkBln){
      console.log(checkBln)
      for (const key in this.ShoppingData) {
        this.ShoppingData[key].checkBln = checkBln;
        // 提交actions
        store.dispatch("ADD_COMMODITY", this.ShoppingData);
      }
    },
    qxAllFnc(){
      let checkIndex = 0;
      for (const key in this.ShoppingData) {
        console.log(this.ShoppingData[key])
        if(this.ShoppingData[key].checkBln == false){
          this.qxCheckedBln = false
        }
        if(this.ShoppingData[key].checkBln == true){
          checkIndex++;
        }
      }
      console.log(checkIndex)
      if(checkIndex == this.ShoppingData.length){
        this.qxCheckedBln = true
      }
    },
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
#ShoppingCath {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .Classify-TopNavBar {
    width: 100%;
    height: auto;
    background: #e8e8e8;
    border-bottom: 1px solid silver;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1vw 5vw;
    box-sizing: border-box;
    font-size: 4.5vw;
    .iconfont {
      font-size: 6.5vw;
    }
  }
  .ShoppingCath-Continer {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    padding-bottom: 23vw;
    .ShoppingCath-noShopping {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      img {
        margin: 10vw 0;
      }
      span {
        margin-top: 5vw;
        font-size: 5vw;
        color: #959595;
      }
      button {
        width: 20vw;
        height: 8vw;
        border-radius: 2vw;
        background: #e0524b;
        color: #fff;
        font-size: 3.5vw;
        margin: 5vw 0;
      }
    }
    .ShoppingCath-yesShopping {
      display: flex;
      width: 100%;
      flex-direction: column;
      .commodityItem{
        border-bottom: 1px solid #eee;
        padding: 0 1.5vw;
        box-sizing: border-box;
      }
      .commodityItem,.Item-Wapper{
        width: 100%;
        display: flex;
        flex-wrap: nowrap;
        .van-checkbox{
          margin: 0 0.1rem;
        }
        .van-card {
          width: 91%;
          margin-bottom: 8px;
          .van-tag--danger.van-tag--plain {
            margin-right: 0.2rem;
          }
          .van-card__title,
          .van-card__desc {
            width: 100%;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
          }
        }
      }
    }
  }
  .van-submit-bar__bar{
     padding: 0 2vw;
  }
  .main-nav {
    width: 100%;
    height: 10vw;
    background: rgba(255, 255, 255, 0.8);
    position: absolute;
    top: 12vw;
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
    
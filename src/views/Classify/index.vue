<template>
  <div id="Classify">
    <div class="HomeAppTitleShowBox">
      <div class="title">
        <img src="../../assets/img/logo.svg" alt />
        <div>
          <span>App买电脑首单立减10元</span>
          <span>注册即送188元大礼包，签到送延保！</span>
        </div>
      </div>
      <div class="Immediately_open">立即打开</div>
    </div>
    <div class="Classify-TopNavBar"> 
      <i class="iconfont iconreturn" @click="back"></i>
      <span>产品分类</span>
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
    <div class="category">
      <div class="category_left">
        <div v-for="(item,categoryIndex) in letfData" :key="categoryIndex" :style="{background:(categoryIndex==activeIndex?'#fff':'#eee')}" @click="ActiveClick(categoryIndex)" ref="ActiveItem">
          {{item.name}}
        </div>
      </div>
      <div class="category_right">
        <a href="" class="topImg" v-for="(aItem,aIndex) in letfData"  v-show="aIndex == activeIndex" :key="aItem+aIndex">
          <img v-lazy="ImgItem.image" :src="ImgItem.image" alt="" v-for="(ImgItem,index) in aItem.advertise" :key="index">
        </a>
        <div v-for="(item,index) in letfData" :key="index" v-show="index == activeIndex" class="nav2Box" @click="goDetails">
            <div v-for="(titleItem,titleIndex) in item.children" :key="titleIndex">
              <h3>{{titleItem.name}}</h3>
              <div class="nav2Box-Continaer">
                <div v-for="(continaerItem,continaerIndex) in titleItem.children" :key="continaerIndex">
                  <img v-lazy="continaerItem.icons" :alt="continaerItem.name">
                  <span>{{continaerItem.name}}</span>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/api"
export default {
  name: "Classify",
  data() {
    return {
      letfData:[],
      activeIndex:0,
      showNav:false,
    };
  },
  created() {
    // 发送请求获取数据
    api.getProductList().then(res=>{
      console.log(res)
      this.letfData = res.nodes;
    }).catch(err=>{
      console.log(error)
    })
  },
  mounted () {
    
  },
  methods:{
    ActiveClick(index){
      this.activeIndex = index;
    },
    back(){
      this.$router.go(-1);//返回上一层
    },
    showMainNav(){
      this.showNav = !this.showNav;
    },
    goHome(){
      this.$router.push('/ShoppingMall')
    },
    // 跳转至详情
    goDetails(){
      this.$router.push('/ProductDetails')
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
#Classify {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  overflow: hidden;

  .HomeAppTitleShowBox {
    width: 100%;
    height: 15vw;
    background: rgba(0, 0, 0, 1);
    display: flex;
    align-items: center;
    justify-content: space-around;
    i {
      color: #fff;
      font-size: 7vw;
      margin: 0 3vw;
    }
    .title {
      height: 100%;
      display: flex;
      justify-content: flex-start;
      color: #fff;
      img {
        width: 11vw;
      }
    }
    .title > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 1vw;
      font-size: 3vw;
      span:nth-child(1) {
        font-weight: bold;
        font-size: 4vw;
      }
      span:nth-child(2) {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
      }
    }
    .Immediately_open {
      background: #fff;
      width: 20vw;
      height: 8vw;
      color: #e2231a;
      font-size: 3vw;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 3vw;
    }
  }
  .Classify-TopNavBar{
    width: 100%;
    height:12vw;
    background:#E8E8E8;
    border-bottom: 1px solid silver;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:0 20px;
    box-sizing: border-box;
    font-size:4.5vw;
    .iconfont{
      font-size:6.5vw;
    }
    .iconmore{
        font-size:8vw;
    }
  }
  .main-nav{
    width: 100%;
    height: 10vw;
    background:rgba(255,255,255,0.8);
    position: fixed;
    top:27vw;
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
  .category{
    width: 100%;
    height: 100%;
    position: fixed;
    z-index:999;
    display:flex;
    overflow: hidden;
    flex-wrap: nowrap;
    .category_left{
      width: 26vw;
      height: 100%;
      background: #EEEEEE;
      z-index:999;
      display: flex;
      flex-direction: column;
      font-size: 3.5vw;
      div{
        width: 100%;
        height: 13vw;
        background:#EEEEEE;
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: 1px solid #ccc;
        border-right: 1px solid #ccc;
        box-sizing: border-box;
      }
    }
    .category_right {
      width: 74vw;
      height: 100%;
      background:#fff;
      display: flex;
      flex-direction: column;
      overflow-y: auto;
      padding: 2vw;
      box-sizing: border-box;
      overflow-x: hidden;
      .topImg{
        width: 100%;
        height: 23vw;
        display: flex;
        margin-bottom: 2vw;
      }
      .nav2Box{
        width: 100%;
        padding-bottom: 31vw;
        h3{
          padding: 1vw 3vw;
          font-size: 3vw;
          font-family: 'Microsoft YaHei';
        }
        .nav2Box-Continaer{
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          div{
            display: flex;
            flex-direction: column;
            width: 21vw;
            height: 33vw;
            font-size: 2vw;
            align-items: center;
            justify-content: center;
            margin-left: 2vw;
            span{
              color: #999;
              margin-top: 1.2vw;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              text-align: center;
            }
          }
        }
      }
    }
  }
}
</style>

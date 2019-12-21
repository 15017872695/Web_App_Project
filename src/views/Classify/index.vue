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
      <i class="iconfont iconreturn"></i>
      <span>产品分类</span>
      <i class="iconfont iconmore"></i>
    </div>
    <div class="main-nav" :style="{display:(showNav?'none':'block')}">
      <ul>
        <li>
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
    <div class="category">
      <div class="category_left">
        <div v-for="(item,index) in letfData" :key="index" :style="{background:(index==activeIndex?'#fff':'#eee')}" @click="ActiveClick(index)" ref="ActiveItem">
          {{item.name}}
        </div>
      </div>
      <div class="category_right">
        <a href="http://s.lenovo.com.cn/app/?cate=293" class="topImg" >
          <img src="../../assets/img/zx3.jpg" alt="">
        </a>
        <div v-for="(item,index) in letfData" :key="index" v-show="index == activeIndex">
          <h3 v-for="(titleItem,titleIndex) in item.children" :key="titleIndex">{{titleItem.name}}</h3>
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
      showNav:true,
    };
  },
  created() {
    api.getProductList().then(res=>{
      console.log(res)
      this.letfData = res.nodes
    }).catch(err=>{
      console.log(error)
    })
  },
  mounted () {

  },
  methods:{
    ActiveClick(index){
      console.log(index)
      this.activeIndex = index;
      console.log(this.$refs.ActiveItem)
    }
  }
};
</script>

<style scoped lang="scss">
#Classify {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
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
      .topImg{
        width: 100%;
        height: 23vw;
        display: flex;
        margin-bottom: 2vw;
      }
    }
  }
}
</style>

<template>
  <!-- 首页顶部APP广告栏 -->
  <div id="AppTitleShowBox" v-show="hideBoxBln?BoxHidden:hideBoxBln">
    <div class="HomeAppTitleShowBox">
      <i class="iconfont iconclose" @click="hideBox"></i>
      <div class="title">
        <img src="../../../assets/img/logo.svg" alt />
        <div>
          <span>App买电脑首单立减10元</span>
          <span>注册即送188元大礼包，签到送延保！</span>
        </div>
      </div>
      <div class="Immediately_open">立即打开</div>
    </div>

    <div class="HomeAppTitleShowBoxTwo" v-if="selectNavBarBLN">
      <img src="../../../assets/img/navBarLOGO.png" alt="">
      <ul>
        <li v-for="(item,index) in HomeNavBarData" :key="item+index" @click="activeFNC(index,item.path)" >
          <span :class="activeIndex == item.path ? 'active' :''">{{item.name}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import eventBus from '../../../utils/eventBus.js'
export default {
  name: "AppTitleShowBox",
  props:{
    BoxHidden:{
      type: Boolean,
      default: true
    },
    selectNavBarBLN:{
      type:Boolean,
      default:true
    }
  },
  data() {
    return {
       HomeNavBarData:[
        {name:'商城',path:'/ShoppingMall'},
        {name:'社区',path:'/Community'},
        {name:'服务',path:'/Serve'},
        {name:'资讯',path:'/Consult'},
        {name:'门店',path:'/Shop'},
      ],
      activeIndex:'/ShoppingMall',
      hideBoxBln:true,
    };
  },
  methods: {
    activeFNC(index,path){
      this.activeIndex = path;
      this.$router.push({path})
    },
    hideBox(){
      
    }
  },
  mounted() {
    this.activeIndex = this.$router.history.current.path
  },
  created() {
    eventBus.$on('my-event',args =>{
      for(let i in this.HomeNavBarData){
        if(this.HomeNavBarData[i].path == args){
          this.activeIndex = args;
        }
      }
      
    })
  }
};
</script>

<style scoped lang="scss">
#AppTitleShowBox{
  display: flex;
  flex-direction: column;
  position:fixed;
  top: 0;
  background-color:#fff;
  z-index: 999;
  width: 100%;
}
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
    // width: 20vw;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    color: #fff;
    img{
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
    span:nth-child(2){
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
    }
  }
  .Immediately_open {
    background: #e2231a;
    width: 18vw;
    height: 6vw;
    color: #fff;
    font-size: 3vw;
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 3vw;
  }
}
.HomeAppTitleShowBoxTwo{
  width: 100%;
  height: 12vw;
  background: #fff;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  img{
    width: 12vw;
    height: 12vw;
  }
  ul{
    width: 100%;
    height: 100%;
    font-size: 4vw;
    flex-direction: row;
    display: flex;
    align-items: center;
    li{
      flex: 1;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      span{
        border-bottom: 3px solid #fff;
        border-top: 3px solid #fff;
        display: flex;
        padding-bottom: 1vw;
      }
      .active{
        border-bottom: 3px solid #e2231a;
      }
    }
  }
}
</style>
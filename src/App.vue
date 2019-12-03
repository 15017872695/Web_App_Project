<template>
  <div id="app">
    <transition :name="transitionName">
      <keep-alive>
        <router-view class="Router"></router-view>
      </keep-alive>
     </transition>
  </div>
</template>

<script>

export default {
  name: "app",
  data(){
    return {
        keepAlive: 'main-keep-alive',  //需要缓存的页面 例如首页
        transitionName: 'slide-right', //初始过渡动画方向
    }
  },
  methods:{
    
  },
  watch: {
      $route(to, from) {
        // 切换动画
        let isBack = this.$router.isBack // 监听路由变化时的状态为前进还是后退
        if (isBack) {
          this.transitionName = 'slide-left'
        } else {
          this.transitionName = 'slide-right'
        }
        this.$router.isBack = false
      }
    },
}
</script>

<style lang="scss" rel="stylesheet/scss">
/* 在app.vue中引入reset.scss文件，完成后，样式即可进行全局调用了。 */
@import 'assets/css/reset';
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    height: auto;
    .Router {
      position: absolute;
      top: 0;
      transition: all .377s ease;
      // will-change: transform;
      // backface-visibility: hidden;
      // perspective: 1000;
    }
    .slide-left-enter,
    .slide-right-leave-active {
      opacity: 0;
      transform: translate3d(-100%, 0, 0);
    }

    .slide-left-leave-active,
    .slide-right-enter {
      opacity: 0;
      transform: translate3d(100%, 0 ,0);
    }
  }
</style>

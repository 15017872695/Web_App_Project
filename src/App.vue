<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>

export default {
  name: "app",
  methods:{
    
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
/* 在app.vue中引入reset.scss文件，完成后，样式即可进行全局调用了。 */
@import 'assets/css/reset';
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>

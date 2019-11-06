<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss" rel="stylesheet/scss">
/* 在app.vue中引入reset.scss文件，完成后，样式即可进行全局调用了。 */
@import 'assets/css/reset';

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>

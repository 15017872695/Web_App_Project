import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import Router from 'vue-router'
import store from './store/index'
import 'lib-flexible'

// 引入地图组件
import AMap from 'vue-amap';

// UI库
import 'mand-mobile/lib/mand-mobile.css'
import 'vant/lib/index.css';

//图片懒加载插件
import VueLazyload from 'vue-lazyload';

// 小图标
import "@/assets/font/iconfont.css";

Vue.use(VueLazyload)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '/assets/img/imgLodding.jpg',
  loading: '/assets/img/imgLodding.jpg',
  attempt: 1
})

// Vue.use(AMap);
//  // 初始化vue-amap
//  AMap.initAMapApiLoader({
//   // 高德key
//   key: '7168593a2164a8afa9599b39d46ba18d',
//   // 插件集合 （插件按需引入）
//   plugin:  ['AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PlaceSearch', 'AMap.Geolocation'],
// });

Vue.config.productionTip = false;


// vue router 报错： Uncaught (in promise) NavigationDuplicated {_name:""NavigationDuplicated"... 的解决方法
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

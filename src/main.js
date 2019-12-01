import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import Router from 'vue-router'
import store from './store/index'
import 'lib-flexible';
import vant from 'babel-plugin-component'

import "@/assets/font/iconfont.css";


Vue.config.productionTip = false;
Vue.use(vant)

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

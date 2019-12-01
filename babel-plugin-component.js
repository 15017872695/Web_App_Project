import Vue from 'vue';

// 封装按需引入 Element
import {   
        Icon
  } from 'vant'
 const vant = {
  install: function (Vue) {
    Vue.use(Icon)
  }
 }
 export default vant

// 温馨提示Message、Notification 这两个 不是组件，是封装好的方法  所以不能通过Vue.use(XXX)去使用 要使用以下方式

//  Vue.prototype.$message = Message
//  Vue.prototype.$notification = Notification
//  Vue.prototype.$confirm = MessageBox

//  在组件中使用 则可以直接通过this.$xxx的方式来使用
// index.js主要进行一些引入，初始化操作。
import Vue from 'vue'
import Vuex from 'vuex'

// 引入各个模块代码
import user from './modules/user'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
  },
  getters,
})

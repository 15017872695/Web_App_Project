// index.js主要进行一些引入，初始化操作。
import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistense from 'vuex-persistedstate'

// 引入各个模块代码
import user from './modules/user'
import shoppingCath from './modules/shoppingCath'
import getters from './getters'

const vuexLocal = new VuexPersistense({
  storage: localStorage,
  reducer: val => {
    console.log(val)
    return {
      //引入app模板，对象里面可配置需要持久化的status
        shoppingData: val.shoppingCath.shoppingData,
        token:val.user.token
    }
  }
})

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    shoppingCath
  },
  getters,
  plugins: [vuexLocal]
})

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 引入
const Home = () => import(/* webpackChunkName: "about" */ '@/views/Home');
const Classify = () => import(/* webpackChunkName: "about" */ '@/views/Classify');
const ShoppingCath = () => import(/* webpackChunkName: "about" */ '@/views/ShoppingCath');
const My = () => import(/* webpackChunkName: "about" */ '@/views/My');


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect:'/Home'
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Classify',
      name: 'Classify',
      component: Classify
    },
    {
      path: '/ShoppingCath',
      name: 'ShoppingCath',
      component: ShoppingCath
    },
    {
      path: '/My',
      name: 'My',
      component: My,
      meta:{
        authorToken: true,//自定义一个参数 判断当前路由是否需要登录
      }
    }
  ]
})

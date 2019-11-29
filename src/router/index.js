import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 引入
const Home = () => import(/* webpackChunkName: "about" */ '@/views/Home');
/*>>>*/  const ShoppingMall = () => import(/* webpackChunkName: "about" */ '@/views/Home/ShoppingMall');
         const Community = () => import(/* webpackChunkName: "about" */ '@/views/Home/Community');
         const Serve = () => import(/* webpackChunkName: "about" */ '@/views/Home/Serve');
         const Consult = () => import(/* webpackChunkName: "about" */ '@/views/Home/Consult');
         const Shop = () => import(/* webpackChunkName: "about" */ '@/views/Home/Shop');

const Classify = () => import(/* webpackChunkName: "about" */ '@/views/Classify');

const ShoppingCath = () => import(/* webpackChunkName: "about" */ '@/views/ShoppingCath');

const My = () => import(/* webpackChunkName: "about" */ '@/views/My');


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect:'/ShoppingMall'
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      children:[
        {path:'/ShoppingMall',name:'ShoppingMall ',component:ShoppingMall,meta:{/*配置路由元信息表*/needLogin: true /* 需要登录*/},},
        {path:'/Community',name:'Community',component:Community,meta:{needLogin: true},},
        {path:'/Serve',name:'Serve',component:Serve,meta:{needLogin: true},},
        {path:'/Consult',name:'Consult',component:Consult,meta:{needLogin: true},},
        {path:'/Shop',name:'Shop',component:Shop,meta:{needLogin: true },},
      ]
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

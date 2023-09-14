import Find from '../views/Find'
import My from '../views/My'
import Friend from '../views/Friend'
import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter) // VueRouter插件初始化

const router = new VueRouter({
  // routes 路由规则们
  // route  一条路由规则 { path: 路径, component: 组件 }
  routes: [
    { path: '/find', component: Find },
    { path: '/my', component: My },
    { path: '/friend', component: Friend },
  ]
})

export default router
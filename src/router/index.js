import Vue from 'vue'
import Router from 'vue-router'
 
import Login from '@/components/IPX/login'
import GoodDetail from '@/components/IPX/good-detail'
import GoodList from '@/components/IPX/good-list'
import Home from '@/components/IPX/home'
import Cart from '@/components/IPX/cart'
import Profile from '@/components/IPX/profile'

import index from '@/components/index'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [  
    { path: '/Login', name: 'Login', component: Login },
    { path: '/GoodDetail', name: 'GoodDetail', component: GoodDetail },
    { path: '/GoodList', name: 'GoodList', component: GoodList },
    { path: '/Home', name: 'Home', component: Home },
    { path: '/Cart', name: 'Cart', component: Cart },
    { path: '/Profile', name: 'Profile', component: Profile }, 
    { path: '/index', name: 'index', component: index }, 


  ]
})

import Vue from 'vue'
import Router from 'vue-router'
 
import Login from '@/components/IPX/login'
import GoodDetail from '@/components/IPX/good-detail'
import GoodList from '@/components/IPX/good-list' 
import Cart from '@/components/IPX/cart'
import Profile from '@/components/IPX/profile'

import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [  

    { path: '/', name: 'Login', component: Login },
    { path: '/Cart', name: 'Cart', component: Cart },

    { path: '/Home', name: 'Home', component: Home }, 

    { path: '/GoodDetail', name: 'GoodDetail', component: GoodDetail },
    { path: '/GoodList', name: 'GoodList', component: GoodList },
    
    { path: '/Profile', name: 'Profile', component: Profile }, 


  ]
})

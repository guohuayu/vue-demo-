import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/IPX/login'
import GoodDetail from '@/components/IPX/good-detail'
import Galobal from '@/components/IPX/global'
import Cart from '@/components/IPX/cart'
import Falls from '@/components/falls'

import Home from '@/components/Home'
import { log } from 'util';

Vue.use(Router)

const vueRouter = new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/Home' },
    { path: '/Login', name: 'Login', component: Login },
    { path: '/Home', name: 'Home', component: Home },
    { path: '/Cart', name: 'Cart', component: Cart },
    { path: '/Falls', name: 'Falls', component: Falls },
    { path: '/GoodDetail', name: 'GoodDetail', component: GoodDetail },
    { path: '/Galobal', name: 'Galobal', component: Galobal },
  ]
});

vueRouter.beforeEach((to, from, next) => {
  const nextRoute = ['Home', 'Cart', 'Falls'];
  console.log(to);
  console.log(from);
  var a = Vue.prototype.global.usertext,
    b = Vue.prototype.global.userpassword;
  console.log(a,b);

  var isLogin = false;
  if (a == '' || b == '') { isLogin = true }//要进行登陆Login
  console.log(isLogin);
  
  if (isLogin) {    //是否进行登陆
    if (to.path!=='/Login') {

      return next({path:'/Login'})
    }else{return next()}
  }else {           //不进行登陆
    console.log('我输入了账号');
    
    //if (to.path=='/Login') {
       return next()
    // }else{return next()}
  }
 

});

export default vueRouter
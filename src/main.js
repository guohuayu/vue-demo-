// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router' 


 

import req from '@/utils/axios'
Vue.prototype.req=req;

import global from '@/components/IPX/global' 
Vue.prototype.global=global



import user from '@/components/user/user'
Vue.component('User',user)


//最后一个实例VUEX
import store from '@/store/store'

/* eslint-disable no-new */
Vue.config.productionTip = false 
new Vue({
  el: '#app',
  router, 
  store,//1.026169  5058.51034719 //持仓市值  妈的没更新数据 
  components: { App },
  template: '<App/>'
})

 


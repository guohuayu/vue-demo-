// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router' 

import axios from 'axios'
import VueAxios from 'vue-axios' 

import req from '@/utils/axios'
Vue.prototype.req=req;

Vue.use(VueAxios,axios );

import user from '@/components/user/user'
Vue.component('User',user)

/* eslint-disable no-new */
Vue.config.productionTip = false 
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

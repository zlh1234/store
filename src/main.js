// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/route.js'
import store from './store/store.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'


import 'babel-polyfill'

import './assets/css/reset.css'
import './assets/css/iconfont/iconfont.css'
import 'swiper/dist/css/swiper.css'

import { Lazyload } from 'mint-ui';
Vue.use(Lazyload);

Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import AwesomeSwiper from 'vue-awesome-swiper'
import store from './vuex/store'
import * as filters from './util/filter'

require('swiper/dist/css/swiper.css')

Object.keys(filters).forEach(k => Vue.filter(k, filters[k])) //注册过滤器

Vue.use(AwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  ...App
})

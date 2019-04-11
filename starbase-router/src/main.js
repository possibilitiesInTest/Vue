import Vue from 'vue'
import VueRouter from 'vue-router'
// import router

Vue.use(VueRouter)
// use router

import App from './App.vue'
import Data from './components/Data.vue'
// import data to use in route

const routes = [
  { path: '/data/:type', component: Data }
]
// Passed to router instance created below

const router = new VueRouter({
  routes
})
// instantiates router, takes routes as object

new Vue({
  el: '#app',
  router,
  // handles rendering of data in components
  render: h => h(App)
})

import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import store from '@/vuex/store'

import Home from './components/Home'
import Orders from './components/orders/Orders'
import OrderDetails from './components/orders/OrderDetails'

import Suppliers from './components/suppliers/Suppliers'
import SupplierDetails from './components/suppliers/SupplierDetails'

import Trace from './components/trace/Home'

import Dashboard from './components/Dashboard'

import './assets/css/bootstrap.min.css'
import './assets/css/animate.css'
import './assets/font-awesome/css/font-awesome.min.css'
import './assets/css/vue-multiselect.min.css'
import './assets/css/style.css'
import './assets/css/home.css'
import './assets/js/inspinia.js'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Dashboard },
  { path: '/orders', component: Orders },
  { path: '/orders/:id', component: OrderDetails },
  { path: '/suppliers', component: Suppliers },
  { path: '/suppliers/:id', component: SupplierDetails },
  { path: '/trace', component: Trace },
  { path: '/home', component: Home }
]

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})

import Vue from 'vue'
import Router from 'vue-router'
import Cryptos from './components/Crypto.vue'
import About from './components/About.vue'
import Customers from './components/Customers.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/crypto',
      name: 'Crypto',
      component: Cryptos
    },
    {
      path: '/',
      name: 'Customers',
      component: Customers
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})

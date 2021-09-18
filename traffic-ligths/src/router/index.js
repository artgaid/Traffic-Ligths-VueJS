import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/red',
    name: 'Red',
    component: () => import(/* webpackChunkName: "red" */ '../views/Red.vue')
  },
  {
    path: '/yellow',
    name: 'Yellow',
    component: () => import(/* webpackChunkName: "red" */ '../views/Yellow.vue')
  },
  {
    path: '/green',
    name: 'Green',
    component: () => import(/* webpackChunkName: "red" */ '../views/Green.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

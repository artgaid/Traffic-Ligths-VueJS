import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Red',
    component: () => import(/* webpackChunkName: "red" */ '../views/Red.vue')
  },
  {
    path: '/red',
    name: 'Red',
    component: () => import(/* webpackChunkName: "red" */ '../views/Red.vue'),
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
  },
  {
    path: '*',
    component: () => import(/* webpackChunkName: "error" */ '../views/Page404.vue')
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

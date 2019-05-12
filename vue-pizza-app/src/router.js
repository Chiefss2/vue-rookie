import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Menu from './views/Menu.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      // 单个router-view
      // component: Home
      // router-view复用
      components: {
        default: Home,
        Menu: Menu
      }
    },
    {
      path: '/menu',
      name: 'menu',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/Menu.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('./views/Admin.vue')
    },
    {
      path: '/about',
      name: 'about',
      redirect: '/about/history',
      component: () => import('./views/About.vue'),
      children: [
        { path: '/about/contact', name: 'contactLink', component: () => import('./components/about/Contact.vue') },
        { path: '/about/history', name: 'historyLink', component: () => import('./components/about/History.vue') },
        { path: '/about/delivery', name: 'deliveryLink', component: () => import('./components/about/Delivery.vue') },
        { path: '/about/orderingguide', name: 'orderingGuideLink', component: () => import('./components/about/OrderingGuide.vue') }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/Register.vue')
    },
    {
      path: '*',
      redirect: '/'
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    // 对于所有路由导航，简单地让页面滚动到顶部
    // return { x: 0, y: 100 }
    // 滚动到具体某个锚点
    // return { selector: '.btn' }
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

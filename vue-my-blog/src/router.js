import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/blog',
      name: 'showblogs',
      component: () => import('./components/ShowBlogs.vue')
    },
    {
      path: '/addblog',
      name: 'addblog',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./components/AddBlog.vue')
    },
    {
      path: '/blog/singleblog/:id',
      component: () => import('./components/SingleBlog.vue')
    },
    {
      path: '*',
      redirect: '/blog'
    }
  ]
})

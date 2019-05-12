import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// 前置守卫
// router.beforeEach((to, from, next) => {
//   // console.log(to)
//   if (to.path === '/login' || to.path === '/register') {
//     next()
//   } else {
//     alert('还没有登录，请先登录')
//     next('./login')
//   }
// })

// 后置钩子
// router.afterEach((to, from) => {
//   alert('after each')
// })

// 路由独享守卫用法跟前置守卫一样，定义方法是直接在某个路由里面定义
// beforeEnter((to, from, next) => { code })

// 组件守卫：直接在路由组件内直接定义一下路由导航守卫
// beforeRouteEnter: (to, from, next) => { code } 不能取到this, 要取到this只能在next回调里面：next( vm => { alert( vm.name ) } )
// beforeRouteUpdate: (to, from, next) => { code }
// beforeRouteLeave: (to, from, next) => { code }

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

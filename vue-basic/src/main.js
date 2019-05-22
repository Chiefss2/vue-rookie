import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import Home from './components/Home'
import HelloWorld from './components/HelloWorld'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)

// 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
const routes = [
  { path: '/', component: Home },
  { path: '/helloworld', component: HelloWorld }
]

// 配置路由
const router = new VueRouter({
  routes,
  mode: "history"
})

new Vue({
  // 使用路由
  router,
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import resource from 'vue-resource'
import Bmob from 'hydrogen-js-sdk'
import './registerServiceWorker'

Vue.config.productionTip = false
Bmob.initialize('bbad389a477fd98e22ecc0a82f3cf4b3', '837c6236c0b6bb825576bb84e1123664', 'a19c61d5b2281010ad97dcc90a36b63d')
Vue.prototype.Bmob = Bmob
Vue.use(resource)

// 全局自定义指令
Vue.directive('crimson', {
  bind (el, binding, vnode) {
    el.style.color = 'crimson'
  }
})
Vue.directive('theme', {
  bind (el, binding, vnode) {
    if (binding.value === 'wide') {
      el.style.maxWidth = '700px'
    }
    if (binding.arg === 'bgc') {
      el.style.background = '#fff'
    }
  }
})

// 全局自定义过滤器
Vue.filter('to-uppercase', function (value) {
  return value.toUpperCase()
})

Vue.filter('snippet', function (value) {
  return value.slice(0, 100) + '...'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

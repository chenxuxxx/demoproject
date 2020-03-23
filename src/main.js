// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import './style/index.css'
// 引入vue-awesome
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Icon from 'vue-awesome/components/Icon'
import 'vue-awesome/icons/index.js'
import 'es6-promise/auto'
import store from './store/index'
import '@/mock/index'
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
Vue.use(ElementUI)

// 全局注册icon组件
Vue.component('icon', Icon)

Vue.use(iView)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})

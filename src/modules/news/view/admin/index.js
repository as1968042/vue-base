import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import routes from './router'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import store from './vuex/store'
import vueCookie from 'vue-cookie'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI, { locale })

Vue.config.productionTip = false
const router = new VueRouter({
  mode: 'hash',
  routes
})

Vue.use(Vuex)

Vue.use(VueRouter)

window.router = router
const bus = new Vue({
  store,
  router
})
window.bus = bus

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})

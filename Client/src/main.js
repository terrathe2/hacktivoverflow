// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import axios from 'axios'
import swal from 'vue-sweetalert2'
import VueJWT from 'vuejs-jwt'
import vueMoment from 'vue-moment'

Vue.prototype.$axios = axios.create({
  baseURL: 'http://localhost:3000'
  // baseURL: 'http://ec2-52-34-18-0.us-west-2.compute.amazonaws.com'
})

Vue.use(swal)
Vue.use(VueJWT, {
  signKey: 'hacktiv8',
  keyName: 'token'
})

Vue.use(vueMoment)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

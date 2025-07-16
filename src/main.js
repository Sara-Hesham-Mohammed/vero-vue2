import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'

import store from './services/state_management'

Vue.use(Vuex)

new Vue({
  router,
  store, 
  render: h => h(App),
}).$mount('#app')

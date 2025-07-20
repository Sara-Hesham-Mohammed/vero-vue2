import Vuex from 'vuex'
import Vue from 'vue'
import moduleA from './moduleA'
import moduleB from './moduleB'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    isLoggedIn: false,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    clearUser(state) {
      state.user = null;
      state.isLoggedIn = false;
    },
    setIsLoggedIn(state, status) {
      state.isLoggedIn = status;
    }
  },
  actions: {
    login({ commit }, user) {
      commit('setUser', user);
      commit('setIsLoggedIn', true);
    },
    logout({ commit }) {
      commit('clearUser');
    }
  },
  modules: {
    a: moduleA,
    b: moduleB
  }
  
})


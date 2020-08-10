import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  plugins: [
    createPersistedState({
      storage: window.localStorage,
      reducer(val) {
        return {
          login: val.login,
          reportEdit:val.reportEdit
        }
      },
    }),
  ],
})

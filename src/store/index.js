import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

const store = createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {},
  plugins: [createPersistedState()]
})

export default store

import Vue from "vue"
import Vuex from "vuex"

import axios from "axios"
<<<<<<< Updated upstream
axios.defaults.baseURL = "https://www.nexters.me/"
=======
// axios.defaults.baseURL = "https://101.101.162.212"
axios.defaults.baseURL = "https://www.nexters.me"
>>>>>>> Stashed changes

Vue.use(Vuex)

export const store = new Vuex.Store({
<<<<<<< Updated upstream
  actions: {
    POST({}, { url, dto }) {
      axios.post(url, dto).then(r => {
        return r.data
      })
=======
  state: {
    historyList: []
  },
  mutations: {
    addHistory(state, payload) {
      state.historyList.push(payload)
    }
  },
  actions: {
    // POST({ commit }) {
    POST({ commit }, { url, dto }) {
      // 실제로는 이걸로
      return axios
        .post(url, dto)
        .then(r => {
          commit("addHistory", r.data)
        })
        .catch(err => {
          return err
        })

      // // test code
      // const tempData = {
      //   originUrl: "originTestValue",
      //   shortUrl: "shortTestValue"
      // }
      // commit("addHistory", tempData)
    }
  },
  getters: {
    historyList(state) {
      return state.historyList
>>>>>>> Stashed changes
    }
  }
})

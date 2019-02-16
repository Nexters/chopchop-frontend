import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

axios.defaults.baseURL = "https://www.nexters.me";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    historyList: []
  },
  mutations: {
    addHistory(state, payload) {
      state.historyList.push(payload);
    }
  },
  actions: {
    // POST({ commit }) {
    POST({ commit }, { url, dto }) {
      // 실제로는 이걸로
      return axios
        .post(url, dto)
        .then(r => {
          commit("addHistory", r.data);
        })
        .catch(err => {
          return err;
        });

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
      return state.historyList;
    }
  }
});

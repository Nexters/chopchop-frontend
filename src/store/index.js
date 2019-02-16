import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";
// axios.defaults.baseURL = "https://101.101.162.212"
axios.defaults.baseURL = "https://www.nexters.me";

Vue.use(Vuex);

// urls
const countUrl = "/chop/v1/count";

export const store = new Vuex.Store({
  state: {
    historyList: [
      { originUrl: "http://naver.com", shortUrl: "nexters.me/9", title: "302Found" },
      { originUrl: "http://naver.com", shortUrl: "nexters.me/9", title: "302Found" },
      { originUrl: "http://naver.com", shortUrl: "nexters.me/9", title: "302Found" }
    ],
    count: 0
  },
  mutations: {
    addHistory(state, payload) {
      state.historyList.push(payload);
    },
    updateCount(state, payload) {
      state.count = payload;
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
    },
    fetchCount({ commit }) {
      return axios
        .get(countUrl)
        .then(res => {
          commit("updateCount", res.data.globalCount);
        })
        .catch(err => err);
    }
  },
  getters: {
    historyList(state) {
      return state.historyList;
    },
    count(state) {
      return state.count;
    }
  }
});

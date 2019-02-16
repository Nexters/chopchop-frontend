import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { debounce } from "lodash-es";

import { setItem } from "../utils/localStorage";

axios.defaults.baseURL = "https://www.nexters.me";

Vue.use(Vuex);

// urls
const countUrl = "/chop/v1/count";
const urlCountUrl = "/chop/v1/totalcount";

const debouncedSetitem = debounce(setItem, 500);

export const store = new Vuex.Store({
  state: {
    historyList: JSON.parse(localStorage.getItem("historyList")) || [],
    count: 0
  },
  mutations: {
    addHistory(state, payload) {
      state.historyList.push({ ...payload, count: 0 });
      debouncedSetitem("historyList", state.historyList);
    },
    deleteHistory(state, payload) {
      state.historyList = state.historyList.filter(history => history.shortUrl !== payload);
      debouncedSetitem("historyList", state.historyList);
    },
    updateUrlCount(state, { index, count }) {
      state.historyList[index].count = count;
      debouncedSetitem("historyList", state.historyList);
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
      // commit("addHistory", tempData
    },
    // 히스토리 삭제
    DELETE_HISTORY({ commit }, shortUrl) {
      commit("deleteHistory", shortUrl);
    },
    // 각 히스토리에 대한 URL 조회 횟수 호출
    UPDATE_URL_COUNT({ commit }, { index, shortUrl }) {
      return axios
        .get(`${urlCountUrl}/${shortUrl}`)
        .then(res => {
          commit("updateUrlCount", { index, count: res.data.globalCount });
        })
        .catch(err => err);
    },
    // 전체 url변환 횟수 호출
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

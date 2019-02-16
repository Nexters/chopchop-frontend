import Vue from "vue";
import Vuex from "vuex";
import { debounce } from "lodash-es";

import axios from "axios";
import { setItem } from "../utils/localStorage";
// axios.defaults.baseURL = "https://101.101.162.212"
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
      state.historyList = state.historyList.filter(history => history.shortUrl !== payload.shortUrl);
      state.historyList.unshift(payload);
      if (state.historyList.length > 5) {
        state.historyList = state.historyList.slice(0, 5);
      }
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
    async POST({ commit }, { url, dto }) {
      // 실제로는 이걸로
      const { data } = await axios.post(url, dto);
      commit("addHistory", { ...data, count: 0 });
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

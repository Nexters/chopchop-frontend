import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { debounce } from "lodash-es";
import format from "date-fns/format";

import { setItem } from "../utils/localStorage";

axios.defaults.baseURL = "https://www.nexters.me";

Vue.use(Vuex);

// urls

const debouncedSetitem = debounce(setItem, 500);

export const store = new Vuex.Store({
  state: {
    historyList: JSON.parse(localStorage.getItem("historyList")) || [],
    chartLabels: [],
    chartData: [],
    platformData: [],
    platformLabels: [],
    referrerData: [],
    referrerLabels: [],
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
    },
    getUrlCountByWeek(state, payload) {
      state.chartLabels = [];
      state.chartData = [];
      payload.forEach(({ clickDate, count }, index) => {
        Vue.set(state.chartLabels, index, format(clickDate, "MMM D"));
        Vue.set(state.chartData, index, count);
      });
    },
    getUrlCountByPlatform(state, payload) {
      state.platformLabels = [];
      state.platformData = [];
      Object.entries(payload).forEach(([label, data], index) => {
        Vue.set(state.platformLabels, index, label);
        Vue.set(state.platformData, index, data);
      });
    },
    getUrlCountByReferrer(state, payload) {
      state.referrerLabels = [];
      state.referrerData = [];
      payload.forEach(({ referer, count }, index) => {
        Vue.set(state.referrerLabels, index, referer);
        Vue.set(state.referrerData, index, count);
      });
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
        .get(`/api/v1/urls/${shortUrl}/totalcount`)
        .then(res => {
          commit("updateUrlCount", { index, count: res.data.totalCount });
        })
        .catch(err => err);
    },
    // 전체 url변환 횟수 호출
    fetchCount({ commit }) {
      return axios
        .get("/api/v1/count")
        .then(res => {
          commit("updateCount", res.data.globalCount);
        })
        .catch(err => err);
    },
    // 주에 따른 URL 클릭 횟수 호출
    GET_URL_COUNT_BY_WEEK({ commit }, { url, week }) {
      return axios
        .get(`/api/v1/urls/${url}/clickdate`, { params: { week } })
        .then(({ data }) => commit("getUrlCountByWeek", data))
        .catch(err => err);
    },
    // 플랫폼에 따른 URL 클릭 횟수 호출
    GET_URL_COUNT_BY_PLATFORM({ commit }, { url }) {
      return axios
        .get(`/api/v1/urls/${url}/platform`)
        .then(({ data }) => commit("getUrlCountByPlatform", data))
        .catch(err => err);
    },
    // 레퍼러에 따른 URL 클릭 횟수 호출
    GET_URL_COUNT_BY_REFERRER({ commit }, { url }) {
      return axios
        .get(`/api/v1/urls/${url}/referer`)
        .then(({ data }) => commit("getUrlCountByReferrer", data))
        .catch(err => err);
    }
  },
  getters: {
    historyList(state) {
      return state.historyList;
    },
    count(state) {
      return state.count;
    },
    chartData(state) {
      return state.chartData;
    },
    chartLabels(state) {
      return state.chartLabels;
    },
    platformLabels(state) {
      return state.platformLabels;
    },
    platformData(state) {
      return state.platformData;
    },
    referrerLabels(state) {
      return state.referrerLabels;
    },
    referrerData(state) {
      return state.referrerData;
    }
  }
});

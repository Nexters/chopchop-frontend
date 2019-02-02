import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    value: 1,
    url: "유알엘~"
  },
  mutations: {
    valueUp(state, payload) {
      state.value += payload;
    }
  },
  actions: {
    async valueUp(test, payload) {
      return { test, payload };
    }
  },
  getters: {
    getValue(store) {
      return store.value;
    },
    getUrl(store) {
      return store.url;
    }
  }
});

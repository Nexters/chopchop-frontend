import Vue from "vue"
import Vuex from "vuex"

import axios from "axios"
axios.defaults.baseURL = "https://www.nexters.me/"

Vue.use(Vuex)

export const store = new Vuex.Store({
  actions: {
    POST({}, { url, dto }) {
      axios.post(url, dto).then(r => {
        return r.data
      })
    }
  }
})

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import http from "@/util/http-common.js";
export default new Vuex.Store({
  state: {
    sidos: [{ value: null, text: "선택하세요" }],
  },
  mutations: {
    GET_SIDO_LIST(state, sidos) {
      sidos.forEach(sido => {
        state.sidos.push({ value: sido.sidoCode, text: sido.sidoName });
      });
    },
  },
  actions: {
    getSido({ commit }) {
      http.get(`/map/sido`).then(response => {
        commit("GET_SIDO_LIST", response.data);
      });
    },
  },
  modules: {},
});

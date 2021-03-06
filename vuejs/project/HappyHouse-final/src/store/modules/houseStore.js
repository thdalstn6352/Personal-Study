/* eslint-disable prettier/prettier */
import { sidoList, gugunList, houseList, aroundList } from "@/api/house.js";

const houseStore = {
  namespaced: true,
  state: {
    sidos: [{ value: null, text: "선택하세요" }],
    guguns: [{ value: null, text: "선택하세요" }],
    houses: [],
    house: null,
    arounds: [],
    markers: [],
    recents: [],
  },

  getters: {},

  mutations: {
    SET_SIDO_LIST: (state, sidos) => {
      sidos.forEach(sido => {
        state.sidos.push({ value: sido.sidoCode, text: sido.sidoName });
      });
    },
    SET_GUGUN_LIST: (state, guguns) => {
      guguns.forEach(gugun => {
        state.guguns.push({ value: gugun.gugunCode, text: gugun.gugunName });
      });
    },
    CLEAR_SIDO_LIST: state => {
      state.sidos = [{ value: null, text: "선택하세요" }];
    },
    CLEAR_GUGUN_LIST: state => {
      state.guguns = [{ value: null, text: "선택하세요" }];
    },
    SET_HOUSE_LIST: (state, houses) => {
      //   console.log(houses);
      state.houses = houses;
    },
    SET_DETAIL_HOUSE: (state, house) => {
      state.house = house;
    },
    SET_AROUND_LIST: (state, data) => {
      state.arounds = data;
    },
    SET_MARKER_LIST: (state, data) => {
      state.markers = data;
    },
    SET_RECENT_LIST: (state, data) => {
      state.recents = data;
    },
  },

  actions: {
    getSido: ({ commit }) => {
      sidoList(
        ({ data }) => {
          // console.log(data);
          commit("SET_SIDO_LIST", data);
        },
        error => {
          console.log(error);
        }
      );
    },
    getGugun: ({ commit }, sidoCode) => {
      const params = {
        sido: sidoCode,
      };
      gugunList(
        params,
        ({ data }) => {
          // console.log(commit, response);
          commit("SET_GUGUN_LIST", data);
        },
        error => {
          console.log(error);
        }
      );
    },
    getHouseList: ({ commit }, gugunCode) => {
      // vue cli enviroment variables 검색
      //.env.local file 생성.
      // 반드시 VUE_APP으로 시작해야 한다.
      // const SERVICE_KEY = process.env.VUE_APP_APT_DEAL_API_KEY;
      // const SERVICE_KEY =
      //   "PdIWX7uJ0xSSI9JZ95aZZauuxtk0z5MSUs1sUq6th8uytplflwZkegSbl4PSkIfWQH9ZQMEVPUI9LoEgksZq%2Fw%3D%3D";
      const params = {
        LAWD_CD: gugunCode,
        // DEAL_YMD: "202110",
      };
      console.log(params);
      houseList(
        params,
        response => {
          console.log(response);
          //   console.log(response.data.response.body.items.item);
          commit("SET_HOUSE_LIST", response.data.response.body.items.item);
        },
        error => {
          console.log(error);
        }
      );
    },
    detailHouse: ({ commit }, house) => {
      // 나중에 house.일련번호를 이용하여 API 호출
      commit("SET_DETAIL_HOUSE", house);
    },
    getAround: ({ commit }, center) => {
      center,
        aroundList(
          center,
          ({ data }) => {
            // console.log(commit, response);
            commit("SET_AROUND_LIST", data);
          },
          error => {
            console.log(error);
          }
        );
    },
  },
};

export default houseStore;

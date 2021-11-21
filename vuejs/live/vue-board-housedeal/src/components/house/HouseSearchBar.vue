<template>
  <b-row class="mt-4 mb-4 text-center">
    <!-- <b-col class="sm-3">
      <b-form-input
        v-model.trim="dongCode"
        placeholder="동코드 입력...(예 : 11110)"
        @keypress.enter="sendKeyword"
      ></b-form-input>
    </b-col>
    <b-col class="sm-3" align="left">
      <b-button variant="outline-primary" @click="sendKeyword">검색</b-button>
    </b-col> -->
    <b-col class="sm-3">
      <b-form-select v-model="sidoCode" :options="options"></b-form-select
    ></b-col>
    <b-col class="sm-3"> </b-col>
  </b-row>
</template>

<script>
export default {
  name: "HouseSearchBar",
  data() {
    return {
      sidoCode: null,
    };
  },
  created() {
    this.$store.dispatch("getSido");
    // const API_KEY =
    //   "nKMxQe1WMhoOgivWprVzhyy6pqRdKlcsRR4pWC3M1PLvi31aDuYyKDT7KHDYGviTS4y0uB1vO0Jb1aSY464a0A%3D%3D";
    // const SERVICE_URL =
    //   "http://openapi.molit.go.kr:8081/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptTrade";
  },
  methods: {
    sendKeyword() {},
  },
};
</script>

<style></style>

<template>
  <b-container class="bv-example-row mt-3">
    <b-row> </b-row>
    <b-row class="mb-1">
      <b-col class="text-left">
        <b-button variant="outline-primary" @click="listArticle">목록</b-button>
      </b-col>
      <b-col
        v-if="userInfo !== null && article.userid === userInfo.userid"
        class="text-right"
      >
        <b-button
          variant="outline-info"
          size="sm"
          @click="moveModifyArticle"
          class="mr-2"
          >글수정</b-button
        >
        <b-button variant="outline-danger" size="sm" @click="doDeleteArticle"
          >글삭제</b-button
        >
      </b-col>
    </b-row>
    <b-row class="mb-1">
      <b-col>
        <b-card
          :header-html="`<h3>${article.articleno}.
          ${article.subject} [${article.hit}]</h3><div><h6>${article.userid}</div><div>${article.regtime}</h6></div>`"
          class="mb-2"
          border-variant="dark"
          no-body
        >
          <b-card-body class="text-left content">
            <div v-html="message"></div>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// import moment from "moment";
// import http from "@/util/http-common";
import { mapActions, mapState, mapGetters } from "vuex";

const boardStore = "boardStore";
const memberStore = "memberStore";

export default {
  data() {
    return {
      articleno: "",
    };
  },
  computed: {
    ...mapGetters(boardStore, ["article"]),
    ...mapState(memberStore, ["userInfo"]),
    message() {
      if (this.article.content)
        return this.article.content.split("\n").join("<br>");
      return "";
    },
    // changeDateFormat() {
    //   return moment(new Date(this.article.regtime)).format(
    //     "YYYY.MM.DD hh:mm:ss"
    //   );
    // },
  },
  created() {
    this.articleno = this.$route.params.articleno;
    this.getArticle(this.articleno);
    // this.$store.dispatch("getArticle", `/board/${this.articleno}`);
  },
  methods: {
    ...mapActions(boardStore, ["getArticle", "deleteArticle"]),
    listArticle() {
      this.$router.push({ name: "BoardList" });
    },
    moveModifyArticle() {
      this.$router.replace({
        name: "BoardUpdate",
        params: { articleno: this.article.articleno },
      });
      //   this.$router.push({ path: `/board/modify/${this.article.articleno}` });
    },
    async doDeleteArticle() {
      if (confirm("정말로 삭제하시겠습니까?")) {
        await this.deleteArticle(this.articleno);
      }
      this.listArticle();
    },
  },
};
</script>

<style>
.content {
  height: 300px;
}
</style>

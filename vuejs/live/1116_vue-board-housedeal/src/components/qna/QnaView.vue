<template>
  <b-container class="bv-example-row mt-3">
    <b-row>
      <b-col>
        <b-alert show><h3>글보기</h3></b-alert>
      </b-col>
    </b-row>
    <b-row class="mb-1">
      <b-col class="text-left">
        <b-button variant="outline-primary" @click="listArticle">목록</b-button>
      </b-col>
      <b-col class="text-right">
        <b-button
          variant="outline-info"
          size="sm"
          @click="moveModifyArticle"
          class="mr-2"
          >글수정</b-button
        >
        <b-button variant="outline-danger" size="sm" @click="deleteArticle"
          >글삭제</b-button
        >
      </b-col>
    </b-row>
    <b-row class="mb-1">
      <b-col>
        <b-card
          :header-html="`<h3>${article.qnano}.
          ${article.subject}</h3><div><h6>${article.userid}</div><div>${article.regtime}</h6></div>`"
          class="mb-2"
          border-variant="dark"
          no-body
        >
          <b-card-body class="text-left">
            <div v-html="message"></div>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col v-if="answers.length">
        <b-table-simple hover responsive>
          <b-thead head-variant="light">
            <b-tr>
              <b-th>작성자</b-th>
              <b-th>답변 내용</b-th>
              <b-th>작성 시간</b-th>
            </b-tr>
          </b-thead>
          <tbody>
            <!-- 하위 component인 ListRow에 데이터 전달(props) -->
            <qna-answer-list-row
              v-for="(answer, index) in answers"
              :key="index"
              v-bind="answer"
            />
          </tbody>
        </b-table-simple>
      </b-col>
      <!-- <b-col v-else class="text-center">도서 목록이 없습니다.</b-col> -->
    </b-row>

    <b-row>
      <b-col class="text-left"> 답변을 등록해주세요. </b-col>
    </b-row>
    <b-row class="mb-3">
      <b-col sm="12">
        <b-form-textarea
          id="textarea-auto-height"
          placeholder="답변을 입력해주세요."
          rows="3"
          max-rows="8"
        ></b-form-textarea>
      </b-col>
    </b-row>
    <b-col class="text-right padding-0">
      <b-button variant="outline-info" size="sm" @click="moveModifyArticle"
        >답변 등록하기</b-button
      >
    </b-col>
  </b-container>
</template>

<script>
// import moment from "moment";
import http from "@/util/http-common";
import QnaAnswerListRow from "@/components/qna/child/QnaAnswerListRow";

export default {
  data() {
    return {
      article: {},
      answers: [],
    };
  },
  components: {
    QnaAnswerListRow,
  },
  computed: {
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
    http.get(`/qna/${this.$route.params.qnano}`).then(({ data }) => {
      this.article = data;
    });
    http.get(`/qna/answer/${this.$route.params.qnano}`).then(({ data }) => {
      console.log(data);
      this.answers = data;
    });
  },
  methods: {
    listArticle() {
      this.$router.push({ name: "QnaList" });
    },
    moveModifyArticle() {
      this.$router.replace({
        name: "QnaUpdate",
        params: { qnano: this.article.qnano },
      });
      //   this.$router.push({ path: `/board/modify/${this.article.articleno}` });
    },
    deleteArticle() {
      if (confirm("정말로 삭제?")) {
        this.$router.replace({
          name: "QnaDelete",
          params: { qnano: this.article.qnano },
        });
      }
    },
  },
};
</script>

<style></style>

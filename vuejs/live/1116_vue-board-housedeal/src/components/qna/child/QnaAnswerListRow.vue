<template>
  <b-tr>
    <b-td>{{ userid }}</b-td>
    <b-td>{{ content }}</b-td>
    <b-td>{{ regtime }}</b-td>
  </b-tr>
</template>

<script>
// import moment from "moment";

export default {
  name: "QnaAnswerListRow",
  props: {
    qnano: Number,
    userid: String,
    content: String,
    regtime: String,
  },
  computed: {
    // changeDateFormat() {
    //   return moment(new Date(this.regtime)).format("YY.MM.DD hh:mm:ss");
    // },
  },
};
</script>

<style></style>

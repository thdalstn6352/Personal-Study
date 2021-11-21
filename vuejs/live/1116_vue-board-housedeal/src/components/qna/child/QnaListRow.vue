<template>
  <b-tr>
    <b-td>{{ qnano }}</b-td>
    <b-th class="text-left">
      <router-link :to="{ name: 'QnaView', params: { qnano: qnano } }">{{
        subject
      }}</router-link>
    </b-th>
    <b-td>{{ userid }}</b-td>
    <b-td>{{ regtime }}</b-td>
    <b-td>{{ answered }}</b-td>
  </b-tr>
</template>

<script>
// import moment from "moment";

export default {
  name: "QnaListRow",
  props: {
    qnano: Number,
    userid: String,
    subject: String,
    regtime: String,
    answered: Boolean,
  },
  computed: {
    // changeDateFormat() {
    //   return moment(new Date(this.regtime)).format("YY.MM.DD hh:mm:ss");
    // },
  },
};
</script>

<style></style>

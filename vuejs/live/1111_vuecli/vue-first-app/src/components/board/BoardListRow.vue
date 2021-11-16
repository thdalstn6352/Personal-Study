<template>
  <tr>
    <td>{{ no }}</td>
    <td>
      <router-link :to="{ name: 'BoardView', params: { no: no } }">{{
        title
      }}</router-link>
    </td>
    <td>{{ writer }}</td>
    <td>{{ getFormatDate }}</td>
  </tr>
</template>

<script>
import moment from "moment";

export default {
  name: "BoardListRow",
  props: {
    no: Number,
    title: String,
    writer: String,
    regtime: String,
  },
  computed: {
    getFormatDate() {
      return moment(new Date(this.regtime)).format("YYYY.MM.DD");
    },
  },
};
</script>

<style></style>

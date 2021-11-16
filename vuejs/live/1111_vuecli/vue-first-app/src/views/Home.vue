<template>
  <div class="home">
    <Main :msg="msg"></Main>
  </div>
</template>

<script>
import Main from "@/components/Main";
export default {
  name: "Home",
  components: {
    Main,
  },
  data() {
    return {
      msg: "안녕하세요 vue CLI입니다.",
    };
  },
};
</script>

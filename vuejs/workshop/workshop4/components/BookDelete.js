export default {
  template: `
  <div>
    <h1>SSAFY 도서 삭제</h1>
    <div>삭제중...</div>
  </div>
  `,
  created() {
    // url에서 파라미터정보 얻기.
    // localStorage에서 booklist로 저장된 도서 목록을 얻어온 후 JSON객체로 parsing한다.
    let url = `http://localhost:9999/vuews/book/${this.$route.query.isbn}`;
    console.log(url);
    axios
      .delete(`http://localhost:9999/vuews/book/${this.$route.query.isbn}`)
      .then(({ data }) => {
        let msg = "삭제 처리시 문제가 발생했습니다.";
        if (data === "success") {
          msg = "삭제가 완료되었습니다.";
        }
        alert(msg);
        this.$router.push("/list");
      });
  },
}
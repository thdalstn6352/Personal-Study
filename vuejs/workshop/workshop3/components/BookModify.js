export  default {
  template: `
  <div class="regist">
  <h1 class="underline">SSAFY 도서 수정</h1>
  <div class="regist_form">
    <label for="isbn">도서번호</label>
    <input type="text" id="isbn" name="isbn" v-model="isbn" ref="isbn" /><br />
    <label for="title">도서명</label>
    <input type="text" id="title" name="title" v-model="title" ref="title" /><br />
    <label for="author">저자</label>
    <input type="text" id="author" name="author" v-model="author" ref="author" /><br />
    <label for="price">가격</label>
    <input type="number" id="price" name="price" v-model="price" ref="price" /><br />
    <label for="content">설명</label>
    <br />
    <textarea id="content" name="content" v-model="content" ref="content" cols="35" rows="5"></textarea><br />
    <button @click="checkValue">수정</button>
    <button @click="moveList">목록</button>
  </div>
</div>
  `,
  data() {
    return {
      isbn: "",
      title: "",
      author: "",
      price: "",
      content: "",
    };
  },
  created() {
    // url에서 파라미터정보 얻기.
    const params = new URL(document.location).searchParams.get("isbn");
    // localStorage에서 booklist로 저장된 도서 목록을 얻어온 후 JSON객체로 parsing한다.
    axios
      .get(`http://localhost:9999/vuews/book/${params}`)
      .then(({ data }) => {
        console.log(data);
        this.isbn = data.isbn;
        this.title = data.title;
        this.author = data.author;
        this.price = data.price;
        this.content = data.content;
      });
  },
  methods: {
    // 입력값 체크하기 - 체크가 성공하면 modifyBook 호출
    checkValue() {
      // 사용자 입력값 체크하기
      // isbn, 제목, 저자, 가격, 설명이 없을 경우 각 항목에 맞는 메세지를 출력
      let err = true;
      let msg = "";
      !this.title &&
        ((msg = "제목 입력해주세요"),
        (err = false),
        this.$refs.title.focus());
      err &&
        !this.author &&
        ((msg = "저자 입력해주세요"),
        (err = false),
        this.$refs.author.focus());
      err &&
        !this.price &&
        ((msg = "가격 입력해주세요"),
        (err = false),
        this.$refs.price.focus());
      err &&
        !this.content &&
        ((msg = "내용 입력해주세요"),
        (err = false),
        this.$refs.content.focus());

      if (!err) alert(msg);
      // 만약, 내용이 다 입력되어 있다면 modifyBook 호출
      else this.modifyBook();
    },
    modifyBook() {
      axios
        .put(`http://localhost:9999/vuews/book/${this.isbn}`, {
          isbn: this.isbn,
          title: this.title,
          author: this.author,
          price: this.price,
          content: this.content,
        })
        .then(({ data }) => {
          let msg = "수정 처리시 문제가 발생했습니다.";
          if (data === "success") {
            msg = "수정이 완료되었습니다.";
          }
          alert(msg);

          this.moveList();
        });
    },
    moveList() {
      location.href = "list.html";
    },
  },
}
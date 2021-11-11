export default {
  template: `
  <div class="regist">
    <h1 class="underline">SSAFY 도서 정보</h1>
    <div class="regist_form">
      <label for="isbn">도서번호</label>
      <div class="view">{{book.isbn}}</div>
      <label for="title">도서명</label>
      <div class="view">{{book.title}}</div>
      <label for="author">저자</label>
      <div class="view">{{book.author}}</div>
      <label for="price">가격</label>
      <div class="view">{{numberWithCommas(book.price)}}원</div>
      <label for="content">설명</label>
      <div class="view" v-html="enterToBr(book.content)"></div>
      <div style="padding-top: 15px">
        <a :href="'./modify.html?isbn=' + book.isbn" class="btn">수정</a>
        <a :href="'./delete.html?isbn=' + book.isbn" class="btn">삭제</a>
        <a href="./list.html" class="btn">목록</a>
      </div>
    </div>
  </div>
  `,
  data: function () {
    return {
      book: {},
    };
  },
  created() {
    // url에서 파라미터정보 얻기.
    const params = new URL(document.location).searchParams.get("isbn");
    let url = `http://localhost:9999/vuews/book/${params}`;
    console.log(url);
    // localStorage에서 booklist로 저장된 도서 목록을 얻어온 후 JSON객체로 parsing한다.
    axios.get(url).then(({ data }) => {
      this.book = data;
      console.log(data);
      console.log(this.book.price);
      console.log("책보기 완료!!!");
    });
  },
  methods: {
    numberWithCommas(x) {
      if (x) return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      else return x;
    },
    enterToBr(str) {
      // 문자열에 enter값을 <br />로 변경.(html상에서 줄바꿈 처리)
      if (str) return str.replace(/(?:\r\n|\r|\n)/g, "<br/>");
      else return str;
    },
  },
}
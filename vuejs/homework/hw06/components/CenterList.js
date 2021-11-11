export default {
  template: `
  <div>
        <h1 class="underline">코로나19 예방접종센터 목록</h1>
        <div v-if="data.length">
          <table id="center-list">
            <colgroup>
              <col style="width: 5%" />
              <col style="width: 20%" />
              <col style="width: 40%" />
              <col style="width: 20%" />
              <col style="width: 15%" />
            </colgroup>
            <label for="">지역</label>
            <select v-model="location">
              <option>전체</option>
              <option>서울특별시</option>
              <option>충청남도</option>
              <option>광주광역시</option>
              <option>경상남도</option>
              <option>대구광역시</option>
            </select>
            <thead>
              <tr>
                <th>번호</th>
                <th>센터명</th>
                <th>생성일</th>
                <th>수정일</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(center, index) in matchLocation"
                :key="index"
                v-if="center.sido === location"
              >
                <td>{{center.id}}</td>
                <td>
                  <router-link :to="'/detail?id=' + center.id">{{center.centerName}}</router-link>
                </td>
                <td>{{center.createdAt}}</td>
                <td>{{center.updatedAt}}</td>
              </tr>

              <tr
                v-for="(center, index) in data"
                :key="index"
                v-if=" location === '전체'"
              >
                <td>{{center.id}}</td>
                <td>
                  <router-link :to="'/detail?id=' + center.id">{{center.centerName}}</router-link>
                </td>
                <td>{{center.createdAt}}</td>
                <td>{{center.updatedAt}}</td>
              </tr>
            </tbody>
          </table>
          <button @click="moreview" type="button">더보기</button>
        </div>
        <div v-else class="text-center">게시글이 없습니다.</div>
      </div>
  `,
  
  data() {
    return {
      location: "",
      data: [],
      perPage: 10,
    };
  },
  created() {
    axios.get("https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=10&serviceKey=nKMxQe1WMhoOgivWprVzhyy6pqRdKlcsRR4pWC3M1PLvi31aDuYyKDT7KHDYGviTS4y0uB1vO0Jb1aSY464a0A%3D%3D").then(({ data }) => {
      this.data = data.data;
      console.log(data.data);
    });
  },
  methods: {
    moreview: function () {
      this.perPage = this.perPage + 10;
      console.log(this.perPage);
      const newURL =
        "https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=" +
        this.perPage +
        "&serviceKey=nKMxQe1WMhoOgivWprVzhyy6pqRdKlcsRR4pWC3M1PLvi31aDuYyKDT7KHDYGviTS4y0uB1vO0Jb1aSY464a0A%3D%3D";
      axios.get(newURL).then(({ data }) => {
        this.data = data.data;
      });
    },
  },
  computed: {
    matchLocation: function () {
      return this.data.filter(locate => locate.sido === this.location);
    },
  },
}
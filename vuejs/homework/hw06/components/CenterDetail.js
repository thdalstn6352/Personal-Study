export default {
  template: `
  <div class="view">
  <h1 class="underline">코로나19 예방접종센터 상세 페이지</h1>
  <div class="view_form">
    <table>
      <tr>
        <th>센터명</th>
        <td>{{center.centerName}}</td>
      </tr>
      <tr>
        <th>센터유형</th>
        <td>{{center.centerType}}</td>
      </tr>
      <tr>
        <th>주소</th>
        <td>{{center.address}}</td>
      </tr>
      <tr>
        <th>센터시설명</th>
        <td>{{center.facilityName}}</td>
      </tr>
      <tr>
        <th>전화번호</th>
        <td>{{center.phoneNumber}}</td>
      </tr>
      <tr>
        <th>생성일</th>
        <td>{{center.createdAt}}</td>
      </tr>
      <tr>
        <th>수정일</th>
        <td>{{center.updatedAt}}</td>
      </tr>
    </table>
  </div>
</div>
  `,
  data: function () {
    return {
      center: {}
    };
  },
  created() {
    let url = `https://api.odcloud.kr/api/15077586/v1/centers?page=${this.$route.query.id}&perPage=1&serviceKey=nKMxQe1WMhoOgivWprVzhyy6pqRdKlcsRR4pWC3M1PLvi31aDuYyKDT7KHDYGviTS4y0uB1vO0Jb1aSY464a0A%3D%3D`;
    // url에서 파라미터정보 얻기.
    console.log(url);
    axios.get(url).then(({ data }) => {
      console.log(data.data[0]);
      this.center = data.data[0];
    });
  }
}
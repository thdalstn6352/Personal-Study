import CenterDetail from "./components/CenterDetail.js";
import CenterList from "./components/CenterList.js";

Vue.use(VueRouter);

export default new VueRouter({
  mode:"history",
  routes: [
    {
      path:'/list',
      name:"list",
      component: CenterList
    },
    {
      path:'/detail',
      name:"detail",
      component: CenterDetail
    }
  ]
})
import Vue from "vue";
import App from "./App2.vue";
import VueRouter from "vue-router";
import "./registerServiceWorker";
Vue.use(VueRouter)
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes:[
    {
      path: "/sub/test",
      name: "about2",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Test.vue")
    }
  ]
});
router.beforeEach(async (to, from, next) => {
  next()
})
Vue.config.productionTip = false;
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

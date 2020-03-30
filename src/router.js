import Vue from "vue";
import Router from "vue-router";
import dashboard from "./components/dashboard.vue";
import backends from "./components/backends.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    { path: "/", component: dashboard },
    { path: "/backends", component: backends }
  ]
});
export default router;

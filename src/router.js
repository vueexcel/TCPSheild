import Vue from "vue";
import Router from "vue-router";
import dashboard from "./components/dashboard.vue";
import backends from "./components/backends.vue";
import analytics from "./components/analytics.vue";
import billing from "./components/billing.vue";
import overview from "./components/overview.vue";
import paymentModal from "./components/paymentModal.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    { path: "/", component: dashboard },
    { path: "/backends", component: backends },
    { path: "/analytics", component: analytics },
    {
      path: "/billing",
      component: billing,
      children: [
        {
          path: "/overview",
          component: overview,
        },
        { path: "/paymentModal", component: paymentModal },
      ],
    },
  ],
});

export default router;

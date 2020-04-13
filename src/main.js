import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vSelect from "vue-select";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import VueApexCharts from "vue-apexcharts";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faChevronDown, faSearch);

Vue.component("apexchart", VueApexCharts);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("v-select", vSelect);

Vue.config.productionTip = false;

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "vue-select/dist/vue-select.css";

Vue.use(VueApexCharts);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

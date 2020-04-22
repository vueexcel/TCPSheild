import Vue from "vue";
import Vuex from "vuex";
import sidebar from "./sidebar";
import backend from "./backend";
import billing from "./billing";
import topbar from "./topbar";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    sidebar,
    backend,
    billing,
    topbar
  },
});

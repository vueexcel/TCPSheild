import Vue from "vue";
import Vuex from "vuex";
import sidebar from "./sidebar";
import backend from "./backend";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    sidebar, backend
  }
});

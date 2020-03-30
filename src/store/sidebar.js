import router from "../router";

const state = {
  activeMenu: "dashboard",
  activeNetwork : ""
};

const mutations = {
  openDashboard() {
    router.push("/");
    state.activeMenu = "dashboard";
    state.activeNetwork = ""
  },
  openNetworks() {
    router.push("/backends");
    state.activeMenu = "networks";
    state.activeNetwork = "backends"
  },
  openBackends() {
    router.push("/backends");
    state.activeNetwork = "backends";
  },
  openAnalytics() {
    router.push("/analytics");
    state.activeNetwork = "analytics";
  },
  openBilling() {
    router.push("/billing");
    state.activeMenu = "billing";
    state.activeNetwork = ""
  }
};

const actions = {
  openDashboard({ commit }) {
    commit("openDashboard");
  },
  openNetworks({ commit }) {
    commit("openNetworks");
  },
  openBackends({ commit }) {
    commit("openBackends");
  },
  openAnalytics({ commit }) {
    commit("openAnalytics");
  },
  openBilling({ commit }) {
    commit("openBilling");
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};

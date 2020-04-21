import router from "../router";

const state = {
  activeMenu: "dashboard",
  activeNetwork: ""
};

const mutations = {
  openDashboard() {
    router.push("/").catch(err => {err});
    state.activeMenu = "dashboard";
    state.activeNetwork = "";
  },
  openNetworks() {
    router.push("/backends").catch(err => {err});
    state.activeMenu = "networks";
    state.activeNetwork = "backends";
  },
  openBackends() {
    router.push("/backends").catch(err => {err});
    state.activeNetwork = "backends";
  },
  openAnalytics() {
    router.push("/analytics").catch(err => {err});
    state.activeNetwork = "analytics";
  },
  openBilling() {
    router.push("/overview").catch(err => {err});
    state.activeMenu = "billing";
    state.activeNetwork = "";
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

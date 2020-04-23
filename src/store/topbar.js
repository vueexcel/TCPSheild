const state = {
  user: "Xenon",
  userImg: "https://placekitten.com/300/300",
  selectionOptions: ["Lorem Ipsum", " Letraset sheets"],
  networksData: [
    { name: "MineSuperior", domain: "35", date: "Feb 28, 2020" },
    { name: "InvadedLands", domain: "14", date: "Mar 17, 2020" },
  ],
  networkActive: true,
  openSelectionDropdown: false,
  arrowRotation: false,
};
const mutations = {
  openDropdown(state) {
    state.openSelectionDropdown = !state.openSelectionDropdown;
    state.arrowRotation = !state.arrowRotation;
  },
};
const actions = {
  openDropdown({ commit }) {
    commit("openDropdown");
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};

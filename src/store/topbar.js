const state = {
  user: "Xenon",
  userImg: "https://placekitten.com/300/300",
  selectionOptions: ["Lorem Ipsum", " Letraset sheets"],
  networksData: [
    {
      name: "MineSuperior",
      domain: "35",
      date: "Feb 28, 2020",
      img: "minesuperior",
    },
    {
      name: "InvadedLands",
      domain: "14",
      date: "Mar 17, 2020",
      img: "invadedLands",
    },
  ],
  networkActive: true,
  selectionDropdown: false,
  arrowRotation: false,
};
const mutations = {
  openSelectionDropdown(state) {
    state.selectionDropdown = !state.selectionDropdown;
    state.arrowRotation = !state.arrowRotation;
  },
  closeSelectionDropdown(state) {
    state.selectionDropdown = false;
    state.arrowRotation = false;
  },
  openNetwork(state) {
    state.networkActive = true;
  },
  openServer(state) {
    state.networkActive = false;
  },
};
const actions = {
  openSelectionDropdown({ commit }) {
    commit("openSelectionDropdown");
  },
  closeSelectionDropdown({ commit }) {
    commit("closeSelectionDropdown");
  },
  openNetwork({ commit }) {
    commit("openNetwork");
  },
  openServer({ commit }) {
    commit("openServer");
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};

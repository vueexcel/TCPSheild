const state = {
  premiumMitigations: true,
  downloadItems: ["BUNGEE", "SPIGOT", "LILYPAD"],
  headItems: ["Domain", "Backends", "Forge Support", ""],
  dataItems: [
    {
      domain: "*.1minesuperior.com",
      backends: "100.0.0.1:25565, 172.16.0.1:25572",
      forgeSupport: false,
    },
    {
      domain: "*.2minesuperior.com",
      backends: "100.0.0.1:25565, 172.16.0.1:25572",
      forgeSupport: false,
    },
    {
      domain: "*.3minesuperior.com",
      backends: "100.0.0.1:25565, 172.16.0.1:25572",
      forgeSupport: true,
    },
    {
      domain: "*.4minesuperior.com",
      backends: "100.0.0.1:25565, 172.16.0.1:25572",
      forgeSupport: true,
    },
  ],
  dummyRow: {
    domain: "",
    backends: "",
    forgeSupport: false,
  },
};
const mutations = {
  openEditDomain(payload) {
    console.log(payload);
  },
  deleteRow(state, index) {
    state.dataItems.splice(index, 1);
  },
  addRow(state) {
    state.dataItems.push( state.dummyRow);
    state.dummyRow= {
      domain: "",
      backends: "",
      forgeSupport: false,
    }
  },
  setPremiumMitigation(value){
    state.premiumMitigations = value
  }
};
const actions = {
  openEditDomain({ commit }, payload) {
    console.log(payload);
    commit("openEditDomain", payload);
  },
  deleteRow({ commit }, index) {
    commit("deleteRow", index);
  },
  addRow({ commit }) {
    commit("addRow");
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};

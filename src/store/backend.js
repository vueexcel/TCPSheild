const state = {
  premiumMitigation: true,
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
    forgeSupport: true,
  },
};
const mutations = {
  openEditDomain(payload) {
    console.log(payload);
  },
  deleteRow(index){
    console.log(index);
  },
  addRow() {
    state.dataItems.push("state.dummyRow");
  },
};
const actions = {
  openEditDomain({ commit }, payload) {
    console.log(payload);
    commit("openEditDomain", payload);
  },
  deleteRow({ commit }, index) {
    commit("deleteRow", index);
    console.log("???", index);
    state.dataItems.splice(index, 1);
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

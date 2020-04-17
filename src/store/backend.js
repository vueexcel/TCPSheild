const state = {
  downloadItems: ["BUNGEE", "SPIGOT", "LILYPAD"],
  headItems: ["Domain", "Backends", "Forge Support", ""],
  dataItems: [
    {
      domain: "*.1minesuperior.com",
      backends: "100.0.0.1:25565, 172.16.0.1:25572",
      premiumMitigation : true,
      forgeSupport : false,
    },
    {
      domain: "*.2minesuperior.com",
      backends: "100.0.0.1:25565, 172.16.0.1:25572",
      premiumMitigation : false,
      forgeSupport : false,
    },
    {
      domain: "*.3minesuperior.com",
      backends: "100.0.0.1:25565, 172.16.0.1:25572",
      premiumMitigation : false,
      forgeSupport : true,
    },
    {
      domain: "*.4minesuperior.com",
      backends: "100.0.0.1:25565, 172.16.0.1:25572",
      premiumMitigation : true,
      forgeSupport : true,
    },
  ],
};
const mutations = {
  openEditDomain(payload) {
    console.log(payload);
  }
};

const actions = {
  openEditDomain({ commit }, payload) {
    console.log(payload);
    commit("openEditDomain", payload);
  },
  deleteRow({ commit }, index) {
    console.log(index);
    commit("deleteRow", index);
    state.dataItems.splice(index, 1);
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};

import router from "../router";

const state = {
  paymemtActive: false,
  currentUsage: 1.581,
  chargesThisMonth: 23.2,
  remainingCredits: 155.77,
  recentInvoice: 3,
  sortOptions: ["Invoice", "Total", "Balance", "Date"],
  sortType: "",
  invoicesTitle: [
    "Invoice",
    "Total",
    "Balance",
    "Due Date",
    "Status",
    "Action",
  ],
  invoicesData: [
    {
      invoice: "inv",
      total: "65.00",
      balance: "0.00",
      dueDate: "March 01,2020",
      status: "paid",
    },
    {
      invoice: "kinv",
      total: "500.00",
      balance: "250.00",
      dueDate: "December 30,2020",
      status: "unpaid",
    },
    {
      invoice: "anv",
      total: "805.60",
      balance: "1000.00",
      dueDate: "February 08,2020",
      status: "unpaid",
    },
    {
      invoice: "ifnv",
      total: "161.05",
      balance: "125.00",
      dueDate: "May 22,2020",
      status: "paid",
    },
  ],
  searchInvoices: "",
  dataToSHow: [],
};

const getters = {
  filterInvoice(state) {
    return state.dataToSHow.filter((invoiceData) => {
      return invoiceData.invoice.match(state.searchInvoices);
    });
  },
};

const mutations = {
  openPaymentMethod(state) {
    router.push("/paymentModal").catch((err) => {
      err;
    });
    state.paymemtActive = true;
  },
  openOverview() {
    router.push("/overview").catch((err) => {
      err;
    });
    
  },
  activeOverview(state){
    state.paymemtActive = false;
  },
  sortedInvoice(state) {
    if (state.sortType === "Invoice") {
      var sortedArr = state.invoicesData.slice().sort(function(a, b) {
        if (a.invoice < b.invoice) {
          return -1;
        }
      });
      state.dataToSHow = sortedArr;
    } else if (state.sortType === "Date") {
      sortedArr = state.invoicesData.slice().sort(function(a, b) {
        return new Date(a.dueDate) - new Date(b.dueDate);
      });
      state.dataToSHow = sortedArr;
    } else if (state.sortType === "Total") {
      sortedArr = state.invoicesData.slice().sort(function(a, b) {
        return a.total - b.total;
      });
      state.dataToSHow = sortedArr;
    } else if (state.sortType === "Balance") {
      sortedArr = state.invoicesData.slice().sort(function(a, b) {
        return a.balance - b.balance;
      });
      state.dataToSHow = sortedArr;
    } else {
      state.dataToSHow = state.invoicesData;
    }
  },
  setSortType (state, value) {
    state.sortType = value
  },
  searchName (state, name){
    state.searchInvoices = name;
  }
};

const actions = {
  openPaymentMethod({ commit }) {
    commit("openPaymentMethod");
  },
  openOverview({ commit }) {
    commit("openOverview");
    commit("activeOverview")
  },
  sortedInvoice({commit} , sortType){
    commit("sortedInvoice", sortType);
  },
  activeOverview({commit}){
    commit("activeOverview")
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

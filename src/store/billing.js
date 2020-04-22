import router from "../router";

const state = {
  paymemtActive: true,
  currentUsage: 1.581,
  chargesThisMonth: 23.2,
  remainingCredits: 155.77,
  recentInvoice: 3,
  sortOptions: ["Invoice", "Total", "Balance", "Date"],
  sortType: "Total",
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
  searchInvoice: "",
  dataToSHow: [],
};

const getters = {
   searchInvoices: (state) => {
    return state.searchInvoice;
},
sortTypes: (state) => {
  return state.sortType;
}
,
  filterInvoice(state) {
    return state.dataToSHow.filter((invoiceData) => {
      return invoiceData.invoice.match(state.searchInvoice);
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
  openOverview(state) {
    router.push("/overview").catch((err) => {
      err;
    });
    state.paymemtActive = false;
  },
};

const actions = {
  openPaymentMethod({ commit }) {
    commit("openPaymentMethod");
  },
  openOverview({ commit }) {
    commit("openOverview");
  },
  sortedInvoice(sortType) {
    if (sortType === "Invoice") {
      var sortedArr = state.invoicesData.slice().sort(function(a, b) {
        if (a.invoice < b.invoice) {
          return -1;
        }
      });
      state.dataToSHow = sortedArr;
    } else if (sortType === "Date") {
      sortedArr = state.invoicesData.slice().sort(function(a, b) {
        return new Date(a.dueDate) - new Date(b.dueDate);
      });
      state.dataToSHow = sortedArr;
    } else if (sortType === "Total") {
      sortedArr = state.invoicesData.slice().sort(function(a, b) {
        return a.total - b.total;
      });
      state.dataToSHow = sortedArr;
    } else if (sortType === "Balance") {
      sortedArr = state.invoicesData.slice().sort(function(a, b) {
        return a.balance - b.balance;
      });
      state.dataToSHow = sortedArr;
    } else {
      state.dataToSHow = state.invoicesData;
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

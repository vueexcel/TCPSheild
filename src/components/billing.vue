<template>
  <div>
    <div class="my-4 greyText PNB HeadBar">
      <span class="mr-4 active">Overview</span>
      <span>Payment Methods</span>
    </div>
    <b-container fluid class>
      <b-row>
        <b-col xl="3" lg="6" class="p-0">
          <div class="text-center py-5 mr-4 mb-xl-0 mb-lg-4 boxHeight dataContainer">
            <p class="dataTitle PNR greyText mb-0">Current Usage</p>
            <p class="currentUsage PNB m-0">{{currentUsage}} TB</p>
          </div>
        </b-col>
        <b-col xl="3" lg="6" class="p-0">
          <div
            class="text-center py-5 ml-xl-2 mr-xl-3 ml-lg-4 mr-lg-0 mb-xl-0 mb-lg-4 boxHeight dataContainer"
          >
            <p class="dataTitle PNR greyText mb-0">Charges this Month</p>
            <p class="chargesThisMonth PNB m-0">$ {{chargesThisMonth}}</p>
          </div>
        </b-col>
        <b-col xl="3" lg="6" class="p-0">
          <div
            class="text-center py-5 ml-xl-3 mr-xl-2 ml-lg-0 mr-lg-4 mt-xl-0 mt-lg-4 boxHeight dataContainer"
          >
            <p class="dataTitle PNR greyText mb-0">Remaining Credits</p>
            <p class="remainingCredits PNB m-0">$ {{remainingCredits}}</p>
          </div>
        </b-col>
        <b-col xl="3" lg="6" class="p-0">
          <div class="text-center py-5 ml-4 mt-xl-0 mt-lg-4 boxHeight dataContainer">
            <p class="dataTitle PNR greyText mb-1">Payment Methods</p>
            <img class="paypalIcon mx-3" src="./../assets/images/paypal.svg" />
          </div>
        </b-col>
      </b-row>
    </b-container>
    <p class="PNB mb-0 blackText py-4 recentInvoice">
      Recent Invoices
      <span>({{recentInvoice}})</span>
    </p>
    <div class="tableContainer">
      <div class="p-3 tableBar d-flex">
        <div class="d-flex justify-content-between py-1 px-3 searchContainer">
          <input
            type="text"
            class="mr-2 px-1 searchInput PNR greyText"
            v-model="searchInvoice"
            placeholder="Search"
          />
          <font-awesome-icon icon="search" size="xs" :style="{ color: '#525f6b' }" class="my-1" />
        </div>
        <div class="pt-2 d-flex dropdown">
          <p class="m-0 mx-3 sortHeading greyText">Sort By</p>
        </div>
        <v-select
          label="Select"
          :options="sortOptions"
          v-model="sortType"
          @input="sortedInvoice(sortType)"
          placeholder="Select"
          class="style-chooser"
          clearable="false"
        >
          <template #open-indicator="{ attributes }">
            <span v-bind="attributes">
              <font-awesome-icon icon="chevron-down" size="1" :style="{ color: '#a7aab3' }" class />
            </span>
          </template>
        </v-select>
      </div>
      <div class="p-3">
        <table>
          <thead class="bg-light">
            <tr>
              <th
                v-for="(invoice,index) in invoicesTitle"
                :key="index"
                class="PNB blackText py-2 tableData"
              >{{invoice}}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(invoceData,index) in filterInvoice" :key="index">
              <td class="PNR greyText py-2 tableData">{{invoceData.invoice}}</td>
              <td class="PNR greyText py-2 tableData">$ {{invoceData.total}}</td>
              <td class="PNR greyText py-2 tableData">$ {{invoceData.balance}}</td>
              <td class="PNR greyText py-2 tableData">{{invoceData.dueDate}}</td>
              <td class="PNR greyText py-2 tableData text-center">
                <div v-if="invoceData.status=== 'paid' " class="paidInvoice PNR py-1">INVOICE PAID</div>
                <div v-else class="unpaidInvoice PNR py-1">INVOICE UNPAID</div>
              </td>
              <td class="PNR greyText py-2 tableData">
                <span class>
                  <b-icon
                    icon="cloud-download"
                    font-scale="1.1"
                    class="rounded-circle cloudIcon"
                    style
                  ></b-icon>
                </span>
                <span class="pdf PNB px-2">PDF</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "billing",
  data() {
    return {
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
        "Action"
      ],
      invoicesData: [
        {
          invoice: "inv",
          total: "65.00",
          balance: "0.00",
          dueDate: "March 01,2020",
          status: "paid"
        },
        {
          invoice: "kinv",
          total: "500.00",
          balance: "250.00",
          dueDate: "December 30,2020",
          status: "unpaid"
        },
        {
          invoice: "anv",
          total: "805.60",
          balance: "1000.00",
          dueDate: "February 08,2020",
          status: "unpaid"
        },
        {
          invoice: "ifnv",
          total: "161.05",
          balance: "125.00",
          dueDate: "May 22,2020",
          status: "paid"
        }
      ],
      searchInvoice: "",
      dataToSHow: [],
      attributes: {
        ref: "openIndicator",
        role: "presentation",
        class: "vs__open-indicator"
      }
    };
  },
  mounted() {
    this.dataToSHow = this.invoicesData;
  },
  methods: {
    sortedInvoice(sortType) {
      if (sortType === "Invoice") {
        var sortedArr = this.invoicesData.slice().sort(function(a, b) {
          if (a.invoice < b.invoice) {
            return -1;
          }
        });
        this.dataToSHow = sortedArr;
      } else if (sortType === "Date") {
        sortedArr = this.invoicesData.slice().sort(function(a, b) {
          return new Date(a.dueDate) - new Date(b.dueDate);
        });
        this.dataToSHow = sortedArr;
      } else if (sortType === "Total") {
        sortedArr = this.invoicesData.slice().sort(function(a, b) {
          return a.total - b.total;
        });
        this.dataToSHow = sortedArr;
      } else if (sortType === "Balance") {
        sortedArr = this.invoicesData.slice().sort(function(a, b) {
          return a.balance - b.balance;
        });
        this.dataToSHow = sortedArr;
      } else {
        this.dataToSHow = this.invoicesData;
      }
    }
  },
  computed: {
    filterInvoice() {
      return this.dataToSHow.filter(invoiceData => {
        return invoiceData.invoice.match(this.searchInvoice);
      });
    }
  }
};
</script>

<style scoped>
.HeadBar {
  font-size: 1rem;
}
.HeadBar > span {
  padding: 4px 0px;
}
.HeadBar > .active {
  color: #622fe6;
  border-bottom: 3px solid #622fe6;
}
.dataContainer {
  background-color: #ffffff;
  border-radius: 10px;
  height: 200px;
}
.dataTitle {
  font-size: 1.25rem;
}
.currentUsage {
  color: #27b6fa;
  font-size: 2.5rem;
}
.chargesThisMonth {
  color: #29e779;
  font-size: 2.5rem;
}
.remainingCredits {
  color: #622fe6;
  font-size: 2.5rem;
}
.paypalIcon {
  width: 50px;
  height: 50px;
  cursor: pointer;
}
.recentInvoice {
  font-size: 1.125rem;
}
.recentInvoice > span {
  color: #622fe6;
}
.tableBar {
  border-bottom: 1px solid #eaeaea;
}
.searchContainer {
  border: 1px solid #eaeaea;
  border-radius: 50px;
  background-color: #f5f8fa;
}
.searchInput {
  width: 100%;
  border: none;
  font-size: 0.6rem;
  background-color: #f5f8fa;
}
.searchInput::placeholder {
  color: #a7aab3;
}
.searchInput:focus {
  outline: none;
}
.sortHeading {
  font-size: 0.6rem;
}
.style-chooser {
  width: 115px;
}
.style-chooser >>> .vs__search::placeholder {
  font-size: 0.6rem;
  color: #a7aab3;
  background: #fff;
}
.style-chooser >>> .vs__selected {
  padding: 4px 0px;
  margin: 0px 12px;
  font-size: 0.6rem;
  color: #a7aab3;
}
.style-chooser >>> .vs__search {
  margin: 0;
  padding: 4px 4px 4px 12px;
  color: #a7aab3;
}
.style-chooser >>> .vs__dropdown-toggle {
  background: #fff;
  padding: 3px 0px;
  border: 1px solid #eaeaea;
  border-radius: 50px;
  font-size: 0.6rem;
}
.style-chooser >>> .vs__dropdown-menu {
  background: #fff;
  border-radius: 0px;
  font-size: 0.6rem;
  margin-top: 4px;
  padding: 0;
}
.style-chooser >>> .vs__dropdown-option {
  color: #a7aab3;
  padding: 4px 8px;
}
.style-chooser >>> .vs__dropdown-option:hover {
  color: #fff;
}
.style-chooser >>> .vs__actions {
  padding: 0px 10px 0px 0px;
}
.style-chooser >>> .vs__clear {
  display: none;
}
.style-chooser >>> .vs__open-indicator {
  fill: #a7aab3;
}
.tableContainer {
  background-color: #ffffff;
  border-radius: 10px;
}
table {
  border: none;
  width: 100%;
}
tr {
  border: none;
  background-color: #ffffff;
}
tr .tableData {
  border: 1px solid #eaeaea;
  font-size: 0.75rem;
}
tr .tableData:nth-child(1) {
  width: 15%;
}
tr .tableData:nth-child(2) {
  width: 15%;
  padding: 0px 24px;
}
tr .tableData:nth-child(3) {
  width: 20%;
  padding: 0px 24px;
}
tr .tableData:nth-child(4) {
  width: 30%;
  padding: 0px 24px;
}
tr .tableData:nth-child(5) {
  width: 12%;
  padding: 0px 24px;
}
tr .tableData:nth-child(6) {
  width: 8%;
  padding-left: 24px;
}

thead tr:first-child .tableData {
  border-top: none;
  color: #525f6b;
}
tbody tr:last-child .tableData {
  border-bottom: none;
}
tr .tableData:last-child {
  border-right: none;
}
tr .tableData:first-child {
  border-left: none;
  color: #622fe6;
}
.paidInvoice {
  color: #fff;
  background-color: #29e779;
  width: 100%;
  font-size: 0.583rem;
}
.unpaidInvoice {
  color: #fff;
  background-color: #e72f49;
  width: 100%;
  font-size: 0.583rem;
}
.cloudIcon {
  color: #622fe6;
}
.pdf {
  color: #622fe6;
  font-size: 0.666rem;
}

@media (min-width: 992px) and (max-width: 1200px) {
  tr .tableData:nth-child(1) {
    width: 10%;
  }
  tr .tableData:nth-child(2) {
    width: 15%;
    padding: 0px 20px;
  }
  tr .tableData:nth-child(3) {
    width: 15%;
    padding: 0px 20px;
  }
  tr .tableData:nth-child(4) {
    width: 25%;
    padding: 0px 20px;
  }
  tr .tableData:nth-child(5) {
    width: 24%;
    padding: 0px 20px;
  }
  tr .tableData:nth-child(6) {
    width: 11%;
    padding-left: 20px;
  }
}
</style>

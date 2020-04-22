<template>
  <div>
    <b-container fluid class>
      <b-row>
        <b-col
          xxls="3"
          xls="3"
          lgs="6"
          mds="6"
          class="p-0"
          data-aos="fade"
          data-aos-duration="1500"
          data-aos-delay="300"
        >
          <div
            class="text-center py-xss-5 mx-xss-0 mr-sms-4 mb-xls-0 mb-lgs-4 mb-mds-4 mb-sms-0 mb-xss-4 mr-mds-3 boxHeight dataContainer"
          >
            <p class="dataTitle PNR greyText mb-0">Current Usage</p>
            <p class="currentUsage PNB m-0">{{currentUsage}} TB</p>
          </div>
        </b-col>
        <b-col
          xxls="3"
          xls="3"
          lgs="6"
          mds="6"
          class="p-0"
          data-aos="fade"
          data-aos-duration="1500"
          data-aos-delay="300"
        >
          <div
            class="text-center py-xss-5 ml-xls-2 mr-xls-3 ml-lgs-4 mr-lgs-0 mb-xls-0 mb-lgs-4 mb-mds-4 mb-sms-0 mb-xss-4 ml-mds-3 boxHeight dataContainer"
          >
            <p class="dataTitle PNR greyText mb-0">Charges this Month</p>
            <p class="chargesThisMonth PNB m-0">$ {{chargesThisMonth}}</p>
          </div>
        </b-col>
        <b-col
          xxls="3"
          xls="3"
          lgs="6"
          mds="6"
          class="p-0"
          data-aos="fade"
          data-aos-duration="1500"
          data-aos-delay="300"
        >
          <div
            class="text-center py-xss-5 ml-xls-3 mr-xls-2 ml-lgs-0 mr-lgs-3 mt-xls-0 mt-lgs-4 mt-mds-2 mb-sms-0 mb-xss-4 mr-mds-3 boxHeight dataContainer"
          >
            <p class="dataTitle PNR greyText mb-0">Remaining Credits</p>
            <p class="remainingCredits PNB m-0">$ {{remainingCredits}}</p>
          </div>
        </b-col>
        <b-col
          xxls="3"
          xls="3"
          lgs="6"
          mds="6"
          class="p-0"
          data-aos="fade"
          data-aos-duration="1500"
          data-aos-delay="300"
        >
          <div
            class="text-center py-xss-5 ml-xss-0 ml-sms-4 mt-xls-0 mt-lgs-4 mt-mds-2 ml-mds-3 ml-lgs-4 boxHeight dataContainer"
          >
            <p class="dataTitle PNR greyText mb-1">Payment Methods</p>
            <img class="paypalIcon mx-3" src="./../assets/images/paypal.svg" />
          </div>
        </b-col>
      </b-row>
    </b-container>
    <p
      class="PNB mb-0 blackText py-xss-4 recentInvoice"
      data-aos="fade"
      data-aos-duration="1500"
      data-aos-delay="300"
    >
      Recent Invoices
      <span>({{recentInvoice}})</span>
    </p>
    <div class="tableContainer" data-aos="fade" data-aos-duration="1500" data-aos-delay="300">
      <div class="p-3 tableBar d-flex">
        <div class="d-flex justify-content-between py-xss-1 px-3 searchContainer">
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
          v-model="type"
          @input="sortedInvoice()"
          placeholder="Select"
          class="style-chooser"
        >
          <template #open-indicator="{ attributes }">
            <span v-bind="attributes">
              <font-awesome-icon icon="chevron-down" size="1x" :style="{ color: '#a7aab3' }" class />
            </span>
          </template>
        </v-select>
      </div>
      <div class="p-3 mb-4 overFlow">
        <table>
          <thead class="bg-light">
            <tr>
              <th
                v-for="(invoice,index) in invoicesTitle"
                :key="index"
                class="PNB blackText py-xss-2 tableData"
              >{{invoice}}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(invoceData,index) in filterInvoice" :key="index">
              <td class="PNR greyText py-xss-2 tableData">{{invoceData.invoice}}</td>
              <td class="PNR greyText py-xss-2 tableData">$ {{invoceData.total}}</td>
              <td class="PNR greyText py-xss-2 tableData">$ {{invoceData.balance}}</td>
              <td class="PNR greyText py-xss-2 tableData">{{invoceData.dueDate}}</td>
              <td class="PNR greyText py-xss-2 tableData text-center">
                <div
                  v-if="invoceData.status=== 'paid' "
                  class="paidInvoice PNR py-xss-1"
                >INVOICE PAID</div>
                <div v-else class="unpaidInvoice PNR py-xss-1">INVOICE UNPAID</div>
              </td>
              <td class="PNR greyText py-xss-2 tableData">
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
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "overview",
  data() {
    return {};
  },
  mounted() {
    this.dataToSHow = this.invoicesData;
    this.sortedInvoice();
  },
  computed: {
    ...mapState("billing", [
      "paymemtActive",
      "currentUsage",
      "chargesThisMonth",
      "remainingCredits",
      "recentInvoice",
      "sortOptions",
      "invoicesTitle",
      "invoicesData",
      " dataToSHow",
      "sortType" ,
      "searchInvoices"    
    ]),
    ...mapGetters("billing", ["filterInvoice"]),
    searchInvoice: {
      get() {
        return this.searchInvoices;
      },
      set(newName) {
          this.searchName(newName)
      }
    },
    type: {
      get () {
        return this.sortType
      },
      set (new_type) {
        this.setSortType(new_type)
      }
    }
  },
  methods: {
    ...mapMutations({
      setSortType: "billing/setSortType",
      searchName:"billing/searchName"
    }),
    ...mapActions({
      openPaymentMethod: "billing/openPaymentMethod",
      sortedInvoice: "billing/sortedInvoice",
      openOverview: "billing/openOverview",
    })
  }
};
</script>


<style scoped>
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
@media (min-width: 768px) and (max-width: 992px) {
  tr .tableData:nth-child(1) {
    width: 10%;
  }
  tr .tableData:nth-child(2) {
    width: 16%;
    padding: 0px 20px;
  }
  tr .tableData:nth-child(3) {
    width: 16%;
    padding: 0px 20px;
  }
  tr .tableData:nth-child(4) {
    width: 22%;
    padding: 0px 20px;
  }
  tr .tableData:nth-child(5) {
    width: 24%;
    padding: 0px 20px;
  }
  tr .tableData:nth-child(6) {
    width: 12%;
    padding-left: 20px;
  }
}
@media screen and (max-width: 576px) {
  .overFlow {
    overflow-x: auto;
  }
  table {
    width: 200%;
  }
  tr .tableData:nth-child(1) {
    width: 10%;
  }
  tr .tableData:nth-child(2) {
    width: 15%;
    padding: 0px 20px;
  }
  tr .tableData:nth-child(3) {
    width: 16%;
    padding: 0px 20px;
  }
  tr .tableData:nth-child(4) {
    width: 24%;
    padding: 0px 20px;
  }
  tr .tableData:nth-child(5) {
    width: 23%;
    padding: 0px 20px;
  }
  tr .tableData:nth-child(6) {
    width: 12%;
    padding-left: 20px;
  }
}
</style>
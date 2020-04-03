<template>
  <div>
    <div class="my-4 greyText PNB HeadBar">
      <span class="mr-4 active">Overview</span>
      <span>Payment Methods</span>
    </div>
    <b-container fluid class>
      <b-row>
        <b-col xl="3" lg="6" class="p-0">
          <div class="text-center py-5 mr-4 boxHeight dataContainer">
            <p class="dataTitle PNR greyText mb-0">Current Usage</p>
            <p class="currentUsage PNB m-0">{{currentUsage}} TB</p>
          </div>
        </b-col>
        <b-col xl="3" lg="6" class="p-0">
          <div class="text-center py-5 ml-2 mr-3 boxHeight dataContainer">
            <p class="dataTitle PNR greyText mb-0">Charges this Month</p>
            <p class="chargesThisMonth PNB m-0">$ {{chargesThisMonth}}</p>
          </div>
        </b-col>
        <b-col xl="3" lg="6" class="p-0">
          <div class="text-center py-5 ml-3 mr-2 boxHeight dataContainer">
            <p class="dataTitle PNR greyText mb-0">Remaining Credits</p>
            <p class="remainingCredits PNB m-0">$ {{remainingCredits}}</p>
          </div>
        </b-col>
        <b-col xl="3" lg="6" class="p-0">
          <div class="text-center py-5 ml-4 boxHeight dataContainer">
            <p class="dataTitle PNR greyText mb-0">Payment Methods</p>
            <p class="remainingCredits PNB m-0">$ {{remainingCredits}}</p>
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
          <input type="text" class="mr-2 px-1 searchInput PNR greyText" placeholder="Search" />
          <font-awesome-icon icon="search" size="xs" :style="{ color: '#525f6b' }" class="my-1" />
        </div>
        <div class="pt-2 d-flex dropdown">
          <p class="m-0 mx-3 sortHeading greyText">Sort By</p>
          <!-- <div class="sortContainer d-flex justify-content-between px-3">
            <p class="PNT m-0 greyText selection">Selection</p>
            <font-awesome-icon
              icon="chevron-down"
              size="1x"
              :style="{ color: '#a7aab3' }"
              class="mt-1"
            />
          </div>-->
        </div>
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
            <tr v-for="(invoceData,index) in invocesData" :key="index">
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
      invoicesTitle: [
        "invoice",
        "Total",
        "Balance",
        "Due Date",
        "Status",
        "Action"
      ],
      invocesData: [
        {
          invoice: "inv0001",
          total: "65.00",
          balance: "0.00",
          dueDate: "March 01,2020",
          status: "paid"
        },
        {
          invoice: "inv0001",
          total: "805.60",
          balance: "1000.00",
          dueDate: "March 01,2020",
          status: "unpaid"
        },
        {
          invoice: "inv0001",
          total: "161.05",
          balance: "125.00",
          dueDate: "March 01,2020",
          status: "paid"
        },
        {
          invoice: "inv0001",
          total: "500.00",
          balance: "250.00",
          dueDate: "March 01,2020",
          status: "unpaid"
        }
      ]
    };
  }
};
</script>

<style scoped>
.HeadBar {
  font-size: 1rem;
}
.HeadBar > span {
  padding:4px 0px;
}
.HeadBar > .active {
  color: #622fe6;
  border-bottom:3px solid #622fe6;
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
  width: 11%;
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
.searchInput:focus {
  outline: none;
}
.sortContainer {
  width: 8%;
  border: 1px solid #000;
  border-radius: 50px;
  background-color: #f5f8fa;
}
.sortHeading {
  font-size: 0.6rem;
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
</style>

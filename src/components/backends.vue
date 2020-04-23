<template>
  <div>
    <div class="my-4" data-aos="fade" data-aos-duration="1500" data-aos-delay="300">
      <p class="PNB mb-0 blackText mainHeading">Backend Management</p>
      <p
        class="PNR mb-0 greyText dataHeading"
      >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore</p>
    </div>
    <b-container fluid>
      <b-row>
        <b-col xls="6" lgs="6" class="pr-mds-0 pr-lgs-3">
          <b-row class="mr-xls-4 mr-lgs-4 mr-mds-0">
            <b-col
              xls="12"
              lgs="12"
              class="p-0 mb-4 stepOuterBox bg-white"
              data-aos="fade"
              data-aos-duration="1500"
              data-aos-delay="300"
            >
              <div>
                <div class="p-3 stepInnerBox">
                  <p class="mb-0 PNB voiletText stepHeading">Step 1</p>
                  <p class="mb-0 PNR greyText stepDescription">My protected CNAMEs</p>
                </div>
                <div class="p-3">
                  <p
                    class="PNR greyText stepDescription"
                  >Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
                  <div class="d-flex justify-content-between p-1 copyContainer">
                    <input type="text" class="mx-3 copyInput PNR greyText" />
                    <b-button pill class="PNB text-white m-0 circle copyBtn">COPY</b-button>
                  </div>
                </div>
              </div>
            </b-col>
            <b-col
              xls="12"
              lgs="12"
              class="p-0 stepOuterBox bg-white mb-xss-4 mb-lgs-0 mt-lgs-3 mt-mds-2"
              data-aos="fade"
              data-aos-duration="1500"
              data-aos-delay="300"
            >
              <div class="p-3 stepInnerBox">
                <p class="mb-0 PNB voiletText stepHeading">Step 2</p>
                <p class="mb-0 PNR greyText stepDescription">Download Plugins</p>
              </div>
              <b-col xls="6" lgs="12" sms="6" class="p-0">
                <div class="pt-3 px-3">
                  <div
                    v-for="(downloadItem,index) in downloadItems"
                    :key="index"
                    class="p-2 mb-3 text-center rounded downloadButton"
                  >
                    <p class="m-0 PNB text-white">DOWNLOAD LATEST {{downloadItem}}</p>
                  </div>
                </div>
              </b-col>
            </b-col>
          </b-row>
        </b-col>
        <b-col
          xls="6"
          lgs="6"
          class="p-0 stepOuterBox bg-white mt-mds-2 mt-lgs-0"
          data-aos="fade"
          data-aos-duration="1500"
          data-aos-delay="300"
        >
          <div class="p-3 stepInnerBox">
            <p class="mb-0 PNB voiletText stepHeading">Step 3</p>
            <p class="mb-0 PNR greyText stepDescription">Point your DNS to TCPShield</p>
          </div>
          <div class="p-3">
            <p class="stepDescription PNR greyText mb-3">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
              sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
              aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            </p>
            <ul class="pl-0 py-2 mb-0 step3List stepDescription PNR greyText">
              <li>1. Log into your DNS Manager</li>
              <li>2. Go to DNS Management</li>
              <li>3. Create a new CNAME record where the name is the current subdomain(s) your players log in with</li>
              <li>4. Paste your protected CNAME in the “value” box</li>
              <li>
                5.
                <span class="voiletText PNB">ALL DONE!</span> (Changes can take up to 24h to propagate)
              </li>
            </ul>
          </div>
          <div class="row premiumRow mx-3 mb-3">
            <b-col xxls="9" xls="9" lgs="12" mds="9" sms="12" class="premiumBox my-1 p-0">
              <div class="py-1 px-2">
                <p class="voiletText PNB mb-0 premiumHeading">
                  Premium mitigation
                  <span>
                    <img class="mitigationIcon mx-2" src="./../assets/images/premiumMitigation.svg" />
                  </span>
                </p>
                <p class="greyText stepDescription PNR mb-0">
                  Toggle to enable the Cloudflare Spectrum network to deliver
                  <br />lower latency to your players. Billed at $0.025/gb
                </p>
              </div>
            </b-col>
            <b-col xxls="3" xls="3" lgs="12" mds="3" sms="12" class="p-0">
              <div
                class="d-flex justify-content-xls-center justify-content-lgs-start justify-content-mds-center align-items-center h-100 px-3 pb-3 pt-xss-1 pt-mds-3 pt-lgs-1 pt-xls-3"
              >
                <label class="switch m-0">
                  <input type="checkbox" :checked="premiumMitigation" />
                  <span class="slider round"></span>
                </label>
              </div>
            </b-col>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <div data-aos="fade" data-aos-duration="1500" data-aos-delay="300">
      <p class="PNB mb-0 blackText BackendHeading py-4">Backend IP's</p>
      <div class="bg-white p-3 mb-4 tableContainer">
        <table>
          <thead class="bg-light">
            <tr>
              <th class="PNB blackText py-2 tableData">Domain</th>
              <th class="PNB blackText py-2 tableData">Backends</th>
              <th class="PNB blackText py-2 text-center tableData">
                <span class="mr-2">Forge Support</span>
                <span>
                  <b-icon icon="info-circle-fill" font-scale="1.2" class="rounded-circle"></b-icon>
                </span>
              </th>
              <th class="PNB blackText py-2 tableData"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(dataItem,index) in dataItems" :key="index">
              <td
                contenteditable="true"
                @keydown.enter.prevent
                class="PNR greyText py-2 tableData"
              >{{dataItem.domain}}</td>
              <td
                contenteditable="true"
                @keydown.enter.prevent
                class="PNR greyText py-2 tableData"
              >{{dataItem.backends}}</td>
              <td class="PNR greyText py-2 text-center tableData">
                <label class="switch m-0">
                  <input type="checkbox" :checked="dataItem.forgeSupport" />
                  <span class="slider round"></span>
                </label>
              </td>
              <td class="text-center tableData">
                <a class="p-2" @click="deleteRow( dataItem)">
                  <b-icon icon="x-circle" font-scale="2.8" class="rounded-circle py-2 closeIcon"></b-icon>
                </a>
              </td>
            </tr>
            <tr>
              <td class="PNR greyText tableData py-2"></td>
              <td class="PNR greyText tableData py-2"></td>
              <td class="PNR greyText tableData py-2"></td>
              <td class="text-center tableData">
                <a class="p-2" @click="addRow">
                  <b-icon icon="plus-circle" font-scale="2.8" class="rounded-circle py-2 addIcon"></b-icon>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "backends",
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapState("backend", [
      "downloadItems",
      "headItems",
      "dataItems",
      "premiumMitigation"
    ])
  },
  methods: {
    ...mapActions({
      openEditDomain: "backend/openEditDomain",
      deleteRow: "backend/deleteRow",
      addRow: "backend/addRow"
    })
  }
};
</script>

<style scoped>
.stepOuterBox {
  border-radius: 10px;
}
.stepInnerBox {
  border-bottom: 1px solid #eaeaea;
}
.stepHeading {
  font-size: 1rem;
}
.stepDescription {
  font-size: 0.666rem;
}
.copyContainer {
  width: 65%;
  border: 1px solid #eaeaea;
  border-radius: 50px;
}
.copyInput {
  width: 100%;
  border: none;
  font-size: 14px;
}
.copyInput:focus {
  outline: none;
}
.copyBtn {
  font-size: 0.75rem;
  background-color: #622fe6;
  padding: 5px 18px;
}
.downloadButton {
  background-color: #27b6fa;
  font-size: 0.875rem;
  width: 100%;
  cursor: pointer;
}
.step3List {
  list-style-type: none;
  background-color: #f5f8fa;
  border-radius: 6px;
}
.step3List li {
  padding: 10px 20px;
}
.premiumRow {
  background-color: #f5f8fa;
  border-radius: 10px;
}
.premiumBox {
  border-right: 1px solid #c7c7c7;
}
.premiumHeading {
  font-size: 1.3rem;
}
.mitigationIcon {
  width: 25px;
  height: 25px;
}
.BackendHeading {
  font-size: 1.125rem;
}
.tableContainer {
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
  width: 40%;
}
tr .tableData:nth-child(2) {
  width: 40%;
  padding: 0px 12px;
}
tr .tableData:nth-child(3) {
  width: 10%;
  padding: 0px 12px;
}
tr .tableData:nth-child(4) {
  width: 5%;
}
thead tr:first-child .tableData {
  border-top: none;
}
tbody tr:last-child .tableData {
  border-bottom: none;
}
tr .tableData:last-child {
  border-right: none;
}
tr .tableData:first-child {
  border-left: none;
}

.switch {
  position: relative;
  display: inline-block;
  width: 80px;
  height: 26px;
}
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #e2e3e6;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
.slider:before {
  position: absolute;
  content: "";
  height: 18px;
  width: 30px;
  left: 6px;
  bottom: 4px;
  background-color: #622fe6;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
input:checked + .slider::before {
  background-color: #e83570;
}
input:checked + .slider:before {
  -webkit-transform: translateX(40px);
  -ms-transform: translateX(40px);
  transform: translateX(40px);
}
.slider.round {
  border-radius: 50px;
}
.slider.round:before {
  border-radius: 30px;
}
.closeIcon {
  color: #d1d3d7;
}
.closeIcon:hover {
  color: #e72f6c;
}
@media (min-width: 1200px) and (max-width: 1600px) {
  tr .tableData:nth-child(1) {
    width: 38%;
  }
  tr .tableData:nth-child(2) {
    width: 38%;
    padding: 0px 12px;
  }
  tr .tableData:nth-child(3) {
    width: 14%;
    padding: 0px 12px;
  }
}
@media (min-width: 992px) and (max-width: 1200px) {
  .copyContainer {
    width: 100%;
  }
  .premiumBox {
    border-right: none;
  }
  tr .tableData:nth-child(1) {
    width: 35%;
  }
  tr .tableData:nth-child(2) {
    width: 35%;
    padding: 0px 12px;
  }
  tr .tableData:nth-child(3) {
    width: 20%;
    padding: 0px 12px;
  }
}
@media (min-width: 768px) and (max-width: 992px) {
  tr .tableData:nth-child(1) {
    width: 35%;
  }
  tr .tableData:nth-child(2) {
    width: 35%;
    padding: 0px 12px;
  }
  tr .tableData:nth-child(3) {
    width: 20%;
    padding: 0px 12px;
  }
}
@media screen and (max-width: 576px) {
  .copyContainer {
    width: 100%;
  }
  .tableContainer {
    overflow-x: scroll;
  }
  table {
    width: 200%;
  }
  tr .tableData:nth-child(1) {
    width: 17%;
  }
  tr .tableData:nth-child(2) {
    width: 29%;
    padding: 0px 12px;
  }
  tr .tableData:nth-child(3) {
    width: 15%;
    padding: 0px 12px;
  }
}
</style>
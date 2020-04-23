<template>
  <div>
    <div
      class="bg-white d-flex justify-content-between topBar"
      @click.self="closeSelectionDropdown"
    >
      <div
        class="d-mds-block d-sms-block d-xss-block d-lgs-none"
        v-b-toggle.sidebar
        @click="closeSelectionDropdown"
      >
        <b-icon icon="list" class="greyText my-xss-4 mx-xss-2 mx-sms-3" font-scale="1.75"></b-icon>
      </div>
      <b-sidebar id="sidebar" class="mr-5 d-lgs-none" width="220px" no-header shadow>
        <template v-slot:default="{ hide }">
          <div @click="closeSelectionDropdown" class="mr-sms-0 sideBarBox">
            <div class="py-3 d-flex justify-content-center">
              <div>
                <img class="logo" src="./../assets/images/logo.png" />
              </div>
              <div class="sidebarCloseIconBox">
                <b-icon
                  icon="x-circle"
                  class="text-white sidebarCloseIcon ml-4"
                  font-scale="1.25"
                  @click="hide"
                ></b-icon>
              </div>
            </div>
            <ul class="menuList text-white text-uppercase PNB m-0 mt-4 p-0">
              <li class="mb-2">
                <div
                  class="py-3 ml-xl-4 ml-lgs-3 ml-sms-3 ml-3"
                  :class="{ active: activeMenu === 'dashboard' }"
                  @click="openDashboard"
                >
                  <span class="menuIconBox">
                    <img
                      v-if="(activeMenu === 'dashboard')"
                      class="dashboardIcon mx-3"
                      src="./../assets/images/dashboard_voilet.svg"
                    />
                    <img
                      v-else
                      class="dashboardIcon mx-3"
                      src="./../assets/images/dashboard_white.svg"
                    />
                  </span>
                  <a>dashboard</a>
                </div>
              </li>
              <li class="mb-2">
                <div
                  class="py-3 ml-xl-4 ml-lgs-3 ml-sms-3 ml-3"
                  :class="{ active: activeMenu === 'networks' }"
                  @click="openNetworks"
                >
                  <span class="menuIconBox">
                    <img
                      v-if="(activeMenu === 'networks')"
                      class="dashboardIcon mx-3"
                      src="./../assets/images/globe_voilet.svg"
                    />
                    <img v-else class="dashboardIcon mx-3" src="./../assets/images/globe_white.svg" />
                  </span>
                  <a>networks</a>
                </div>
                <ul v-if="activeMenu === ('networks')" class="subList ml-0 my-3 pl-0">
                  <li
                    class="py-2 mr-3 pr-xl-2 pr-lgs-0 pl-lgs-4 pl-xl-0 mb-2 text-center"
                    :class="{ active: activeNetwork === 'backends' }"
                    @click="openBackends "
                  >Backends</li>
                  <li
                    class="py-2 mr-3 pr-xl-2 pr-lgs-0 pl-lgs-4 pl-xl-0 text-center"
                    :class="{ active: activeNetwork === 'analytics' }"
                    @click="openAnalytics"
                  >Analytics</li>
                </ul>
              </li>
              <li class="mb-2">
                <div
                  class="py-3 ml-xl-4 ml-lgs-3 ml-sms-3 ml-3"
                  :class="{ active: activeMenu === 'billing' }"
                  @click="openBilling"
                >
                  <span class="menuIconBox">
                    <img
                      v-if="(activeMenu === 'billing')"
                      class="dashboardIcon mx-3"
                      src="./../assets/images/bill_voilet.svg"
                    />
                    <img v-else class="dashboardIcon mx-3" src="./../assets/images/bill_white.svg" />
                  </span>
                  <a>billing</a>
                </div>
              </li>
            </ul>
          </div>
        </template>
      </b-sidebar>
      <div
        v-if="selectionDropdown"
        class="selectionDropdown px-2"
        data-aos="fade"
        data-aos-duration="500"
        data-aos-delay="200"
      >
        <div class="my-4 greyText PNB HeadBar">
          <span :class="[networkActive ? 'active' : '']" class="mr-4" @click="openNetwork">Networks</span>
          <span :class="[networkActive ? '' : 'active']" @click="openServer">Servers</span>
        </div>
        <table class="mb-3">
          <thead class="bg-light">
            <tr class="text-uppercase">
              <th class="PNB blackText py-1 tableData">Name</th>
              <th class="PNB blackText py-1 tableData">Domains</th>
              <th class="PNB blackText py-1 tableData">Last Modified</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(networkData,index) in networksData" :key="index">
              <td class="PNR greyText py-2 tableData">
                <p class="m-0">
                  <span class="mr-2">
                    <img :src="getImgUrl(networkData)" />
                  </span>
                  <span>{{networkData.name}}</span>
                </p>
              </td>
              <td class="PNR greyText py-2 tableData">
                <p class="m-0">{{networkData.domain}}</p>
              </td>
              <td class="PNR greyText py-2 tableData">
                <p class="m-0">{{networkData.date}}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="py-2 px-3 ml-3 mr-2 mx-sms-4 my-3 d-flex justify-content-between selectionBar">
        <div class="greyText">Selection</div>
        <span>
          <font-awesome-icon
            icon="chevron-down"
            size="1x"
            :style="{ color: '#a7aab3' }"
            :class="[arrowRotation ? 'openRotate' : 'closeRotate']"
            @click="openSelectionDropdown"
            class="ml-2"
          />
        </span>
      </div>
      <div class="d-flex align-items-center mx-lgs-5 mx-sms-3" @click="closeSelectionDropdown">
        <b-dropdown no-caret offset="-60" variant="white" size="sm" class="p-0">
          <template v-slot:button-content>
            <div @click="closeSelectionDropdown" class="notificationBox">
              <b-icon icon="bell" class="rounded-circle greyText bell" style="font-weight:bold"></b-icon>
              <div class="notificationCircle"></div>
            </div>
          </template>
          <b-dropdown-item href="#" size="sm">Notification</b-dropdown-item>
        </b-dropdown>
        <b-avatar
          class="ml-xss-2 ml-sms-3"
          variant="light"
          rounded="lgs"
          size="42px"
          text="AC"
          v-bind:src="userImg"
        ></b-avatar>
        <p class="PNT d-xss-none d-sms-block greyText px-3 m-0 userName">Hello {{user}}</p>
        <b-dropdown no-caret offset="-115" variant="white" size="sm" class="p-0 mx-xss-2 mx-sms-0">
          <template v-slot:button-content>
            <div @click="closeSelectionDropdown">
              <font-awesome-icon icon="chevron-down" size="1x" :style="{ color: '#a7aab3' }" />
            </div>
          </template>
          <b-dropdown-item href="#" size="sm">Setting</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          <b-dropdown-item href="#">Something</b-dropdown-item>
        </b-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "topBar",
  data() {
    return {};
  },
  computed: {
    ...mapState("sidebar", ["activeMenu", "activeNetwork"]),
    ...mapState("topbar", [
      "user",
      "userImg",
      "selectionOptions",
      "networksData",
      "networkActive",
      "selectionDropdown",
      "arrowRotation"
    ])
  },
  methods: {
    ...mapActions({
      openDashboard: "sidebar/openDashboard",
      openNetworks: "sidebar/openNetworks",
      openBackends: "sidebar/openBackends",
      openAnalytics: "sidebar/openAnalytics",
      openBilling: "sidebar/openBilling",
      openSelectionDropdown: "topbar/openSelectionDropdown",
      closeSelectionDropdown: "topbar/closeSelectionDropdown",
      openNetwork: "topbar/openNetwork",
      openServer: "topbar/openServer"
    }),
    getImgUrl(networksData) {
      var images = require.context(
        "./../assets/images/networkImg/",
        true,
        /\.png$/
      );
      return images("./" + networksData.img + ".png");
    }
  }
};
</script>

<style scoped>
.topBar {
  border-radius: 10px;
  position: relative;
}
.selectionDropdown {
  position: absolute;
  top: 78%;
  left: 1%;
  width: 50%;
  z-index: 1;
  border-radius: 10px;
  border: 1px solid #ced1d6;
  background-color: #ffffff;
}
.openRotate {
  transform: rotate(-180deg);
  transition: transform 0.5s;
}
.closeRotate {
  transform: rotate(0deg);
  transition: transform 0.5s;
}
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
.sidebarCloseIconBox {
  position: relative;
  width: 36px;
}
.sidebarCloseIcon {
  position: absolute;
  right: 0%;
  top: 34%;
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
tbody > tr:hover {
  background-color: #eaeaea;
}
tr .tableData {
  border: 1px solid #eaeaea;
  font-size: 0.75rem;
}
tr .tableData:nth-child(1) {
  width: 40%;
  padding: 0px 12px;
}
tr .tableData:nth-child(2) {
  width: 30%;
  padding: 0px 12px;
}
tr .tableData:nth-child(3) {
  width: 30%;
  padding: 0px 12px;
}
thead tr:first-child .tableData {
  border-top: none;
}
tbody tr:last-child .tableData {
  border-bottom: none;
}
tr .tableData {
  border-right: none;
  border-left: none;
}
.chevron-down {
  font-size: 250% !important;
  padding: 4px 10px;
}
.selectionBar {
  width: 290px;
  background: #fff;
  padding: 3px 0px;
  border: 1px solid #eaeaea;
  border-radius: 40px;
  font-size: 1rem;
}
.notificationBox {
  position: relative;
}
.notificationCircle {
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: #592bbf;
  border-radius: 10px;
  top: 1px;
  right: 1px;
}
.bell {
  border: 1.3px solid #a7aab3;
  font-size: 250% !important;
  padding: 4px 10px;
}
.userName {
  font-size: 1rem;
}
.dropdown >>> .btn {
  padding: 0px;
}
.dropdown >>> .btn:focus {
  box-shadow: 0 0 0 0rem;
}
.dropdown >>> .dropdown-menu > li > .dropdown-item {
  padding: 4px 16px;
  font-size: 0.8rem;
  font-family: "Proxima Nova Regular";
  color: #525f6b;
}
.mainHeading {
  font-size: 1.125rem;
}
.dataHeading {
  font-size: 0.875rem;
}
/* @media screen and (max-width: 576px) {
  #sidebar{
    width:320px !important;
  }
} */
@media (min-width: 992px) and (max-width: 1200px) {
  .selectionDropdown {
    width: 75%;
  }
}
@media (min-width: 768px) and (max-width: 992px) {
  .selectionDropdown {
    width: 75%;
  }
}
@media screen and (max-width: 576px) {
  .selectionDropdown {
    width: 100%;
  }
}
</style>
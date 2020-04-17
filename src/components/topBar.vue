<template>
  <div>
    <div class="bg-light d-flex justify-content-between topBar">
      <div class="d-mds-block d-sms-block d-xss-block d-lgs-none" v-b-toggle.sidebar>
        <b-icon icon="list" class="greyText my-xss-4 mx-xss-2 mx-sms-3" font-scale="1.75"></b-icon>
      </div>
      <b-sidebar id="sidebar" class="mr-5 d-lgs-none" width="220px" no-header shadow>
        <div class="mr-sms-0 sideBarBox">
          <div class="text-center py-3">
            <img class="logo" src="./../assets/images/logo.png" />
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
      </b-sidebar>
      <div class="py-2 px-4 ml-0 mr-2 mx-sms-4 my-3">
        <v-select
          label="Select"
          :options="selectionOptions"
          placeholder="Selection"
          class="style-chooser"
        >
          <template #open-indicator="{ attributes }">
            <span v-bind="attributes">
              <font-awesome-icon icon="chevron-down" size="1x" :style="{ color: '#a7aab3' }" class />
            </span>
          </template>
        </v-select>
      </div>
      <div class="d-flex align-items-center mx-lgs-5 mx-sms-3">
        <div class="notificationBox">
          <b-icon icon="bell" class="rounded-circle greyText bell" style="font-weight:bold"></b-icon>
          <div class="notificationCircle"></div>
        </div>
        <b-avatar
          class="ml-xss-2 ml-sms-3"
          variant="light"
          rounded="lgs"
          size="42px"
          text="AC"
          v-bind:src="userImg"
        ></b-avatar>
        <p class="PNT d-xss-none d-sms-block greyText px-3 m-0 userName">Hello {{user}}</p>
        <b-dropdown no-caret offset="-60" variant="white" size="sm" class="p-0">
          <template v-slot:button-content>
            <font-awesome-icon
              icon="chevron-down"
              size="1x"
              :style="{ color: '#a7aab3' }"
              class="mt-1 mx-2 mx-sms-0"
            />
          </template>
          <b-dropdown-item href="#" size="sm">Setting</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          <b-dropdown-item href="#">Something</b-dropdown-item>
        </b-dropdown>
        <!-- <font-awesome-icon
          icon="chevron-down"
          size="1x"
          :style="{ color: '#a7aab3' }"
          class="mt-1 mx-2 mx-sms-0"
        />-->
      </div>
    </div>
    <div class="my-4">
      <div v-if="activeMenu === 'dashboard'">
        <p class="PNB mb-0 blackText mainHeading">Good morning, John Smith</p>
        <p class="PNR mb-0 greyText dataHeading">You have 1503 players across 2 networks</p>
      </div>
      <div v-if="activeNetwork === 'backends'">
        <p class="PNB mb-0 blackText mainHeading">Backend Management</p>
        <p
          class="PNR mb-0 greyText dataHeading"
        >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore</p>
      </div>
      <div v-if="activeNetwork === 'analytics'">
        <p class="PNB mb-0 blackText mainHeading">Network Statistics</p>
        <p class="PNR mb-0 greyText dataHeading">5 Servers and 60.000 players online</p>
      </div>
      <div v-if="activeMenu === 'billing'">
        <p class="PNB mb-0 blackText mainHeading">Billing Dashboard</p>
        <p
          class="PNR mb-0 greyText dataHeading"
        >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "topBar",
  data() {
    return {
      user: "Xenon",
      userImg: "https://placekitten.com/300/300",
      selectionOptions: ["Lorem Ipsum", " Letraset sheets"]
    };
  },
  computed: {
    ...mapState("sidebar", ["activeMenu", "activeNetwork"])
  },
  methods: {
    ...mapActions({
      openDashboard: "sidebar/openDashboard",
      openNetworks: "sidebar/openNetworks",
      openBackends: "sidebar/openBackends",
      openAnalytics: "sidebar/openAnalytics",
      openBilling: "sidebar/openBilling"
    })
  }
};
</script>

<style scoped>
.topBar {
  border-radius: 10px;
}
.chevron-down {
  font-size: 250% !important;
  padding: 4px 10px;
}
.style-chooser {
  width: 290px;
}
.style-chooser >>> .vs__search::placeholder {
  font-size: 1rem;
  color: #a7aab3;
  background: #fff;
}
.style-chooser >>> .vs__selected {
  padding: 4px 8px;
  margin: 0px 12px;
  font-size: 1rem;
  color: #a7aab3;
}
.style-chooser >>> .vs__search {
  margin: 0;
  padding: 4px 4px 4px 24px;
  color: #a7aab3;
}
.style-chooser >>> .vs__dropdown-toggle {
  background: #fff;
  padding: 3px 0px;
  border: 1px solid #eaeaea;
  border-radius: 40px;
  font-size: 1rem;
}
.style-chooser >>> .vs__dropdown-menu {
  background: #fff;
  border-radius: 0px;
  font-size: 1rem;
  margin-top: 4px;
  padding: 0;
}
.style-chooser >>> .vs__dropdown-option {
  color: #a7aab3;
  padding: 4px 24px;
}
.style-chooser >>> .vs__dropdown-option:hover {
  color: #fff;
}
.style-chooser >>> .vs__actions {
  padding: 0px 24px 0px 0px;
}
.style-chooser >>> .vs__clear {
  display: none;
}
.style-chooser >>> .vs__open-indicator {
  fill: #a7aab3;
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
</style>
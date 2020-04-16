<template>
  <div>
    <div class="bg-light d-flex justify-content-between topBar">
      <div class="d-mds-block d-sms-block d-xss-block d-lgs-none" v-b-toggle.sidebar>
        <b-icon icon="list" class="greyText my-xss-4 mx-xss-2 mx-sms-3" font-scale="1.75"></b-icon>
      </div>
      <b-sidebar id="sidebar" class="mr-5" width="220px" no-header shadow>
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
      <div class="py-2 px-4 ml-0 mr-2 mx-sms-4 my-3 d-flex justify-content-between dropdown">
        <p class="PNT m-0 greyText selection">Selection</p>
        <font-awesome-icon
          icon="chevron-down"
          size="1x"
          :style="{ color: '#a7aab3' }"
          class="mt-1"
        />
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
        <font-awesome-icon
          icon="chevron-down"
          size="1x"
          :style="{ color: '#a7aab3' }"
          class="mt-1 mx-2 mx-sms-0"
        />
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
      userImg: "https://placekitten.com/300/300"
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
.dropdown {
  width: 290px;
  border: 1px solid #eaeaea;
  border-radius: 40px;
}
.selection {
  font-size: 1rem;
}
.chevron-down {
  font-size: 250% !important;
  padding: 4px 10px;
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
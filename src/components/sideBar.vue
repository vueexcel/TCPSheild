<template>
  <div
    class="mr-xss-4 mr-xls-3 mr-xxls-5 d-lgs-block d-mds-none d-sms-none d-xss-none sideBarBox"
    @click="closeSelectionDropdown"
  >
    <div class="text-center py-3">
      <img class="logo" src="./../assets/images/logo.png" />
    </div>
    <ul class="menuList text-white text-uppercase PNB m-0 mt-4 p-0">
      <li class="mb-2">
        <div
          class="py-3 ml-xxls-4 ml-xls-3 ml-lgs-3"
          :class="{ active: activeMenu === 'dashboard' }"
          @click="openDashboard"
        >
          <span class="menuIconBox">
            <img
              v-if="(activeMenu === 'dashboard')"
              class="dashboardIcon mx-3"
              src="./../assets/images/dashboard_voilet.svg"
            />
            <img v-else class="dashboardIcon mx-3" src="./../assets/images/dashboard_white.svg" />
          </span>
          <a>dashboard</a>
        </div>
      </li>
      <li class="mb-2">
        <div
          class="py-3 ml-xxls-4 ml-xls-3 ml-lgs-3"
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
            class="py-2 mr-3 pl-xxls-0 pr-xxls-0 pl-xls-4 pr-xls-3 mb-2 text-center pr-lgs-2 pl-lgs-4"
            :class="{ active: activeNetwork === 'backends' }"
            @click="openBackends "
          >Backends</li>
          <li
            class="py-2 mr-3 pl-xxls-0 pr-xxls-0 pl-xls-4 pr-xls-3 text-center pr-lgs-2 pl-lgs-4"
            :class="{ active: activeNetwork === 'analytics' }"
            @click="openAnalytics"
          >Analytics</li>
        </ul>
      </li>
      <li class="mb-2">
        <div
          class="py-3 ml-xxls-4 ml-xls-3 ml-lgs-3"
          :class="{ active: activeMenu === 'billing' }"
          @click="openBilling() ; activeOverview();"
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

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "sideBar",
  data() {
    return {
      menu: ["Dashboard", "Networks"]
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
      openBilling: "sidebar/openBilling",
      activeOverview: "billing/activeOverview",
      closeSelectionDropdown: "topbar/closeSelectionDropdown"
    })
  }
};
</script>

<style >
.logo {
  width: 8vw;
}
.sideBarBox {
  background-color: #622fe6;
  border-radius: 10px;
  height: 1050px;
  user-select: none;
}
.menuList {
  list-style-type: none;
}
.menuList li {
  font-size: 0.875rem;
  cursor: pointer;
}
.menuList li > .active {
  background-color: #f5f8fa;
  color: #823fdd;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  position: relative;
}
.menuList li > .active::before {
  content: "";
  width: 30px;
  height: 30px;
  background: #f5f8fa;
  -webkit-mask-image: radial-gradient(
    circle 10px at 0 0,
    transparent 0,
    transparent 29px,
    #823fdd 30px
  );
  position: absolute;
  top: -30px;
  right: 0px;
}
.menuList li > .active::after {
  content: "";
  width: 30px;
  height: 30px;
  background: #f5f8fa;
  -webkit-mask-image: radial-gradient(
    circle 10px at 0 0,
    transparent 0,
    transparent 29px,
    #823fdd 30px
  );
  position: absolute;
  bottom: -30px;
  right: 0px;
  transform: rotate(270deg);
}
.dashboardIcon {
  width: 25px;
  height: 25px;
}
.subList {
  list-style-type: none;
}
.subList li {
  font-size: 0.666rem;
  cursor: pointer;
}
.subList > .active {
  background-color: #582acf;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
}
@media (min-width: 1200px) and (max-width: 1600px) {
  .logo {
    width: 10vw;
  }
}
@media (min-width: 992px) and (max-width: 1200px) {
  .logo {
    width: 13vw;
  }
}
@media (min-width: 768px) and (max-width: 992px) {
  .logo {
    width: 20vw;
  }
  .sideBarBox {
    border-radius: 0px;
    height: 100%;
  }
}
@media screen and (max-width: 576px) {
  .logo {
    width: 40vw;
  }
  .sideBarBox {
    border-radius: 0px;
    height: 100%;
  }
}
</style>
<template>
  <div class="pr-4">
    <div class style="background-color:#622fe6;height:100vh;border-radius:10px">
      <div class="text-center py-3">
        <img class="logo" src="./../assets/images/logo.png" />
      </div>
      <ul class="menuList text-white text-uppercase PNB m-0 mt-4 p-0">
        <li class="mb-2">
          <div class="py-3 ml-4"  v-bind:class="{ active: isMenuActive}" @click="isMenuActive=true">
            <span class="menuIconBox">
              <img v-if="!isMenuActive" class="dashboardIcon mx-3" src="./../assets/images/dashboard_white.svg" />
              <img v-else class="dashboardIcon mx-3" src="./../assets/images/dashboard_voilet.svg" />
            </span>
            <a>dashboard</a>
          </div>
        </li>
        <li class="mb-2">
          <div class="py-3 ml-4" v-bind:class="{ active: !isMenuActive}" @click="isMenuActive=false">
            <span class="menuIconBox">
              <img v-if="!isMenuActive" class="dashboardIcon mx-3" src="./../assets/images/globe_voilet.svg" />
              <img v-else class="dashboardIcon mx-3" src="./../assets/images/globe_white.svg" />
            </span>
            <a>networks</a>
          </div>
          <ul v-if="!isMenuActive" class="subList ml-0 mt-3 pl-0">
            <li class="py-2 mr-3 pr-2 mb-2 text-center" v-bind:class="{ active: isActive}" @click="isActive=true">Backends</li>
            <li class="py-2 mr-3 pr-2 text-center" v-bind:class="{ active: !isActive}"   @click="isActive=false">Analytics</li>
          </ul>
        </li>
        <!-- <li
          v-for="(item,index) in menu"
          :key="index"
          class="py-3 mb-2 ml-3 text-center active"
        >{{item}}</li>-->
      </ul>
      <div class="arrow-right"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sideBar",
  data() {
    return {
      menu: ["Dashboard", "Networks"],
      isMenuActive:true,
      isActive:true
    };
  }
};
</script>

<style scoped>
.logo {
  width: 9vw;
}
.menuList {
  list-style-type: none;
}
.menuList li {
  font-size: 14px;
  cursor: pointer;
}
.menuList li > .active {
  background-color: #ffffff;
  color: #823fdd;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  position: relative;
}
.menuList li > .active::before {
  content: "";
  width: 30px;
  height: 30px;
  background: #fff;
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
.active::after {
  content: "";
  width: 30px;
  height: 30px;
  background: #fff;
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
.subList{
  list-style-type: none;
}
.subList li{
  font-size: 12px;
  cursor: pointer;
}
.subList > .active{
  background-color: #582acf;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
}
</style>
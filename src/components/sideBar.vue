<template>
  <div class="pr-4">
    <div class style="background-color:#622fe6;height:100vh;border-radius:10px">
      <div class="text-center py-3">
        <img class="logo" src="./../assets/images/logo.png" />
      </div>
      <ul class="menuList text-white text-uppercase PNB m-0 mt-4 p-0">
        <li class="mb-2">
          <div class="py-3 ml-4">
            <span class="menuIconBox">
              <img class="dashboardIcon mx-3" src="./../assets/images/dashboard_white.svg" />
            </span>
            <a>dashboard</a>
          </div>
        </li>
        <li class="mb-2 ">
          <div class="py-3 active ml-4">
            <span class="menuIconBox">
              <img class="dashboardIcon mx-3" src="./../assets/images/globe_voilet.svg" />
            </span>
            <a>network</a>
          </div>
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
      menu: ["Dashboard", "Networks"]
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
}
.active {
  background-color: #ffffff;
  color: #823fdd;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  position: relative;
}
.active::before {
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
.menuIconBox {
}
.dashboardIcon {
  width: 25px;
  height: 25px;
}
</style>
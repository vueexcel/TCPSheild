<template>
  <div class="pr-4">
    <div class style="background-color:#622fe6;height:100vh;border-radius:10px">
      <div class="text-center py-3">
        <img class="logo" src="./../assets/images/logo.png" />
      </div>
      <ul class="menuList text-white text-uppercase PNB m-0 p-0">
        <li v-for="(item,index) in menu" :key="index" class="py-3 text-center">{{item}}</li>
      </ul>
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
</style>
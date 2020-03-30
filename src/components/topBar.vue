<template>
  <div>
    <div class="bg-light d-flex justify-content-between topBar">
      <div class="py-2 px-4 mx-4 my-3 d-flex justify-content-between dropdown">
        <p class="PNT m-0 themeGrey selection">Selection</p>
        <font-awesome-icon
          icon="chevron-down"
          size="1x"
          :style="{ color: '#a7aab3' }"
          class="mt-1"
        />
      </div>
      <div class="d-flex align-items-center mx-5">
        <div class="notificationBox">
          <b-icon icon="bell" class="rounded-circle themeGrey bell" style="font-weight:bold"></b-icon>
          <div class="notificationCircle"></div>
        </div>
        <b-avatar
          class="ml-3"
          variant="light"
          rounded="lg"
          size="42px"
          text="AC"
          v-bind:src="userImg"
        ></b-avatar>
        <p class="PNT themeGrey px-3 m-0 userName">Hello {{user}}</p>
        <font-awesome-icon
          icon="chevron-down"
          size="1x"
          :style="{ color: '#a7aab3' }"
          class="mt-1"
        />
      </div>
    </div>
    <div class="my-4">
      <div v-if="activeMenu === 'dashboard'">
        <p class="PNB mb-0 themeBlack wishUser">Good morning, John Smith</p>
        <p class="PNR mb-0 themeGrey dataHeading">You have 1503 players across 2 networks</p>
      </div>
      <div v-if="activeNetwork === 'backends'">
        <p class="PNB mb-0 themeBlack wishUser">Backend Management</p>
        <p class="PNR mb-0 themeGrey dataHeading">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore</p>
      </div>
      <div v-if="activeNetwork === 'analytics'">
        <p class="PNB mb-0 themeBlack wishUser">Network Statistics</p>
        <p class="PNR mb-0 themeGrey dataHeading">5 Servers and 60.000 players online</p>
      </div>
      <div v-if="activeMenu === 'billing'">
        <p class="PNB mb-0 themeBlack wishUser">Billing Dashboard</p>
        <p class="PNR mb-0 themeGrey dataHeading">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "topBar",
  data() {
    return {
      user: "Xenon",
      userImg: "https://placekitten.com/300/300"
    };
  },
  computed: {
    ...mapState("sidebar", ["activeMenu","activeNetwork"])
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
  font-size: 15px;
  font-weight: lighter;
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
  font-size: 15px;
}
.wishUser {
  font-size: 16px;
}
.dataHeading {
  font-size: 14px;
}
</style>
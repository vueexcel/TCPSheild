<template>
  <div class="appBackground p-xl-5 p-lg-4 p-md-4  p-sm-0">
    <img class="triangle" src="./../assets/images/triangle.png" />
    <b-container fluid class="bv-example-row">
      <b-row>
        <b-col xl="2" lg="3">
          <sideBar />
        </b-col>
        <b-col xl="10" lg="9" class="p-xl-0 p-lg-0 pr-lg-3 col-lg-9 ">
          <div>
            <topBar />
          </div>
          <router-view></router-view>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import sideBar from "./sideBar.vue";
import topBar from "./topBar.vue";
export default {
  name: "background",
  components: {
    sideBar,
    topBar
  },
  mounted() {
    this.openDashboard();
  },
  methods: {
    ...mapActions({
      openDashboard: "sidebar/openDashboard"
    })
  }
};
</script>

<style scoped>
.appBackground {
  background: url("./../assets/images/backgroundTCPShield.png");
  /* background-color: black; */
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: inherit;
  position: relative;
}
.triangle {
  width: 21vw;
  position: absolute;
  top: 0;
  right: 0;
}
</style>
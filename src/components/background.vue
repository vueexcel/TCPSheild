<template>
  <div class="appBackground p-5">
    <img class="triangle" src="./../assets/images/triangle.png" />
    <b-container fluid class="bv-example-row">
      <b-row>
        <b-col xl="2" lg="3">
          <sideBar />
        </b-col>
        <b-col xl="10" lg="9" class="p-0">
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
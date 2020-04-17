<template>
  <div class="appBackground p-xls-5 p-lgs-4 p-mds-4 p-sms-0">
    <img class="triangle" src="./../assets/images/triangle.png" />
    <b-container fluid class="bv-example-row">
      <b-row>
        <b-col xls="2" lgs="3" class="pl-xls-0 pl-xxl-3" style="position:fixed">
          <sideBar />
        </b-col>
        <b-col xls="10" lgs="9" offset-xls="2" offset-lgs="3" class="p-xls-0 p-lgs-0 pr-lgs-3">
          <div>
            <topBar />
          </div>
          <router-view class="margin-top:550px;"></router-view>
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
  height: 1120px;
  position: relative;
}
.triangle {
  width: 21vw;
  position: absolute;
  top: 0;
  right: 0;
}
@media (min-width: 1200px) and (max-width: 1600px) {
  .appBackground {
    background-size: cover;
    height: 1370px;
  }
}
@media (min-width: 992px) and (max-width: 1200px) {
  .appBackground {
    background-size: cover;
    background-repeat: no-repeat;
    height: 1905px;
  }
}
@media (min-width: 768px) and (max-width: 992px) {
  .appBackground {
    background-size: cover;
    background-repeat: no-repeat;
    height: 1845px;
  }
}
@media screen and (max-width: 576px) {
  .appBackground {
    background-size: cover;
    background-repeat: no-repeat;
    height: 2500px;
  }
}
</style>
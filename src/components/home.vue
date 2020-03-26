<template>
  <div class>
    <div class="my-4">
      <p class="PNB mb-0">Good morning, John Smith</p>
      <p class="PNB mb-0 themeGrey">You have 1503 players across 2 networks</p>
    </div>
    <b-container-fluid class="bv-example-row">
      <b-row>
        <b-col lg="9">
          <b-row>
            <b-col lg="4" class="px-5">
              <div class="d-flex justify-content-between">
                <p class="themeVoilet PNB">MineSuperior</p>
                <p>
                  <b-icon icon="person" font-scale="1" class="rounded-circle themeGrey"></b-icon>
                  <span class="themeGrey PNB pl-2">2300 Players</span>
                </p>
              </div>
            </b-col>
            <b-col lg="4" class="px-5">
              <div class="d-flex justify-content-between">
                <p class="themeVoilet PNB">BreakingMC</p>
                <p>
                  <b-icon icon="person" font-scale="1" class="rounded-circle themeGrey"></b-icon>
                  <span class="themeGrey PNB pl-2">900 Players</span>
                </p>
              </div>
            </b-col>
            <b-col lg="4">
              <div class="border rounded-lg">
                <div class="d-flex justify-content-center align-items-center" style="height:200px;">
                  <div class="text-center">
                    <b-icon
                      icon="plus-circle"
                      font-scale="3"
                      class="rounded-circle p-2"
                      style="color: #622fe6;"
                    ></b-icon>
                    <p class="themeVoilet PNB">ADD NEW SERVER</p>
                  </div>
                </div>
              </div>
            </b-col>
          </b-row>
        </b-col>
        <b-col lg="3" >
          <div class="bg-light sideBox">
            <p class="PNB p-3 m-0 sideHeading themeBlack">Support</p>
            <div class="p-3">
              <p
                class="themeGrey PNR sideDescription"
              >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
              <p class="PNB sideDescription themeBlack">Documentation</p>
              <p class="PNB sideDescription themeBlack">+180 454 323 777</p>
              <div class="p-2 text-center rounded sideButton">
                <p class="m-0 PNB text-white">SUBMIT TICKET</p>
              </div>
            </div>
          </div>
          <div class="bg-light sideBox my-4">
            <p class="PNB p-3 m-0 sideHeading themeBlack">API</p>
            <div class="p-3">
              <div class="d-flex justify-content-between">
                <p class="themeVoilet PNB sideDescription">Client ID</p>
                <p class="themeBlack PNR sideDescription">view secret</p>
              </div>
              <p
                class="themeGrey PNR sideDescription"
              >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</p>
              <p class="PNB sideDescription themeBlack">Manage API Keys</p>
              <p class="PNB sideDescription themeBlack">API Documentation</p>
            </div>
          </div>
          <div class="bg-light sideBox ">
            <p class="PNB p-3 m-0 sideHeading themeBlack">Blog</p>
            <div class="p-3">
              <p class="themeGrey PNR sideDescription">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.
              </p>
              <div class="p-2 text-center rounded sideButton">
                <p class="m-0 PNB text-white">VIEW BLOG</p>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container-fluid>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  }
};
</script>

<style >
@import "./../css/fonts.css";
.themeVoilet {
  color: #622fe6;
}
.themeGrey {
  color: #a7aab3;
}
.themeBlack {
  color: #525f6b;
}
.PNB {
  font-family: "Proxima Nova Bold";
}
.PNR {
  font-family: "Proxima Nova Regular";
}
</style>
<style scoped>
.sideBox {
  border-radius: 10px;
}
.sideHeading {
  font-size: 15px;
  border-bottom: 1px solid #eaeaea;
}
.sideDescription {
  font-size: 13px;
}
.sideButton {
  background-color: #27b6fa;
  font-size: 14px;
}
</style>
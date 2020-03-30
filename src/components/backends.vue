<template>
  <div>
    <b-container fluid class>
      <b-row>
        <b-col xl="6" lg="6">
          <b-row class="mr-4">
            <b-col xl="12" lg="6" class="p-0 mb-4 stepOuterBox bg-white">
              <div>
                <div class="p-3 stepInnerBox">
                  <p class="mb-0 PNB themeVoilet stepHeading">Step 1</p>
                  <p class="mb-0 PNB themeGrey stepDescription">My protected CNAMEs</p>
                </div>
                <div class="p-3">
                  <p
                    class="PNB themeGrey stepDescription"
                  >Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
                  <div class="d-flex justify-content-between p-1 copyContainer">
                    <input type="text" class="mx-3 copyInput PNR themeGrey" />
                    <b-button pill class="PNB stepDescription text-white m-0 circle copyBtn">COPY</b-button>
                  </div>
                </div>
              </div>
            </b-col>
            <b-col xl="12" lg="6" class="p-0 mb-4 stepOuterBox bg-white">
              <div class="p-3 stepInnerBox">
                <p class="mb-0 PNB themeVoilet stepHeading">Step 2</p>
                <p class="mb-0 PNB themeGrey stepDescription">Download Plugins</p>
              </div>
              <div class="p-3">
                <div class="p-2 mb-3 text-center rounded downloadButton">
                  <p class="m-0 PNB text-white">DOWNLOAD LATEST BUNGEE</p>
                </div>
                <div class="p-2 mb-3 text-center rounded downloadButton">
                  <p class="m-0 PNB text-white">DOWNLOAD LATEST SPIGOT</p>
                </div>
                <div class="p-2 text-center rounded downloadButton">
                  <p class="m-0 PNB text-white">DOWNLOAD LATEST LILYPAD</p>
                </div>
              </div>
            </b-col>
          </b-row>
        </b-col>
        <b-col xl="6" lg="4" class="p-0 mb-4 stepOuterBox bg-white border">
          <div class="p-3 stepInnerBox">
            <p class="mb-0 PNB themeVoilet stepHeading">Step 3</p>
            <p class="mb-0 PNB themeGrey stepDescription">Point your DNS to TCPShield</p>
          </div>
          <div class="p-3">
            <p class="stepDescription PNR themeGrey mb-4">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
              sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
              aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            </p>
            <ul class="pl-0 ml-2 step3List stepDescription PNR themeGrey">
              <li>1. Log into your DNS Manager</li>
              <li>2. Go to DNS Management</li>
              <li>3. Create a new CNAME record where the name is the current subdomain(s) your players log in with</li>
              <li>4. Paste your protected CNAME in the “value” box</li>
              <li>
                5.
                <span class="themeVoilet PNB">ALL DONE!</span> (Changes can take up to 24h to propagate)
              </li>
            </ul>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style scoped>
.stepOuterBox {
  border-radius: 10px;
}
.stepInnerBox {
  border-bottom: 1px solid #eaeaea;
}
.stepHeading {
  font-size: 15px;
}
.stepDescription {
  font-size: 12px;
}
.copyContainer{
    width: 450px;
    border:1px solid #eaeaea;
    border-radius: 50px;
}
.copyInput{
    width:100%;
    border:none;
    font-size: 14px;
}
.copyBtn {
  background-color: #622fe6;
  padding: 5px 18px;
}
.downloadButton {
  background-color: #27b6fa;
  font-size: 14px;
  width: 50%;
}
.step3List {
  list-style-type: none;
}
.step3List li {
  padding: 8px 20px;
}
</style>
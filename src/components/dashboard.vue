<template>
  <div>
    <b-container fluid class="px-0">
      <b-row>
        <b-col xl="9" lg="8">
          <b-row class>
            <b-col xl="4" lg="6" class="p-0" v-for="(chart,index) in charts" :key="index">
              <div class="mb-2 mx-3 bg-white chartBox">
                <div class="d-flex justify-content-between px-3 py-2">
                  <p class="voiletText PNB m-0 chartTitle">{{chart.title}}</p>
                  <p class="mb-0">
                    <b-icon icon="person" font-scale="1" class="rounded-circle greyText"></b-icon>
                    <span class="greyText PNR m-0 pl-2 players">{{chart.player}} Players</span>
                  </p>
                </div>
                <apexcharts
                  height="150"
                  type="line"
                  :options="options"
                  :series="chart.series"
                  class="mr-2"
                ></apexcharts>
              </div>
            </b-col>
            <b-col xl="4" lg="6" class>
              <div class="d-flex justify-content-center align-items-center addNewServerBox">
                <div class="text-center">
                  <b-icon icon="plus-circle" font-scale="3" class="rounded-circle p-2 addIcon"></b-icon>
                  <p class="voiletText PNB addNewServer mt-2">ADD NEW SERVER</p>
                </div>
              </div>
            </b-col>
          </b-row>
        </b-col>
        <b-col xl="3" lg="4">
          <div class="sideBox">
            <p class="PNB p-3 m-0 sideHeading blackText">Support</p>
            <div class="p-3">
              <p
                class="greyText PNT sideDescription"
              >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
              <div>
                <span>
                  <img class="documentIcon" src="./../assets/images/document.svg" />
                </span>
                <span class="PNB sideDescription blackText px-3">Documentation</span>
              </div>
              <div class="my-3">
                <span>
                  <img class="phoneIcon" src="./../assets/images/phone.svg" />
                </span>
                <span class="PNB sideDescription blackText px-2">+180 454 323 777</span>
              </div>
              <div class="p-2 text-center rounded sideButton">
                <p class="m-0 PNB text-white">SUBMIT TICKET</p>
              </div>
            </div>
          </div>
          <div class="sideBox my-4">
            <p class="PNB p-3 m-0 sideHeading blackText">API</p>
            <div class="p-3">
              <div class="d-flex justify-content-between">
                <p class="voiletText PNB sideDescription m-0">Client ID</p>
                <p class="blackText PNR sideDescription m-0">view secret</p>
              </div>
              <div class="d-flex justify-content-between p-1 mt-2 mb-3 apiInputBox">
                <input type="text" class="apiInput greyText mx-3" />
                <b-button pill class="PNB sideDescription text-white m-0 circle copyBtn">COPY</b-button>
              </div>
              <p
                class="greyText PNT sideDescription"
              >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</p>
              <div>
                <div>
                  <span>
                    <img class="keyIcon" src="./../assets/images/key.svg" />
                  </span>
                  <span class="PNB sideDescription blackText px-2">Manage API Keys</span>
                </div>
                <div class="mt-3">
                  <span>
                    <img class="phoneIcon" src="./../assets/images/phone.svg" />
                  </span>
                  <span class="PNB sideDescription blackText px-2">API Documentation</span>
                </div>
              </div>
            </div>
          </div>
          <div class="sideBox">
            <p class="PNB p-3 m-0 sideHeading blackText">Blog</p>
            <div class="p-3">
              <p class="greyText PNT sideDescription">
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
    </b-container>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
export default {
  name: "dashboard",
  components: {
    apexcharts: VueApexCharts
  },
  data: function() {
    return {
      options: {
        colors: ["#F44336", "#E91E63", "#9C27B0"],
        chart: {
          id: "serverChart",
          height: 180,
          zoom: {
            enabled: false
          },
          animations: {
            enabled: true,
            easing: "easeinout",
            speed: 800,
            animateGradually: {
              enabled: true,
              delay: 150
            },
            dynamicAnimation: {
              enabled: true,
              speed: 350
            }
          },
          toolbar: {
            show: false
          },
          fontFamily: "Proxima Nova Regular"
        },
        xaxis: {
          categories: [
            "JAN",
            "FEB",
            "MAR",
            "APR",
            "MAY",
            "JUN",
            "JUL",
            "AUG",
            "SEP",
            "OCT",
            "NOV",
            "DEC"
          ],
          labels: {
            style: {
              fontSize: ".583rem",
              colors: "#a7aab3"
            }
          }
        },
        yaxis: {
          tickAmount: 3,
          labels: {
            style: {
              fontSize: ".583rem",
              colors: "#a7aab3"
            }
          }
        },
        dataLabels: {
          enabled: false
        },
        legend: {
          show: false
        },
        stroke: {
          width: 3,
          curve: "smooth"
        },
        fill: {
          type: "solid",
          gradient: {
            shade: "dark",
            gradientToColors: ["#FFA41B"],
            shadeIntensity: 1,
            type: "horizontal",
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100, 100, 100]
          }
        },
        responsive: [
          {
            breakpoint: 1800,
            options: {}
          }
        ]
      },
      charts: [
        {
          title: "MineSuperior",
          player: 2300,
          series: [
            {
              data: [0, 3100, 2000, 2700, 3600, 4000, 5500]
            },
            {
              data: [3100, 2000, 100, 4000, 1000, 3000, 400]
            },
            {
              data: [5765, 4120, 3600, 100, 3200, 5000, 5800]
            }
          ]
        },
        {
          title: "BreakingMC",
          player: 900,
          series: [
            {
              data: [0, 4100, 3000, 2700, 600, 1400, 5000]
            },
            {
              data: [3100, 2000, 100, 2200, 2800, 3000, 300]
            },
            {
              data: [1765, 1120, 1600, 5500, 3200, 3500, 4000]
            }
          ]
        }
      ]
    };
  }
};
</script>

<style >
@import "./../css/fonts.css";
.voiletText {
  color: #622fe6;
}
.greyText {
  color: #a7aab3;
}
.blackText {
  color: #525f6b;
}
.PNB {
  font-family: "Proxima Nova Bold";
}
.PNR {
  font-family: "Proxima Nova Regular";
}
.PNT {
  font-family: "Proxima Nova Thin";
}
.addIcon {
  color: #622fe6;
  cursor: pointer;
}
</style>

<style scoped>
.chartTitle {
  font-size: 1rem;
}
.players {
  font-size: 0.666rem;
}
.chartBox {
  border-radius: 10px;
}
.addNewServerBox {
  height: 205px;
  border: 1px solid #dbe2e7;
  border-radius: 10px;
  background-color: #ffffff;
}
.addNewServer {
  font-size: 0.75rem;
}
.sideBox {
  border-radius: 10px;
  background-color: #fff;
}
.sideHeading {
  font-size: 1rem;
  border-bottom: 1px solid #eaeaea;
}
.sideDescription {
  font-size: 0.75rem;
}
.sideButton {
  background-color: #27b6fa;
  font-size: 0.875rem;
  cursor: pointer;
}
.apiInputBox {
  border: 1px solid #eaeaea;
  border-radius: 50px;
}
.apiInput {
  border: none;
  cursor: pointer;
  width: 100%;
  font-size: 0.75rem;
}
.apiInput:focus {
  border: none;
  outline: none;
}
.copyBtn {
  background-color: #622fe6;
  padding: 6px 15px;
  cursor: pointer;
}
.documentIcon {
  width: 18px;
  position: relative;
  left: 3px;
}
.keyIcon {
  width: 25px;
}
.phoneIcon {
  width: 25px;
}
</style>
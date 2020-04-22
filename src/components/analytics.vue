<template>
  <div>
    <div class="my-4" data-aos="fade" data-aos-duration="1500" data-aos-delay="300">
      <p class="PNB mb-0 blackText mainHeading">Network Statistics</p>
      <p class="PNR mb-0 greyText dataHeading">5 Servers and 60.000 players online</p>
    </div>
    <b-container fluid class>
      <b-row>
        <b-col xxls="9" xls="12" lgs="12" mds="12" sms="12">
          <b-row>
            <b-col
              xls="4"
              lgs="6"
              mds="6"
              sms="6"
              class="p-0 chartMargin mb-xls-4 mb-lgs-3 mb-mds-4 mb-sms-4 mb-4 mt-xls-0 mt-lgs-3"
              v-for="(areaChart,index) in areaCharts"
              :key="index"
              data-aos="fade"
              data-aos-duration="1500"
              data-aos-delay="300"
            >
              <div class="px-2 pt-2 dataContainer">
                <apexcharts
                  height="175"
                  type="area"
                  :options="areaChart.options"
                  :series="areaChart.series"
                  class
                ></apexcharts>
              </div>
            </b-col>
            <b-col
              xls="4"
              lgs="6"
              mds="6"
              sms="6"
              class="p-0 mb-xss-4 mb-xxls-0 mb-sms-0 mb-lgs-3 mb-xls-0 mb-mds-4 mb-sms-4 mt-xls-0 mt-lgs-3"
              data-aos="fade"
              data-aos-duration="1500"
              data-aos-delay="300"
            >
              <div
                class="text-center py-5 mr-xls-3 ml-xls-0 mr-lgs-0 ml-lgs-3 ml-mds-2 boxHeight dataContainer"
              >
                <p class="dataTitle PNR greyText mb-0">Average Time Played</p>
                <p class="averageTimePlayed m-0">{{averageTimePlayed}}h</p>
              </div>
            </b-col>
            <b-col
              xls="4"
              lgs="6"
              mds="6"
              sms="6"
              class="p-0 mb-xss-4 mb-xxls-0 mb-sms-0 mb-lgs-3 mb-xls-0 mb-mds-4 mb-sms-4 mt-xls-0 mt-lgs-3"
              data-aos="fade"
              data-aos-duration="1500"
              data-aos-delay="300"
            >
              <div
                class="text-center py-5 mx-xls-2 ml-lgs-0 mr-lgs-3 mr-mds-2 boxHeight dataContainer"
              >
                <p class="dataTitle PNR greyText mb-0">Unique new players</p>
                <p class="uniqueNewPlayers m-0">{{uniqueNewPlayers}}</p>
              </div>
            </b-col>
            <b-col
              xls="4"
              lgs="6"
              mds="6"
              sms="6"
              class="p-0 mb-xss-4 mb-xxls-0 mb-lgs-3 mb-xls-0 mb-mds-0 mb-sms-4 mt-xls-0 mt-lgs-3"
              data-aos="fade"
              data-aos-duration="1500"
              data-aos-delay="300"
            >
              <div
                class="text-center ml-xls-3 ml-lgs-3 mr-xls-0 mr-lgs-0 ml-mds-2 px-2 pt-2 barChartBox dataContainer"
              >
                <p class="barChartTitle mb-0">Unique vs. recurring players</p>
                <apexcharts height="175" type="bar" :options="barOptions" :series="barSeries" class></apexcharts>
              </div>
            </b-col>
          </b-row>
        </b-col>
        <b-col
          xxls="3"
          xls="4"
          lgs="12"
          mds="12"
          class="p-0 mt-xxls-0 mt-xls-4 mt-lgs-4"
          data-aos="fade"
          data-aos-duration="1500"
          data-aos-delay="300"
        >
          <div
            class="dataContainer mr-xls-3 mr-xxls-0 ml-xxls-4 ml-xls-0 ml-lgs-0"
            style="height:100%"
          >
            <p class="PNB mb-0 blackText px-3 py-2 playerLocation">Player Locations</p>
            <div id="world-map" style="height:170px;" class="px-3"></div>
            <b-row class="mt-4 px-4">
              <b-col
                v-for="(playerLocation,index) in playersLocation"
                :key="index"
                xls="6"
                lgs="6"
                mds="6"
                sms="6"
                class="mb-2 progressCol"
              >
                <div class>
                  <p class="mb-1 PNB blackText" style="font-size:0.666rem;">
                    <span class="text-capitalize">{{playerLocation.name}}</span>
                    <span class="float-right">{{playerLocation.value}}%</span>
                  </p>
                  <b-progress height="4px" :value="playerLocation.value" class="mb-2 progressBar"></b-progress>
                </div>
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
      <b-row class>
        <b-col
          xls="6"
          lgs="12"
          mds="12"
          class="p-0"
          data-aos="fade"
          data-aos-duration="1500"
          data-aos-delay="300"
        >
          <div class="mr-xls-3 mr-lgs-0">
            <p class="PNB mb-0 blackText py-4 topHeading">Top 10 Players</p>
            <div class="dataContainer p-3">
              <table class>
                <thead class="bg-light">
                  <tr>
                    <th class="PNB blackText py-2 tableData">Position</th>
                    <th class="PNB blackText py-2 tableData">Player Name</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(playerName,index) in playerNames" :key="index">
                    <td class="PNR greyText py-2 tableData">{{index + 1}}.</td>
                    <td class="PNR greyText py-2 tableData">{{playerName}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </b-col>
        <b-col
          xls="6"
          lgs="12"
          class="p-0"
          data-aos="fade"
          data-aos-duration="1500"
          data-aos-delay="300"
        >
          <div class="ml-xls-3 ml-lgs-0 mb-4 mb-sms-0">
            <p class="PNB mb-0 blackText py-4 topHeading">Top 10 Countries</p>
            <div class="dataContainer p-3">
              <table>
                <thead class="bg-light">
                  <tr>
                    <th class="PNB blackText py-2 tableData">Position</th>
                    <th class="PNB blackText py-2 tableData">Country</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(countryName,index) in countriesName" :key="index">
                    <td class="PNR greyText py-2 tableData">{{index + 1}}.</td>
                    <td class="PNR greyText py-2 tableData">{{countryName}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
window.jQuery = require("jquery");
var $ = window.jQuery;
require("jvectormap");
require("./../js/lib/jquery-jvectormap-continents-mill.js");
import greenMarker from "./../assets/images/greenMarker.png";
import redMarker from "./../assets/images/redMarker.png";
import purpleMarker from "./../assets/images/purpleMarker.png";
import blueMarker from "./../assets/images/blueMarker.png";
import pinkMarker from "./../assets/images/pinkMarker.png";
import voiletMarker from "./../assets/images/voiletMarker.png";
import yellowMarker from "./../assets/images/yellowMarker.png";
import cyanMarker from "./../assets/images/cyanMarker.png";

import VueApexCharts from "vue-apexcharts";
export default {
  name: "analytics",
  components: {
    apexcharts: VueApexCharts
  },
  data() {
    return {
      averageTimePlayed: 23,
      uniqueNewPlayers: 20.0,
      playerNames: [
        "Creeper_Gamer920",
        "MC_4_Life",
        "Creeper_Gamer920",
        "MC_4_Life"
      ],
      countriesName: ["USA", "Mexico", "Canada", "Germany"],
      areaCharts: [
        {
          series: [
            {
              data: [2, 3.5, 1.6, 1.8, 2, 1.4, 3.5]
            }
          ],
          options: {
            title: {
              text: "Live PPS",
              align: "left",
              margin: 10,
              offsetX: 0,
              offsetY: 0,
              floating: false,
              style: {
                fontSize: "16px",
                fontFamily: "Proxima Nova Bold",
                color: "#ff0480"
              }
            },
            colors: ["#ff0480"],
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
              type: "category",
              categories: [
                "0:55",
                "0:56",
                "0:57",
                "0:58",
                "0:59",
                "1:01",
                "1:02",
                "1:03",
                "1:04"
              ],
              labels: {
                style: {
                  fontSize: ".583rem",
                  colors: "#a7aab3"
                }
              }
            },
            yaxis: {
              min: 1.0,
              max: 3.5,
              logarithmic: true,
              tickAmount: 2,
              labels: {
                style: {
                  fontSize: ".583rem",
                  colors: "#a7aab3"
                },
                formatter: value => {
                  return value.toFixed(1) + " mbps";
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
              width: 2,
              curve: "straight"
            },
            fill: {
              type: "gradient",
              gradient: {
                enabled: true,
                opacityFrom: 0.5,
                opacityTo: 0.5
              }
            },
            responsive: [
              {
                breakpoint: 1800,
                options: {}
              }
            ]
          }
        },
        {
          series: [
            {
              data: [1.5, 2.5, 1.8, 3, 2.7, 2, 3.4]
            }
          ],
          options: {
            title: {
              text: "Live BPS",
              align: "left",
              margin: 10,
              offsetX: 0,
              offsetY: 0,
              floating: false,
              style: {
                fontSize: "16px",
                fontFamily: "Proxima Nova Bold",
                color: "#27b6fa"
              }
            },
            colors: ["#27b6fa"],
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
                "0:55",
                "0:56",
                "0:57",
                "0:58",
                "0:59",
                "1:01",
                "1:02",
                "1:03",
                "1:04"
              ],
              labels: {
                style: {
                  fontSize: ".583rem",
                  colors: "#a7aab3"
                }
              }
            },
            yaxis: {
              min: 1.0,
              max: 3.5,
              logarithmic: true,
              tickAmount: 2,
              labels: {
                style: {
                  fontSize: ".583rem",
                  colors: "#a7aab3"
                },
                formatter: value => {
                  return value.toFixed(1) + " mbps";
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
              width: 2,
              curve: "straight"
            },
            fill: {
              type: "gradient",
              gradient: {
                enabled: true,
                opacityFrom: 0.5,
                opacityTo: 0.5
              }
            },
            responsive: [
              {
                breakpoint: 1800,
                options: {}
              }
            ]
          }
        },
        {
          series: [
            {
              data: [2, 3, 2.6, 1.8, 2.7, 3.4, 1.5]
            }
          ],
          options: {
            title: {
              text: "Active Connections",
              align: "left",
              margin: 10,
              offsetX: 0,
              offsetY: 0,
              floating: false,
              style: {
                fontSize: "16px",
                fontFamily: "Proxima Nova Bold",
                color: "#622fe6"
              }
            },
            colors: ["#622fe6"],
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
                "0:55",
                "0:56",
                "0:57",
                "0:58",
                "0:59",
                "1:01",
                "1:02",
                "1:03",
                "1:04"
              ],
              labels: {
                style: {
                  fontSize: ".583rem",
                  colors: "#a7aab3"
                }
              }
            },
            yaxis: {
              min: 1.0,
              max: 3.5,
              logarithmic: true,
              tickAmount: 2,
              labels: {
                style: {
                  fontSize: ".583rem",
                  colors: "#a7aab3"
                },
                formatter: value => {
                  return value.toFixed(1) + " mbps";
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
              width: 2,
              curve: "straight"
            },
            fill: {
              type: "gradient",
              gradient: {
                enabled: true,
                opacityFrom: 0.5,
                opacityTo: 0.5
              }
            },
            responsive: [
              {
                breakpoint: 1800,
                options: {}
              }
            ]
          }
        }
      ],
      barSeries: [
        {
          name: "Unique",
          data: [22, 29, 35, 19, 25, 38]
        },
        {
          name: "Recurring",
          data: [38, 50, 19, 36, 50, 19]
        }
      ],
      barOptions: {
        colors: ["#622fe6", "#27b6fa"],
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
            "Week 1",
            "Week 2",
            "Week 3",
            "Week 4",
            "Week 5",
            "Week 6"
          ],
          labels: {
            style: {
              fontSize: ".583rem",
              colors: "#a7aab3"
            }
          }
        },
        yaxis: {
          axisBorder: {
            show: false
          },
          min: 1.0,
          max: 50.0,
          logarithmic: true,
          tickAmount: 2,
          labels: {
            style: {
              fontSize: ".583rem",
              colors: "#a7aab3"
            },
            formatter: value => {
              return value.toFixed(3);
            }
          }
        },
        dataLabels: {
          enabled: false
        },
        legend: {
          show: true,
          position: "top",
          horizontalAlign: "right",
          fontSize: "10px",
          fontFamily: "Proxima Nova Bold",
          labels: {
            useSeriesColors: true
          },
          markers: {
            width: 10,
            height: 10
          }
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"]
        },
        fill: {
          type: "solid"
        },
        responsive: [
          {
            breakpoint: 1800,
            options: {}
          }
        ]
      },
      playersLocation: [
        {
          name: "northern Europe",
          value: 75
        },
        {
          name: "eastern Europe",
          value: 56
        },
        {
          name: "western Europe",
          value: 42
        },
        {
          name: "asia",
          value: 35
        },
        {
          name: "australia",
          value: 25
        },
        {
          name: "south America",
          value: 25
        },
        {
          name: "north America",
          value: 23
        },
        {
          name: "africa",
          value: 45
        }
      ],
      continents: [
        {
          name: "Asia",
          coords: [35.06737, 116.034738],
          status: "asia"
        },
        {
          name: "Africa",
          coords: [3.817963, 30.08030245],
          status: "africa"
        },
        {
          name: "Australia",
          coords: [-22.378094, 140.108203],
          status: "australia"
        },

        {
          name: "Eastern Europe",
          coords: [51.824713, 38.086025],
          status: "easternEurope"
        },
        {
          name: "Western Europe",
          coords: [46.092372, 2.945867],
          status: "westernEurope"
        },
        {
          name: "Northern Europe",
          coords: [62.077448, 12.217676],
          status: "northernEurope"
        },
        {
          name: "North America",
          coords: [55.508221, -113.319935],
          status: "northAmerica"
        },
        {
          name: "South America",
          coords: [-15.948465, -53.199599],
          status: "southAmerica"
        }
      ]
    };
  },
  mounted() {
    this.fixedDecimal();
    this.worldMap();
  },
  methods: {
    fixedDecimal() {
      this.uniqueNewPlayers = this.uniqueNewPlayers.toFixed(3);
    },
    worldMap() {
      $("#world-map").vectorMap({
        map: "continents_mill",
        normalizeFunction: "polynomial",
        markers: this.continents.map(function(h) {
          return { name: h.name, latLng: h.coords };
        }),
        markerStyle: {
          initial: {
            stroke: "none"
          }
        },
        zoomButtons: false,
        series: {
          markers: [
            {
              attribute: "image",
              scale: {
                asia: greenMarker,
                australia: redMarker,
                africa: purpleMarker,
                easternEurope: blueMarker,
                westernEurope: pinkMarker,
                northernEurope: voiletMarker,
                southAmerica: yellowMarker,
                northAmerica: cyanMarker
              },
              values: this.continents.reduce(function(p, c, i) {
                p[i] = c.status;
                return p;
              }, {})
            }
          ]
        },
        backgroundColor: "#fff",
        regionStyle: {
          initial: {
            fill: "#d6dfe4",
            stroke: "none"
          }
        }
      });
    }
  }
};
</script>

<style scoped>
.boxHeight {
  height: 200px;
}
.chartMargin:nth-child(1) > div {
  margin-right: 0.9vw;
}
.chartMargin:nth-child(2) > div {
  margin-right: 0.45vw;
  margin-left: 0.45vw;
}
.chartMargin:nth-child(3) > div {
  margin-left: 0.9vw;
  margin-right: 0vw;
}
.dataContainer {
  background-color: #ffffff;
  border-radius: 0.583rem;
}
.dataTitle {
  font-size: 1.25rem;
}
.averageTimePlayed {
  color: #ff2993;
  font-size: 2.5rem;
  font-family: "Proxima Nova Bold";
}
.uniqueNewPlayers {
  color: #27b6fa;
  font-size: 2.5rem;
  font-family: "Proxima Nova Bold";
}
.barChartBox {
  position: relative;
}
.barChartTitle {
  position: absolute;
  font-size: 16px;
  font-family: "Proxima Nova Bold";
  color: #525f6b;
  left: 1vw;
}
.playerLocation {
  font-size: 1rem;
  border-bottom: 1px solid #eaeaea;
}
#world-map >>> .jvectormap-container svg {
  height: 180px !important;
}

#world-map >>> .jvectormap-container > svg > g > .jvectormap-marker {
  width: 12px !important;
  width: -moz-min-content;
}
.progressBar {
  background-color: #dcdcdc;
}
.progressCol > div > .progressBar >>> .progress-bar {
  border-radius: 10px;
}
.progressCol:nth-child(1) > div > .progressBar >>> .progress-bar {
  background-color: #622fe6;
}
.progressCol:nth-child(2) > div > .progressBar >>> .progress-bar {
  background-color: #27b6fa;
}
.progressCol:nth-child(3) > div > .progressBar >>> .progress-bar {
  background-color: #ff2792;
}
.progressCol:nth-child(4) > div > .progressBar >>> .progress-bar {
  background-color: #2fe69b;
}
.progressCol:nth-child(5) > div > .progressBar >>> .progress-bar {
  background-color: #e62f2f;
}
.progressCol:nth-child(6) > div > .progressBar >>> .progress-bar {
  background-color: #fac627;
}
.progressCol:nth-child(7) > div > .progressBar >>> .progress-bar {
  background-color: #27ffde;
}
.progressCol:nth-child(8) > div > .progressBar >>> .progress-bar {
  background-color: #ce2fe6;
}
.dataContainer
  >>> div
  > .apexcharts-canvas
  > svg
  > foreignObject
  > .apexcharts-legend {
  padding: 0 !important;
}

.topHeading {
  font-size: 1.125rem;
}
table {
  border: none;
  width: 100%;
}
tr {
  border: none;
  background-color: #ffffff;
}
tr .tableData {
  border: 1px solid #eaeaea;
  font-size: 0.75rem;
}
tr .tableData:nth-child(1) {
  width: 10%;
}
tr .tableData:nth-child(2) {
  width: 90%;
  padding: 0px 24px;
}
thead tr:first-child .tableData {
  border-top: none;
  color: #525f6b;
}
tbody tr:last-child .tableData {
  border-bottom: none;
}
tr .tableData:last-child {
  border-right: none;
}
tr .tableData:first-child {
  border-left: none;
  color: #622fe6;
}

@media (min-width: 1200px) and (max-width: 1600px) {
  .chartMargin:nth-child(1) > div {
    margin-right: 1.1vw;
  }
  .chartMargin:nth-child(2) > div {
    margin-right: 0.45vw;
    margin-left: 0.45vw;
  }
  .chartMargin:nth-child(3) > div {
    margin-left: 1.1vw;
    margin-right: 0vw;
  }
}
@media (min-width: 992px) and (max-width: 1200px) {
  .chartMargin:nth-child(1) > div {
    margin-right: 1.7vw;
  }
  .chartMargin:nth-child(2) > div {
    margin-right: 0vw;
    margin-left: 1.7vw;
  }
  .chartMargin:nth-child(3) > div {
    margin-left: 0vw;
    margin-right: 1.7vw;
  }
}
@media (min-width: 768px) and (max-width: 992px) {
  .chartMargin:nth-child(1) > div {
    margin-right: 1.1vw;
  }
  .chartMargin:nth-child(2) > div {
    margin-right: 0vw;
    margin-left: 1.1vw;
  }
  .chartMargin:nth-child(3) > div {
    margin-left: 0vw;
    margin-right: 1.1vw;
  }
}
@media screen and (max-width: 576px) {
  .chartMargin:nth-child(1) > div {
    margin-right: 0vw;
  }
  .chartMargin:nth-child(2) > div {
    margin-right: 0vw;
    margin-left: 0vw;
  }
  .chartMargin:nth-child(3) > div {
    margin-left: 0vw;
    margin-right: 0vw;
  }
}
</style>
<template>
  <div>
    <b-container fluid class>
      <b-row>
        <b-col xl="9" lg="6" class>
          <b-row>
            <b-col
              xl="4"
              lg="12"
              class="p-0 chartMargin"
              v-for="(areaChart,index) in areaCharts"
              :key="index"
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
          </b-row>
          <b-row class="mt-4">
            <b-col xl="4" lg="12" class="p-0">
              <div class="text-center py-5 mr-3 boxHeight dataContainer">
                <p class="dataTitle PNR greyText mb-0">Average Time Played</p>
                <p class="averageTimePlayed m-0">{{averageTimePlayed}}h</p>
              </div>
            </b-col>
            <b-col xl="4" lg="12" class="p-0">
              <div class="text-center py-5 mx-2 boxHeight dataContainer">
                <p class="dataTitle PNR greyText mb-0">Unique new players</p>
                <p class="uniqueNewPlayers m-0">{{uniqueNewPlayers}}</p>
              </div>
            </b-col>
            <b-col xl="4" lg="12" class="p-0">
              <div class="text-center ml-3 px-2 pt-2 barChartBox dataContainer">
                <p class="barChartTitle mb-0">Unique vs. recurring players</p>
                <apexcharts height="175" type="bar" :options="barOptions" :series="barSeries" class></apexcharts>
              </div>
            </b-col>
          </b-row>
        </b-col>
        <b-col xl="3" lg="6" class="p-0">
          <div class="dataContainer ml-4" style="height:100%">
            <p class="PNB mb-0 blackText p-3 playerLocation">Player Locations</p>
            <div id="world-map" style="height:180px;" class="px-3"></div>
            <b-row class="mt-4 px-4">
              <b-col
                v-for="(playerLocation,index) in playersLocation"
                :key="index"
                xl="6"
                lg="6"
                class="mb-2"
              >
                <div class="">
                  <p class="mb-1 PNB blackText" style="font-size:0.666rem;">
                    <span class="text-capitalize ">{{playerLocation.name}}</span>
                    <span class="float-right">{{playerLocation.value}}%</span>
                  </p>
                  <b-progress height=".2rem" :value="playerLocation.value"  :variant="playerLocation.variant" class="mb-2"></b-progress>
                </div>
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
      <b-row class>
        <b-col xl="6" lg="12" class="p-0">
          <div class="mr-3">
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
        <b-col xl="6" lg="12" class="p-0">
          <div class="ml-3">
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
          name: "asia",
          value: 35,
          variant:"success"
        },
        {
          name: "australia",
          value: 25
        },
        {
          name: "africa",
          value: 45
        },
        {
          name: "southernEurope",
          value: 56
        },
        {
          name: "northAmerica",
          value: 23
        },
        {
          name: "westernEurope",
          value: 42
        },
        {
          name: "southAmerica",
          value: 25
        },
        {
          name: "northernEurope",
          value: 75
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
        markerStyle: {
          initial: {
            fill: "#F8E23B",
            stroke: "none"
          }
        },
        zoomButtons: false,
        series: {},
        backgroundColor: "#fff",
        regionStyle: {
          initial: {
            fill: "#d6dfe4",
            stroke: "none"
          }
        },
        markers: [
          {
            latLng: [35.06737, 116.034738],
            name: "Asia",
            style: { r: 5, fill: "#2fe69b" }
          },
          {
            latLng: [3.817963, 30.08030245],
            name: "Africa",
            style: { r: 5, fill: "#ce2fe6" }
          },
          {
            latLng: [-22.378094, 140.108203],
            name: "Australia",
            style: { r: 5, fill: "#e62f2f" }
          },
          {
            latLng: [51.824713, 38.086025],
            name: "Eastern Europe",
            style: { r: 5, fill: "#27b6fa" }
          },
          {
            latLng: [46.092372, 2.945867],
            name: "Western Europe",
            style: { r: 5, fill: "#ff2792" }
          },
          {
            latLng: [62.077448, 12.217676],
            name: "Northern Europe",
            style: { r: 5, fill: "#622fe6" }
          },
          {
            latLng: [59.582248, -123.624918],
            name: "North America",
            style: { r: 5, fill: "#27ffde" }
          },
          {
            latLng: [-15.948465, -53.199599],
            name: "South America",
            style: { r: 5, fill: "#fac627" }
          }
        ]
      });
    }
  }
};
</script>

<style scoped>
.jvectormap-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  background-color: transparent;
}
#world-map >>> .jvectormap-container svg {
  height: 180px !important;
}
.apexcharts-legend {
  padding: 0 !important;
}
.boxHeight {
  height: 200px;
}
.chartMargin:nth-child(1) > div {
  margin-right: 0.8vw;
}
.chartMargin:nth-child(2) > div {
  margin-right: 0.4vw;
  margin-left: 0.4vw;
}
.chartMargin:nth-child(3) > div {
  margin-left: 0.8vw;
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
</style>
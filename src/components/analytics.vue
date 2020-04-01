<template>
  <div>
    <b-container fluid class>
      <b-row>
        <b-col xl="9" lg="6">
          <b-row class="mr-4">
            <b-col
              xl="4"
              lg="12"
              class="p-0 chartMargin"
              v-for="(areaChart,index) in areaCharts"
              :key="index"
            >
              <div class="px-2 pt-2 dataContainer">
                <apexcharts
                  height="180"
                  type="area"
                  :options="areaChart.options"
                  :series="areaChart.series"
                  class="mr-2"
                ></apexcharts>
              </div>
            </b-col>
          </b-row>
          <b-row class="mr-4 mt-4">
            <b-col xl="4" lg="12" class="p-0">
              <div class="text-center py-5 mr-3 dataContainer">
                <p class="dataTitle PNR greyText">Average Time Played</p>
                <p class="averageTimePlayed m-0">{{averageTimePlayed}}h</p>
              </div>
            </b-col>
            <b-col xl="4" lg="12" class="p-0">
              <div class="text-center py-5 mx-2 dataContainer">
                <p class="dataTitle PNR greyText">Unique new players</p>
                <p class="uniqueNewPlayers m-0">{{uniqueNewPlayers}}</p>
              </div>
            </b-col>
            <b-col xl="4" lg="12" class="p-0">
              <div class="text-center ml-3 px-2 pt-2 dataContainer">
                <apexcharts
                  height="180"
                  type="bar"
                  :options="barOptions"
                  :series="barSeries"
                  class="mr-2"
                ></apexcharts>
              </div>
            </b-col>
          </b-row>
        </b-col>
        <b-col xl="3" lg="6" class="p-0">
          <div class="dataContainer"></div>
        </b-col>
      </b-row>
      <b-row class="mr-4">
        <b-col xl="6" lg="12" class="p-0">
          <div class="mr-3">
            <p class="PNB mb-0 blackText py-4">Top 10 Players</p>
            <div class="dataContainer p-3">
              <table class="dataContainer">
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
          <div class="ml-2">
            <p class="PNB mb-0 blackText py-4">Top 10 Countries</p>
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
                fontSize: "15px",
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
                  fontSize: "10px",
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
                  fontSize: "10px",
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
                fontSize: "15px",
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
                  fontSize: "10px",
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
                  fontSize: "10px",
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
                fontSize: "15px",
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
                  fontSize: "10px",
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
                  fontSize: "10px",
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
        title: {
          text: "Unique vs. recurring players",
          align: "left",
          margin: 10,
          offsetX: 0,
          offsetY: 0,
          floating: false,
          style: {
            fontSize: "15px",
            fontFamily: "Proxima Nova Bold",
            color: "#525f6b"
          }
        },
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
              fontSize: "10px",
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
              fontSize: "10px",
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
      }
    };
  },
  mounted() {
    this.fixedDecimal();
  },
  methods: {
    fixedDecimal() {
      this.uniqueNewPlayers = this.uniqueNewPlayers.toFixed(3);
    }
  }
};
</script>

<style scoped>
.chartMargin:nth-child(1) > div {
  margin-right: 0.8vw;
}
.chartMargin:nth-child(2) > div {
  margin-right: 0.4vw;
  margin-left: 0.4vw;
}
.chartMargin:nth-child(3) > div {
  margin-left: 0.8vw;
}
.dataContainer {
  background-color: #ffffff;
  border-radius: 10px;
}
.dataTitle {
  font-size: 18px;
}
.averageTimePlayed {
  color: #ff2993;
  font-size: 40px;
  font-family: "Proxima Nova Bold";
}
.uniqueNewPlayers {
  color: #27b6fa;
  font-size: 40px;
  font-family: "Proxima Nova Bold";
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
  font-size: 13px;
}
tr .tableData:nth-child(1) {
  width: 40%;
}
tr .tableData:nth-child(2) {
  width: 40%;
  padding: 0px 12px;
}
tr .tableData:nth-child(3) {
  width: 10%;
  padding: 0px 12px;
}
tr .tableData:nth-child(4) {
  width: 5%;
}
thead tr:first-child .tableData {
  border-top: none;
}
tbody tr:last-child .tableData {
  border-bottom: none;
}
tr .tableData:last-child {
  border-right: none;
}
tr .tableData:first-child {
  border-left: none;
}
</style>
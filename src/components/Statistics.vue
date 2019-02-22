<template>
  <div class="view statistics">
    <div class="section">
      <div class="container">
        <div class="statistics-wrapper">
          <statistics-header></statistics-header>
          <div v-if="dateChartData.labels.length">
            <div class="chart-wrapper">
              <bar-chart
                :chartData="dateChartData"
                :options="dateChartOptions"
                :style="cptStyle"
              />
            </div>
            <div class="sub-chart-wrapper">
              <div class="doughnut-chart-wrap">
                <doughnut-chart
                  class="doughnut-chart"
                  :chartData="platformChartData"
                  :options="platformChartOptions"
                  :style='doughnutStyle'
                ></doughnut-chart>
              </div>
              <referrer-list :data="referrerData"></referrer-list>
            </div>
          </div>
          <no-data v-else></no-data>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import "chartjs-plugin-doughnutlabel"
export default {
  data() {
    return {
      platformChartOptions: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          doughnutlabel: {
            labels: [
              {
                text: "Platform",
                font: {
                  size: "20",
                  color: "#fff"
                }
              }
            ]
          }
        }
      },
      dateChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 700
        },
        scales: {
          yAxes: [
            {
              gridLines: {
                display: true,
                color: "#979797",
                offsetGridLines: true
              },
              scaleLabel: {
                display: true,
                labelString: "Count"
              },
              ticks: {
                stepSize: 1,
                beginAtZero: true
              },
              stacked: true
            }
          ],
          xAxes: [
            {
              gridLines: {
                display: true,
                color: "#979797",
                offsetGridLines: true
              },
              scaleLabel: {
                display: true,
                labelString: "Days"
              },
              stacked: true,
              maxBarThickness: 200
            }
          ]
        },
        legend: {
          display: false
        },
        tooltips: {
          mode: "label"
        },
        title: {
          display: true,
          text: "Click Count by Date",
          fontSize: 20,
          lineHeight: 2,
          position: "top"
        }
      }
    }
  },
  computed: {
    ...mapGetters(["chartData", "chartLabels", "platformLabels", "platformData", "referrerData"]),
    cptStyle() {
      return {
        height: "40vw",
        minHeight: "260px",
        maxHeight: "600px",
        position: "relative"
      }
    },
    doughnutStyle() {
      return {}
    },
    dateChartData() {
      return {
        labels: this.chartLabels,
        beginAtZero: true,
        datasets: [
          {
            backgroundColor: "rgba(57, 53, 119, 0.7)",
            data: this.chartData
          }
        ]
      }
    },
    platformChartData() {
      return {
        labels: this.platformLabels,
        datasets: [
          {
            data: this.platformData,
            backgroundColor: ["rgba(57, 53, 119, 0.8)", "rgba(185, 63, 63, 0.6)"],
            borderColor: "transparent"
          }
        ]
      }
    }
  },

  created() {
    const { url } = this.$route.params
    this.$store.dispatch("GET_URL_COUNT_BY_WEEK", { url, week: 1 })
    this.$store.dispatch("GET_URL_COUNT_BY_PLATFORM", { url })
    this.$store.dispatch("GET_URL_COUNT_BY_REFERRER", { url })
  }
}
</script>

<template>
  <div class="view">
    <div class="section statistics">
      <div class="container">
        <div class="statistics-wrapper">
          <statistics-header></statistics-header>
          <div v-if="dateChartData.labels.length">
            <div class="chart-wrapper">
              <bar-chart
                :chartData="dateChartData"
                :options="dateChartOptions"
                :style="{position:'relative', width: '85vw',height: '50vh'}"
              ></bar-chart>
            </div>
            <div class="sub-chart-wrapper">
              <referrer-list :data="referrerData"></referrer-list>
              <doughnut-chart
                class="doughnut-chart"
                :chartData="platformChartData"
                :options="platformChartOptions"
                :style="{position:'relative',display: 'inline-block', width:`${width}`, height:`${height}`}"
              ></doughnut-chart>
            </div>
          </div>
          <no-data v-else></no-data>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import "chartjs-plugin-doughnutlabel";
export default {
  data() {
    return {
      width: window.innerWidth <= 987 ? "80vw" : "30vw",
      height: window.innerWidth <= 987 ? "80vh" : "30vh"
    };
  },
  computed: {
    ...mapGetters(["chartData", "chartLabels", "platformLabels", "platformData", "referrerData"]),
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
      };
    },
    dateChartOptions() {
      return {
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
      };
    },
    platformChartData() {
      return {
        labels: this.platformLabels,
        datasets: [
          {
            data: this.platformData,
            backgroundColor: ["rgba(57, 53, 119, 0.8)", "rgba(57, 53, 119, 0.4)"],
            borderColor: "transparent"
          }
        ]
      };
    },
    platformChartOptions() {
      return {
        responsive: true,
        onResize: () => {
          if (window.innerWidth <= 987 && this.width !== "80vw" && this.height !== "80vh") {
            this.width = "80vw";
            this.height = "80vh";
          } else if (window.innerWidth > 987 && this.width !== "30vw" && this.height !== "30vh") {
            this.width = "30vw";
            this.height = "30vh";
          }
        },
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
      };
    }
  },

  created() {
    const { url } = this.$route.params;
    this.$store.dispatch("GET_URL_COUNT_BY_WEEK", { url, week: 1 });
    this.$store.dispatch("GET_URL_COUNT_BY_PLATFORM", { url });
    this.$store.dispatch("GET_URL_COUNT_BY_REFERRER", { url });
  }
};
</script>

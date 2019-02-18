<template>
  <div class="view">
    <div class="section statistics">
      <div class="container">
        <div class="statistics-wrapper">
          <statistics-header></statistics-header>
          <div class="chart-wrapper">
            <chart :chartData="chartData" :options="options"></chart>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    chartData() {
      return {
        labels: this.$store.getters.chartLabels,
        datasets: [
          {
            backgroundColor: "rgba(57, 53, 119, 0.7)",
            data: this.$store.getters.chartData
          }
        ]
      };
    },
    options() {
      return {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              gridLines: {
                display: true,
                color: "#979797"
              },
              scaleLabel: {
                display: true,
                labelString: "Count"
              }
            }
          ],
          xAxes: [
            {
              gridLines: {
                display: true,
                color: "#979797"
              },
              scaleLabel: {
                display: true,
                labelString: "Days"
              }
            }
          ]
        },
        legend: {
          display: false
        },
        layout: {
          padding: {
            left: 60,
            right: 120,
            top: 0,
            bottom: 0
          }
        },
        tooltips: {
          mode: "label"
        }
      };
    }
  },
  created() {
    const { url } = this.$route.params;
    this.$store.dispatch("GET_URL_COUNT_BY_WEEK", { url, week: 1 });
  }
};
</script>

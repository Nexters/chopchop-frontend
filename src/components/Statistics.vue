<template>
  <div class="view">
    <div class="section statistics">
      <div class="container">
        <div class="statistics-wrapper">
          <statistics-header></statistics-header>
          <div class="chart-wrapper">
            <chart
              :chartData="chartData"
              :options="options"
              :style="{position:'relative', width: '85vw',height: '50vh'}"
            ></chart>
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
        beginAtZero: true,
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
              stacked: true
            }
          ]
        },
        legend: {
          display: false
        },
        layout: {
          padding: {
            left: "60px",
            right: "120px",
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

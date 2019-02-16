
<script>
import { Line } from "vue-chartjs";
export default {
  extends: Line,
  mounted() {
    this.renderChart(
      {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            backgroundColor: "rgba(57, 53, 119, 0.7)",
            data: [10, 10, 5, 2, 4, 10]
          }
        ]
      },
      {
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
      }
    );
  }
};
</script>

<style lang="scss">
</style>


<script>
import { Line } from "vue-chartjs";
export default {
  extends: Line,
  computed: {
    urlCountByWeek() {
      return this.$store.getters.urlCountByWeek;
    }
  },
  created() {
    const { url } = this.$route.params;
    this.$store.dispatch("GET_URL_COUNT_BY_WEEK", { url, week: 1 });
  },
  mounted() {
    const { labels, data } = this.urlCountByWeek;
    this.renderChart(
      {
        labels,
        datasets: [
          {
            backgroundColor: "rgba(57, 53, 119, 0.7)",
            data
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

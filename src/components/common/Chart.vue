
<script>
import { Line, mixins } from "vue-chartjs"
export default {
  extends: Line,
  mixins: [mixins.reactiveProp],
  computed: {
    urlCountByWeek() {
      return this.$store.getters.urlCountByWeek
    },
    // 기존에 두개로 나눠두신 created를 하나로 합쳤어여
    // renderChart 첫번째 인자
    chartData() {
      return {
        labels: this.$store.getters.chartLabels,
        datasets: [
          {
            backgroundColor: "rgba(57, 53, 119, 0.7)",
            data: this.$store.getters.chartData
          }
        ]
      }
    }
  },
  created() {
    const { url } = this.$route.params
    this.$store.dispatch("GET_URL_COUNT_BY_WEEK", { url, week: 1 }).then(data => {
      console.log("disaptched in component created cycle")
      console.log(data)
    })
  },
  mounted() {
    // const { labels, data } = this.urlCountByWeek;
    console.log("mounted component", this.chartLabels, this.chartData)
    this.renderChart(this.chartData, this.options)
  },
  data() {
    return {
      // renderChart 두 번째 인자
      options: {
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
    }
  }
}

</script>

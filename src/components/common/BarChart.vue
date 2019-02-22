<script>
import { Bar, mixins } from "vue-chartjs"
export default {
  extends: Bar,
  // mixins: [mixins.reactiveProp],
  props: {
    chartData: {
      type: Object,
      required: false
    },
    options: {
      type: Object,
      required: false
    }
  },
  mounted() {
    console.log(this.options)
    this.renderChart(this.chartData, this.options)
    this.$data._chart.update()
  }
}
</script>

<script>
import { Bar } from "vue-chartjs";
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
    this.renderChart(this.chartData, this.options);
    this.$data._chart.update();
  }
};
</script>


<script>
import { Doughnut, mixins } from "vue-chartjs";
export default {
  extends: Doughnut,
  mixins: [mixins.reactiveProp],
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
  }
};
</script>
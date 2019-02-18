
<script>
import { Line, mixins } from "vue-chartjs";
export default {
  extends: Line,
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


<script>
import { PolarArea } from "vue-chartjs";
export default {
  extends: PolarArea,
  props: ["chartdata", "options"],
  mounted() {
    this.renderChart(this.chartdata, this.option);
  }
};
</script>

<style lang="scss">
</style>

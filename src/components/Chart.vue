
<script>
import { Bar } from "vue-chartjs";
export default {
  extends: Bar,
  props: ["chartdata", "options"],
  mounted() {
    this.renderChart(this.chartdata, this.option);
  }
};
</script>

<style lang="scss">
</style>

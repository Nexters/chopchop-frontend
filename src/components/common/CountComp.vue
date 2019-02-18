<template>
  <div ref="anime" class="count-comp">
    <div class="container">
      <div class="count-title">Counting</div>
      <span ref="count">{{count}}</span>
    </div>
  </div>
</template>

<script>
import CountUp from "countup.js";

export default {
  created() {
    this.$store.dispatch("fetchCount");
  },
  mounted() {
    const counterOptions = {
      useEasing: true,
      useGrouping: true,
      separator: ",",
      decimal: "."
    };

    this.counter = new CountUp(this.$refs["count"], 0, this.$store.getters.count, 0, 1.5, counterOptions);

    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          entry.target.className = "count-comp move";
          this.counter.reset();
          this.counter.update(this.$store.getters.count);
          return;
        }
        entry.target.className = "count-comp";
      });
    });

    this.observer.observe(this.$refs["anime"]);
  },
  watch: {
    count(next) {
      this.counter.update(next);
    }
  },
  beforeDestroy() {
    this.observer.unobserve();
  },
  computed: {
    count() {
      return this.$store.getters.count;
    }
  }
};
</script>


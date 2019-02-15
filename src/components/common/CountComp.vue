<template>
  <div ref="anime" class="count-comp">
    <div class="count-title">Counting</div>
    <span>{{count}}</span>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("fetchCount");

    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          entry.target.className = "count-comp move";
          return;
        }
        entry.target.className = "count-comp";
      });
    });
  },
  mounted() {
    this.observer.observe(this.$refs["anime"]);
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

<style>
</style>

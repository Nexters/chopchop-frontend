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
  },
  mounted() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          entry.target.classList.add("move");
          return;
        }
        entry.target.classList.remove("move");
      });
    });

    observer.observe(this.$refs["anime"]);
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

<template>
  <div class="count-comp">
    <div class="count-title">Counting</div>
    <span>{{count}}</span>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("fetchCount");
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

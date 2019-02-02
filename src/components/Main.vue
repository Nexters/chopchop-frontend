<template>
  <div class="view">
    <side-bar></side-bar>
    <div class="content-area">{{ data }}{{ url }}</div>
  </div>
</template>

<script>
export default {
  data() {
    console.log(this.$store);
    return {
      url: this.$store.getters.getUrl,
      data: "adlsfkjasd"
    };
  }
};
</script>

<style>
</style>

<template>
  <div id="app">
    <side-bar></side-bar>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  created() {},
  computed: {
    getValue() {
      return this.$store.getters.getValue;
    }
  }
};
</script>

<style lang='scss'>
@import "../src/style/global.scss";
</style>

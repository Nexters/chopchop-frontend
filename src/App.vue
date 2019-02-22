<template>
  <div id="app">
    <right-logo/>
    <router-view/>
  </div>
</template>

<script>
import "./utils/polyfill";

export default {
  name: "App"
};
</script>

<style lang='scss'>
@import "../src/style/global.scss";
</style>

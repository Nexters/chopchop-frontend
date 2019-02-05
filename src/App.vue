<template>
  <div id="app">
    <right-logo/>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
}
</script>

<style lang='scss'>
@import "../src/style/global.scss";
</style>

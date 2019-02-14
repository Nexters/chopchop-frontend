<template>
  <div class="view">
    <div class="section">
      <main-background/>
    </div>
    <div class="section">
      <div class="container">
        <input-bar/>
        <history-comp/>
        <count-comp/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: this.$store.getters.getUrl,
      data: "adlsfkjasd"
    };
  }
};
</script>

<style>
</style>

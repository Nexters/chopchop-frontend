<template>
  <div class="side-bar" @click="test"></div>
</template>

<script>
export default {
  methods: {
    test() {
      this.$store.dispatch("valueUp", 3).then(r => {
        console.log(r);
      });
    }
  }
};
</script>

<style>
</style>

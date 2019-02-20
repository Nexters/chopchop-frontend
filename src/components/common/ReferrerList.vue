<template>
  <div>
    <table>
      <thead></thead>
      <tbody></tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["referrerData", "referrerLabels"])
  }
};
</script>


<template>
  <div class="list-wrapper">
    <p class="referrer-title">Top 5 Referrer List</p>
    <table class="chart">
      <thead>
        <tr>
          <th class="th-1">Page</th>
          <th>Views</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in data" :key="i">
          <td>{{item.referer}}</td>
          <td>{{item.count}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  props: {
    data: {
      type: Array,
      required: false
    }
  }
};
</script>
<style>
</style>
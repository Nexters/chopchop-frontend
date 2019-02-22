<template>
  <div class="list-wrapper">
    <p class="referrer-title">Top 5 Referrer List</p>
    <table class="chart">
      <thead>
        <tr>
          <th class="th-1">Referrer</th>
          <th>Views</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in data" :key="i">
          <td>{{item.referer}}</td>
          <td>{{item.count}}</td>
        </tr>
        <tr v-for="(i) in (5 - data.length)" :key="`no_${i}`">
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
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
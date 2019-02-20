<template>
  <table class='chart'>
    <thead>
      <tr>
        <th>Page</th>
        <th>Views</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="i in 30" :key='i'>
        <td>/?fbclid=kwARo-FB&Hello=World</td>
        <td>3,222</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
  export default {}
</script>
<style>
</style>
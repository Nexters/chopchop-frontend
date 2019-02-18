<template>
  <div class="view error">
    <div class="section">
      <main-background/>
    </div>
    <div class="full">
      <div class="err-num">
        <img src="../assets/404.svg" alt>
      </div>
      <div class="go-to" @click="$router.push('/')">
        <img src="../assets/goTo.svg" alt>
      </div>
    </div>
  </div>
</template>


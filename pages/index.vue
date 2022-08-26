<template>
  <div>
    <Header />
    <Welcome />
    <About />
    <Portfolio />
    <Contact />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'Homepage'
  })
</script>

<style>
  html {
    width: 100vw;
    overflow-x: hidden;
  }

  body {
    background: linear-gradient(#151416, #0D0D0E);
    background-size: cover;
    background-repeat: no-repeat;
    font-family: 'Poppins', sans-serif;
    color: white;
  }
</style>

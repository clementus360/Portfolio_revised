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
  import '@/assets/css/tailwind.css'

  export default Vue.extend({
    name: 'Homepage'
  })
</script>

<style>
  html {
    width: 100vw;
    overflow-x: hidden;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 8px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #d2d2d2;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgb(72, 72, 72);
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: rgb(62, 62, 62);
  }

  body {
    background: linear-gradient(hsl(270, 5%, 8%), #0D0D0E);
    background-size: cover;
    overflow: hidden;
    background-repeat: no-repeat;
    font-family: 'Poppins', sans-serif;
    color: white;
  }
</style>

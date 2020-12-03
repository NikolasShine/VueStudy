<template>
  <div id="app">
    <!-- <img src="../assets/images/logo.png" /> -->
    <router-view />
    <!-- <router-link to="{name: HelloWorld}">HelloWorld</router-link> -->
    <!-- TODO:在这里可以写个TabLayout -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>

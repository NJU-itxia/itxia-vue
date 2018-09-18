<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view/>
  </div>
</template>

<script>
  import NavBar from "./pages/nav/NavBar";

  export default {
    name: 'App',
    components: {NavBar}
  }
</script>

<style>
</style>

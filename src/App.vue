<template>
  <div id="app">
    <!--<NavBar></NavBar>-->
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
  ::selection {
    color: #ffb1ae;
  }

  #app {
    display: flex;
    min-height: 100vh;
    background-color: rgba(212, 211, 226, 0.28);
  }

  .container {
    text-align: center;
  }
</style>

<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view />
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
    color: #AEA256;
  }

  #app {
    /*display: flex;*/
    min-height: 100vh;
    background-color: rgba(212, 211, 226, 0.28);
  }

  .container {
    text-align: center;
  }

  a {
    color: #70AE95;
  }

  a:hover {
    color: #70AE95;
  }
</style>

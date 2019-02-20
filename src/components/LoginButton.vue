<template>
  <!--<div>-->
    <button class="btn btn-primary btn-block" @click="func" :disabled="disabled">{{ text }}</button>
  <!--</div>-->
</template>

<script>
  export default {
    name: "LoginButton",
    props: ['text', 'func', 'disabled']
  }
</script>

<style scoped>
  button:active {
    background-color: #70AE95 !important;
    box-shadow: 0 0 2px #70AE95 !important;
    border-color: transparent !important;
  }

  button:focus {
    box-shadow: 0 0 1px #57a94e;
  }

  button {
    background-color: #70AE95;
    border-color: transparent;
    color: white;
  }

  button:hover {
    background-color: #70AE95;
    border-color: transparent;
  }

  button:disabled {
    background-color: rgba(112, 174, 149, 0.70);
    border-color: transparent;
  }

</style>

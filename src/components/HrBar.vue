<template>
  <hr/>
</template>

<script>
  export default {
    name: "HrBar"
  }
</script>

<style scoped>
  hr {
    margin-bottom: 30px;
    height: 2px;
    border: none;
    background: #ddd repeating-linear-gradient(-45deg, #fff, #fff 4px, transparent 4px, transparent 8px);
  }
</style>

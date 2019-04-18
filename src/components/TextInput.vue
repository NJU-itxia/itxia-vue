<template>
    <input class="form-control"
           :type="pass"
           :placeholder=placeholder
           :value="realText"
           @input="$emit('update-text', $event.target.value)"
           @keyup.enter=up
           type="text" />
</template>

<script>

  export default {
    name: "TextInput",
    data() {
      return {
        realText: this.text
      }
    },
    watch: {
      text(val) {
        this.realText = val
      },
      realText(val) {
        this.$emit("update-text", val)
      }
    },
    props: {
      placeholder: {
        default: null
      },
      text: {
        default: null
      },
      up: {
        default: null
      },
      pass: {
        default: null
      }
    },
  }
</script>

<style scoped>
  input {
    border-top-width: 0;
    border-left-width: 0;
    border-right-width: 0;
    margin-left: 0;
    margin-right: 0;
  }

  input.form-control:focus {
    box-shadow: none;
  }

  input.form-control.bottom:focus {
    box-shadow: 0 0 1px #70AE95;
  }

  input.form-control:focus {
    box-shadow: none;
    border-color: #70AE95;
  }

</style>

<template>
<div class="http">
  {{ resData }}
</div>
</template>

<script>
import http from '../http';
import { POST } from '../utils/value-consts';

export default {
  name: 'Http',
  data () {
    return {
      resData: 'good',
    }
  },
  created() {
    this.apiTest();
  },
  methods: {
    apiTest: function() {
      http.api({
        url: '/customer/login',
        method: POST,
        params: {
          phone: '15996230789'
        },
        successCallback: (data) => {
          this.resData = data;
        },
        errorCallback: (error) => {

        }
      })
    },
  }
}
</script>

<style>
</style>

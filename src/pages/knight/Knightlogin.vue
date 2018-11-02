<template>
  <div class="container">
    <div class="card text-center my-card">
      <div class="card-body mt-4">
        <img class="card-img-top logo" src="../../assets/logo.jpg" alt="Card image cap"/>
        <div>
          <div class="input-group mt-4 my-form">
            <input type="text" class="form-control my-input" placeholder="账号" aria-label="Username">
          </div>
          <div class="input-group mb-3 my-form">
            <input type="text" class="form-control my-input" placeholder="密码" aria-label="Username">
          </div>
          <div class="mb-3">
            <button class="btn btn-info my-button" @click="login">登录</button>
          </div>
        </div>
      </div>
    </div>

    <div class="my-footer">
      <a class="text-sm-center" href="https://nju-itxia.github.io/techblog/2017/07/03/help-system-release-notes/#more"
         target="_blank">Version v3.1(20180917)</a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Knightlogin",
        methods:{
          login(){
            this.$store.commit('LOGIN');
          }
        }
    }
</script>

<style scoped>
  .my-card {
    margin-top: 50px;
  }

  .logo {
    width: 200px;
  }

  .my-form {
    display: flex;
    justify-content: center;
  }

  .my-button {
    width: 300px;
  }

  .my-input {
    max-width: 300px;
    border-top-right-radius: 0.25em !important;
    border-bottom-right-radius: 0.25em !important;
  }

  .my-footer {
    margin-top: 30px;
    display: flex;
    justify-content: center;
  }

 </style>

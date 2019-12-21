<template>
  <div id="wrapper">
    <div class="container background">
      <div class="container my-card">
        <div class="text-left">
          <h1>登录<span class="subtitle">IT侠后台管理</span></h1>
        </div>
        <hr/>
        <div class="alert alert-info" v-show="wrongAlert">
          <button type="button" class="close" aria-hidden="true" @click="dismissAlert">×</button>
          <strong>用户名或密码错误，请重试</strong>
        </div>
        <div>
          <img class="logo" src="../../assets/logo.jpg" alt="Card image cap"/>
        </div>
        <div id="login-input">
          <div class="row">
            <div class="col-3 text">
              <span class="glyphicon"></span>
              <p>账号</p>
            </div>
            <div class="col-9 my-input">
              <text-input :text="account" @update-text="updateAccount"></text-input>
            </div>
          </div>
          <div class="row">
            <div class="col-3 text">
              <p>密码</p>
            </div>
            <div class="col-9 my-input">
              <text-input pass='password' type="password" :text="password" @update-text="updatePassword"
                          :up="login"></text-input>
            </div>
          </div>
          <div class="login-button">
            <login-button :text="`登录`" :func="login" class="login-button"></login-button>
          </div>
        </div>
        <hr/>
        <div class="container footer">
          <p>Power by&nbsp;
            <a href="https://github.com/NJU-itxia" target="_blank">IT侠Web组</a>
            &nbsp;
            <a href="https://itxia.club/" target="_blank">南京大学IT侠公益协会</a>.
          </p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import TextInput from "../../components/TextInput";
  import LoginButton from "../../components/LoginButton";
  import {GET_URL} from "../../utils/value-consts";

  export default {
    name: "AdminLogin",
    data() {
      return {
        account: "",
        password: "",
        wrongAlert: false,
      }
    },
    methods: {
      login() {
        let params = {
          id: this.account,
          password: this.password
        };
        this.$axios.post(
          GET_URL('/admin/login'),
          JSON.stringify(params)
        ).then((res) => {
          if (res.data.success) {
            this.$router.push('/itxia/index')
          } else {
            this.wrongAlert = true
          }
        });
      },
      dismissAlert() {
        this.wrongAlert = false
      },
      updateAccount(val) {
        this.account = val;
      },
      updatePassword(val) {
        this.password = val;
      }
    },
    components: {
      LoginButton,
      TextInput
    }
  }
</script>

<style scoped>

  .alert {
    position: fixed;
    top: 20px;
    right: 10px;
  }

  .login-button {
    margin-top: 10px;
    margin-right: auto;
    margin-left: auto;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }

  .text {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    color: #5e5e5e;
  }

  .text p {
    margin: 0;
  }

  .my-input {
    padding-left: 0;
  }

  button:focus {
    box-shadow: 0 0 2px #70AE95 !important;
  }

  input {
    border-top-width: 0;
    border-left-width: 0;
    border-right-width: 0;
  }

  input.form-control:focus {
    box-shadow: none;
  }

  input.form-control.bottom:focus {
    box-shadow: 0 0 2px #70AE95 !important;
  }

  .background {
    padding: 10px 10px 10px 10px;
  }

  #login-input {
    text-align: left;
    margin-top: 30px;
    padding-bottom: 60px;
    display: inline-block;
    max-width: 1000px;
  }

  .text-left {
    margin: 8px;
    text-align: left;
  }

  .text-right {
    padding-top: 3px;
    text-align: right;
  }

  .logo {
    margin-top: 30px;
    display: inline-block;
    transition: transform 2s ease-in 3s;
  }

  .logo:hover {
    transform: rotate(360deg) scale(0.77777, 0.77777);
  }

  h1 {
    font-size: 2em;
    margin: 12px 0 0 10px;
    padding-bottom: 3px;
    color: #5e5e5e;
    font-family: 'Lato', "PingFang SC", "Microsoft YaHei", sans-serif;
  }

  p {
    font-family: 'Lato', "PingFang SC", "Microsoft YaHei", sans-serif;
  }

  hr {
    margin-bottom: 30px;
    height: 3px;
    border: none;
    background: #ddd repeating-linear-gradient(-45deg, #fff, #fff 4px, transparent 4px, transparent 8px);
  }

  .footer {
    margin-top: -10px;
    height: 20%;
    font-size: 14px;
    color: #5e5e5e;
  }

  .my-card {
    text-align: center;
    margin: 0;
    padding: 10px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0, 0, 0, 0.06),
    0 1px 5px 0 rgba(0, 0, 0, 0.12),
    0 -1px 0.5px 0 rgba(0, 0, 0, 0.09);
    background-color: #ffffff;
  }

  .subtitle {
    margin-left: 10px;
    font-size: 0.5em !important;
    color: #6f6f6f;
  }

  #wrapper {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>

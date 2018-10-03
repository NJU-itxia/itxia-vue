<template>
  <div class="container">
    <div class="card text-center my-card">
      <div class="card-body">
        <img class="card-img-top logo" src="../../assets/logo.jpg" alt="Card image cap"/>
        <div class="my-container">
          <ul class="my-text">
            <li>使用手机号预约，出于安全考虑，使用短信验证码登陆</li>
            <li>更多信息，请关注IT侠官方微信公众号<a href="#">nju-itxia</a></li>
          </ul>
        </div>
        <div>
          <div class="input-group mb-3 my-form">
            <input type="text" class="form-control my-input" placeholder="请输入您的手机号" aria-label="Username">
            <button class="btn btn-info my-button" @click="sendCode" :disabled="isDisable">{{ message }}</button>
          </div>
          <div class="input-group mb-3 my-form">
            <input type="text" class="form-control my-input" placeholder="请输入验证码" aria-label="Username"
                   aria-describedby="basic-addon1">
            <button class="btn btn-info my-button" @click="startAppointment">开始预约</button>
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
    name: "UserIndex",
    methods: {
      sendCode: function () {
        this.time=60;
        this.timer();
        this.isDisable= true;
      },
      timer: function () {
        if (this.time>0){
          this. message= this.time+'s后重新获取';
          this.time--;
          setTimeout(this.timer,1000);
        }else{
          this.message='获取验证码';
          this.isDisable= false;
        }
      },
      startAppointment: function () {
        this.$store.commit('LOGIN');
        this.$router.push('user/appointment');
      }
    },
    data() {
      return {
        message: '获取验证码',
        time: 0,
        isDisable: false
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
    margin-left: 20px;
    width: auto;
  }

  .my-input {
    max-width: 200px;
    border-top-right-radius: 0.25em !important;
    border-bottom-right-radius: 0.25em !important;
  }

  .my-text {
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: left;
  }

  .my-footer {
    margin-top: 30px;
    display: flex;
    justify-content: center;
  }

  .my-container {
    display: flex;
    justify-content: center;
  }

</style>

<template>
  <div class="container outer">
    <div class="row">
      <div class="text-center col-md-6">
        <div class="card-body my-card">
          <div class="text-left">
            <h1>登录<span class="subtitle">预约维修</span></h1>
          </div>
          <hr-bar></hr-bar>
          <img class="card-img-top logo" src="../../assets/logo.jpg" alt="Card image cap"/>
          <div class="my-container">
            <ul class="my-text">
              <li>出于安全考虑，使用手机号和短信验证码登陆</li>
              <li>更多信息，请关注IT侠官方微信公众号<a href="#">nju-itxia</a><br/>及<a target="_blank" href="https://itxia.club">官方网站</a>上的服务条例
              </li>
            </ul>
          </div>
          <hr-bar></hr-bar>
          <div>
            <div class="input-group mb-3 my-form">
              <text-input placeholder="请输入手机号" :text="phone" @update-text="updatePhone"></text-input>
              <basic-button :text="message" :func="sendCode" :disabled="isDisable"></basic-button>
              <!--<button class="btn btn-primary btn-sm my-button" @click="sendCode" :disabled="isDisable">{{ message }}</button>-->
            </div>
            <div class="input-group mb-3 my-form">
              <text-input placeholder="请输入验证码" :text="code" @update-text="updateCode"></text-input>
              <basic-button text="开始预约" :func="startAppointment"></basic-button>
              <!--<button class="btn btn-primary my-button" @click="startAppointment">开始预约</button>-->
            </div>
          </div>
        </div>
      </div>
      <div class="text-center col-md-6">
        <div class="card-body my-card">
          <!--<img class="card-img-top logo" src="../../assets/logo.jpg" alt="Card image cap"/>-->
          <div class="text-left">
            <h1>消息<span class="subtitle">近期公告</span></h1>
          </div>
          <hr-bar></hr-bar>
          <div>
            <ul class="my-text">
              <li style="color: #57a94e">【12-25】圣诞快乐！有人来P个圣诞帽吗！</li>
              <li style="color: darkgoldenrod">【12-25】虽然这里没有礼物，但是大家还是要开心鸭</li>
              <li style="color: #57a94e;">
                【12-24】【置底】童鞋们，期末考试周马上就要到来了，侠客们也进入忙碌的复习，所以，仙林IT侠从今日起<strong>暂停接单</strong>，
                鼓楼接单<strong>速度减慢</strong>。说到接单，就想到预约维修。明年开学，仙林鼓楼合作的IT侠预约维修即将正式重启，我们将继续做好IT侠公益服务，用IT侠的形象努力创造一个让大家满意的公益组织，文体两开花，弘扬IT文化，希望大家多多关注。
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import TextInput from "../../components/TextInput";
  import BasicButton from "../../components/BasicButton";
  import HrBar from "../../components/HrBar";

  export default {
    name: "UserLogin",
    methods: {
      sendCode: function () {
        this.time = 60;
        this.timer();
        this.isDisable = true;
        let params = new URLSearchParams();
        params.append('phone', this.phone);
        this.$axios.post(
          "backend/customer/login/code",
          params,
          {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
        )
      },
      timer: function () {
        if (this.time > 0) {
          this.message = this.time + 's后重新获取';
          this.time--;
          setTimeout(this.timer, 1000);
        } else {
          this.message = '获取验证码';
          this.isDisable = false;
        }
      },
      startAppointment: function () {
        console.log(this.phone);
        console.log(this.code);
        this.$axios.post(
          "backend/customer/verify",
          JSON.stringify({
            phone: this.phone,
            code: this.code
          })
        ).then((res) => {
          if (res.data.success) {
            this.$router.push('index');
          } else {
            alert('登陆失败');
          }
        });
        // this.$store.commit('LOGIN');

      },
      updatePhone(val) {
        this.phone = val;
      },
      updateCode(val) {
        this.code = val;
      }
    },
    data() {
      return {
        message: '获取验证码',
        time: 0,
        isDisable: false,
        phone: '14718037199',
        code: '12312',
      }
    },
    components: {
      TextInput,
      BasicButton,
      HrBar
    }
  }

</script>

<style scoped>
  .outer {
    padding-top: 20px;
  }

  .my-card {
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0, 0, 0, 0.06),
    0 1px 5px 0 rgba(0, 0, 0, 0.12),
    0 -1px 0.5px 0 rgba(0, 0, 0, 0.09);
    background-color: #ffffff;
    margin-bottom: 20px;
  }

  .my-text {
    color: #5e5e5e;
  }

  .logo {
    width: 200px;
    margin-bottom: 10px;
  }

  .my-form {
    display: flex;
    justify-content: center;
  }

  .my-button {
    margin-left: 20px;
    width: auto;
    min-width: 130px;
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

  .my-container {
    display: flex;
    justify-content: center;
  }

  .subtitle {
    margin-left: 10px;
    font-size: 0.5em !important;
    color: #6f6f6f;
  }

  h1 {
    font-size: 2em;
    margin: 12px 0 0 10px;
    padding-bottom: 3px;
    color: #5e5e5e;
    font-family: 'Lato', "PingFang SC", "Microsoft YaHei", sans-serif;
  }

  li {
    margin-bottom: 3px;
  }

</style>

<template>
  <div class="main-div" v-show="showNav">
    <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand" id="brand" href="#">IT侠预约系统</a>
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">{{ showText }}<span class="sr-only">(current)</span></a>
        </li>
      </ul>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <form class="form-inline my-2 my-lg-0" v-if="showJoinUs">
          <a type="button" class="nav-link" href="https://itxia.club/recruiment" target="_blank" id="join-us">加入我们</a>
        </form>
        <form class="form-inline my-2 my-lg-0" v-if="showDonation">
          <a type="button" class="nav-link" href="https://itxia.club/donation" target="_blank"
             v-if="!$store.getters.login">爱心捐赠</a>
        </form>
        <a class="nav-link" v-if="showLogout" @click="logout">登出<img class="icon" src="../../../src/assets/logout.svg"/></a>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    name: "NavBar",
    data() {
      return {
        status: 'logout',
        showNav: true,
        showSetting: false,
        showJoinUs: false,
        showDonation: false,
        showManagement: false,
        showLogout: false,
        showText: "",
      }
    },
    mounted() {
      this.refreshState();
    },
    watch: {
      $route() {
        this.refreshState();
      }
    },
    methods: {
      logout() {
        this.$store.commit('LOGOUT');
        if (this.$route.path.startsWith("/itxia")) {
          this.$router.push('/itxia/login')
        }
      },
      refreshState() {
        let path = this.$route.path;
        if (path.startsWith("/itxia/login")) {
          this.showNav = false;
        } else if (path.startsWith("/itxia/index")) {
          this.showNav = true;
          this.showSetting = true;
          this.showJoinUs = false;
          this.showDonation = false;
          this.showManagement = false;
          this.showLogout = true;
          this.showText = "后台管理";
        } else if (path.startsWith("/user/index")) {
          this.showNav = true;
          this.showSetting = false;
          this.showJoinUs = true;
          this.showDonation = true;
          this.showManagement = false;
          this.showLogout = true;
          this.showText = "预约维修";
        } else {
          this.showNav = false;
        }
      }
    }
  }
</script>

<style scoped>
  .main-div {
    position: fixed;
    width: 100%;
    z-index: 100;
  }

  .navbar-light {
    background-color: #2D3526;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
  }

  a {
    color: #ffffff !important;
  }

  #join-us {
    margin-right: 20px;
  }

  @media (min-width: 992px) {
    #brand {
      padding-right: 20px;
      border-right: white 1px solid;
    }
  }

  .icon {
    width: 22px;
  }

  .nav-link {
    cursor: pointer;
  }

  .navbar-toggler {
    font-size: 1rem;
  }
</style>

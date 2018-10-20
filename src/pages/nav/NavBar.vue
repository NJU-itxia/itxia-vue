<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" id="brand" href="#">IT侠预约系统</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">预约维修<span class="sr-only">(current)</span></a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0" v-if="!$store.getters.login">
          <a type="button" class="btn btn-info nav-link" href="https://itxia.club/recruiment" target="_blank" id="join-us">加入我们</a>
        </form>
        <form class="form-inline my-2 my-lg-0" v-if="!$store.getters.login">
          <a type="button" class="btn btn-info nav-link" href="https://itxia.club/donation" target="_blank" v-if="!$store.getters.login">爱心捐赠</a>
        </form>
        <button type="button" class="btn btn-info" v-if="$store.getters.login" @click="logout">登出</button>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    name: "NavBar",
    data () {
      return {
        status: 'logout'
      }
    },
    methods: {
      logout () {
        this.$store.commit('LOGOUT');
        this.$router.push('/');
      }
    }
  }
</script>

<style scoped>
  #join-us {
    margin-right: 20px;
  }

  @media (min-width: 992px) {
    #brand {
      padding-right: 20px;
      border-right: black 1px solid;
    }
  }
</style>

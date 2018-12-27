<template>
  <div class="container">
    <div class="row my-container">
      <div class="col-md-3">
        <div class="side-div">
          <div class="list-group">
            <span v-if="!newAppointment" class="list-group-item">
              <p><strong>当前预约</strong></p></span>
            <span v-if="newAppointment" class="list-group-item">
              <p><strong>新建预约</strong></p></span>
            <span class="list-group-item"><span class="number">{{totalNum}}</span>
              <p><strong>历史预约</strong></p></span>
          </div>
        </div>
      </div>

      <div class="col-md-8 my-card">
        <!--<p>dsad</p>-->
        <AppointmentNew v-if="newAppointment"></AppointmentNew>
        <AppointmentHistory v-show="!newAppointment"></AppointmentHistory>
      </div>
    </div>

    <back-to-top></back-to-top>
  </div>
</template>

<script>
  import AppointmentNew from "./AppointmentNew";
  import AppointmentHistory from "./AppointmentHistory";
  import BackToTop from "../nav/BackToTop";

  export default {
    name: "Appointment",
    components: {BackToTop, AppointmentNew, AppointmentHistory},
    data() {
      return {
        newAppointment: false,
        totalNum: 0,
      }
    },
    mounted() {
      this.getAppointmentNum();
    },
    methods: {
      switchToNew() {
        this.newAppointment = true;
      },
      switchToHistory() {
        this.newAppointment = false;
      },
      getAppointmentNum() {
        this.$axios.post(
          "backend/customer/appointment/num",
          JSON.stringify({})
        ).then((res) => {
          if (res.data.success) {
            this.totalNum = res.data.data;
          }
        })
      }
    }
  }
</script>

<style scoped>
  .my-container {
    padding-top: 80px;
  }

  .badge {
    float: right;
  }

  .list-group {
    font-size: 0.9em;
  }

  .side-nav {
    margin-bottom: 20px;
  }

  .search-div {
    display: flex;
    background-color: #fff;
    padding: 5px 10px;
    margin-bottom: 20px;
    align-items: center;
  }

  .list-group, .panel, .search-div {
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0, 0, 0, 0.06),
    0 1px 5px 0 rgba(0, 0, 0, 0.12),
    0 -1px 0.5px 0 rgba(0, 0, 0, 0.09);
  }

  .list-group {
    padding: 20px 0;
    background-color: #fff;
    margin-bottom: 20px;
  }

  strong {
    color: #5e5e5e;
    margin-right: 3px;
  }

  @media (min-width: 1200px) {
    .side-div {
      position: fixed;
      width: 240px;
    }
  }

  @media (min-width: 768px) and (max-width: 992px) {
    .side-div {
      position: fixed;
      width: 160px;
    }
  }

  .list-group-item {
    border: 0;
    border-radius: 0;
    color: #000000;
    font-size: 15px;
    margin: 0;
    padding-top: 7px;
    padding-bottom: 7px;
    transition: background-color 0.5s;
  }

  .list-group-item:hover {
    cursor: pointer;
    background-color: #CBD6AE;
  }

  .list-group-item p {
    margin: 0;
    float: left;
  }

  .number {
    font-size: 12px;
    margin-top: 3px;
    float: right;
    padding: 0 .4rem;
    background-color: #70AE95;
    color: #fff;
    border-radius: 10px;
  }

</style>

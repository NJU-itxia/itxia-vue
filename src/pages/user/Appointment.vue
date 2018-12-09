<template>
  <div class="container my-container">
    <div class="row">
      <div class="col-md-2 side-nav">
        <div class="list-group">
          <router-link to="#" class="list-group-item list-group-item-secondary">
            导航栏
          </router-link>
          <button type="button" class="list-group-item" @click="switchToNew">当前预约</button>
          <button type="button" class="list-group-item" @click="switchToHistory">历史预约
            <span class="badge badge-secondary">23</span></button>
        </div>
        <back-to-top></back-to-top>
      </div>

      <AppointmentNew v-if="newAppointment"></AppointmentNew>
      <AppointmentHistory v-show="!newAppointment"></AppointmentHistory>
    </div>

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
        newAppointment: false
      }
    },
    methods: {
      switchToNew() {
        this.newAppointment = true;
      },
      switchToHistory() {
        this.newAppointment = false;
      },
    }
  }
</script>

<style scoped>
  .my-container {
    margin-top: 50px;
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

</style>

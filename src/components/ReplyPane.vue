<template>
  <div class="main-div">
    <p class="reply-title">
      <span>{{ itxiaReply?'IT侠: ' + userName:'客户' }}</span>
      <span class="time-span">{{ time }}</span>
    </p>
    <hr/>
    <p>{{ content }}</p>
  </div>
</template>

<script>
  export default {
    name: "ReplyPane",
    props: {
      itxiaReply: Boolean,
      content: String,
      time: String,
      userName: String
    }
  }
</script>

<style scoped>
  .main-div {
    border-top: 2px dashed #c9d2cf;
    border-bottom: 2px dashed #c9d2cf;
    padding: 2px 8px;
    border-radius: 15px;
    margin-top: 10px;
    background-color: #e4ffc8;
  }

  .reply-title {
    color: #5e5e5e;
    margin-top: 2px;
    margin-bottom: 6px;
  }

  .time-span {
    float: right;
  }

  hr {
    margin-top: -5px;
  }
</style>

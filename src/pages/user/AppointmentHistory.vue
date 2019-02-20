<template>
  <div class="my-container-history">
    <div v-for="o in appointments">
      <div class="panel panel-warning">
        <div class="panel-heading">
          <p>{{o.orderStatus}}</p>
          <hr/>
        </div>
        <div class="panel-body">
          <p>
            <strong>校区: </strong>{{ o.location }}
          </p>
          <p v-show="o.handler !== null && o.handler.length >= 1">
            <strong>IT侠: </strong>{{ o.handler }}
          </p>
          <p>
            <strong>提交时间: </strong>{{ o.time }}
          </p>
          <p>
            <strong>手机号码: </strong><a :href="'tel:'+o.phone">{{ o.phone }}</a>
          </p>
          <p>
            <strong>邮箱: </strong>{{ o.email === null? "无":o.email }}
          </p>
          <p>
            <strong>电脑型号: </strong><a target="_blank" :href="'http://www.baidu.com/s?word=' + o.deviceModel + '+拆机图'">
            {{o.deviceModel}}</a>
          </p>
          <p>
            <strong>操作系统: </strong>{{o.osVersion}}
          </p>
          <p>
            <strong>问题描述: </strong>{{ o.problemDescription }}
          </p>

          <button type="button" class="btn btn-default btn-sm replybtn" data-toggle="collapse"
                  :data-target="'#reply' + o.id" @click="toggleState(o.id)" :id="o.id">展开回复信息{{
            o.replyList.length>0?'(' + o.replyList.length + ')':'' }}
          </button>

          <div :id="'reply' + o.id" class="panel-collapse collapse">
            <ReplyPane v-for="r in o.replyList" :content="r.content" :time="r.replyTime" :itxia-reply="r.itxiaReply"
                       :user-name="r.itxiaReply?r.itxiaName:o.customer"></ReplyPane>
            <br>
            <textarea class="form-control content" name="content" rows="3" placeholder="点击回复..."
                      v-model="o.newReply"></textarea>
            <label>
              <input type="text" class="order" name="order" value="6502" style="display: none">
            </label>
            <br>
            <button class="subbtn btn btn-sm workbtn" @click="createNewReply(o)">回复</button>
          </div>

          <hr/>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ReplyPane from '../../components/ReplyPane'

  export default {
    name: "AppointmentHistory",
    data() {
      return {
        appointments: '',
        info: null,
        pageNum: 0,
        pages: [],
      }
    },
    mounted() {
      this.queryAppointments();
    },
    methods: {
      queryAppointments() {
        this.$axios.post(
          "https://infinirotolarsi.com/customer/appointment/all",
          JSON.stringify({})
        ).then((res) => {
          if (res.data.success) {
            this.appointments = res.data.data.content;
            this.appointments.forEach((o) => {
              o.newReply = "";
            });
            this.pageNum = res.data.data.totalPages;
            if (this.pageNum <= 5) {
              this.pages = [...Array(this.pageNum)].map((_, h) => h);
            } else if (this.pageSelected < 3) {
              this.pages = [...Array(5)].map((_, h) => h);
            } else if (this.pageSelected > this.pageNum - 3) {
              this.pages = [...Array(5)].map((_, h) => h + this.pageNum - 5);
            } else {
              this.pages = [...Array(5)].map((_, h) => h + this.pageSelected - 2);
            }
          }
          this.noResult = true
        });
      }
    },
    components: {
      ReplyPane
    }
  }
</script>

<style scoped>

  strong {
    color: #5e5e5e;
    margin-right: 3px;
  }

  .my-button {
    float: right;
  }

  .panel {
    margin-bottom: 20px;
    padding-bottom: 20px;
    text-align: left;
    background-color: #fff;
  }

  .panel-heading {
    padding: 10px 30px;
    font-size: 1rem;
  }

  .panel-body {
    padding: 0 30px;
    font-size: 0.9rem;
  }

  .panel-body p {
    margin-bottom: 10px;
  }

  .panel-body hr {
    margin: 15px 0 5px 0;
    height: 2px;
    border: none;
    background: #ddd repeating-linear-gradient(-45deg, #fff, #fff 4px, transparent 4px, transparent 8px);
  }

  .panel-heading p {
    margin: 0;
  }

  .panel-heading hr {
    margin: 10px 0 0 0;
    height: 2px;
    border: none;
    background: #ddd repeating-linear-gradient(-45deg, #fff, #fff 4px, transparent 4px, transparent 8px);
  }

  .panel {
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0, 0, 0, 0.06),
    0 1px 5px 0 rgba(0, 0, 0, 0.12),
    0 -1px 0.5px 0 rgba(0, 0, 0, 0.09);
  }

  button:focus {
    box-shadow: 0 0 2px #57a94e;
  }

  textarea:active, textarea:focus {
    box-shadow: none !important;
    border-color: #70AE95 !important;
  }

  textarea:active, textarea:focus {
    box-shadow: 0 0 1px #70AE95 !important;
  }

</style>

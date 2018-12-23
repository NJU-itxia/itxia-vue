<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3">
        <div class="side-div">
          <div class="list-group">
            <span class="list-group-item" @click="showCreated"><span class="number">5</span>
              <p :class="textSelected[0]"><strong>等待处理</strong></p></span>
            <span class="list-group-item" @click="showAccepted"><span class="number">32</span>
              <p :class="textSelected[1]"><strong>正在处理</strong></p></span>
            <span class="list-group-item" @click="showFinished"><span class="number">2568</span>
              <p :class="textSelected[2]"><strong>处理完成</strong></p></span>
          </div>

          <div class="side-div search-div">
            <label class="search-input">
              <input class="form-control" placeholder="请输入搜索内容..." @keyup.enter="searchDescription" v-model="search"
                     type="text"/>
            </label>
            <img @click="searchDescription" class="search-svg" src="../../assets/search.svg"
                 alt="Card image cap"/>
          </div>
        </div>
      </div>

      <div class="col-md-8">
        <div v-show="orders.length === 0 && noResult">
          <div class="panel panel-warning">
            <div class="panel-not-found">
              <p class="no-found-text"><strong>非常遗憾，什么也没有搜索出来</strong></p>
            </div>
          </div>
        </div>
        <div v-for="o in orders">
          <div class="panel panel-warning">
            <div class="panel-heading">
              <p>{{o.customer}}</p>
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
                <strong>手机号码: </strong><a href="tel:17826029500">{{ o.phone }}</a>
              </p>
              <p>
                <strong>邮箱: </strong>{{ o.email === null? "无":o.email }}
              </p>
              <p>
                <strong>电脑型号: </strong><a target="_blank" href="http://www.baidu.com/s?word=Dell Precision T7600+拆机图">
                {{o.deviceModel}}</a>
              </p>
              <p>
                <strong>操作系统: </strong>{{o.osVersion}}
              </p>
              <p>
                <strong>问题描述: </strong>{{ o.problemDescription }}
              </p>

              <button type="button" class="btn btn-info btn-sm workbtn" v-if="o.orderStatus === '新创建'"
                      @click="acceptOrder(o.id)">我来处理
              </button>
              <button type="button" class="btn btn-info btn-sm workbtn"
                      v-if="o.orderStatus === '已接受' && o.handler === info.name">处理完成
              </button>
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

              <div class="labels-div">
                <span class="badge">标签功能开发中...</span>
              </div>
            </div>
          </div>
        </div>

        <div class="pagination" v-show="pageNum != null && pageNum > 1">
          <span class="page-number-img" @click="firstPage" v-if="!pages.includes(0)">
            <img src="../../assets/first.svg" class="page-img">
          </span>
          <span class="page-number-img" @click="previousPage" v-if="pageSelected !== 0">
            <img src="../../assets/prev.svg" class="page-img">
          </span>
          <span v-for="p in pages" @click="switchPage(p)"
                :class="['page-number', {'page-number-selected': pageSelected===p}]">{{ p + 1 }}</span>
          <span class="page-number-img" @click="nextPage" v-if="pageSelected !== pageNum - 1">
            <img src="../../assets/next.svg" class="page-img">
          </span>
          <span class="page-number-img" @click="lastPage" v-if="!pages.includes(pageNum-1)">
            <img src="../../assets/last.svg" class="page-img">
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ReplyPane from "../../components/ReplyPane"

  export default {
    name: "AdminIndex",
    components: {ReplyPane},
    data() {
      return {
        info: {},
        panel: ["panel", "panel-warning"],
        mutex: false,
        state: "CREATED",
        textSelected: ["text-selected", "", ""],
        orders: [],
        search: null,
        noResult: false,
        pageNum: null,
        pageSelected: 0,
        pages: [],
      }
    },
    mounted() {
      this.loadInfo();
    },
    watch: {
      search(newValue) {
        if (newValue === "") {
          this.queryAppointments();
        }
      }
    },
    methods: {
      toggleState(id) {
        let node = document.getElementById(id);
        let attr = node.getAttribute("aria-expanded");
        if (!attr || attr !== 'true') {
          node.innerText = '收起' + node.innerText.substring(2);
        } else {
          node.innerText = '展开' + node.innerText.substring(2);
        }
      },
      sleep(d) {
        return new Promise((resolve) => setTimeout(resolve, d))
      },
      showCreated() {
        this.state = "CREATED";
        this.pageSelected = 0;
        this.queryAppointments();
        this.textSelected = ["text-selected", "", ""]
      },
      showAccepted() {
        this.state = "ACCEPTED";
        this.pageSelected = 0;
        this.queryAppointments();
        this.textSelected = ["", "text-selected", ""]
      },
      showFinished() {
        this.state = "FINISHED";
        this.pageSelected = 0;
        this.queryAppointments();
        this.textSelected = ["", "", "text-selected"]
      },
      acceptOrder(oid) {
        console.log(oid);
        this.$axios.post(
          "backend/admin/appointment/accept/" + oid,
          JSON.stringify({})
        )
      },
      queryAppointments() {
        if (this.search === "") {
          this.search = null
        }
        this.$axios.post(
          "backend/admin/appointment/location/" + this.info.locationRawValue + "/state/" + this.state + "/search/" + this.search + "/page/" + this.pageSelected + "/size/10",
          JSON.stringify({})
        ).then((res) => {
          if (res.data.success) {
            this.orders = res.data.data.content;
            this.orders.forEach((o) => {
              o.newReply = ""
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
      },
      createNewReply(order) {
        this.$axios.put(
          "backend/admin/appointment/reply/" + order.id + "/" + order.newReply
        ).then((res) => {
          if (res.status === 200) {
            if (res.data.success) {
              this.queryAppointments();
              return
            }
          }
          alert("似乎失败了，等下再试试吧")
        })
      },
      loadInfo() {
        this.$axios.post(
          "backend/admin/info", JSON.stringify({})
        ).then((res) => {
          if (res.data.success) {
            this.info = res.data.data;
          }
          this.showCreated()
        })
      },
      searchDescription() {
        if (this.search === undefined || this.search.length === 0) {
          return
        }
        this.queryAppointments()
      },
      switchPage(page) {
        this.pageSelected = page;
        this.queryAppointments();
      },
      nextPage() {
        if (this.pageSelected === this.pageNum - 1) {
          return
        }
        this.switchPage(this.pageSelected + 1)
      },
      previousPage() {
        if (this.pageSelected === 0) {
          return
        }
        this.switchPage(this.pageSelected - 1)
      },
      firstPage() {
        this.switchPage(0)
      },
      lastPage() {
        this.switchPage(this.pageNum - 1)
      }
    }
  }
</script>

<style scoped>
  @keyframes reverse {
    0% {
      background-color: #fff;
    }
    20% {
      background-color: rgb(249, 255, 223);
    }
    100% {
      background-color: #fff;
    }
  }

  .search-svg {
    float: right;
    cursor: pointer;
    max-width: 25px;
    max-height: 25px;
  }

  .panel-animation {
    animation: reverse 1.5s;
  }

  strong {
    color: #5e5e5e;
    margin-right: 3px;
  }

  .search-svg {
    border: 1px solid transparent;
  }

  .search-svg:hover {
    border: none;
  }

  textarea:focus {
    box-shadow: none;
    border: 1px solid #70AE95;
  }

  .workbtn {
    background-color: #70AE95;
    border: none;
    color: white;

  }

  .container {
    padding-top: 80px;
  }

  .subbtn {
    max-width: 100px;
  }

  .subbtn-div {
    text-align: right;
  }

  button:focus {
    box-shadow: 0 0 2px #57a94e;
  }

  .reply {
    padding-bottom: 20px;
  }

  .list-group, .panel, .search-div {
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0, 0, 0, 0.06),
    0 1px 5px 0 rgba(0, 0, 0, 0.12),
    0 -1px 0.5px 0 rgba(0, 0, 0, 0.09);
  }

  .search-div {
    display: flex;
    background-color: #fff;
    padding: 5px 10px;
    margin-bottom: 20px;
    align-items: center;
  }

  .list-group {
    padding: 20px 0;
    background-color: #fff;
    margin-bottom: 20px;
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

  input.form-control::placeholder {
    font-size: 15px;
  }

  input.form-control {
    font-size: 15px;
  }

  .panel {
    margin-bottom: 20px;
    padding-bottom: 20px;
    text-align: left;
    background-color: #fff;
  }

  a {
    color: #70AE95;
  }

  .badge {
    color: #70AE95;
    border: 1px solid #70AE95;
    border-radius: 10px;
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

  .page-number:hover, .page-number-img:hover {
    border-bottom: 1px solid #5e5e5e;
  }

  .list-group-item:hover {
    cursor: pointer;
    background-color: #CBD6AE;
  }

  .list-group-item p {
    margin: 0;
    float: left;
  }

  input {
    border-top-width: 0;
    border-left-width: 0;
    border-right-width: 0;
  }

  input.form-control:focus {
    box-shadow: none;
    border-color: #70AE95;
  }

  input.form-control.bottom:focus {
    box-shadow: 0 0 1px #70AE95;
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

  .search-input {
    display: flex;
    flex: 1;
  }

  .text-selected {
    border-bottom: 1px solid #5e5e5e;
  }

  .page-number-selected {
    cursor: default !important;
    background-color: rgba(204, 204, 204, 0.56);
  }

  .page-img {
    width: 25px;
    height: 25px;
  }

  .page-number-img {
    cursor: pointer;
    padding: 2px 0 0 0;
    margin: 0 3px;
    border-bottom: 1px solid rgba(212, 211, 226, 0.05);
  }

  .page-number {
    cursor: pointer;
    padding: 4px 12px;
    margin: 0 3px;
    border-bottom: 1px solid rgba(212, 211, 226, 0.05);
    transition: border-bottom-color 0.5s;
  }

  .pagination {
    margin: 0 0 20px 0;
    border-top: initial;
    background: #fff;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.06), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 -1px 0.5px 0 rgba(0, 0, 0, 0.09);
    border-radius: initial;
    padding: 10px 0 10px;
    display: flex;
    justify-content: center;
  }

  .panel-not-found {
    text-align: center;
    padding-top: 50px;
    padding-bottom: 30px;
  }

  .not-found-text {
    color: #5e5e5e;
    margin: 10px !important;
    padding: 0;
    font-size: 15px !important;
  }
</style>

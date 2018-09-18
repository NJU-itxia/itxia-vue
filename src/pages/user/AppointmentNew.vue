<template>
  <div class="card my-card col-md-9">
    <p>请定期登录看看 IT 侠是否回复，如果方便处理我们会尽快与你联系，另外 IT 侠也可能通过预留手机与你联系，不是所有的预约都能被解决。</p>
    <hr/>
    <h3>服务条款</h3>
    <ol>
      <li>IT侠是纯公益性组织，提供的服务不收取任何费用</li>
      <li>服务对象仅限南大在校师生，以及为IT侠提供过捐助的爱心人士</li>
      <li>
        IT侠的服务不与任何商业团体挂钩
      </li>
      <li>
        IT侠将视用户的个人资料为绝密信息，保护隐私不外泄
      </li>
      <li>
        IT侠人员有限，在处理订单时会适当考虑优先级，如不能及时处理，请及时登陆预约平台反馈
      </li>
      <li>
        依业界惯例，IT 侠不对以下情形负责：
        <ul>
          <li>
            意外数据丢失
          </li>
          <li>
            由于机器老化和用料低端，在拆装过程中可能发生的卡扣折断、螺母碎裂等情形
          </li>
          <li>
            对处于不稳定边缘的、有潜在故障风险的机器（如显卡门机器），拆装之后发生无法开机的情形
          </li>
          <li>
            其他非IT侠的主观操作过失造成的意外（如用户自行购买的零配件在安装时导致机器损坏）
          </li>
          <li>
            如机器尚在保修期，请尽量去官方售后，若经IT侠拆机后不能享受售后服务，恕不负责
          </li>
        </ul>
      </li>
      <li>
        IT侠不提供盗版软件的安装服务，如有需求，只能帮助安装试用版，对于安装复杂的专业软件，可以一起探讨，但并不能保证完全解决问题
      </li>
      <li>
        本活动的最终解释权归 <a href="http://bbs.nju.edu.cn/vd15124/board?board=NoteBook" target="_blank">NoteBook 版</a>所有。
      </li>
    </ol>

    <hr/>

    <div class="form-group row">
      <label class="col-sm-2 left-label" for="phone">手机：</label>
      <div class="col-sm-8">
        <p id="phone"><strong>{{ phone }}</strong></p>
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-2 left-label" for="name">姓名：</label>
      <div class="col-sm-8">
        <input id="name" type="text" class="form-control"/>
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-2 left-label" for="email">邮箱：</label>
      <div class="col-sm-8">
        <input id="email" type="email" class="form-control"/>
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-2 left-label" for="campus">校区：</label>
      <div class="col-sm-8" id="campus">
        <div class="custom-control custom-radio custom-control-inline">
          <input type="radio" id="customRadioInline1" name="customRadioInline1" class="custom-control-input">
          <label class="custom-control-label" for="customRadioInline1">仙林校区</label>
        </div>
        <div class="custom-control custom-radio custom-control-inline">
          <input type="radio" id="customRadioInline2" name="customRadioInline1" class="custom-control-input">
          <label class="custom-control-label" for="customRadioInline2">鼓楼校区</label>
        </div>
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-2 left-label" for="devType">电脑型号：</label>
      <div class="col-sm-8">
        <input id="devType" type="email" class="form-control"/>
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-2 left-label" for="osType">操作系统：</label>
      <div class="col-sm-8">
        <input id="osType" type="email" class="form-control"/>
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-2 left-label" for="problem">问题描述：</label>
      <div class="col-sm-8">
        <textarea id="problem" class="form-control" rows="4"></textarea>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-2">
      </div>
      <div class="col-sm-8">
        <button class="btn btn-info">提交</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AppointmentNew",
    data() {
      return {
        phone: '123213212',
      }
    }
  }
</script>

<style scoped>

  .my-card {
    padding: 10px;
    font-size: 0.85em;
  }

  .left-label {
    text-align: right;
    font-weight: bold;
  }

  @media (max-width: 575px) {
    .left-label {
      text-align: left;
    }
  }

</style>

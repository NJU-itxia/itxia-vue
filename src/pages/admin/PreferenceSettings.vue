<template>
    <div class="wrapper">
      <div class="card">
        <h4>设置</h4>
        <HrBar></HrBar>
        <label class="settings-line">
          <span>校区设置</span>
          <select class="my-select">
            <option>鼓楼</option>
            <option>仙林</option>
          </select>
        </label>
        <label class="settings-line">
          是否接收邮件通知
          <select class="my-select">
            <option>是</option>
            <option>否</option>
          </select>
        </label>
      </div>
      <div class="card">
        <h4>我的信息</h4>
        <HrBar></HrBar>
        <div class="settings-line"><span>姓名</span><text-input class="my-input" text="页面测试中" disabled="true"></text-input></div>
        <div class="settings-line"><span>邮箱</span><text-input class="my-input" text="123345456@qq.com" disabled="true"></text-input></div>
      </div>
    </div>
</template>

<script>
    import HrBar from "../../components/HrBar";
    import TextInput from "../../components/TextInput";
    export default {
        name: "PreferenceSettings",
      components: {TextInput, HrBar}
    }
</script>

<style scoped>
.my-input {
  width: 200px;
}

.my-select {
  border: 1px solid #70AE95;
  background-color: #70AE95;
  color: white;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.06), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 -1px 0.5px 0 rgba(0, 0, 0, 0.09);
  border-radius: 2px;
  outline: none;
  width: 100px;
  text-align: center;
  appearance: none;
  cursor: pointer;
}

.settings-line {
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-between;
}

.wrapper {
  min-width: 200px;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.card {
  margin-top: 30px;
  width: 60%;
  border-radius: 0;
  padding: 20px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.06), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 -1px 0.5px 0 rgba(0, 0, 0, 0.09);
}

@media (max-width: 768px) {
  .card {
    width: 85%;
  }
}
</style>

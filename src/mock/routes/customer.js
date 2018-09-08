import Mock from 'mockjs';

const Random = Mock.Random;

Mock.mock('/customer/login', 'post', function(options) {
  return {
    success: Random.bool()
  };
});

Mock.mock('/customer/appointment', 'post', function(options) {
  return {
    success: Random.bool()
  };
});

Mock.mock('/customer/deleteAppointment', 'post', function(options) {
  return {
    success: Random.bool()
  };
});

Mock.mock('/customer/logout', 'post', function(options) {
  return {
    success: Random.bool()
  };
});

Mock.mock('/customer/getCurrentAppointment', 'post', function(options) {
  return {
    success: Random.bool(),
    appointment: {
      id: Random.string(),
      name: Random.string(),
      email: Random.string(),
      campus: Random.string(),
      deviceVersion: Random.string(),
      systemVersion: Random.string(),
      description: Random.string(),
      file: Random.string()
    }
  };
});

Mock.mock('/customer/getAppointments', 'post', function(options) {
  return {
    success: Random.bool(),
    appointments: [
      {
        id: "asd-sda-sda",
        name: "小明",
        email: "12321232@qq.com",
        campus: "仙林",
        deviceVersion: "竟然是一部安卓机",
        systemVersion: "android7.1.1",
        description: "屏幕坏了，能帮忙换嘛",
        file: null
      },
      {
        id: "sasd-dhs-sda",
        name: "还是小明",
        email: "12321232@qq.com",
        campus: "鼓楼",
        deviceVersion: "我不知道啊",
        systemVersion: "win10",
        description: "充不进去电",
        file: null
      }
    ]
  };
});

import Mock from 'mockjs';

const Random = Mock.Random;

Mock.mock('/admin/login', 'post', function(options) {
  return {
    success: Random.bool()
  };
});

Mock.mock('/admin/logout', 'post', function(options) {
  return {
    success: Random.bool()
  };
});

Mock.mock('/admin/modifyPassword', 'post', function(options) {
  return {
    success: Random.bool()
  };
});

Mock.mock('/admin/listAppointment', 'post', function(options) {
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

Mock.mock('/admin/acceptAppointment', 'post', function(options) {
  return {
    success: Random.bool()
  };
});

Mock.mock('/admin/reply', 'post', function(options) {
  return {
    success: Random.bool()
  };
});

Mock.mock('/admin/createMember', 'post', function(options) {
  return {
    success: Random.bool()
  };
});

Mock.mock('/admin/listAllMembers', 'post', function(options) {
  return {
    success: Random.bool()
  };
});

Mock.mock('/admin/modifyMemberPassword', 'post', function(options) {
  return {
    success: Random.bool()
  };
});

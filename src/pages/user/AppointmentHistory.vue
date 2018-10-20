<template>
  <div class="my-container-history col-md-9">
    <div v-for="ap in appointments" class="my-card">
      <div class="card">
        <div class="card-body">
          <span>{{ ap.description }}</span>
        </div>
        <hr/>
        <div class="card-body">
          <span class="btn btn-primary">{{ap.degree}}</span>
        </div>
        <div v-for="tag in ap.feature">
          <span class="badge badge-secondary">{{tag}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AppointmentHistory",
    data() {
      return {
        appointments: [
          {
            id: 123213,
            status: 'finished',
            phone: 12312312222,
            email: '674723213@qq.com',
            campus: '鼓楼',
            degree: '紧急',
            os: 'win10',
            feature: [
              '蓝屏',
              '好喝'
            ],
            description: '没有特别大的问题',
            reply: [
              {
                from: '测试人员',
                content: '没啥问题啊'
              },
              {
                from: '用户',
                content: '还真是'
              },
              {
                from: '啦啦啦',
                content: '额'
              }
            ]
          },
          {
            id: 123213,
            status: 'finished',
            phone: 12312312222,
            email: '674723213@qq.com',
            campus: '鼓楼',
            degree: '紧急',
            os: 'win10',
            feature: [
              '蓝屏',
              '好喝'
            ],
            description: '没有特别大的问题,就是描述比较长没有特别大的问题,就是描述比较长没有特别大的问题,就是描述比较长没有特别大的问题,就是描述比较长没有特别大的问题,就是描述比较长没有特别大的问题,就是描述比较长没有特别大的问题,就是描述比较长没有特别大的问题,就是描述比较长没有特别大的问题,就是描述比较长没有特别大的问题,就是描述比较长',
            reply: [
              {
                from: '测试人员',
                content: '没啥问题啊'
              },
              {
                from: '用户',
                content: '还真是'
              },
              {
                from: '啦啦啦',
                content: '额'
              }
            ]
          },
          {
            id: 123213,
            status: 'finished',
            phone: 12312312222,
            email: '674723213@qq.com',
            campus: '鼓楼',
            degree: '紧急',
            os: 'win10',
            feature: [
              '蓝屏',
              '好喝'
            ],
            description: '没有特别大的问题',
            reply: [
              {
                from: '测试人员',
                content: '没啥问题啊'
              },
              {
                from: '用户',
                content: '还真是'
              },
              {
                from: '啦啦啦',
                content: '额'
              }
            ]
          }
        ],
      }
    }
  }
</script>

<style scoped>
  .my-container-history {
    padding: 0;
    margin: 0 0 10px 0;
  }

  .my-card {
    padding: 0;
    margin: 0;
  }

  .my-card:not(:first-child) {
    padding-top: 10px;
  }
</style>

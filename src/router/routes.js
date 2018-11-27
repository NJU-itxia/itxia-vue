import HelloWorld from '@/pages/HelloWorld';
import Http from '@/pages/Http';
import UserIndex from '@/pages/user/UserIndex';
import Appointment from '@/pages/user/Appointment';
import ItxiaLogin from '@/pages/admin/ItxiaLogin';
import AdminIndex from '@/pages/admin/AdminIndex';
import Lab from '@/components/Lab';

export default [
  {
    path: '/',
    component: UserIndex,
  },
  {
    path: '/hello',
    component: HelloWorld,
  },
  {
    path: '/http',
    component: Http,
  },
  {
    path: '/user',
    component: UserIndex,
  },
  {
    path: '/user/appointment',
    component: Appointment,
  },
  {
    path: '/itxia/login',
    component: ItxiaLogin,
  },
  {
    path: '/itxia/index',
    component: AdminIndex,
  },
  {
    path: '/egg/lab',
    component: Lab,
    name: '彩蛋测试'
  }
]

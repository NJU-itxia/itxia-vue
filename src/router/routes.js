import HelloWorld from '@/pages/HelloWorld';
import Http from '@/pages/Http';
import UserIndex from '@/pages/user/UserIndex';
import Appointment from '@/pages/user/Appointment';
import Knightlogin from '@/pages/knight/Knightlogin'

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
    path: '/knightlogin',
    component: Knightlogin,
    name: '登录入口',
  }
]

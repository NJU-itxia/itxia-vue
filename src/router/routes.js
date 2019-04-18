import Http from '@/pages/Http';
import UserLogin from '@/pages/user/UserLogin';
import Appointment from '@/pages/user/Appointment';
import ItxiaLogin from '@/pages/admin/ItxiaLogin';
import AdminIndex from '@/pages/admin/AdminIndex';
import Lab from '@/components/Lab';
import PreferenceSettings from '@/pages/admin/PreferenceSettings';
import MemberManagement from '@/pages/admin/MemberManagement';

export default [
  {
    path: '/',
    component: ItxiaLogin,
  },
  {
    path: '/user/login',
    component: UserLogin,
  },
  {
    path: '/http',
    component: Http,
  },
  {
    path: '/user/index',
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
    path: '/itxia/manage',
    component: MemberManagement,
  },
  {
    path: '/itxia/settings',
    component: PreferenceSettings,
  },
  {
    path: '/egg/lab',
    component: Lab,
    name: '彩蛋测试'
  }
]

import router from '../router';
import http from '../http';
import { POST } from '../utils/value-consts';

const LOGIN_URL = '/';
const LOGOUT_URL = '/';

const staff = {
  authenticated: false,
};

const login = (context, creds, redirect) => {
  http.api({
    url: LOGIN_URL,
    method: POST,
    params: creds,
    successCallback: (data) => {
      if (redirect) {
        router.replace(redirect);
        return;
      }
    },
    errorCallback: (error) => {

    }
  })
};

const logout = () => {
  http.api({
    url: LOGOUT_URL,
    method: POST,
    successCallback: (data) => {
      return;
    },
    errorCallback: (error) => {

    }
  });
};

export default {
  staff,
  login,
  logout,
};

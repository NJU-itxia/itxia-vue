import axios from 'axios';
import {HTTP_ROOT, HTTP_TIMEOUT} from '../config';
import {POST, RSPCODE_OK} from '../utils/value-consts';

const baseConfig = (axios) => {
  axios.defaults.baseURL = HTTP_ROOT;
  axios.defaults.timeout = HTTP_TIMEOUT;
};

const transformRequest = (axios) => {
  axios.defaults.transformRequest = [function (data, headers) {
    return data;
  }];
};

const addRequestInterceptors = (axios) => {
  axios.interceptors.request.use(function (config) {
    return config;
  }, function (error) {
    return Promise.reject(error);
  });
};

const addResponseInterceptors = (axios) => {
  axios.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    return Promise.reject(error);
  })
};

const accessInVue = (Vue, axios) => {
  Vue.prototype.$http = axios;
};

const config = (Vue) => {
  baseConfig(axios);
  transformRequest(axios);
  addRequestInterceptors(axios);
  addResponseInterceptors(axios);
  accessInVue(Vue, axios);
};

const api = ({url, method, params, successCallback, errorCallback}) => {
  let reqConf = {method, url, data: params};

  axios(reqConf).then((response) => {
    successCallback && successCallback(response.data);
  }).catch((error) => {
    errorCallback && errorCallback(error.response);
  });
};

export default {
  config,
  api
};

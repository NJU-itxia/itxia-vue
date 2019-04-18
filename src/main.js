// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import {GET_URL} from "./utils/value-consts";

import App from './App';
import router from './router';
import store from './store';
import http from './http';
import auth from './auth';
import axios from 'axios';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.withCredentials = true;
Vue.prototype.$axios = axios;


http.config(Vue);

auth.authCheck();

sync(store, router);

Vue.config.productionTip = false;

const errorHandler = (error, vm)=>{
  function toParam(text) {
    return text.replace(/\//g, "_").replace(/^\s+|\s+$/g, "_");
  }
  const os = toParam(encodeURI(window.navigator.platform));
  const platform = toParam(encodeURI(window.navigator.userAgent));
  const time = toParam(encodeURI(new Date().toDateString()));
  const message = toParam(error.toString());
  axios.post(
    GET_URL(`/performance/error/${os}/${platform}/${time}/${message}`),
    JSON.stringify({})
  );
};

Vue.config.errorHandler = errorHandler;
Vue.prototype.$throw = (error)=> errorHandler(error,this);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});



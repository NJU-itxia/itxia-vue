import {SHOW_HEADER, HIDE_HEADER, LOGIN, LOGOUT} from '../mutation-types';

const state = {
  showHeader: true,
  login: false
};

const getters = {
  showHeader: state => state.showHeader,
  login: state => state.login
};

const mutations = {
  [SHOW_HEADER]: function (state) {
    state.showHeader = true;
  },

  [HIDE_HEADER]: function (state) {
    state.showHeader = false;
  },

  [LOGIN]: function (state) {
    state.login = true
  },

  [LOGOUT]: function (state) {
    state.login = false
  }
};

export default {
  state,
  getters,
  mutations
};

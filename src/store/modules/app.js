import { SHOW_HEADER, HIDE_HEADER } from '../mutation-types';

const state = {
  showHeader: true
};

const getters = {
  showHeader: state => state.showHeader
};

const mutations = {
  [SHOW_HEADER]: function (state) {
    state.showHeader = true;
  },

  [HIDE_HEADER]: function (state) {
    state.showHeader = false;
  }
};

export default {
  state,
  getters,
  mutations
};

import Vue from "vue";
import Vuex from "vuex";
import tagsview from "./modules/tagsview.js";
import getters from "./getters.js";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    tagsview
  },
  getters
});

import Vue from "vue";
import Vuex from "vuex";
import tagsview from "./modules/tagsview.js";
import getters from "./getters.js";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dialogFormVisible: false,
    title: "",
    msg: null
  },
  mutations: {
    fatherData(state, data1, data2, data3) {
      state.dialogFormVisible = data1;
      state.title = data2;
      state.msg = data3;
    }
  },
  actions: {},
  modules: {
    tagsview
  },
  getters
});

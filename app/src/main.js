import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import Vant from "vant";
import axios from "axios";
import moment from "moment"; //导入文件
import "element-ui/lib/theme-chalk/index.css";
Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.use(ElementUI);
Vue.use(Vant);
Vue.prototype.$moment = moment; //赋值使用

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "normalize.css";
import "material-design-icons/iconfont/material-icons.css";
import "roboto-fontface/css/roboto/sass/roboto-fontface.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

import moment from "moment-timezone";
import Vue from "vue";
import VueMoment from "vue-moment";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.use(VueMoment, {
  moment,
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");

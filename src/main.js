import Vue from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";

//import fontawesome 
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
library.add(fas);
Vue.component('fontawesome-icon',FontAwesomeIcon);

//import charts

import VueApexCharts from 'vue-apexcharts';
Vue.use(VueApexCharts);

Vue.component('apexchart', VueApexCharts);



Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
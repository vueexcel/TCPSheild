import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import VueApexCharts from 'vue-apexcharts'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


Vue.use(VueApexCharts)
library.add(faChevronDown)

Vue.component('apexchart', VueApexCharts)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons)

new Vue({
  render: h => h(App),
}).$mount('#app')

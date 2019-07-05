import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";
import './plugins/element.js';
import * as globalFilter from '@/filters/filters'
import axios from '@/config/httpConfig.js'
import './styles/index.scss'
import echarts from 'echarts'
import 'echarts/map/js/china'
// import '@/assets/css/iconfont.css' 

Object.keys(globalFilter).forEach(key => {
  Vue.filter(key, globalFilter[key])
})

Vue.prototype.$http = axios
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

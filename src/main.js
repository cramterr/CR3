import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mock from './mock-data.js';

Vue.config.productionTip = false

let data = {
  consoles: mock,
  s: [],
  a: [],
  b: [],
  c: [],
  d: [],
};

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')

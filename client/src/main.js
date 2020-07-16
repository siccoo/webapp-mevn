import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';

Vue.config.productionTip = false

// Default vue http modules for api calls
Vue.prototype.$http = axios;

// load the token from the localStorage
const token = localStorage.getItem("token");

// Is there any token then we would simply append default axios authorization headers
if(token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token;
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

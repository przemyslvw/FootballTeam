import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './router';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './assets/variables.scss';
import env from './example.env';
import store from './store';

axios.defaults.baseURL = env.API_URL
window.axios = axios


Vue.use(BootstrapVue);
Vue.use(VueAxios, axios);

Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

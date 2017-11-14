require('./bootstrap');

import router from './routes';
import VueResource from 'vue-resource';
import Vue from 'vue';
import VueAxios from 'vue-axios';
import axios from 'axios';
import App from './components/App.vue'; 

Vue.use(VueAxios, axios);

new Vue(Vue.util.extend({ router }, App)).$mount('#app'); 
require('./bootstrap');
require('../../../node_modules/admin-lte/dist/css/AdminLTE.min.css');
require('../../../node_modules/admin-lte/plugins/iCheck/square/blue.css');
require('../../../node_modules/admin-lte/dist/js/adminlte.min');
require('iCheck');

import router from './routes';
import VueResource from 'vue-resource';
import Vue from 'vue';
import VueAxios from 'vue-axios';
import axios from 'axios';
import App from './components/App.vue'; 

Vue.use(VueAxios, axios); 

new Vue(Vue.util.extend({ router }, App)).$mount('#app'); 
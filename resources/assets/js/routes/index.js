import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../components/Login.vue'
import Main from '../components/Main.vue'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/main', component: Main, name:'main' },
        { path: '/login', component: Login, name:'login' }
    ]
});

export default router;
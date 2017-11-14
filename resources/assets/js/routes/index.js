import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../components/Login.vue'
import Main from '../components/Main.vue'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/main', name:'main', component: Main, meta: { requiresAuth: true}  },
        { path: '/', name:'login', component: Main, meta: { requiresAuth: true}  },
        { path: '/login', name:'login', component: Login  } 
    ]
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      if (!Laravel.isLogin) {
        next({
          path: '/login',
        });
      } else {
        next();
      }
    } else {
      next();
    }
  })

export default router;
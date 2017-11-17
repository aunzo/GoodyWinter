import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import Main from '../components/Main.vue'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/main', name:'main', component: Main, meta: { requiresAuth: true} },
        { path: '/', component: Main, meta: { requiresAuth: true}  },
        { path: '/login', name:'login', component: Login  } ,
        { path: '/register', name:'register', component: Register  } 
    ]
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) 
    {
        axios
            .get('api/checkLogin')
            .then(function (response) 
            {
                if (!response.data.isLogin)
                {
                    next({
                        path: '/login',
                        });
                }
                else next();
            })
            .catch(function (error) { console.log('errpr' , error) });
    } 
    else next();
  });

export default router;
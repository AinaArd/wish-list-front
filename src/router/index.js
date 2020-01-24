import Vue from 'vue'
import Router from 'vue-router'
import SignUp from '@/components/SignUp'
import Login from '@/components/Login'
import Profile from '@/components/Profile'

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/signUp',
            name: 'signUp',
            component: SignUp
        },
        {
            path: '/profile',
            name: 'profile',
            component: Profile
        },
    ]
});

export default router

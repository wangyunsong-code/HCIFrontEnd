import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import  Home from '../pages/home.vue'
import  Login from '../pages/login.vue'

const routes = [
    {
        path: '/', name: 'homeLink', components: {
            default: Home
        }
    },
    {path: '/login', name:'loginLink',component: Login},
    {path: '*', redirect: '/'}
    ]

export const router = new VueRouter({
    routes,
    mode:'history',
    // scrollBehavior(to,from,savedPosition){
    //     // return{x:0,y:100}
    //     // return{ selector:".btn"}
    //     if(savedPosition){//用浏览器的前进后退来控制
    //         return savedPosition
    //     } else{
    //         return{x:0,y:0}
    //     }
    // }
})
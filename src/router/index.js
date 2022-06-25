import Vue from 'vue'
import VueRouter from 'vue-router'
import Analytic from '../views/Analytic.vue'
// import store from '../store'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Analytic',
        meta: {
            requiresAuth: true
        },
        component: Analytic
    },
    {
        path: '/authorization',
        name: 'authorization',
        meta: {
            requiresAuth: false
        },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Authorization.vue')
    }
]

const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (localStorage.getItem("Leadhit-Site-Id") !== '5f8475902b0be670555f1bb3') {
            next({path: "/authorization",})
        } else {
            next();
        }
    } else {
        next();
    }

    if (to.name === 'authorization' && localStorage.getItem("Leadhit-Site-Id") === '5f8475902b0be670555f1bb3') {
        next({path: '/'})
    } else {
        next();
    }

})

export default router

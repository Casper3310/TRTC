import Vue from 'vue'
import VueRouter from 'vue-router'
import b1 from './components/view/b1.vue'
import b2 from './components/view/b2.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/b1',
        name: 'b1',
        component: b1,
    },
    {
        path: '/b2',
        name: 'b2',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('./components/view/b2.vue')
    },
]

const router = new VueRouter({
    routes
})

export default router

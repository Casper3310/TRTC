import Vue from 'vue'
import VueRouter from 'vue-router'
import b1 from './components/view/b1.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '*',
        redirect: '/'
    },
    {
        path: '/',
        name: 'home',
        component: () => import('./components/StationButton.vue')
    },
    {
        path: '/station/temp',
        name: "temp",
        component: () => import('./components/temp.vue')
    },
    {
        path: '/station/:stationID',
        name: "station",
        component: () => import('./components/DeviceList.vue'),
        children: [{
            path: 'device/:deviceID',
            name: "device",
            component: () => import('./components/DevicePlane.vue')
        }]
    },
    {
        path: '/ChatList',
        name: "ChatList",
        component: () => import('./components/ChatList.vue')
    },

]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router

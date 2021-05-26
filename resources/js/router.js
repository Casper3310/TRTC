import Vue from 'vue'
import VueRouter from 'vue-router'
import b1 from './components/view/b1.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('./components/StationButton.vue')
    },
    {
        path: '/station/:stationID',
        name: "station",
        component: () => import('./components/DeviceList.vue'),
        children: [{
            path: 'device/:deviceID',
            component: () => import('./components/DevicePlane.vue')
        },]
    },

]

const router = new VueRouter({
    routes
})

export default router

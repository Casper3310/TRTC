import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import testrouter from '../views/testrouter.vue'
import test2 from '../views/test2.vue'
import children111 from '../views/children111.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/About.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: testrouter
  },
  {
    path: '/test2',
    name: test2,
    component: () => import('../views/test2.vue'),
    children: [
      {
        path: 'children111',
        name: 'children111',
        component: children111
      },
      {
        path: 'children222',
        name: 'children222',
        component: () => import('../views/children222.vue')
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router

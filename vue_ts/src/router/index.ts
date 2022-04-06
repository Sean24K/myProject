import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('../views/main.vue'),
    children: [
      {
        path: '/HTML',
        name: 'HTML',
        component: () => import('../views/HTML.vue')
      },
      {
        path: '/CSS',
        name: 'CSS',
        component: () => import('../views/CSS.vue')
      },{
        path: '/JS',
        name: 'JS',
        component: () => import('../views/JS.vue')
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutView.vue')
      },
      {
        path: '/test',
        name: 'test',
        component: () => import('../views/test.vue')
      },
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

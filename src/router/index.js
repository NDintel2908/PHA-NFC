import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component:  () => import('../pages/page/home-page.vue')
    },
    {
      path: '/',
      name: 'index',
      component:  () => import('../pages/index.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../pages/auth/login.vue')
    },
    {
      path: '/drug',
      name: 'drug',
      component: () => import('../pages/page/drug.vue')
    },
    {
      path: '/manufacturer',
      name: 'manufacturer',
      component: () => import('../pages/page/manufacturer.vue')
    },
    {
      path: '/warranty',
      name: 'warranty',
      component: () => import('../pages/page/warranty.vue')
      path: '/druglist',
      name: 'druglist',
      component: () => import('../pages/auth/druglist.vue')
    },

    
  ]
})

export default router

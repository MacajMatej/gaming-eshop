import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/store',
      name: 'store',
      component: () => import('../views/StoreView.vue'),
      children:[
                {
          path: 'games',
          name: 'games',
          component: () => import('../views/GamesStoreView.vue'),
        },
        {
          path: 'products',
          name: 'products',
          component: () => import('../views/ProductsStoreView.vue'),
        },
        {
          path: 'discovery',
          name: 'discovery',
          component: () => import('../views/StoreDiscoveryView.vue'),
        }
      ]
    },
    {
      path: '/community',
      name: 'community',
      component: () => import('../views/CommunityView.vue'),
    },
    {
      path: '/support',
      name: 'support',
      component: () => import('../views/SupportView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/library',
      name: 'library',
      component: () => import('../views/LibraryView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    }
  ],
})

export default router

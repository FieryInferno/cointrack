import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView,
      meta: { title: 'Login - CoinTrack' }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
      meta: { title: 'Dashboard - CoinTrack' }
    }
  ],
})
router.beforeEach((to, from, next) => {
  document.title = to.meta.title as string || 'CoinTrack'; // Ambil dari meta, jika tidak ada gunakan default
  next();
});

export default router

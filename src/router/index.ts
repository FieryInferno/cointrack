import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})
router.beforeEach((to, from, next) => {
  document.title = (to.meta.title as string) || 'CoinTrack' // Ambil dari meta, jika tidak ada gunakan default
  next()
})

export default router

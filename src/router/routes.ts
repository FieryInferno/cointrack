import DashboardView from '../views/DashboardView.vue'
import LoginView from '../views/LoginView.vue'

export default [
  {
    path: '/',
    name: 'login',
    component: LoginView,
    meta: { title: 'Login - CoinTrack' },
    showInMenu: false
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardView,
    meta: { title: 'Dashboard - CoinTrack' },
    showInMenu: true,
    icon: '🏠',
  },
  {
    path: '/transactions',
    name: 'Transactions',
    component: DashboardView,
    meta: { title: 'Transactions - CoinTrack' },
    showInMenu: true,
    icon: '📒',
  },
  {
    path: '/analytics',
    name: 'Analytics',
    component: DashboardView,
    meta: { title: 'Analytics - CoinTrack' },
    showInMenu: true,
    icon: '📊',
  },
  {
    path: '/settings',
    name: 'Settings',
    component: DashboardView,
    meta: { title: 'Settings - CoinTrack' },
    showInMenu: true,
    icon: '⚙️',
  }
]
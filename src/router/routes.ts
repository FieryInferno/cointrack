import DashboardView from '../views/DashboardView.vue'
import LoginView from '../views/LoginView.vue'
import TransactionsView from '../views/TransactionsView.vue'
import SidebarLayout from '../views/SidebarLayout.vue'

export const authenticatedRoutes = [
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
    component: TransactionsView,
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

export default [
  { path: '/', meta: { title: 'Login - CoinTrack' }, children: [{ path: '', component: LoginView }, { path: '/login', component: LoginView }] },
  { path: '/', component: SidebarLayout, children: authenticatedRoutes },
]
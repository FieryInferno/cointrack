export const authenticatedRoutes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/DashboardView.vue'),
    meta: { title: 'Dashboard - CoinTrack' },
    showInMenu: true,
    icon: '🏠',
  },
  {
    path: '/transactions',
    showInMenu: true,
    name: 'Transactions',
    icon: '📒',
    children: [
      { path: '', component: () => import('../views/TransactionsView.vue'), meta: { title: 'Transactions - CoinTrack' } },
      { path: 'create', name: 'CreateTransaction', component: () => import('../views/CreateTransactionView.vue'), meta: { title: 'Create Transaction - CoinTrack' } }
    ],
  },
  {
    path: '/analytics',
    name: 'Analytics',
    component: () => import('../views/DashboardView.vue'),
    meta: { title: 'Analytics - CoinTrack' },
    showInMenu: true,
    icon: '📊',
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('../views/DashboardView.vue'),
    meta: { title: 'Settings - CoinTrack' },
    showInMenu: true,
    icon: '⚙️',
  }
]

export default [
  {
    path: '/',
    meta: { title: 'Login - CoinTrack' },
    children: [{ path: '', component: () => import('../views/LoginView.vue') }, { path: '/login', component: () => import('../views/LoginView.vue') }]
  },
  { path: '/', component: () => import('../views/SidebarLayout.vue'), children: authenticatedRoutes },
]
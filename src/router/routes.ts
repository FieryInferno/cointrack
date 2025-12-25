export const authenticatedRoutes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../presentation/dashboard.view.vue'),
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
      { path: '', component: () => import('../presentation/TransactionsView.vue'), meta: { title: 'Transactions - CoinTrack' } },
      { path: 'create', name: 'CreateTransaction', component: () => import('../presentation/CreateTransactionView.vue'), meta: { title: 'Create Transaction - CoinTrack' } }
    ],
  },
  {
    path: '/analytics',
    name: 'Analytics',
    component: () => import('../presentation/AnalyticsView.vue'),
    meta: { title: 'Analytics - CoinTrack' },
    showInMenu: true,
    icon: '📊',
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('../presentation/dashboard.view.vue'),
    meta: { title: 'Settings - CoinTrack' },
    showInMenu: true,
    icon: '⚙️',
  }
]

export default [
  {
    path: '/',
    meta: { title: 'Login - CoinTrack' },
    children: [{ path: '', component: () => import('../presentation/login.view.vue') }, { path: '/login', component: () => import('../presentation/login.view.vue') }]
  },
  { path: '/', component: () => import('../presentation/SidebarLayout.vue'), children: authenticatedRoutes },
]
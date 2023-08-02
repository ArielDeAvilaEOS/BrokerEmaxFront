const ebankRoutes = {
  path: '/ebank',
  component: () => import('@/layouts/AppLayout.vue'),
  meta: {
    requiresAuth: false
  },
  children: [
    {
      path: 'ebank',
      name: 'ebank',
      component: () => import('@/modules/ebank/views/ebank/Index.vue')
    },
    {
      path: 'withdraw',
      name: 'withdraw',
      component: () => import('@/modules/ebank/views/withdraw/Index.vue')
    },
    {
      path: 'deposit',
      name: 'deposit',
      component: () => import('@/modules/ebank/views/deposit/Index.vue')
    }
  ]
}

export default ebankRoutes

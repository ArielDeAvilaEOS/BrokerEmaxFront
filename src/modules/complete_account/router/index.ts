const complete_accountRoutes = {
  path: '/complete_account',
  name: 'complete_account',
  component: () => import('@/layouts/AppLayout.vue'),
  meta: {
    requiresAuth: false
  },
  children: [
    {
      path: 'complete_account',
      name: 'complete_account',
      component: () => import('@/modules/complete_account/views/complete_account/Index.vue')
    }
  ]
}

export default complete_accountRoutes

const accountsRoutes = {
  path: '/accounts',
  component: () => import('@/layouts/AppLayout.vue'),
  meta: {
    requiresAuth: false
  },
  children: [
    {
      path: 'accounts',
      name: 'accounts',
      component: () => import('@/modules/accounts/views/accounts/Index.vue')
    }
  ]
}

export default accountsRoutes

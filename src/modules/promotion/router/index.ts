const promotionRoutes = {
  path: '/promotion',
  name: 'promotion',
  component: () => import('@/layouts/AppLayout.vue'),
  meta: {
    requiresAuth: false
  },
  children: [
    {
      path: 'promotion',
      name: 'promotion',
      component: () => import('@/modules/promotion/views/promotion/Index.vue')
    }
  ]
}

export default promotionRoutes

const verify_accountRoutes = {
    path: '/verify_account',
    name: 'verify_account',
    meta: {
        requiresAuth: false
    },
    children: [
{
    path: 'verify_account',
    name: 'verify_account',
    component: () => import ('@/modules/verify_account/views/verify_account/Index.vue')
}
    ]
}

export default verify_accountRoutes

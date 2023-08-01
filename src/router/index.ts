import { createRouter, createWebHistory } from 'vue-router'
//importation
import complete_accountRoutes from '@/modules/complete_account/router'
import verify_accountRoutes from '@/modules/verify_account/router'
import promotionRoutes from '@/modules/promotion/router'
import accountsRoutes from '@/modules/accounts/router'
import ebankRoutes from '@/modules/ebank/router'
import dashboardRoutes from '@/modules/dashboard/router'
import authRoutes from '@/modules/auth/router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //module
    authRoutes,
    complete_accountRoutes,
    verify_accountRoutes,
    promotionRoutes,
    accountsRoutes,
    ebankRoutes,
    dashboardRoutes
  ]
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '@/views/DashboardView.vue'
import BookingsListing from '@/views/BookingsListingView.vue'
import BookingRoomView from '@/views/BookingRoomView.vue'
import { useUserStore } from '@/stores/userStore'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashboardView,
      meta: {
        requiresAuth: true
      },
    },
    {
      path: '/bookings',
      name: 'bookingslisting',
      component: BookingsListing,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/book-room',
      name: 'bookRoom',
      component: BookingRoomView,
      meta: {
        requiresAuth: true
      },
    },
    {
      path: '/auth/:slug',
      name: 'auth',
      props: true,
      component: () => import('@/views/AuthView.vue'),
      meta: {
        requiresGuest: true
      }
    },
  ],
})

router.beforeEach(async (to, from, next) => {
  const userData = useUserStore()
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Route requires authentication
    if (!userData.tokenContent?.exp || new Date().getTime() > userData.tokenContent.exp * 1000) {
      // User not logged in, redirect to login page
      try {
        await userData.refreshToken()
        if (userData.accessToken?.length === 0) {
          next({ path: "/auth/login" })
        } else {
          next()
        }
      } catch {
        next({ path: "/auth/login" });
      }
    } else {
      // User logged in, proceed to the route
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    try {
      await userData.refreshToken()
      if (userData.accessToken?.length !== 0) {
        next()
      } else {
        next()
      }
    } catch {
      next({ path: "/auth/signin" })
    }
  } else {
    // No specific requirements for the route, proceed to the route
    next();
  }

})

export default router

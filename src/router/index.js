import { createRouter, createWebHistory } from 'vue-router'

const home = () => import('../views/Home.vue')

const routes = [
  {
    path: '/',
    name: 'home',
    component: home,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

router.beforeEach(async (to, from, next) => {
  const token = ''
  console.log(from)
  const requiredAuth = to.matched.some((record) => record.meta.requiredAuth)
  if (requiredAuth && !token) next({ name: 'home' })
  else next()
})

export default router

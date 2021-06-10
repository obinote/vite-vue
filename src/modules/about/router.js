const moduleRoute = {
  path: '/about',
  name: 'about',
  component: () => import('./views/About.vue'),
}

export default (router) => {
  router.addRoute(moduleRoute)
}

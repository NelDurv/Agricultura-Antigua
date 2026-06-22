const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/pilares',
    name: 'Pilares',
    component: () => import('../views/PilaresView.vue')
  },
  {
    path: '/mitos',
    name: 'Mitos',
    component: () => import('../views/MitosView.vue')
  },
  {
    path: '/casos',
    name: 'Casos',
    component: () => import('../views/CasosView.vue')
  },
  {
    path: '/recursos',
    name: 'Recursos',
    component: () => import('../views/RecursosView.vue')
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: () => import('../views/ContactoView.vue')
  },
  {
    path: '/recetas',
    name: 'Recetas',
    component: () => import('../views/RecetasView.vue')
  },
  {
    path: '/ciencia',
    name: 'Ciencia',
    component: () => import('../views/CienciaView.vue')
  }
]

export default routes
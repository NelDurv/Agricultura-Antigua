import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue'),
    meta: { title: 'Inicio - Agricultura Antigua, para ¡HOY!' }
  },
  {
    path: '/pilares',
    name: 'Pilares',
    component: () => import('../views/PilaresView.vue'),
    meta: { title: 'Los 5 Pilares - Agricultura Antigua, para ¡HOY!' }
  },
  {
    path: '/pilares/:slug',
    name: 'Pilar',
    component: () => import('../views/PilarView.vue'),
    meta: { title: 'Pilar - Agricultura Antigua, para ¡HOY!' }
  },
  {
    path: '/mitos',
    name: 'Mitos',
    component: () => import('../views/MitosView.vue'),
    meta: { title: 'Los Grandes Mitos - Agricultura Antigua, para ¡HOY!' }
  },
  {
    path: '/mitos/:slug',
    name: 'Mito',
    component: () => import('../views/MitoView.vue'),
    meta: { title: 'Mito - Agricultura Antigua, para ¡HOY!' }
  },
  {
    path: '/recetas',
    name: 'Recetas',
    component: () => import('../views/RecetasView.vue'),
    meta: { title: 'Recetas y Protocolos - Agricultura Antigua, para ¡HOY!' }
  },
  {
    path: '/recetas/:slug',
    name: 'RecetaDetalle',
    component: () => import('../views/RecetasView.vue'),
    meta: { title: 'Receta - Agricultura Antigua, para ¡HOY!' }
  },
  {
    path: '/casos',
    name: 'Casos',
    component: () => import('../views/CasosView.vue'),
    meta: { title: 'Casos de Éxito - Agricultura Antigua, para ¡HOY!' }
  },
  {
    path: '/recursos',
    name: 'Recursos',
    component: () => import('../views/RecursosView.vue'),
    meta: { title: 'Recursos - Agricultura Antigua, para ¡HOY!' }
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: () => import('../views/ContactoView.vue'),
    meta: { title: 'Contacto - Agricultura Antigua, para ¡HOY!' }
  }
]

export default routes
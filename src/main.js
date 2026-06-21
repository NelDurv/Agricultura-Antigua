import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import HomeView from './views/HomeView.vue'
import PilaresView from './views/PilaresView.vue'
import MitosView from './views/MitosView.vue'

const routes = [
    { path: '/', component: HomeView },
    { path: '/pilares', component: PilaresView },
    { path: '/mitos', component: MitosView }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    console.log('🔄 Navegando a:', to.path)
    next()
})

const app = createApp(App)
app.use(router)
app.mount('#app')

console.log('✅ App montada con archivos .vue')
console.log('📋 Rutas:', routes.map(r => r.path))
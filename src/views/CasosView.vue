<template>
  <div style="padding: 2rem 0;">
    <div style="max-width: 1200px; margin: 0 auto; padding: 0 2rem;">
      <!-- Encabezado -->
      <div style="text-align: center; margin-bottom: 3rem; margin-top: 2rem;">
        <h1 style="font-family: 'Playfair Display', serif; font-size: 3rem; color: #1a1a1a;">🏆 Casos de Éxito</h1>
        <p style="color: #666; max-width: 600px; margin: 0 auto; font-size: 1.1rem;">Resultados reales que demuestran que la agricultura orgánica avanzada funciona</p>
      </div>

      <!-- Grid de Casos -->
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem;">
        <div v-for="caso in casos" :key="caso.id" style="background: white; border-radius: 16px; padding: 2rem; border-top: 6px solid #2d5a27; box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
            <span style="font-size: 3rem;">{{ caso.icono }}</span>
            <span style="background: #f5f0e8; padding: 0.3rem 1rem; border-radius: 50px; font-size: 0.8rem; font-weight: 700; color: #666;">{{ caso.cultivo }}</span>
          </div>
          <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 0.25rem;">{{ caso.titulo }}</h2>
          <p style="color: #666; margin-bottom: 1rem;">📍 {{ caso.ubicacion }}</p>
          <p style="color: #444; line-height: 1.8; margin-bottom: 1.5rem;">{{ caso.descripcion }}</p>
          <h4 style="font-size: 0.9rem; color: #666; margin-bottom: 0.5rem;">📊 Resultados:</h4>
          <ul style="list-style: none; padding: 0; margin: 0;">
            <li v-for="resultado in caso.resultados" :key="resultado" style="padding: 0.5rem 0; border-bottom: 1px solid #f5f5f5; font-size: 0.95rem; color: #444;">
              ✅ {{ resultado }}
            </li>
          </ul>
          <div style="margin-top: 1.5rem;">
            <router-link to="/" style="display: inline-block; padding: 0.5rem 1.5rem; background: #2d5a27; color: white; border-radius: 50px; text-decoration: none; font-weight: 600; font-size: 0.9rem; transition: all 0.3s;">
              Volver al inicio
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { CASOS_EXITO } from '@/data/contenido.js'

export default {
  name: 'CasosView',
  data() {
    return {
      casos: CASOS_EXITO
    }
  }
}
</script>
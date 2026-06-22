<template>
  <section style="padding: 4rem 0; background: #f5f0e8;">
    <div style="max-width: 1200px; margin: 0 auto; padding: 0 2rem;">
      <div style="text-align: center; margin-bottom: 3rem;">
        <h2 style="font-family: 'Playfair Display', serif; font-size: 2.5rem; color: #1a1a1a;">Casos de Éxito</h2>
        <p style="color: #666; max-width: 600px; margin: 0 auto;">Resultados reales que demuestran que funciona</p>
      </div>
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem;">
        <div v-for="caso in casos" :key="caso.id" style="background: white; border-radius: 12px; padding: 1.5rem; border-top: 4px solid #2d5a27; box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
            <span style="font-size: 2.5rem;">{{ caso.icono }}</span>
            <span style="font-size: 0.75rem; font-weight: 600; color: #666; background: #f5f5f5; padding: 0.2rem 0.8rem; border-radius: 50px;">{{ caso.cultivo }}</span>
          </div>
          <h3 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 0.25rem;">{{ caso.titulo }}</h3>
          <p style="font-size: 0.85rem; color: #666; margin-bottom: 0.75rem;">📍 {{ caso.ubicacion }}</p>
          <ul style="list-style: none; padding: 0; margin: 0;">
            <li v-for="resultado in caso.resultados" :key="resultado" style="font-size: 0.85rem; color: #444; padding: 0.2rem 0; border-bottom: 1px solid #f5f5f5;">
              ✓ {{ resultado }}
            </li>
          </ul>
        </div>
      </div>
      <div style="text-align: center; margin-top: 2rem;">
        <router-link to="/casos" style="display: inline-block; padding: 0.75rem 2rem; border: 2px solid #2d5a27; color: #2d5a27; border-radius: 50px; text-decoration: none; font-weight: 600;">Ver más casos →</router-link>
      </div>
    </div>
  </section>
</template>

<script>
import { CASOS_EXITO } from '@/data/contenido.js'

export default {
  name: 'SeccionCasos',
  data() {
    return {
      casos: CASOS_EXITO
    }
  }
}
</script>
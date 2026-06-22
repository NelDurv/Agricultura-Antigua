<template>
  <section style="padding: 4rem 0; background: #f5f0e8;">
    <div style="max-width: 1200px; margin: 0 auto; padding: 0 2rem;">
      <div style="text-align: center; margin-bottom: 3rem;">
        <h2 style="font-family: 'Playfair Display', serif; font-size: 2.5rem; color: #1a1a1a;">Los 5 Pilares</h2>
        <p style="color: #666; max-width: 600px; margin: 0 auto;">El conocimiento ancestral potenciado con ciencia de frontera</p>
      </div>
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem;">
        <div v-for="pilar in pilares" :key="pilar.id" style="background: white; border-radius: 12px; padding: 2rem; border-top: 4px solid #2d5a27; box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
          <div style="font-size: 2.5rem; margin-bottom: 1rem;">{{ pilar.icono }}</div>
          <h3 style="font-size: 1.3rem; font-weight: 700; margin-bottom: 0.25rem;">{{ pilar.titulo }}</h3>
          <p style="font-size: 0.85rem; color: #666; margin-bottom: 0.75rem;">{{ pilar.subtitulo }}</p>
          <p style="font-size: 0.95rem; color: #444; line-height: 1.6;">{{ pilar.descripcion }}</p>
        </div>
      </div>
      <div style="text-align: center; margin-top: 2rem;">
        <router-link to="/pilares" style="display: inline-block; padding: 0.75rem 2rem; border: 2px solid #2d5a27; color: #2d5a27; border-radius: 50px; text-decoration: none; font-weight: 600;">Ver todos los pilares →</router-link>
      </div>
    </div>
  </section>
</template>

<script>
import { PILARES } from '@/data/contenido.js'

export default {
  name: 'SeccionPilares',
  data() {
    return {
      pilares: PILARES
    }
  }
}
</script>
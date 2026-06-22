<template>
  <div style="padding: 2rem 0;">
    <div style="max-width: 1200px; margin: 0 auto; padding: 0 2rem;">
      <!-- Encabezado -->
      <div style="text-align: center; margin-bottom: 3rem; margin-top: 2rem;">
        <h1 style="font-family: 'Playfair Display', serif; font-size: 3rem; color: #1a1a1a;">🌱 Los 5 Pilares</h1>
        <p style="color: #666; max-width: 600px; margin: 0 auto; font-size: 1.1rem;">El conocimiento ancestral potenciado con ciencia de frontera</p>
      </div>

      <!-- Grid de Pilares -->
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem;">
        <div v-for="pilar in pilares" :key="pilar.id" style="background: white; border-radius: 16px; padding: 2rem; border-top: 6px solid #2d5a27; box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
          <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
            <span style="font-size: 3rem;">{{ pilar.icono }}</span>
            <div>
              <h2 style="font-size: 1.5rem; font-weight: 700; margin: 0;">{{ pilar.titulo }}</h2>
              <p style="color: #666; margin: 0; font-size: 0.95rem;">{{ pilar.subtitulo }}</p>
            </div>
          </div>
          <p style="color: #444; line-height: 1.8; margin-bottom: 1.5rem;">{{ pilar.descripcion }}</p>
          <h4 style="font-size: 0.9rem; color: #666; margin-bottom: 0.5rem;">📌 Temas incluidos:</h4>
          <ul style="list-style: none; padding: 0; display: flex; flex-wrap: wrap; gap: 0.5rem;">
            <li v-for="tema in pilar.temas" :key="tema" style="background: #f5f0e8; padding: 0.3rem 1rem; border-radius: 50px; font-size: 0.8rem; color: #444;">
              {{ tema }}
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
import { PILARES } from '@/data/contenido.js'

export default {
  name: 'PilaresView',
  data() {
    return {
      pilares: PILARES
    }
  }
}
</script>
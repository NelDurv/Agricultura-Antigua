<template>
  <div style="padding: 2rem 0;">
    <div style="max-width: 1200px; margin: 0 auto; padding: 0 2rem;">
      <div style="text-align: center; margin-bottom: 3rem; margin-top: 2rem;">
        <h1 style="font-family: 'Playfair Display', serif; font-size: 3rem; color: #1a1a1a;">🧪 Recetas y Protocolos</h1>
        <p style="color: #666; max-width: 600px; margin: 0 auto; font-size: 1.1rem;">Bioinsumos, caldos minerales y tratamientos para aplicar en el campo</p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem;">
        <div v-for="receta in recetas" :key="receta.id" style="background: white; border-radius: 16px; padding: 2rem; border-top: 6px solid #4a7a43; box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
          <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
            <span style="font-size: 2.5rem;">{{ receta.icono }}</span>
            <div>
              <span style="font-size: 0.75rem; font-weight: 600; color: #4a7a43; text-transform: uppercase;">{{ receta.categoria }}</span>
              <h2 style="font-size: 1.3rem; font-weight: 700; margin: 0;">{{ receta.titulo }}</h2>
            </div>
          </div>
          <p style="color: #444; line-height: 1.8;">{{ receta.descripcion }}</p>
          <p style="font-size: 0.85rem; color: #666;">⏱️ {{ receta.tiempo }}</p>
          <div style="margin-top: 1rem;">
            <h4 style="font-size: 0.9rem; color: #666;">Ingredientes:</h4>
            <ul style="list-style: none; padding: 0;">
              <li v-for="ing in receta.ingredientes" :key="ing" style="padding: 0.2rem 0; font-size: 0.9rem; color: #444;">• {{ ing }}</li>
            </ul>
          </div>
        </div>
      </div>

      <div style="text-align: center; margin-top: 3rem;">
        <router-link to="/" style="display: inline-block; padding: 0.75rem 2rem; background: #2d5a27; color: white; border-radius: 50px; text-decoration: none; font-weight: 600; transition: all 0.3s;">
          ← Volver al inicio
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { RECETAS } from '@/data/contenido.js'

export default {
  name: 'RecetasView',
  data() {
    return {
      recetas: RECETAS
    }
  }
}
</script>
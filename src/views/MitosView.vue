<template>
  <div style="padding: 2rem 0;">
    <div style="max-width: 1200px; margin: 0 auto; padding: 0 2rem;">
      <!-- Encabezado -->
      <div style="text-align: center; margin-bottom: 3rem; margin-top: 2rem;">
        <h1 style="font-family: 'Playfair Display', serif; font-size: 3rem; color: #1a1a1a;">🧠 Los Grandes Mitos de la Agricultura</h1>
        <p style="color: #666; max-width: 600px; margin: 0 auto; font-size: 1.1rem;">Desmintiendo creencias erróneas que limitan la productividad del campo</p>
      </div>

      <!-- Grid de Mitos -->
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem;">
        <div v-for="(mito, index) in mitos" :key="mito.id" style="background: white; border-radius: 16px; padding: 2rem; border-left: 6px solid #2d5a27; box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
            <span style="font-size: 2.5rem;">{{ mito.icono }}</span>
            <span style="background: #f5f0e8; padding: 0.3rem 1rem; border-radius: 50px; font-size: 0.8rem; font-weight: 700; color: #666;">Mito #{{ index + 1 }}</span>
          </div>
          <h2 style="font-size: 1.3rem; font-weight: 700; margin-bottom: 0.5rem;">{{ mito.titulo }}</h2>
          <div style="background: #f5f5f5; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
            <p style="font-style: italic; color: #666; margin: 0; font-size: 0.95rem;">{{ mito.mito }}</p>
          </div>
          <div style="background: #e8f0e6; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
            <p style="font-weight: 600; color: #2d5a27; margin: 0; font-size: 0.95rem;">✅ Realidad: {{ mito.realidad }}</p>
          </div>
          <div style="background: #f5eee6; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
            <p style="font-weight: 600; color: #C49B6C; margin: 0; font-size: 0.95rem;">🔬 Evidencia: {{ mito.evidencia }}</p>
          </div>
          <div style="background: #1a3b1a; padding: 1rem; border-radius: 8px;">
            <p style="color: white; margin: 0; font-size: 0.95rem;">💡 Acción: {{ mito.accion }}</p>
          </div>
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
import { MITOS } from '@/data/contenido.js'

export default {
  name: 'MitosView',
  data() {
    return {
      mitos: MITOS
    }
  }
}
</script>
<template>
  <section style="padding: 4rem 0;">
    <div style="max-width: 1200px; margin: 0 auto; padding: 0 2rem;">
      <div style="text-align: center; margin-bottom: 3rem;">
        <h2 style="font-family: 'Playfair Display', serif; font-size: 2.5rem; color: #1a1a1a;">Los Grandes Mitos de la Agricultura</h2>
        <p style="color: #666; max-width: 600px; margin: 0 auto;">Desmintiendo creencias que limitan la productividad</p>
      </div>
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem;">
        <div v-for="(mito, index) in mitos.slice(0, 6)" :key="mito.id" style="background: white; border-radius: 12px; padding: 1.5rem; border-left: 4px solid #2d5a27; box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
            <span style="font-size: 1.8rem;">{{ mito.icono }}</span>
            <span style="font-size: 0.8rem; font-weight: 700; color: #999; background: #f5f5f5; padding: 0.2rem 0.7rem; border-radius: 50px;">#{{ index + 1 }}</span>
          </div>
          <h3 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 0.5rem;">{{ mito.titulo }}</h3>
          <p style="font-size: 0.9rem; color: #666; line-height: 1.6; font-style: italic;">{{ mito.mito }}</p>
        </div>
      </div>
      <div style="text-align: center; margin-top: 2rem;">
        <router-link to="/mitos" style="display: inline-block; padding: 0.75rem 2rem; background: #2d5a27; color: white; border-radius: 50px; text-decoration: none; font-weight: 600;">Ver todos los mitos →</router-link>
      </div>
    </div>
  </section>
</template>

<script>
import { MITOS } from '@/data/contenido.js'

export default {
  name: 'SeccionMitos',
  data() {
    return {
      mitos: MITOS
    }
  }
}
</script>
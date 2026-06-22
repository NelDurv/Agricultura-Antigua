<template>
  <section style="padding: 3rem 0;">
    <div style="max-width: 1200px; margin: 0 auto; padding: 0 2rem;">
      <div style="text-align: center; margin-bottom: 3rem;">
        <h2 style="font-family: 'Playfair Display', serif; font-size: 2.5rem; color: #1a1a1a;">La Ciencia en Números</h2>
        <p style="color: #666; max-width: 600px; margin: 0 auto;">Datos que transforman la manera de entender la agricultura</p>
      </div>
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem;">
        <div v-for="num in numeros" :key="num.label" style="background: white; padding: 1.5rem; border-radius: 12px; text-align: center; box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
          <span style="display: block; font-family: 'Playfair Display', serif; font-size: 2.5rem; font-weight: 800; color: #2d5a27;">{{ num.valor }}</span>
          <p style="font-size: 0.85rem; color: #666; margin: 0.5rem 0 0 0;">{{ num.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { NUMEROS_CLAVE } from '@/data/contenido.js'

export default {
  name: 'SeccionNumeros',
  data() {
    return {
      numeros: NUMEROS_CLAVE.slice(0, 4)
    }
  }
}
</script>
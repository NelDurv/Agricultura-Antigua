<template>
  <section class="seccion-numeros">
    <div class="container">
      <div class="section-title scroll-animate">
        <h2>La Ciencia en Números</h2>
        <p>Datos que transforman la manera de entender la agricultura</p>
      </div>
      <div class="grid-4">
        <div v-for="num in numeros" :key="num.label" class="card numero-card scroll-animate">
          <span class="numero-valor">{{ num.valor }}</span>
          <p class="numero-label">{{ num.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { NUMEROS_CLAVE } from '@/data/contenido.js'

const numeros = NUMEROS_CLAVE
</script>

<style scoped>
.seccion-numeros {
  padding: 3rem 0;
}

.numero-card {
  text-align: center;
  padding: 1.5rem 1rem;
}

.numero-valor {
  display: block;
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  font-weight: 800;
  color: var(--color-primary);
}

.numero-label {
  font-size: 0.85rem;
  color: var(--color-gray-600);
  margin: 0.5rem 0 0 0;
}
</style>

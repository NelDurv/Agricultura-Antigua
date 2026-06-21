<template>
  <section class="seccion-pilares">
    <div class="container">
      <div class="section-title scroll-animate">
        <h2>Los 5 Pilares</h2>
        <p>El conocimiento ancestral potenciado con ciencia de frontera</p>
      </div>
      <div class="grid-3">
        <TarjetaPilar
          v-for="pilar in pilares"
          :key="pilar.id"
          :pilar="pilar"
          class="scroll-animate"
        />
      </div>
      <div class="text-center mt-3 scroll-animate">
        <router-link to="/pilares" class="btn btn-outline">Ver todos los pilares →</router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import TarjetaPilar from '@/components/shared/TarjetaPilar.vue'
import { PILARES } from '@/data/contenido.js'

const pilares = PILARES
</script>

<template>
  <section class="seccion-casos">
    <div class="container">
      <div class="section-title scroll-animate">
        <h2>Casos de Éxito</h2>
        <p>Resultados reales que demuestran que la agricultura orgánica avanzada funciona</p>
      </div>
      <div class="grid-3">
        <TarjetaCaso v-for="caso in casos" :key="caso.id" :caso="caso" class="scroll-animate" />
      </div>
      <div class="text-center mt-3 scroll-animate">
        <router-link to="/casos" class="btn btn-outline">Ver más casos →</router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import TarjetaCaso from '@/components/shared/TarjetaCaso.vue'
import { CASOS_EXITO } from '@/data/contenido.js'

const casos = CASOS_EXITO
</script>

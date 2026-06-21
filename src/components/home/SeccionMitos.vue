<template>
  <section class="seccion-mitos">
    <div class="container">
      <div class="section-title scroll-animate">
        <h2>Los Grandes Mitos de la Agricultura</h2>
        <p>Desmintiendo creencias que limitan la productividad</p>
      </div>
      <div class="grid-3">
        <TarjetaMito
          v-for="(mito, index) in mitos.slice(0, 6)"
          :key="mito.id"
          :mito="mito"
          :index="index"
          class="scroll-animate"
        />
      </div>
      <div class="text-center mt-3 scroll-animate">
        <router-link to="/mitos" class="btn btn-primary">Ver todos los mitos →</router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import TarjetaMito from '@/components/shared/TarjetaMito.vue'
import { MITOS } from '@/data/contenido.js'

const mitos = MITOS
</script>

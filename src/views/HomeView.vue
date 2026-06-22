<template>
  <div>
    <Hero />
    <SeccionNumeros />
    <SeccionPilares />
    <SeccionMitos />
    <SeccionCasos />
  </div>
</template>

<script>
import Hero from '@/components/layout/Hero.vue'
import SeccionNumeros from '@/components/home/SeccionNumeros.vue'
import SeccionPilares from '@/components/home/SeccionPilares.vue'
import SeccionMitos from '@/components/home/SeccionMitos.vue'
import SeccionCasos from '@/components/home/SeccionCasos.vue'

export default {
  name: 'HomeView',
  components: {
    Hero,
    SeccionNumeros,
    SeccionPilares,
    SeccionMitos,
    SeccionCasos
  }
}
</script>
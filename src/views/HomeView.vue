<template>
  <div>
    <Hero />

    <!-- Números -->
    <section class="py-5">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="display-5 fw-bold font-playfair">La Ciencia en Números</h2>
          <p class="text-muted">Datos que transforman la manera de entender la agricultura</p>
        </div>
        <div class="row g-4">
          <div v-for="num in numeros" :key="num.label" class="col-6 col-md-3">
            <div class="card h-100 text-center border-0 shadow-sm p-3 animate__animated animate__fadeInUp" :style="{ animationDelay: delay(index) }">
              <span class="display-4 fw-bold text-success">{{ num.valor }}</span>
              <p class="text-muted small mb-0">{{ num.label }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pilares -->
    <section class="py-5 bg-light">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="display-5 fw-bold font-playfair">Los 5 Pilares</h2>
          <p class="text-muted">El conocimiento ancestral potenciado con ciencia de frontera</p>
        </div>
        <div class="row g-4">
          <div v-for="(pilar, index) in pilares" :key="pilar.id" class="col-md-6 col-lg-4">
            <div class="card h-100 border-0 shadow-sm hover-lift animate__animated animate__fadeInUp" :style="{ animationDelay: delay(index) }">
              <div class="card-body">
                <div class="display-4 mb-3">{{ pilar.icono }}</div>
                <h5 class="card-title fw-bold">{{ pilar.titulo }}</h5>
                <p class="card-text text-muted small">{{ pilar.subtitulo }}</p>
                <p class="card-text text-secondary small">{{ pilar.descripcion }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center mt-4">
          <router-link to="/pilares" class="btn btn-outline-success rounded-pill px-4">
            Ver todos los pilares →
          </router-link>
        </div>
      </div>
    </section>

    <!-- Mitos -->
    <section class="py-5">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="display-5 fw-bold font-playfair">Los Grandes Mitos</h2>
          <p class="text-muted">Desmintiendo creencias que limitan la productividad</p>
        </div>
        <div class="row g-4">
          <div v-for="(mito, index) in mitos.slice(0, 6)" :key="mito.id" class="col-md-6 col-lg-4">
            <div class="card h-100 border-0 shadow-sm hover-lift animate__animated animate__fadeInUp" :style="{ animationDelay: delay(index) }">
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-start mb-2">
                  <span class="display-4">{{ mito.icono }}</span>
                  <span class="badge bg-light text-dark rounded-pill">#{{ index + 1 }}</span>
                </div>
                <h5 class="card-title fw-bold">{{ mito.titulo }}</h5>
                <p class="card-text text-muted small fst-italic">{{ mito.mito }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center mt-4">
          <router-link to="/mitos" class="btn btn-success rounded-pill px-4">
            Ver todos los mitos →
          </router-link>
        </div>
      </div>
    </section>

    <!-- Casos -->
    <section class="py-5 bg-light">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="display-5 fw-bold font-playfair">Casos de Éxito</h2>
          <p class="text-muted">Resultados reales que demuestran que funciona</p>
        </div>
        <div class="row g-4">
          <div v-for="(caso, index) in casos" :key="caso.id" class="col-md-4">
            <div class="card h-100 border-0 shadow-sm hover-lift animate__animated animate__fadeInUp" :style="{ animationDelay: delay(index) }">
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-start mb-2">
                  <span class="display-4">{{ caso.icono }}</span>
                  <span class="badge bg-success rounded-pill">{{ caso.cultivo }}</span>
                </div>
                <h5 class="card-title fw-bold">{{ caso.titulo }}</h5>
                <p class="card-text text-muted small"><i class="bi bi-geo-alt"></i> {{ caso.ubicacion }}</p>
                <ul class="list-unstyled small">
                  <li v-for="res in caso.resultados.slice(0, 2)" :key="res" class="text-secondary">
                    ✓ {{ res }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center mt-4">
          <router-link to="/casos" class="btn btn-outline-success rounded-pill px-4">
            Ver más casos →
          </router-link>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-5 cta-section">
      <div class="container text-center">
        <h2 class="display-5 fw-bold text-white font-playfair">¿Listo para transformar tu agricultura?</h2>
        <p class="text-white-50 mx-auto" style="max-width: 600px;">
          Descubre cómo la ciencia de frontera puede ayudarte a producir más con menos, regenerando tu suelo.
        </p>
        <router-link to="/recetas" class="btn btn-warning btn-lg rounded-pill px-5 py-3 fw-semibold mt-3 shadow-lg">
          🧪 Empieza con las recetas
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
import Hero from '@/components/layout/Hero.vue'
import { NUMEROS_CLAVE, PILARES, MITOS, CASOS_EXITO } from '@/data/contenido.js'

export default {
  name: 'HomeView',
  components: {
    Hero
  },
  data() {
    return {
      numeros: NUMEROS_CLAVE.slice(0, 4),
      pilares: PILARES,
      mitos: MITOS,
      casos: CASOS_EXITO
    }
  },
  methods: {
    delay(index) {
      return `${index * 0.1}s`
    }
  }
}
</script>

<style scoped>
.font-playfair {
  font-family: 'Playfair Display', serif;
}

.hover-lift {
  transition: all 0.3s ease;
  cursor: default;
}

.hover-lift:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(0,0,0,0.1) !important;
}

.cta-section {
  background: linear-gradient(135deg, #1a3b1a 0%, #2d5a27 100%);
}
</style>
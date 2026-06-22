<template>
  <div class="pilar-view">
    <!-- Encabezado del pilar -->
    <section class="pilar-header" :style="{ backgroundColor: pilar.bgColor }">
      <div class="container py-5">
        <div class="row align-items-center">
          <div class="col-lg-8">
            <div class="animate__animated animate__fadeInUp">
              <span
                class="pilar-badge d-inline-block px-3 py-1 rounded-pill mb-3"
                :style="{ backgroundColor: pilar.color, color: '#fff' }"
              >
                {{ pilar.subtitulo }}
              </span>
              <h1 class="display-3 fw-bold mb-3" :style="{ color: pilar.color }">
                {{ pilar.icono }} {{ pilar.titulo }}
              </h1>
              <p class="fs-5 text-muted">{{ pilar.descripcion }}</p>
            </div>
          </div>
          <div class="col-lg-4 text-center d-none d-lg-block">
            <div class="animate__animated animate__fadeIn animate__delay-1s">
              <span class="display-1" style="font-size: 6rem">{{ pilar.icono }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Lista de temas -->
    <section class="py-5">
      <div class="container">
        <div class="row mb-4">
          <div class="col-12">
            <h2 class="display-6 fw-bold">📚 Temas del Pilar</h2>
            <p class="text-muted">Explora cada uno de los temas que componen este pilar</p>
          </div>
        </div>

        <div class="row g-4">
          <div v-for="(tema, index) in pilar.temas" :key="index" class="col-md-6 col-lg-4">
            <div
              class="card tema-card h-100 border-0 shadow-sm hover-lift animate__animated animate__fadeInUp"
              :style="{ animationDelay: `${index * 0.1}s` }"
            >
              <div class="card-body">
                <div class="d-flex align-items-start gap-3">
                  <span
                    class="tema-number rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                    :style="{ backgroundColor: pilar.color, color: '#fff' }"
                  >
                    {{ index + 1 }}
                  </span>
                  <div>
                    <h5 class="card-title fw-semibold mb-2">{{ tema }}</h5>
                    <p class="card-text text-muted small">
                      <!-- Aquí puedes agregar subtemas si los tienes -->
                      {{ getSubtemas(tema) }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Botón de navegación -->
        <div class="text-center mt-5">
          <router-link to="/pilares" class="btn btn-outline-secondary rounded-pill px-4">
            ← Volver a todos los pilares
          </router-link>
        </div>
      </div>
    </section>

    <!-- Sección de recursos relacionados -->
    <section class="py-5 bg-light">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center mb-4">
            <h3 class="fw-bold">🔗 Recursos Relacionados</h3>
            <p class="text-muted">Contenido que complementa este pilar</p>
          </div>
        </div>
        <div class="row g-4">
          <div class="col-md-4">
            <div class="card h-100 border-0 shadow-sm">
              <div class="card-body text-center">
                <span class="display-4">🧪</span>
                <h5 class="card-title">Recetas Prácticas</h5>
                <p class="card-text text-muted small">
                  Aplica los conceptos con recetas paso a paso
                </p>
                <router-link to="/recetas" class="btn btn-sm btn-outline-success rounded-pill">
                  Ver recetas
                </router-link>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card h-100 border-0 shadow-sm">
              <div class="card-body text-center">
                <span class="display-4">📖</span>
                <h5 class="card-title">Mitos Relacionados</h5>
                <p class="card-text text-muted small">
                  Desmiente creencias erróneas sobre este tema
                </p>
                <router-link to="/mitos" class="btn btn-sm btn-outline-success rounded-pill">
                  Ver mitos
                </router-link>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card h-100 border-0 shadow-sm">
              <div class="card-body text-center">
                <span class="display-4">📊</span>
                <h5 class="card-title">Casos de Éxito</h5>
                <p class="card-text text-muted small">
                  Resultados reales de aplicar estos principios
                </p>
                <router-link to="/casos" class="btn btn-sm btn-outline-success rounded-pill">
                  Ver casos
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { PILARES } from '@/data/contenido.js'

export default {
  name: 'PilarView',
  data() {
    return {
      pilar: null,
      loading: true,
    }
  },
  mounted() {
    this.loadPilar()
  },
  watch: {
    '$route.params.id'() {
      this.loadPilar()
    },
  },
  methods: {
    loadPilar() {
      const id = this.$route.params.id
      this.pilar = PILARES.find((p) => p.id === id)
      if (!this.pilar) {
        this.$router.push('/pilares')
      }
      this.loading = false
    },
    getSubtemas(tema) {
      // Esta función puede expandirse para mostrar subtemas específicos
      // Por ahora devuelve un placeholder
      const subtemasMap = {
        'Microbiología de Consorcio (600 microorganismos del bosque)':
          'Bacterias, hongos, actinomicetos trabajando en equipo',
        'Descompactación Mecánica y Biológica': 'Arado Yomex, inyección de vida, raíces respiran',
        'Energía y ORP (Potencial Óxido-Reducción)':
          'Medición de energía del suelo, protección contra plagas',
        'Salud Física del Suelo (porosidad, oxígeno)': 'Estructura, agregados, permeabilidad',
        'Infiltración y Retención de Agua (1% MO = 144,000 L/ha)':
          'Esponja de agua, refrigerante del suelo',
        'Ciclos Físico-Químico-Biológicos': 'Interacciones que mantienen el suelo vivo',
        'IASS - Índice de Sustentabilidad del Suelo': 'Cuantificación del patrimonio suelo',
      }
      return subtemasMap[tema] || 'Explora este tema en profundidad'
    },
  },
}
</script>

<style scoped>
.pilar-header {
  padding: 4rem 0 2rem;
  border-bottom: 4px solid #2d5a27;
}

.pilar-badge {
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.tema-card {
  transition: all 0.3s ease;
  cursor: default;
}

.tema-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1) !important;
}

.tema-number {
  width: 40px;
  height: 40px;
  font-size: 1rem;
  font-weight: 700;
}

.hover-lift {
  transition: all 0.3s ease;
}

.hover-lift:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1) !important;
}

@media (max-width: 768px) {
  .pilar-header {
    padding: 2rem 0 1rem;
  }
  .display-3 {
    font-size: 2.5rem;
  }
}
</style>

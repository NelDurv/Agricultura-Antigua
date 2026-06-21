<template>
  <div class="view-pilar" v-if="pilar">
    <section class="section">
      <div class="container">
        <router-link to="/pilares" class="btn-back">← Volver a los pilares</router-link>

        <div class="scroll-animate">
          <div class="pilar-header">
            <span class="pilar-icon" :style="{ background: pilar.bgColor }">
              {{ pilar.icono }}
            </span>
            <div>
              <span class="pilar-badge" :style="{ background: pilar.color, color: '#fff' }">
                Pilar
              </span>
              <h1 class="pilar-title">{{ pilar.titulo }}</h1>
              <p class="pilar-subtitle">{{ pilar.subtitulo }}</p>
            </div>
          </div>
        </div>

        <!-- Descripción -->
        <div class="card pilar-desc scroll-animate">
          <p>{{ pilar.descripcion }}</p>
        </div>

        <!-- Temas -->
        <h2 style="font-family: var(--font-display); margin: 2rem 0 1rem" class="scroll-animate">
          Temas de este pilar
        </h2>
        <div class="grid-2 scroll-animate">
          <div v-for="tema in pilar.temas" :key="tema" class="card tema-card">
            <span class="tema-icon">📌</span>
            <span class="tema-texto">{{ tema }}</span>
          </div>
        </div>

        <!-- Conexión con otros pilares -->
        <div
          class="card scroll-animate"
          style="background: var(--color-gray-100); margin-top: 2rem"
        >
          <h3 style="font-family: var(--font-display)">🔄 Conexión con otros pilares</h3>
          <p style="color: var(--color-gray-600)">
            Este pilar se conecta con los demás a través de un enfoque integral. La salud del suelo
            afecta la nutrición vegetal, que depende de bioinsumos, que a su vez se basan en la
            sabiduría ancestral y se potencian con ciencia moderna.
          </p>
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 0.5rem">
            <span v-for="p in otrosPilares" :key="p.id" class="pilar-tag">
              {{ p.icono }} {{ p.titulo }}
            </span>
          </div>
        </div>

        <!-- Recetas relacionadas -->
        <div v-if="recetasRelacionadas.length > 0" class="scroll-animate" style="margin-top: 2rem">
          <h3 style="font-family: var(--font-display)">🧪 Recetas relacionadas</h3>
          <div class="grid-2" style="margin-top: 1rem">
            <TarjetaReceta
              v-for="receta in recetasRelacionadas"
              :key="receta.id"
              :receta="receta"
            />
          </div>
        </div>

        <!-- Navegación -->
        <div class="pilar-navegacion scroll-animate">
          <router-link
            v-if="pilarAnterior"
            :to="`/pilares/${pilarAnterior.id}`"
            class="btn btn-outline"
          >
            ← {{ pilarAnterior.titulo }}
          </router-link>
          <router-link to="/pilares" class="btn btn-primary"> Ver todos los pilares </router-link>
          <router-link
            v-if="pilarSiguiente"
            :to="`/pilares/${pilarSiguiente.id}`"
            class="btn btn-outline"
          >
            {{ pilarSiguiente.titulo }} →
          </router-link>
        </div>
      </div>
    </section>
  </div>

  <div v-else class="view-pilar">
    <section class="section">
      <div class="container">
        <p>Pilar no encontrado</p>
        <router-link to="/pilares" class="btn btn-primary">Volver a los pilares</router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { PILARES, RECETAS } from '@/data/contenido.js'
import TarjetaReceta from '@/components/shared/TarjetaReceta.vue'

const route = useRoute()
const pilar = ref(null)
const pilarAnterior = ref(null)
const pilarSiguiente = ref(null)
const recetasRelacionadas = ref([])

onMounted(() => {
  const slug = route.params.slug
  const idx = PILARES.findIndex((p) => p.id === slug)

  if (idx !== -1) {
    pilar.value = PILARES[idx]
    pilarAnterior.value = idx > 0 ? PILARES[idx - 1] : null
    pilarSiguiente.value = idx < PILARES.length - 1 ? PILARES[idx + 1] : null

    // Recetas relacionadas (simulación: todas las recetas)
    recetasRelacionadas.value = RECETAS.slice(0, 2)
  }
})

const otrosPilares = computed(() => {
  return PILARES.filter((p) => p.id !== pilar.value?.id)
})
</script>

<style scoped>
.btn-back {
  display: inline-block;
  margin-bottom: 2rem;
  font-weight: 600;
  color: var(--color-gray-600);
  transition: color var(--transition);
}

.btn-back:hover {
  color: var(--color-primary);
}

.pilar-header {
  display: flex;
  gap: 1.5rem;
  align-items: center;
  margin-bottom: 2rem;
}

.pilar-icon {
  font-size: 3.5rem;
  width: 80px;
  height: 80px;
  border-radius: var(--radius);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.pilar-badge {
  display: inline-block;
  padding: 0.2rem 0.8rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.pilar-title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 3.5vw, 3rem);
  font-weight: 700;
  color: var(--color-gray-900);
  margin: 0.25rem 0 0;
}

.pilar-subtitle {
  font-size: 1.1rem;
  color: var(--color-gray-600);
  margin: 0;
}

.pilar-desc {
  padding: 2rem;
  font-size: 1.05rem;
  line-height: 1.8;
}

.tema-card {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.25rem;
  transition: all var(--transition);
}

.tema-card:hover {
  transform: translateX(4px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.tema-icon {
  font-size: 1.2rem;
}

.tema-texto {
  font-weight: 500;
}

.pilar-tag {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: var(--color-white);
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--color-gray-600);
  border: 1px solid var(--color-gray-200);
}

.pilar-navegacion {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid var(--color-gray-200);
}

@media (max-width: 640px) {
  .pilar-header {
    flex-direction: column;
    text-align: center;
  }

  .pilar-navegacion {
    flex-direction: column;
    align-items: stretch;
  }

  .pilar-navegacion .btn {
    justify-content: center;
  }

  .pilar-desc {
    padding: 1.25rem;
  }
}
</style>

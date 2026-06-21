<template>
  <div class="view-mito" v-if="mito">
    <section class="section">
      <div class="container">
        <router-link to="/mitos" class="btn-back">← Volver a los mitos</router-link>

        <div class="scroll-animate">
          <div class="mito-header">
            <span class="mito-icon">{{ mito.icono }}</span>
            <span class="mito-number">Mito #{{ index + 1 }}</span>
          </div>
          <h1 class="mito-title">{{ mito.titulo }}</h1>
        </div>

        <!-- El Mito -->
        <div
          class="card mito-card scroll-animate"
          style="border-left: 4px solid var(--color-gray-300)"
        >
          <h3 style="font-family: var(--font-display); color: var(--color-gray-600)">❓ El Mito</h3>
          <p class="mito-text">{{ mito.mito }}</p>
        </div>

        <!-- La Realidad -->
        <div
          class="card mito-card scroll-animate"
          style="border-left: 4px solid var(--color-primary)"
        >
          <h3 style="font-family: var(--font-display); color: var(--color-primary)">
            ✅ La Realidad
          </h3>
          <p class="realidad-text">{{ mito.realidad }}</p>
        </div>

        <!-- La Evidencia -->
        <div class="card mito-card scroll-animate" style="border-left: 4px solid var(--color-gold)">
          <h3 style="font-family: var(--font-display); color: var(--color-gold)">
            🔬 La Evidencia
          </h3>
          <p>{{ mito.evidencia }}</p>
          <div v-if="mito.datos" style="margin-top: 1rem; overflow-x: auto">
            <table class="tabla-evidencia">
              <thead>
                <tr>
                  <th v-for="col in mito.datos.headers" :key="col">{{ col }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="fila in mito.datos.rows" :key="fila[0]">
                  <td v-for="celda in fila" :key="celda">{{ celda }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- La Acción -->
        <div
          class="card mito-card scroll-animate"
          style="
            border-left: 4px solid var(--color-primary-dark);
            background: var(--color-gray-100);
          "
        >
          <h3 style="font-family: var(--font-display); color: var(--color-primary-dark)">
            💡 La Acción
          </h3>
          <p class="accion-text">{{ mito.accion }}</p>
          <div v-if="mito.pasos" style="margin-top: 1rem">
            <h4 style="font-size: 1rem">Pasos prácticos:</h4>
            <ol style="padding-left: 1.5rem">
              <li v-for="paso in mito.pasos" :key="paso" style="margin-bottom: 0.5rem">
                {{ paso }}
              </li>
            </ol>
          </div>
        </div>

        <!-- Navegación entre mitos -->
        <div class="mito-navegacion scroll-animate">
          <router-link
            v-if="mitoAnterior"
            :to="`/mitos/${mitoAnterior.id}`"
            class="btn btn-outline"
          >
            ← {{ mitoAnterior.titulo }}
          </router-link>
          <router-link to="/mitos" class="btn btn-primary"> Ver todos los mitos </router-link>
          <router-link
            v-if="mitoSiguiente"
            :to="`/mitos/${mitoSiguiente.id}`"
            class="btn btn-outline"
          >
            {{ mitoSiguiente.titulo }} →
          </router-link>
        </div>
      </div>
    </section>
  </div>

  <div v-else class="view-mito">
    <section class="section">
      <div class="container">
        <p>Mito no encontrado</p>
        <router-link to="/mitos" class="btn btn-primary">Volver a los mitos</router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { MITOS } from '@/data/contenido.js'

const route = useRoute()
const mito = ref(null)
const index = ref(-1)
const mitoAnterior = ref(null)
const mitoSiguiente = ref(null)

onMounted(() => {
  const slug = route.params.slug
  const idx = MITOS.findIndex((m) => m.id === slug)

  if (idx !== -1) {
    mito.value = MITOS[idx]
    index.value = idx
    mitoAnterior.value = idx > 0 ? MITOS[idx - 1] : null
    mitoSiguiente.value = idx < MITOS.length - 1 ? MITOS[idx + 1] : null
  }
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

.mito-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.5rem;
}

.mito-icon {
  font-size: 3rem;
}

.mito-number {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--color-gray-400);
  background: var(--color-gray-100);
  padding: 0.3rem 1rem;
  border-radius: 50px;
}

.mito-title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 3.5vw, 3rem);
  font-weight: 700;
  color: var(--color-gray-900);
  margin-bottom: 2rem;
}

.mito-card {
  padding: 2rem;
  margin-bottom: 1.5rem;
}

.mito-text {
  font-size: 1.1rem;
  font-style: italic;
  color: var(--color-gray-600);
  margin: 0;
}

.realidad-text {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-primary);
  margin: 0;
}

.accion-text {
  font-size: 1.05rem;
  color: var(--color-gray-800);
  margin: 0;
}

.tabla-evidencia {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;
}

.tabla-evidencia th {
  background: var(--color-primary);
  color: var(--color-white);
  padding: 0.5rem 1rem;
  text-align: left;
}

.tabla-evidencia td {
  padding: 0.5rem 1rem;
  border-bottom: 1px solid var(--color-gray-200);
}

.tabla-evidencia tr:hover td {
  background: var(--color-gray-50);
}

.mito-navegacion {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid var(--color-gray-200);
}

@media (max-width: 640px) {
  .mito-navegacion {
    flex-direction: column;
    align-items: stretch;
  }

  .mito-navegacion .btn {
    justify-content: center;
  }

  .mito-card {
    padding: 1.25rem;
  }
}
</style>

<template>
  <div class="view-recetas">
    <!-- Vista de lista de recetas -->
    <section v-if="!recetaActual" class="section">
      <div class="container">
        <div class="section-title scroll-animate">
          <h2>Recetas y Protocolos Prácticos</h2>
          <p>Bioinsumos, caldos minerales y tratamientos para aplicar en el campo</p>
        </div>

        <div class="filtros scroll-animate">
          <button
            v-for="cat in categorias"
            :key="cat"
            class="btn-filtro"
            :class="{ active: categoriaSeleccionada === cat }"
            @click="categoriaSeleccionada = cat"
          >
            {{ cat }}
          </button>
        </div>

        <div class="grid-2">
          <TarjetaReceta
            v-for="receta in recetasFiltradas"
            :key="receta.id"
            :receta="receta"
            class="scroll-animate"
            @click="verReceta(receta.id)"
          />
        </div>
      </div>
    </section>

    <!-- Vista de receta individual -->
    <section v-else class="section">
      <div class="container">
        <button class="btn-back" @click="recetaActual = null">← Volver a todas las recetas</button>

        <div class="scroll-animate">
          <div class="receta-header">
            <span class="receta-icon">{{ recetaActual.icono }}</span>
            <div>
              <span class="receta-categoria">{{ recetaActual.categoria }}</span>
              <h1 class="receta-title">{{ recetaActual.titulo }}</h1>
              <p class="receta-desc">{{ recetaActual.descripcion }}</p>
            </div>
          </div>
        </div>

        <div class="grid-2 scroll-animate">
          <div class="card">
            <h3 style="font-family: var(--font-display)">🧪 Ingredientes</h3>
            <ul class="receta-ingredientes">
              <li v-for="ing in recetaActual.ingredientes" :key="ing">
                <span class="ing-bullet">•</span> {{ ing }}
              </li>
            </ul>
            <p style="margin-top: 1rem; font-size: 0.9rem; color: var(--color-gray-600)">
              ⏱️ Tiempo: {{ recetaActual.tiempo }}
            </p>
          </div>

          <div class="card">
            <h3 style="font-family: var(--font-display)">🔧 Preparación</h3>
            <ol class="receta-pasos">
              <li v-for="paso in recetaActual.pasos" :key="paso">
                {{ paso }}
              </li>
            </ol>
          </div>
        </div>

        <div class="card scroll-animate" style="border-left: 4px solid var(--color-gold)">
          <h3 style="font-family: var(--font-display); color: var(--color-gold)">
            🌿 Dosis y Aplicación
          </h3>
          <p>{{ recetaActual.dosis }}</p>
        </div>

        <div class="receta-navegacion scroll-animate">
          <button class="btn btn-outline" @click="recetaActual = null">
            Ver todas las recetas
          </button>
          <router-link to="/recursos" class="btn btn-primary"> Ver recursos </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import TarjetaReceta from '@/components/shared/TarjetaReceta.vue'
import { RECETAS } from '@/data/contenido.js'

const route = useRoute()
const router = useRouter()

const recetas = RECETAS
const categoriaSeleccionada = ref('Todos')
const recetaActual = ref(null)

const categorias = ['Todos', ...new Set(recetas.map((r) => r.categoria))]

const recetasFiltradas = computed(() => {
  if (categoriaSeleccionada.value === 'Todos') {
    return recetas
  }
  return recetas.filter((r) => r.categoria === categoriaSeleccionada.value)
})

const verReceta = (id) => {
  const encontrada = recetas.find((r) => r.id === id)
  if (encontrada) {
    recetaActual.value = encontrada
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

// Verificar si hay un slug en la ruta
const slug = route.params.slug
if (slug) {
  const encontrada = recetas.find((r) => r.id === slug)
  if (encontrada) {
    recetaActual.value = encontrada
  }
}
</script>

<style scoped>
.btn-back {
  display: inline-block;
  margin-bottom: 2rem;
  font-weight: 600;
  color: var(--color-gray-600);
  background: none;
  border: none;
  cursor: pointer;
  font-family: var(--font-primary);
  font-size: 1rem;
  transition: color var(--transition);
}

.btn-back:hover {
  color: var(--color-primary);
}

.filtros {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  justify-content: center;
}

.btn-filtro {
  padding: 0.5rem 1.2rem;
  border-radius: 50px;
  border: 2px solid var(--color-gray-200);
  background: var(--color-white);
  font-family: var(--font-primary);
  font-weight: 600;
  font-size: 0.85rem;
  color: var(--color-gray-600);
  cursor: pointer;
  transition: all var(--transition);
}

.btn-filtro:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.btn-filtro.active {
  background: var(--color-primary);
  color: var(--color-white);
  border-color: var(--color-primary);
}

.receta-header {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
  margin-bottom: 2rem;
}

.receta-icon {
  font-size: 3.5rem;
  flex-shrink: 0;
}

.receta-categoria {
  display: inline-block;
  padding: 0.2rem 0.8rem;
  background: var(--color-gray-100);
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--color-gray-600);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 0.5rem;
}

.receta-title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 3vw, 2.5rem);
  font-weight: 700;
  color: var(--color-gray-900);
  margin: 0 0 0.5rem 0;
}

.receta-desc {
  font-size: 1.05rem;
  color: var(--color-gray-600);
  margin: 0;
}

.receta-ingredientes {
  list-style: none;
  padding: 0;
  margin: 0;
}

.receta-ingredientes li {
  padding: 0.4rem 0;
  border-bottom: 1px solid var(--color-gray-100);
  font-size: 0.95rem;
}

.ing-bullet {
  color: var(--color-gold);
  font-weight: 700;
  margin-right: 0.5rem;
}

.receta-pasos {
  padding-left: 1.5rem;
  margin: 0;
}

.receta-pasos li {
  padding: 0.5rem 0;
  font-size: 0.95rem;
  line-height: 1.6;
  border-bottom: 1px solid var(--color-gray-100);
}

.receta-pasos li:last-child {
  border-bottom: none;
}

.receta-navegacion {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid var(--color-gray-200);
}

@media (max-width: 640px) {
  .receta-header {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .receta-navegacion {
    flex-direction: column;
    align-items: stretch;
  }

  .receta-navegacion .btn {
    justify-content: center;
  }
}
</style>

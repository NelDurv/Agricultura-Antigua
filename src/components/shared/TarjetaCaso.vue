<template>
  <div class="card-caso" :style="{ borderColor: caso.color }">
    <div class="card-caso-header">
      <span class="card-caso-icon">{{ caso.icono }}</span>
      <span class="card-caso-cultivo">{{ caso.cultivo }}</span>
    </div>
    <h3 class="card-caso-title">{{ caso.titulo }}</h3>
    <p class="card-caso-ubicacion">📍 {{ caso.ubicacion }}</p>
    <ul class="card-caso-resultados">
      <li v-for="resultado in caso.resultados.slice(0, 3)" :key="resultado">✓ {{ resultado }}</li>
    </ul>
    <span class="card-caso-link">Ver caso →</span>
  </div>
</template>

<script setup>
const props = defineProps({
  caso: { type: Object, required: true },
})
</script>

<style scoped>
.card-caso {
  background: var(--color-white);
  border-radius: var(--radius);
  padding: 1.5rem;
  border-top: 4px solid var(--color-primary);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: all var(--transition);
}
.card-caso:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
}
.card-caso-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}
.card-caso-icon {
  font-size: 2rem;
}
.card-caso-cultivo {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--color-gray-600);
  background: var(--color-gray-100);
  padding: 0.2rem 0.8rem;
  border-radius: 50px;
}
.card-caso-title {
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color-gray-900);
  margin-bottom: 0.25rem;
}
.card-caso-ubicacion {
  font-size: 0.85rem;
  color: var(--color-gray-600);
  margin-bottom: 0.75rem;
}
.card-caso-resultados {
  list-style: none;
  padding: 0;
  margin: 0 0 1rem 0;
}
.card-caso-resultados li {
  font-size: 0.85rem;
  color: var(--color-gray-700);
  padding: 0.2rem 0;
  border-bottom: 1px solid var(--color-gray-100);
}
.card-caso-resultados li:last-child {
  border-bottom: none;
}
.card-caso-link {
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--color-primary);
  transition: all var(--transition);
}
.card-caso:hover .card-caso-link {
  transform: translateX(4px);
  display: inline-block;
}
</style>

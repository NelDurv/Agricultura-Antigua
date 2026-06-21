<template>
  <div class="card-receta">
    <div class="card-receta-icon">{{ receta.icono }}</div>
    <div class="card-receta-content">
      <span class="card-receta-categoria">{{ receta.categoria }}</span>
      <h3 class="card-receta-title">{{ receta.titulo }}</h3>
      <p class="card-receta-desc">{{ receta.descripcion }}</p>
      <div class="card-receta-meta">
        <span class="card-receta-tiempo">⏱️ {{ receta.tiempo }}</span>
      </div>
      <router-link :to="`/recetas/${receta.id}`" class="card-receta-link">
        Ver receta →
      </router-link>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  receta: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
.card-receta {
  display: flex;
  gap: 1.5rem;
  background: var(--color-white);
  border-radius: var(--radius);
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: all var(--transition);
}

.card-receta:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
}

.card-receta-icon {
  font-size: 2.5rem;
  flex-shrink: 0;
  width: 60px;
  text-align: center;
}

.card-receta-content {
  flex: 1;
}

.card-receta-categoria {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--color-gold);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.card-receta-title {
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color-gray-900);
  margin: 0.25rem 0 0.5rem;
}

.card-receta-desc {
  font-size: 0.9rem;
  color: var(--color-gray-600);
  line-height: 1.6;
  margin-bottom: 0.75rem;
}

.card-receta-meta {
  display: flex;
  gap: 1rem;
  margin-bottom: 0.75rem;
}

.card-receta-tiempo {
  font-size: 0.8rem;
  color: var(--color-gray-600);
}

.card-receta-link {
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--color-primary);
  transition: all var(--transition);
}

.card-receta:hover .card-receta-link {
  transform: translateX(4px);
  display: inline-block;
}

@media (max-width: 480px) {
  .card-receta {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}
</style>

<template>
  <router-link :to="`/mitos/${mito.id}`" class="card-mito" :style="{ borderColor: mito.color }">
    <div class="card-mito-header">
      <span class="card-mito-icon">{{ mito.icono }}</span>
      <span class="card-mito-number">#{{ index + 1 }}</span>
    </div>
    <h3 class="card-mito-title">{{ mito.titulo }}</h3>
    <p class="card-mito-mito">"{{ truncateText(mito.mito, 70) }}"</p>
    <span class="card-mito-link">Descubrir la verdad →</span>
  </router-link>
</template>

<script setup>
const props = defineProps({
  mito: { type: Object, required: true },
  index: { type: Number, required: true },
})

const truncateText = (text, max) => {
  if (text.length <= max) return text
  return text.slice(0, max) + '...'
}
</script>

<style scoped>
.card-mito {
  display: block;
  background: var(--color-white);
  border-radius: var(--radius);
  padding: 1.5rem;
  border-left: 4px solid var(--color-primary);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: all var(--transition);
  text-decoration: none;
  color: inherit;
}
.card-mito:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
}
.card-mito-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}
.card-mito-icon {
  font-size: 1.8rem;
}
.card-mito-number {
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--color-gray-300);
  background: var(--color-gray-100);
  padding: 0.2rem 0.7rem;
  border-radius: 50px;
}
.card-mito-title {
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color-gray-900);
  margin-bottom: 0.5rem;
}
.card-mito-mito {
  font-size: 0.9rem;
  color: var(--color-gray-600);
  line-height: 1.6;
  margin-bottom: 1rem;
  font-style: italic;
}
.card-mito-link {
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--color-primary);
  transition: all var(--transition);
}
.card-mito:hover .card-mito-link {
  transform: translateX(4px);
  display: inline-block;
}
</style>

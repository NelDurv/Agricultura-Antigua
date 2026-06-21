<template>
  <router-link :to="pilar.enlace" class="card-pilar" :style="{ borderColor: pilar.color }">
    <div class="card-pilar-icon" :style="{ background: pilar.bgColor }">
      <span>{{ pilar.icono }}</span>
    </div>
    <h3 class="card-pilar-title">{{ pilar.titulo }}</h3>
    <p class="card-pilar-subtitle">{{ pilar.subtitulo }}</p>
    <p class="card-pilar-desc">{{ pilar.descripcion }}</p>
    <span class="card-pilar-link">Explorar →</span>
  </router-link>
</template>

<script setup>
const props = defineProps({
  pilar: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
.card-pilar {
  display: block;
  background: var(--color-white);
  border-radius: var(--radius);
  padding: 2rem;
  border-top: 4px solid var(--color-primary);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: all var(--transition);
  text-decoration: none;
  color: inherit;
}

.card-pilar:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
}

.card-pilar-icon {
  width: 56px;
  height: 56px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.card-pilar-title {
  font-family: var(--font-display);
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--color-gray-900);
  margin-bottom: 0.25rem;
}

.card-pilar-subtitle {
  font-size: 0.85rem;
  color: var(--color-gray-600);
  margin-bottom: 0.75rem;
}

.card-pilar-desc {
  font-size: 0.95rem;
  color: var(--color-gray-800);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.card-pilar-link {
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--color-primary);
  transition: all var(--transition);
}

.card-pilar:hover .card-pilar-link {
  transform: translateX(4px);
  display: inline-block;
}
</style>

<template>
  <a :href="recurso.enlace" class="card-recurso">
    <div class="card-recurso-icon">{{ recurso.icono }}</div>
    <h3 class="card-recurso-title">{{ recurso.titulo }}</h3>
    <p class="card-recurso-desc">{{ recurso.descripcion }}</p>
    <span class="card-recurso-link">Explorar →</span>
  </a>
</template>

<script setup>
const props = defineProps({
  recurso: { type: Object, required: true },
})
</script>

<style scoped>
.card-recurso {
  display: block;
  background: var(--color-white);
  border-radius: var(--radius);
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: all var(--transition);
  text-decoration: none;
  color: inherit;
  text-align: center;
}
.card-recurso:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
}
.card-recurso-icon {
  font-size: 2.5rem;
  margin-bottom: 0.75rem;
}
.card-recurso-title {
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color-gray-900);
  margin-bottom: 0.5rem;
}
.card-recurso-desc {
  font-size: 0.9rem;
  color: var(--color-gray-600);
  line-height: 1.6;
  margin-bottom: 1rem;
}
.card-recurso-link {
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--color-primary);
  transition: all var(--transition);
}
.card-recurso:hover .card-recurso-link {
  transform: translateX(4px);
  display: inline-block;
}
</style>

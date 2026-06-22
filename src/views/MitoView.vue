<template>
  <div style="padding: 2rem; background: #e8f0e6; border-radius: 12px; min-height: 300px; margin-top: 20px;">
    <h2 style="color: #2d5a27; font-family: 'Playfair Display', serif;">🌱 HomeView Funcionando</h2>
    <p style="font-size: 1.1rem;">El router, Header y Footer están funcionando correctamente.</p>
    <p style="color: #666;">URL actual: {{ $route.path }}</p>
    <div style="margin-top: 1rem; display: flex; gap: 1rem; flex-wrap: wrap;">
      <router-link to="/pilares" style="padding: 0.5rem 1.5rem; background: #2d5a27; color: white; border-radius: 8px; text-decoration: none;">Ir a Pilares</router-link>
      <router-link to="/mitos" style="padding: 0.5rem 1.5rem; background: #C49B6C; color: white; border-radius: 8px; text-decoration: none;">Ir a Mitos</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>
<template>
  <div style="padding: 2rem; background: #f5eee6; border-radius: 8px; min-height: 300px; border: 3px solid #C49B6C;">
    <h2 style="color: #C49B6C;">📋 PILARES VIEW</h2>
    <p style="font-size: 1.5rem; font-weight: bold;">✅ ¡FUNCIONANDO CON ARCHIVO .VUE!</p>
    <p>URL actual: {{ $route.path }}</p>
    <router-link to="/" style="display: inline-block; padding: 0.5rem 1.5rem; background: #C49B6C; color: white; border-radius: 8px; text-decoration: none; margin-top: 1rem;">Volver al inicio</router-link>
  </div>
</template>

<script>
export default {
  name: 'PilaresView'
}
</script>
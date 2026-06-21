<template>
  <div
    style="
      padding: 2rem;
      background: #e8f0e6;
      border-radius: 8px;
      min-height: 300px;
      border: 3px solid #2d5a27;
    "
  >
    <h2 style="color: #2d5a27">🌱 HOME VIEW</h2>
    <p style="font-size: 1.5rem; font-weight: bold; color: #1a3b1a">
      ✅ ¡FUNCIONANDO CON ARCHIVO .VUE!
    </p>
    <p>URL actual: {{ $route.path }}</p>
    <p><strong>Si ves esto, el sistema funciona correctamente.</strong></p>
    <div style="display: flex; gap: 1rem; margin-top: 1rem; flex-wrap: wrap">
      <router-link
        to="/pilares"
        style="
          display: inline-block;
          padding: 0.5rem 1.5rem;
          background: #2d5a27;
          color: white;
          border-radius: 8px;
          text-decoration: none;
        "
        >Ir a Pilares</router-link
      >
      <router-link
        to="/mitos"
        style="
          display: inline-block;
          padding: 0.5rem 1.5rem;
          background: #c49b6c;
          color: white;
          border-radius: 8px;
          text-decoration: none;
        "
        >Ir a Mitos</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
}
</script>

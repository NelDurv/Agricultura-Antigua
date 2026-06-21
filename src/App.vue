<template>
  <div id="app">
    <header style="background: #2d5a27; color: white; padding: 1rem 2rem;">
      <h1 style="margin: 0; font-size: 1.5rem;">🌱 Agricultura Antigua</h1>
      <nav style="display: flex; gap: 1rem; margin-top: 0.5rem; flex-wrap: wrap;">
        <router-link to="/" style="color: white; text-decoration: none; padding: 0.25rem 0.75rem; border-radius: 4px; background: rgba(255,255,255,0.1);">Inicio</router-link>
        <router-link to="/pilares" style="color: white; text-decoration: none; padding: 0.25rem 0.75rem; border-radius: 4px;">Pilares</router-link>
        <router-link to="/mitos" style="color: white; text-decoration: none; padding: 0.25rem 0.75rem; border-radius: 4px;">Mitos</router-link>
      </nav>
    </header>

    <main style="min-height: 70vh; padding: 2rem; background: #f5f0e8;">
      <div style="max-width: 1200px; margin: 0 auto;">
        <router-view />
      </div>
    </main>

    <footer style="background: #1a1a1a; color: #888; padding: 1rem 2rem; text-align: center;">
      <p style="margin: 0;">© 2026 Agricultura Antigua, para ¡HOY!</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

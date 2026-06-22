<template>
  <header style="background: #2d5a27; color: white; padding: 1rem 2rem; position: fixed; top: 0; left: 0; right: 0; z-index: 1000; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
    <div style="max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap;">
      <!-- Logo -->
      <router-link to="/" style="color: white; text-decoration: none; font-size: 1.3rem; font-weight: 800; display: flex; align-items: center; gap: 0.5rem;">
        <span style="font-size: 1.6rem;">🌱</span>
        <span>Agricultura<span style="color: #D4A853;">Antigua</span></span>
      </router-link>

      <!-- Navegación -->
      <nav style="display: flex; gap: 0.5rem; flex-wrap: wrap; align-items: center;">
        <router-link to="/" style="color: rgba(255,255,255,0.8); text-decoration: none; font-weight: 600; padding: 0.5rem 0.8rem; border-radius: 8px; transition: all 0.3s; font-size: 0.9rem;">Inicio</router-link>
        <router-link to="/pilares" style="color: rgba(255,255,255,0.8); text-decoration: none; font-weight: 600; padding: 0.5rem 0.8rem; border-radius: 8px; transition: all 0.3s; font-size: 0.9rem;">Pilares</router-link>
        <router-link to="/mitos" style="color: rgba(255,255,255,0.8); text-decoration: none; font-weight: 600; padding: 0.5rem 0.8rem; border-radius: 8px; transition: all 0.3s; font-size: 0.9rem;">Mitos</router-link>
        <router-link to="/casos" style="color: rgba(255,255,255,0.8); text-decoration: none; font-weight: 600; padding: 0.5rem 0.8rem; border-radius: 8px; transition: all 0.3s; font-size: 0.9rem;">Casos</router-link>
        <router-link to="/recursos" style="color: rgba(255,255,255,0.8); text-decoration: none; font-weight: 600; padding: 0.5rem 0.8rem; border-radius: 8px; transition: all 0.3s; font-size: 0.9rem;">Recursos</router-link>
        <router-link to="/contacto" style="color: rgba(255,255,255,0.8); text-decoration: none; font-weight: 600; padding: 0.5rem 0.8rem; border-radius: 8px; transition: all 0.3s; font-size: 0.9rem;">Contacto</router-link>
        <router-link to="/recetas" style="display: inline-block; padding: 0.4rem 1.2rem; background: #D4A853; color: white; border-radius: 50px; text-decoration: none; font-weight: 600; font-size: 0.85rem; transition: all 0.3s;">Recetas</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.router-link-active {
  color: #D4A853 !important;
  background: rgba(212,168,83,0.15);
}

@media (max-width: 768px) {
  header { padding: 0.8rem 1rem; }
  nav { gap: 0.3rem; }
  nav a { font-size: 0.8rem !important; padding: 0.3rem 0.6rem !important; }
}
</style>
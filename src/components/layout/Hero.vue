<template>
  <section style="min-height: 60vh; display: flex; align-items: center; background: linear-gradient(135deg, #1a3b1a 0%, #2d5a27 50%, #3d7a33 100%); padding: 2rem;">
    <div style="max-width: 1200px; margin: 0 auto; padding: 4rem 2rem; width: 100%;">
      <div style="max-width: 700px;">
        <span style="display: inline-block; padding: 0.4rem 1.2rem; background: rgba(212,168,83,0.2); border: 1px solid rgba(212,168,83,0.3); border-radius: 50px; color: #D4A853; font-size: 0.85rem; font-weight: 600; margin-bottom: 1.5rem;">
          🌱 Ciencia de Frontera
        </span>
        <h1 style="color: white; font-size: clamp(2.5rem, 6vw, 4.5rem); font-weight: 800; line-height: 1.1; margin-bottom: 1.5rem; font-family: 'Playfair Display', serif;">
          Agricultura <span style="color: #D4A853;">Antigua</span>,<br>
          para <span style="color: #D4A853;">¡HOY!</span>
        </h1>
        <p style="color: rgba(255,255,255,0.85); font-size: clamp(1rem, 1.5vw, 1.25rem); max-width: 600px; line-height: 1.8; margin-bottom: 2.5rem;">
          Rescatando la sabiduría ancestral que alimentó a la humanidad por 12,000 años, potenciada con tecnologías del siglo XXI.
        </p>

        <!-- BOTONES -->
        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
          <!-- Botón principal: Explorar los 5 Pilares -->
          <router-link
            to="/pilares"
            style="display: inline-block; padding: 0.8rem 2rem; background: #D4A853; color: white; border-radius: 50px; text-decoration: none; font-weight: 600; font-size: 1rem; border: none; cursor: pointer; transition: all 0.3s; box-shadow: 0 4px 15px rgba(212,168,83,0.3);"
            @mouseenter="hoverPilares = true"
            @mouseleave="hoverPilares = false"
            :style="hoverPilares ? 'transform: translateY(-3px); box-shadow: 0 8px 30px rgba(212,168,83,0.4);' : ''"
          >
            🌱 Explorar los 5 Pilares →
          </router-link>

          <!-- Botón secundario: Ciencia de Frontera -->
          <router-link
            to="/ciencia"
            style="display: inline-block; padding: 0.8rem 2rem; background: rgba(255,255,255,0.1); color: white; border: 2px solid rgba(255,255,255,0.3); border-radius: 50px; text-decoration: none; font-weight: 600; font-size: 1rem; cursor: pointer; transition: all 0.3s; backdrop-filter: blur(10px);"
            @mouseenter="hoverCiencia = true"
            @mouseleave="hoverCiencia = false"
            :style="hoverCiencia ? 'background: rgba(255,255,255,0.2); border-color: #D4A853; transform: translateY(-3px);' : ''"
          >
            🔬 Ciencia de Frontera
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  data() {
    return {
      hoverPilares: false,
      hoverCiencia: false
    }
  }
}
</script>
<template>
  <section class="hero" :style="{ backgroundImage: `url(${backgroundImage})` }">
    <div class="hero-overlay"></div>
    <div class="container hero-content">
      <div class="hero-text scroll-animate">
        <span class="hero-badge">🌱 Ciencia de Frontera</span>
        <h1 class="hero-title">
          Agricultura <span class="hero-highlight">Antigua</span>,<br />
          para <span class="hero-highlight">¡HOY!</span>
        </h1>
        <p class="hero-subtitle">
          Rescatando la sabiduría ancestral que alimentó a la humanidad por 12,000 años, potenciada
          con tecnologías del siglo XXI para lograr soberanía alimentaria y rentabilidad.
        </p>
        <div class="hero-buttons">
          <router-link to="/pilares" class="btn btn-primary btn-lg">
            Explorar los 5 Pilares →
          </router-link>
          <router-link to="/mitos" class="btn btn-outline btn-lg"> Conoce los Mitos </router-link>
        </div>
        <div class="hero-stats">
          <div v-for="stat in stats" :key="stat.label" class="hero-stat">
            <span class="hero-stat-value">{{ stat.value }}</span>
            <span class="hero-stat-label">{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const backgroundImage = '/images/hero-bg.jpg'

const stats = [
  { value: '12,000', label: 'años de sabiduría ancestral' },
  { value: '95%', label: 'de la planta es C-H-O (gratis)' },
  { value: '5', label: 'pilares de la nueva agricultura' },
  { value: '100', label: 'días de preparación del suelo' },
]
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-size: cover;
  background-position: center;
  background-color: var(--color-gray-900);
  overflow: hidden;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(26, 26, 26, 0.85) 0%, rgba(26, 26, 26, 0.4) 100%);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  width: 100%;
  padding: 6rem 0;
}

.hero-text {
  max-width: 800px;
}

.hero-badge {
  display: inline-block;
  padding: 0.3rem 1rem;
  background: rgba(212, 168, 83, 0.2);
  border: 1px solid rgba(212, 168, 83, 0.3);
  border-radius: 50px;
  color: var(--color-gold);
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.hero-title {
  color: var(--color-white);
  font-size: clamp(3rem, 6vw, 4.5rem);
  line-height: 1.1;
  margin-bottom: 1.5rem;
}

.hero-highlight {
  color: var(--color-gold);
  position: relative;
}

.hero-subtitle {
  color: rgba(255, 255, 255, 0.8);
  font-size: clamp(1.1rem, 1.5vw, 1.3rem);
  max-width: 600px;
  line-height: 1.8;
  margin-bottom: 2.5rem;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 3rem;
}

.btn-lg {
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
}

.btn-outline {
  color: var(--color-white);
  border-color: rgba(255, 255, 255, 0.3);
}

.btn-outline:hover {
  background: rgba(255, 255, 255, 0.1);
  color: var(--color-white);
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.hero-stat {
  text-align: center;
}

.hero-stat-value {
  display: block;
  font-family: var(--font-display);
  font-size: clamp(1.5rem, 2.5vw, 2.2rem);
  font-weight: 700;
  color: var(--color-gold);
}

.hero-stat-label {
  display: block;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 0.25rem;
}

@media (max-width: 768px) {
  .hero {
    min-height: 90vh;
  }

  .hero-content {
    padding: 4rem 0;
  }

  .hero-buttons {
    flex-direction: column;
    width: 100%;
  }

  .hero-buttons .btn {
    width: 100%;
    justify-content: center;
  }

  .hero-stats {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
}

@media (max-width: 480px) {
  .hero-stats {
    grid-template-columns: 1fr 1fr;
  }
}
</style>

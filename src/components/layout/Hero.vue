<template>
  <section class="hero-section d-flex align-items-center">
    <div class="container">
      <div class="row">
        <div class="col-lg-7">
          <div class="animate__animated animate__fadeInUp">
            <span class="hero-badge d-inline-block px-4 py-2 rounded-pill mb-4">
              🌱 Ciencia de Frontera
            </span>
            <h1 class="hero-title display-2 fw-bold mb-4">
              Agricultura <span class="text-warning">Antigua</span>,<br>
              para <span class="text-warning">¡HOY!</span>
            </h1>
            <p class="hero-subtitle fs-5 mb-4 text-white-50">
              Rescatando la sabiduría ancestral que alimentó a la humanidad por 12,000 años,
              potenciada con tecnologías del siglo XXI para lograr soberanía alimentaria y rentabilidad.
            </p>
            <div class="d-flex flex-wrap gap-3">
              <router-link to="/pilares" class="btn btn-warning btn-lg rounded-pill px-5 py-3 fw-semibold shadow-lg">
                🌱 Explorar los 5 Pilares
              </router-link>
              <router-link to="/ciencia" class="btn btn-outline-light btn-lg rounded-pill px-5 py-3 fw-semibold">
                🔬 Ciencia de Frontera
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-lg-5 d-none d-lg-flex align-items-center justify-content-center">
          <div class="animate__animated animate__fadeIn animate__delay-1s">
            <div class="hero-icon-display text-center">
              <span class="display-1">🌿</span>
              <p class="text-white-50 small mt-2">Sabiduría + Ciencia</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero'
}
</script>

<style scoped>
.hero-section {
  min-height: 100vh;
  background: linear-gradient(135deg, #1a3b1a 0%, #2d5a27 50%, #3d7a33 100%);
  padding: 6rem 0 4rem;
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -20%;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(212,168,83,0.1) 0%, transparent 70%);
  border-radius: 50%;
}

.hero-badge {
  background: rgba(212,168,83,0.2);
  border: 1px solid rgba(212,168,83,0.3);
  color: #D4A853;
  font-size: 0.85rem;
  font-weight: 600;
}

.hero-title {
  color: white;
  font-family: 'Playfair Display', serif;
  line-height: 1.1;
}

.hero-subtitle {
  max-width: 550px;
  line-height: 1.8;
}

.btn-warning {
  background: #D4A853;
  border: none;
  transition: all 0.3s;
}

.btn-warning:hover {
  background: #C49A3A;
  transform: translateY(-3px);
  box-shadow: 0 8px 30px rgba(212,168,83,0.4);
}

.btn-outline-light {
  border: 2px solid rgba(255,255,255,0.3);
  transition: all 0.3s;
}

.btn-outline-light:hover {
  background: rgba(255,255,255,0.1);
  transform: translateY(-3px);
}

.hero-icon-display {
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

@media (max-width: 768px) {
  .hero-section {
    min-height: 90vh;
    padding: 4rem 0;
  }
  .hero-title {
    font-size: 2.5rem;
  }
  .btn-lg {
    width: 100%;
    text-align: center;
    justify-content: center;
  }
}
</style>
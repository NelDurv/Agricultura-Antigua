<template>
  <header class="header fixed-top">
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container">
        <!-- Logo -->
        <router-link to="/" class="navbar-brand fw-bold fs-4">
          🌱 Agricultura<span class="text-warning">Antigua</span>
        </router-link>

        <!-- Botón hamburguesa para móvil -->
        <button
          class="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Menú de navegación -->
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto align-items-lg-center">
            <li class="nav-item">
              <router-link to="/" class="nav-link" active-class="active">Inicio</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/pilares" class="nav-link" active-class="active">Pilares</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/mitos" class="nav-link" active-class="active">Mitos</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/casos" class="nav-link" active-class="active">Casos</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/recursos" class="nav-link" active-class="active">Recursos</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contacto" class="nav-link" active-class="active">Contacto</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/recetas" class="btn btn-warning btn-sm rounded-pill px-3 py-2 ms-2 fw-semibold text-dark">
                🧪 Recetas
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.header {
  background: #2d5a27;
  box-shadow: 0 2px 15px rgba(0,0,0,0.2);
  transition: all 0.3s;
}

.navbar-brand {
  font-size: 1.4rem;
  letter-spacing: -0.5px;
}

.nav-link {
  color: rgba(255,255,255,0.85) !important;
  font-weight: 600;
  padding: 0.5rem 1rem !important;
  border-radius: 8px;
  transition: all 0.3s;
}

.nav-link:hover {
  color: #fff !important;
  background: rgba(255,255,255,0.1);
}

.nav-link.active {
  color: #D4A853 !important;
  background: rgba(212,168,83,0.15);
}

.btn-warning {
  background: #D4A853;
  border: none;
  transition: all 0.3s;
}

.btn-warning:hover {
  background: #C49A3A;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(212,168,83,0.3);
}

@media (max-width: 991.98px) {
  .navbar-nav {
    padding-top: 1rem;
  }
  .nav-item {
    text-align: center;
  }
  .btn-warning {
    margin-top: 0.5rem;
    width: 100%;
  }
}
</style>
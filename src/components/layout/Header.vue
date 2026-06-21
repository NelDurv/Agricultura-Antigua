<template>
  <header class="header" :class="{ scrolled: isScrolled }">
    <div class="container header-content">
      <router-link to="/" class="logo">
        <span class="logo-icon">🌱</span>
        <span class="logo-text">Agricultura<span class="logo-highlight">Antigua</span></span>
      </router-link>

      <nav class="nav" :class="{ active: isMenuOpen }">
        <ul class="nav-list">
          <li v-for="item in menuItems" :key="item.path">
            <router-link :to="item.path" class="nav-link" @click="closeMenu">
              {{ item.label }}
            </router-link>
          </li>
        </ul>
        <div class="nav-cta">
          <router-link to="/recetas" class="btn btn-gold btn-sm" @click="closeMenu">
            Recetas
          </router-link>
        </div>
      </nav>

      <button class="menu-toggle" @click="toggleMenu" aria-label="Menú">
        <span class="hamburger" :class="{ active: isMenuOpen }"></span>
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isScrolled = ref(false)
const isMenuOpen = ref(false)

const menuItems = [
  { path: '/', label: 'Inicio' },
  { path: '/pilares', label: 'Los 5 Pilares' },
  { path: '/mitos', label: 'Los Mitos' },
  { path: '/casos', label: 'Casos' },
  { path: '/recursos', label: 'Recursos' },
  { path: '/contacto', label: 'Contacto' },
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: transparent;
  transition: all var(--transition);
  padding: 0.5rem 0;
  height: var(--header-height);
}

.header.scrolled {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 1.3rem;
  color: var(--color-gray-900);
}

.logo-icon {
  font-size: 1.6rem;
}

.logo-text {
  display: none;
}

.logo-highlight {
  color: var(--color-primary);
}

.nav-list {
  display: flex;
  list-style: none;
  gap: 0.5rem;
  align-items: center;
}

.nav-link {
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-gray-600);
  border-radius: 50px;
  transition: all var(--transition);
}

.nav-link:hover {
  color: var(--color-primary);
  background: var(--color-gray-100);
}

.nav-link.router-link-active {
  color: var(--color-primary);
  background: var(--color-gray-100);
}

.nav-cta {
  margin-left: 0.5rem;
}

.btn-sm {
  padding: 0.5rem 1.2rem;
  font-size: 0.85rem;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.hamburger {
  display: block;
  position: relative;
  width: 24px;
  height: 2px;
  background: var(--color-gray-900);
  border-radius: 2px;
  transition: all var(--transition);
}

.hamburger::before,
.hamburger::after {
  content: '';
  position: absolute;
  width: 24px;
  height: 2px;
  background: var(--color-gray-900);
  border-radius: 2px;
  transition: all var(--transition);
}

.hamburger::before {
  transform: translateY(-7px);
}

.hamburger::after {
  transform: translateY(7px);
}

.hamburger.active {
  background: transparent;
}

.hamburger.active::before {
  transform: rotate(45deg);
}

.hamburger.active::after {
  transform: rotate(-45deg);
}

@media (min-width: 1024px) {
  .logo-text {
    display: inline;
  }
}

@media (max-width: 1024px) {
  .menu-toggle {
    display: flex;
  }

  .nav {
    position: fixed;
    top: var(--header-height);
    left: 0;
    right: 0;
    background: var(--color-white);
    padding: 2rem;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
    transform: translateY(-120%);
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    max-height: calc(100vh - var(--header-height));
    overflow-y: auto;
  }

  .nav.active {
    transform: translateY(0);
  }

  .nav-list {
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
  }

  .nav-link {
    width: 100%;
    padding: 0.75rem 1rem;
    font-size: 1rem;
  }

  .nav-cta {
    margin: 1rem 0 0 0;
    width: 100%;
  }

  .nav-cta .btn {
    width: 100%;
    justify-content: center;
  }
}
</style>

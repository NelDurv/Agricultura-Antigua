<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="footer-logo">🌱</div>
          <h3 class="footer-title">Agricultura Antigua, para ¡HOY!</h3>
          <p class="footer-desc">
            Rescatando la sabiduría ancestral, potenciada con ciencia de frontera.
          </p>
          <div class="footer-social">
            <a href="#" aria-label="Facebook"><span>📘</span></a>
            <a href="#" aria-label="Instagram"><span>📸</span></a>
            <a href="#" aria-label="YouTube"><span>▶️</span></a>
            <a href="#" aria-label="TikTok"><span>🎵</span></a>
          </div>
        </div>

        <div class="footer-links">
          <h4>Explora</h4>
          <ul>
            <li><router-link to="/pilares">Los 5 Pilares</router-link></li>
            <li><router-link to="/mitos">Los Grandes Mitos</router-link></li>
            <li><router-link to="/recetas">Recetas y Protocolos</router-link></li>
            <li><router-link to="/casos">Casos de Éxito</router-link></li>
          </ul>
        </div>

        <div class="footer-links">
          <h4>Recursos</h4>
          <ul>
            <li><router-link to="/recursos#glosario">Glosario</router-link></li>
            <li><router-link to="/recursos#videos">Videos</router-link></li>
            <li><router-link to="/recursos#bibliografia">Bibliografía</router-link></li>
            <li><router-link to="/recursos#descargas">Descargas</router-link></li>
          </ul>
        </div>

        <div class="footer-links">
          <h4>Únete</h4>
          <ul>
            <li><router-link to="/contacto">Contacto</router-link></li>
            <li><a href="#">Newsletter</a></li>
            <li><a href="#">Colabora</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; 2026 Agricultura Antigua, para ¡HOY!. Todos los derechos reservados.</p>
        <p class="footer-credit">Hecho con 🌱 y conocimiento campesino</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--color-gray-900);
  color: var(--color-gray-300);
  padding: 3rem 0 1.5rem;
  margin-top: 3rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 3rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-logo {
  font-size: 2.5rem;
}

.footer-title {
  color: var(--color-white);
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.2rem;
  margin: 0;
}

.footer-desc {
  color: var(--color-gray-600);
  font-size: 0.9rem;
  max-width: 300px;
  line-height: 1.6;
}

.footer-social {
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
}

.footer-social a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 50%;
  transition: all var(--transition);
  font-size: 1.2rem;
}

.footer-social a:hover {
  background: var(--color-primary);
  transform: translateY(-2px);
}

.footer-links h4 {
  color: var(--color-white);
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.footer-links ul {
  list-style: none;
  padding: 0;
}

.footer-links li {
  margin-bottom: 0.5rem;
}

.footer-links a {
  color: var(--color-gray-600);
  font-size: 0.9rem;
  transition: all var(--transition);
}

.footer-links a:hover {
  color: var(--color-gold);
}

.footer-bottom {
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  color: var(--color-gray-600);
}

.footer-credit {
  color: var(--color-gray-600);
}

@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .footer-desc {
    max-width: 100%;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }
}
</style>

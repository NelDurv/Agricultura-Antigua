<template>
  <div class="view-contacto">
    <section class="section">
      <div class="container">
        <div class="section-title scroll-animate">
          <h2>Contacto</h2>
          <p>¿Tienes preguntas o quieres colaborar con nosotros?</p>
        </div>

        <div class="grid-2 scroll-animate">
          <!-- Formulario -->
          <div class="card">
            <h3 style="font-family: var(--font-display); margin-bottom: 1.5rem">
              Envíanos un mensaje
            </h3>
            <form @submit.prevent="enviarFormulario" class="form-contacto">
              <div class="form-group">
                <label for="nombre">Nombre completo *</label>
                <input
                  type="text"
                  id="nombre"
                  v-model="form.nombre"
                  placeholder="Tu nombre"
                  required
                />
              </div>

              <div class="form-group">
                <label for="email">Correo electrónico *</label>
                <input
                  type="email"
                  id="email"
                  v-model="form.email"
                  placeholder="tu@email.com"
                  required
                />
              </div>

              <div class="form-group">
                <label for="telefono">Teléfono</label>
                <input
                  type="tel"
                  id="telefono"
                  v-model="form.telefono"
                  placeholder="Tu número de teléfono"
                />
              </div>

              <div class="form-group">
                <label for="tema">Tema de interés</label>
                <select id="tema" v-model="form.tema">
                  <option value="">Selecciona un tema...</option>
                  <option value="suelo-vivo">Suelo Vivo</option>
                  <option value="nutricion-vegetal">Nutrición Vegetal</option>
                  <option value="bioinsumos">Bioinsumos</option>
                  <option value="agricultura-tradicional">Agricultura Tradicional</option>
                  <option value="ciencia-moderna">Ciencia Moderna</option>
                  <option value="capacitacion">Capacitación</option>
                  <option value="colaboracion">Colaboración</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div class="form-group">
                <label for="mensaje">Mensaje *</label>
                <textarea
                  id="mensaje"
                  v-model="form.mensaje"
                  rows="5"
                  placeholder="Cuéntanos tu consulta..."
                  required
                ></textarea>
              </div>

              <button type="submit" class="btn btn-primary" :disabled="enviando">
                {{ enviando ? 'Enviando...' : 'Enviar mensaje' }}
              </button>

              <p v-if="mensajeEnviado" class="mensaje-exito">
                ✅ ¡Mensaje enviado con éxito! Te responderemos pronto.
              </p>
              <p v-if="errorEnvio" class="mensaje-error">
                ❌ Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.
              </p>
            </form>
          </div>

          <!-- Información de contacto -->
          <div>
            <div class="card" style="margin-bottom: 1.5rem">
              <h3 style="font-family: var(--font-display); margin-bottom: 1rem">
                Información de contacto
              </h3>
              <div class="info-item">
                <span class="info-icon">📧</span>
                <div>
                  <strong>Correo electrónico</strong>
                  <p>contacto@agriculturaantigua.com</p>
                </div>
              </div>
              <div class="info-item">
                <span class="info-icon">📞</span>
                <div>
                  <strong>Teléfono</strong>
                  <p>+52 (55) 1234 5678</p>
                </div>
              </div>
              <div class="info-item">
                <span class="info-icon">📍</span>
                <div>
                  <strong>Ubicación</strong>
                  <p>Ciudad de México, México</p>
                </div>
              </div>
            </div>

            <div class="card">
              <h3 style="font-family: var(--font-display); margin-bottom: 1rem">Síguenos</h3>
              <div class="social-links">
                <a href="#" class="social-link">📘 Facebook</a>
                <a href="#" class="social-link">📸 Instagram</a>
                <a href="#" class="social-link">▶️ YouTube</a>
                <a href="#" class="social-link">🎵 TikTok</a>
                <a href="#" class="social-link">🔗 LinkedIn</a>
              </div>
            </div>

            <div
              class="card"
              style="background: var(--color-primary-dark); color: var(--color-white); border: none"
            >
              <h4 style="color: var(--color-white); font-family: var(--font-display)">
                🌱 ¿Quieres colaborar?
              </h4>
              <p style="color: rgba(255, 255, 255, 0.8)">
                Si eres agricultor, técnico, investigador o estudiante y quieres sumarte a este
                proyecto, escríbenos. Juntos podemos transformar la agricultura.
              </p>
              <router-link
                to="/recursos"
                class="btn btn-gold"
                style="margin-top: 1rem; display: inline-block"
              >
                Ver recursos
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const form = reactive({
  nombre: '',
  email: '',
  telefono: '',
  tema: '',
  mensaje: '',
})

const enviando = ref(false)
const mensajeEnviado = ref(false)
const errorEnvio = ref(false)

const enviarFormulario = async () => {
  enviando.value = true
  mensajeEnviado.value = false
  errorEnvio.value = false

  try {
    // Aquí iría la lógica para enviar el formulario a un servicio (EmailJS, API, etc.)
    // Simulamos una petición exitosa
    await new Promise((resolve) => setTimeout(resolve, 1500))

    mensajeEnviado.value = true
    // Resetear formulario
    form.nombre = ''
    form.email = ''
    form.telefono = ''
    form.tema = ''
    form.mensaje = ''
  } catch (error) {
    errorEnvio.value = true
  } finally {
    enviando.value = false
  }
}
</script>

<style scoped>
.form-contacto {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.form-group label {
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--color-gray-800);
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: 0.75rem 1rem;
  border: 2px solid var(--color-gray-200);
  border-radius: var(--radius);
  font-family: var(--font-primary);
  font-size: 1rem;
  transition: border-color var(--transition);
  background: var(--color-white);
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(45, 90, 39, 0.1);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.mensaje-exito {
  color: var(--color-success);
  font-weight: 600;
  padding: 0.75rem;
  background: rgba(45, 125, 70, 0.1);
  border-radius: var(--radius);
  margin: 0;
}

.mensaje-error {
  color: #d32f2f;
  font-weight: 600;
  padding: 0.75rem;
  background: rgba(211, 47, 47, 0.1);
  border-radius: var(--radius);
  margin: 0;
}

.info-item {
  display: flex;
  gap: 1rem;
  padding: 0.75rem 0;
  border-bottom: 1px solid var(--color-gray-200);
}

.info-item:last-child {
  border-bottom: none;
}

.info-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.info-item p {
  margin: 0;
  color: var(--color-gray-600);
}

.social-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.social-link {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background: var(--color-gray-100);
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--color-gray-800);
  transition: all var(--transition);
}

.social-link:hover {
  background: var(--color-primary);
  color: var(--color-white);
  transform: translateY(-2px);
}
</style>

<template>
  <div style="padding: 2rem 0;">
    <div style="max-width: 1200px; margin: 0 auto; padding: 0 2rem;">
      <!-- Encabezado -->
      <div style="text-align: center; margin-bottom: 3rem; margin-top: 2rem;">
        <h1 style="font-family: 'Playfair Display', serif; font-size: 3rem; color: #1a1a1a;">📞 Contacto</h1>
        <p style="color: #666; max-width: 600px; margin: 0 auto; font-size: 1.1rem;">¿Tienes preguntas o quieres colaborar con nosotros?</p>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem;">
        <!-- Formulario -->
        <div style="background: white; border-radius: 16px; padding: 2rem; box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
          <h2 style="font-family: 'Playfair Display', serif; font-size: 1.5rem; margin-bottom: 1.5rem;">Envíanos un mensaje</h2>
          <form @submit.prevent="enviarFormulario">
            <div style="margin-bottom: 1rem;">
              <label style="display: block; font-weight: 600; margin-bottom: 0.3rem; font-size: 0.9rem;">Nombre completo *</label>
              <input v-model="form.nombre" type="text" placeholder="Tu nombre" required style="width: 100%; padding: 0.75rem; border: 2px solid #e0e0e0; border-radius: 8px; font-size: 1rem;">
            </div>
            <div style="margin-bottom: 1rem;">
              <label style="display: block; font-weight: 600; margin-bottom: 0.3rem; font-size: 0.9rem;">Correo electrónico *</label>
              <input v-model="form.email" type="email" placeholder="tu@email.com" required style="width: 100%; padding: 0.75rem; border: 2px solid #e0e0e0; border-radius: 8px; font-size: 1rem;">
            </div>
            <div style="margin-bottom: 1rem;">
              <label style="display: block; font-weight: 600; margin-bottom: 0.3rem; font-size: 0.9rem;">Mensaje *</label>
              <textarea v-model="form.mensaje" rows="5" placeholder="Cuéntanos tu consulta..." required style="width: 100%; padding: 0.75rem; border: 2px solid #e0e0e0; border-radius: 8px; font-size: 1rem; resize: vertical;"></textarea>
            </div>
            <button type="submit" style="width: 100%; padding: 0.75rem; background: #2d5a27; color: white; border: none; border-radius: 8px; font-size: 1rem; font-weight: 600; cursor: pointer; transition: all 0.3s;">Enviar mensaje</button>
            <p v-if="enviado" style="color: #2d7d46; text-align: center; margin-top: 1rem;">✅ ¡Mensaje enviado con éxito!</p>
          </form>
        </div>

        <!-- Información -->
        <div>
          <div style="background: white; border-radius: 16px; padding: 2rem; box-shadow: 0 4px 20px rgba(0,0,0,0.05); margin-bottom: 1.5rem;">
            <h2 style="font-family: 'Playfair Display', serif; font-size: 1.5rem; margin-bottom: 1rem;">Información de contacto</h2>
            <div style="display: flex; gap: 1rem; padding: 0.75rem 0; border-bottom: 1px solid #f5f5f5;">
              <span style="font-size: 1.5rem;">📧</span>
              <div><strong>Correo</strong><p style="margin: 0; color: #666;">contacto@agriculturaantigua.com</p></div>
            </div>
            <div style="display: flex; gap: 1rem; padding: 0.75rem 0; border-bottom: 1px solid #f5f5f5;">
              <span style="font-size: 1.5rem;">📞</span>
              <div><strong>Teléfono</strong><p style="margin: 0; color: #666;">+52 (55) 1234 5678</p></div>
            </div>
            <div style="display: flex; gap: 1rem; padding: 0.75rem 0;">
              <span style="font-size: 1.5rem;">📍</span>
              <div><strong>Ubicación</strong><p style="margin: 0; color: #666;">Ciudad de México, México</p></div>
            </div>
          </div>

          <div style="background: #1a3b1a; border-radius: 16px; padding: 2rem; color: white; box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
            <h3 style="color: white; font-family: 'Playfair Display', serif;">🌱 ¿Quieres colaborar?</h3>
            <p style="color: rgba(255,255,255,0.8);">Escríbenos. Juntos podemos transformar la agricultura.</p>
            <router-link to="/recursos" style="display: inline-block; padding: 0.5rem 1.5rem; background: #D4A853; color: white; border-radius: 50px; text-decoration: none; font-weight: 600;">Ver recursos</router-link>
          </div>
        </div>
      </div>

      <!-- Botón de regreso -->
      <div style="text-align: center; margin-top: 3rem;">
        <router-link to="/" style="display: inline-block; padding: 0.75rem 2rem; background: #2d5a27; color: white; border-radius: 50px; text-decoration: none; font-weight: 600; transition: all 0.3s;">
          ← Volver al inicio
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactoView',
  data() {
    return {
      form: { nombre: '', email: '', mensaje: '' },
      enviado: false
    }
  },
  methods: {
    enviarFormulario() {
      // Simular envío
      this.enviado = true
      this.form = { nombre: '', email: '', mensaje: '' }
      setTimeout(() => { this.enviado = false }, 3000)
    }
  }
}
</script>
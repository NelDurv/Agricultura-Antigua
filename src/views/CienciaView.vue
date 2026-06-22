<template>
  <div style="padding: 2rem 0;">
    <div style="max-width: 1200px; margin: 0 auto; padding: 0 2rem;">
      <!-- Encabezado -->
      <div style="text-align: center; margin-bottom: 3rem; margin-top: 2rem;">
        <h1 style="font-family: 'Playfair Display', serif; font-size: 3rem; color: #1a1a1a;">🔬 Ciencia de Frontera</h1>
        <p style="color: #666; max-width: 700px; margin: 0 auto; font-size: 1.1rem;">
          Tecnologías avanzadas al servicio de la agricultura sustentable
        </p>
      </div>

      <!-- Grid de conceptos -->
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem;">
        <!-- ORP -->
        <div style="background: white; border-radius: 16px; padding: 2rem; border-top: 6px solid #2d5a27; box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
          <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
            <span style="font-size: 2.5rem;">⚡</span>
            <h2 style="font-size: 1.5rem; font-weight: 700; margin: 0;">ORP: La Energía del Suelo</h2>
          </div>
          <p style="color: #444; line-height: 1.8;">
            El Potencial Óxido-Reducción mide la carga de electrones (energía) en el suelo.
            Un suelo reducido (-100 a -300 mV) dona energía a la planta, mientras que
            uno oxidado (+100 mV) consume su energía.
          </p>
        </div>

        <!-- Microscopía -->
        <div style="background: white; border-radius: 16px; padding: 2rem; border-top: 6px solid #C49B6C; box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
          <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
            <span style="font-size: 2.5rem;">🔬</span>
            <h2 style="font-size: 1.5rem; font-weight: 700; margin: 0;">Microscopía Electrónica</h2>
          </div>
          <p style="color: #444; line-height: 1.8;">
            Permite ver el tejido vivo y los minerales tal como están. Identifica fitolitos,
            fitatos y la composición de 60 minerales que el análisis químico tradicional incinera y pierde.
          </p>
        </div>

        <!-- Metagenómica -->
        <div style="background: white; border-radius: 16px; padding: 2rem; border-top: 6px solid #4a7a43; box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
          <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
            <span style="font-size: 2.5rem;">🧬</span>
            <h2 style="font-size: 1.5rem; font-weight: 700; margin: 0;">Metagenómica</h2>
          </div>
          <p style="color: #444; line-height: 1.8;">
            Lectura de ADN microbiológico para identificar consorcios de microorganismos
            en el suelo y bioinsumos. Permite saber qué funciones realizan exactamente.
          </p>
        </div>

        <!-- Dispositivos Móviles -->
        <div style="background: white; border-radius: 16px; padding: 2rem; border-top: 6px solid #8B6F47; box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
          <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
            <span style="font-size: 2.5rem;">📱</span>
            <h2 style="font-size: 1.5rem; font-weight: 700; margin: 0;">Dispositivos Analíticos Móviles</h2>
          </div>
          <p style="color: #444; line-height: 1.8;">
            Medidores portátiles de ORP, penetrómetros, termómetros de suelo y sensores
            que se conectan al celular para medir pH, CE y salinidad en tiempo real.
          </p>
        </div>

        <!-- Arado Yomex -->
        <div style="background: white; border-radius: 16px; padding: 2rem; border-top: 6px solid #1A3A5C; box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
          <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
            <span style="font-size: 2.5rem;">🚜</span>
            <h2 style="font-size: 1.5rem; font-weight: 700; margin: 0;">Arado Yomex</h2>
          </div>
          <p style="color: #444; line-height: 1.8;">
            Navaja que corta y levanta el suelo de 60 a 80 cm sin invertir capas.
            Rompe el piso de arado e inyecta microorganismos para una descompactación permanente.
          </p>
        </div>

        <!-- SRI -->
        <div style="background: white; border-radius: 16px; padding: 2rem; border-top: 6px solid #D4A853; box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
          <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
            <span style="font-size: 2.5rem;">🌾</span>
            <h2 style="font-size: 1.5rem; font-weight: 700; margin: 0;">SRI - Sistema de Intensificación</h2>
          </div>
          <p style="color: #444; line-height: 1.8;">
            Método agroecológico que maximiza el potencial genético de la planta.
            Récord mundial: 22.4 toneladas de arroz por hectárea con 50% menos agua y 5 kg de semilla.
          </p>
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
  name: 'CienciaView'
}
</script>
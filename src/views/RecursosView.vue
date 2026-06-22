<template>
  <div style="padding: 2rem 0;">
    <div style="max-width: 1200px; margin: 0 auto; padding: 0 2rem;">
      <!-- Encabezado -->
      <div style="text-align: center; margin-bottom: 3rem; margin-top: 2rem;">
        <h1 style="font-family: 'Playfair Display', serif; font-size: 3rem; color: #1a1a1a;">📚 Recursos</h1>
        <p style="color: #666; max-width: 600px; margin: 0 auto; font-size: 1.1rem;">Todo lo que necesitas para profundizar en la agricultura de última generación</p>
      </div>

      <!-- Grid de Recursos -->
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem;">
        <!-- Glosario -->
        <div style="background: white; border-radius: 16px; padding: 2rem; border-top: 6px solid #2d5a27; box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
          <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
            <span style="font-size: 3rem;">📖</span>
            <h2 style="font-size: 1.5rem; font-weight: 700; margin: 0;">Glosario Técnico</h2>
          </div>
          <p style="color: #444; line-height: 1.8;">Definiciones de términos clave de agricultura orgánica de última generación.</p>
          <div style="margin-top: 1rem;">
            <div v-for="termino in glosario" :key="termino.termino" style="padding: 0.5rem 0; border-bottom: 1px solid #f5f5f5;">
              <strong style="color: #2d5a27;">{{ termino.termino }}</strong>
              <p style="font-size: 0.9rem; color: #666; margin: 0.2rem 0 0 0;">{{ termino.definicion }}</p>
            </div>
          </div>
        </div>

        <!-- Videos -->
        <div style="background: white; border-radius: 16px; padding: 2rem; border-top: 6px solid #C49B6C; box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
          <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
            <span style="font-size: 3rem;">🎥</span>
            <h2 style="font-size: 1.5rem; font-weight: 700; margin: 0;">Videos y Conferencias</h2>
          </div>
          <p style="color: #444; line-height: 1.8;">Conferencias del Dr. Edgar Quero, Pedro Isabeles y otros expertos.</p>
          <div style="margin-top: 1rem;">
            <div v-for="video in videos" :key="video.id" style="padding: 0.75rem 0; border-bottom: 1px solid #f5f5f5;">
              <strong style="color: #C49B6C;">{{ video.titulo }}</strong>
              <p style="font-size: 0.85rem; color: #666; margin: 0.2rem 0 0 0;">👤 {{ video.autor }} · ⏱️ {{ video.duracion }}</p>
              <a :href="video.url" target="_blank" style="color: #C49B6C; font-weight: 600; font-size: 0.9rem;">Ver video →</a>
            </div>
          </div>
        </div>

        <!-- Bibliografía -->
        <div style="background: white; border-radius: 16px; padding: 2rem; border-top: 6px solid #4a7a43; box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
          <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
            <span style="font-size: 3rem;">📚</span>
            <h2 style="font-size: 1.5rem; font-weight: 700; margin: 0;">Bibliografía</h2>
          </div>
          <p style="color: #444; line-height: 1.8;">Referencias académicas y lecturas recomendadas.</p>
          <div style="margin-top: 1rem;">
            <div v-for="ref in bibliografia" :key="ref.id" style="padding: 0.75rem 0; border-bottom: 1px solid #f5f5f5;">
              <p style="font-size: 0.9rem; color: #444; margin: 0; font-style: italic;">{{ ref.cita }}</p>
              <a :href="ref.url" target="_blank" style="color: #4a7a43; font-weight: 600; font-size: 0.9rem;">{{ ref.fuente }} →</a>
            </div>
          </div>
        </div>

        <!-- Descargas -->
        <div style="background: white; border-radius: 16px; padding: 2rem; border-top: 6px solid #8B6F47; box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
          <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
            <span style="font-size: 3rem;">📥</span>
            <h2 style="font-size: 1.5rem; font-weight: 700; margin: 0;">Material Descargable</h2>
          </div>
          <p style="color: #444; line-height: 1.8;">PDFs, guías y manuales prácticos para el campo.</p>
          <div style="margin-top: 1rem;">
            <div v-for="descarga in descargas" :key="descarga.id" style="padding: 0.75rem 0; border-bottom: 1px solid #f5f5f5; display: flex; justify-content: space-between; align-items: center;">
              <div>
                <strong style="color: #8B6F47;">{{ descarga.titulo }}</strong>
                <p style="font-size: 0.85rem; color: #666; margin: 0;">{{ descarga.descripcion }}</p>
              </div>
              <span style="background: #8B6F47; color: white; padding: 0.3rem 0.8rem; border-radius: 50px; font-size: 0.75rem; font-weight: 600;">{{ descarga.formato }}</span>
            </div>
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
  name: 'RecursosView',
  data() {
    return {
      glosario: [
        { termino: 'ORP', definicion: 'Potencial Óxido-Reducción. Mide la carga de electrones (energía) en el suelo e insumos.' },
        { termino: 'IASS', definicion: 'Índice Agrícola de Sustentabilidad del Suelo. Cuantifica el patrimonio suelo.' },
        { termino: 'MPASi', definicion: 'Minerales Primarios Amorfos ricos en Silicio.' },
        { termino: 'Biosilicificación', definicion: 'Conversión de H₄SiO₄ soluble en SiO₂ amorfo (fitolitos).' }
      ],
      videos: [
        { id: 1, titulo: 'Edgar Quero - Por México Hablemos del Maíz 1/2', autor: 'Edgar Quero', duracion: '45 min', url: 'https://www.youtube.com/watch?v=8CI405BJX8g' },
        { id: 2, titulo: 'Edgar Quero - Por México Hablemos del Maíz 2/2', autor: 'Edgar Quero', duracion: '42 min', url: 'https://www.youtube.com/watch?v=Qxsl330V05w' }
      ],
      bibliografia: [
        { id: 1, cita: 'CIENCIA DE FRONTERA: Innovaciones Tecnológicas al Servicio de la Milpa', fuente: 'SADER - INIFAP - 2024', url: 'https://delcampo.org.mx/.cm4all/uproc.php/0/Libros%20del%20Campo/6.%20Libro%20Quero.pdf' },
        { id: 2, cita: 'Guía de Microorganismos de Montaña', fuente: 'Gobierno de México', url: 'https://www.gob.mx/cms/uploads/attachment/file/737319/13_Microorganismos_de_montan_a.pdf' }
      ],
      descargas: [
        { id: 1, titulo: 'Manual de Recetas de Bioinsumos', descripcion: 'Recetas completas de bioles, caldos y microorganismos', formato: 'PDF' },
        { id: 2, titulo: 'Guía de los 6 Mitos de la Agricultura', descripcion: 'Desmintiendo creencias erróneas del campo', formato: 'PDF' }
      ]
    }
  }
}
</script>
<template>
  <div class="view-recursos">
    <section class="section">
      <div class="container">
        <div class="section-title scroll-animate">
          <h2>Recursos</h2>
          <p>Todo lo que necesitas para profundizar en la agricultura de última generación</p>
        </div>

        <!-- Recursos -->
        <div class="grid-2 scroll-animate">
          <TarjetaRecurso v-for="recurso in recursos" :key="recurso.id" :recurso="recurso" />
        </div>
      </div>
    </section>

    <!-- Glosario -->
    <section id="glosario" class="section" style="background: var(--color-gray-100)">
      <div class="container">
        <div class="scroll-animate">
          <h3 style="font-family: var(--font-display)">📖 Glosario Técnico</h3>
          <p style="color: var(--color-gray-600); margin-bottom: 2rem">
            Términos clave de la agricultura orgánica de última generación
          </p>

          <div class="glosario-grid">
            <div v-for="termino in glosario" :key="termino.termino" class="glosario-item card">
              <h4 class="glosario-termino">{{ termino.termino }}</h4>
              <p class="glosario-definicion">{{ termino.definicion }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Videos -->
    <section id="videos" class="section">
      <div class="container">
        <div class="scroll-animate">
          <h3 style="font-family: var(--font-display)">🎥 Videos y Conferencias</h3>
          <p style="color: var(--color-gray-600); margin-bottom: 2rem">
            Conferencias del Dr. Edgar Quero y otros expertos
          </p>

          <div class="grid-2">
            <div v-for="video in videos" :key="video.id" class="card video-card">
              <div class="video-thumbnail">
                <span class="video-play">▶️</span>
                <span class="video-duracion">{{ video.duracion }}</span>
              </div>
              <h4 class="video-titulo">{{ video.titulo }}</h4>
              <p class="video-autor">👤 {{ video.autor }}</p>
              <a :href="video.url" target="_blank" class="video-link">Ver video →</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Bibliografía -->
    <section id="bibliografia" class="section" style="background: var(--color-gray-100)">
      <div class="container">
        <div class="scroll-animate">
          <h3 style="font-family: var(--font-display)">📚 Bibliografía</h3>
          <p style="color: var(--color-gray-600); margin-bottom: 2rem">
            Referencias académicas y lecturas recomendadas
          </p>

          <div class="bibliografia-list">
            <div v-for="ref in bibliografia" :key="ref.id" class="bibliografia-item card">
              <p class="bibliografia-cita">{{ ref.cita }}</p>
              <a :href="ref.url" target="_blank" class="bibliografia-link">{{ ref.fuente }}</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Descargas -->
    <section id="descargas" class="section">
      <div class="container">
        <div class="scroll-animate">
          <h3 style="font-family: var(--font-display)">📥 Material Descargable</h3>
          <p style="color: var(--color-gray-600); margin-bottom: 2rem">
            PDFs, guías y manuales prácticos para el campo
          </p>

          <div class="grid-2">
            <div v-for="descarga in descargas" :key="descarga.id" class="card descarga-card">
              <div class="descarga-icon">{{ descarga.icono }}</div>
              <div>
                <h4 class="descarga-titulo">{{ descarga.titulo }}</h4>
                <p class="descarga-desc">{{ descarga.descripcion }}</p>
                <a :href="descarga.url" class="descarga-link"
                  >📥 Descargar {{ descarga.formato }}</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import TarjetaRecurso from '@/components/shared/TarjetaRecurso.vue'
import { RECURSOS } from '@/data/contenido.js'

const recursos = RECURSOS

const glosario = [
  {
    termino: 'ORP',
    definicion:
      'Potencial Óxido-Reducción. Mide la carga de electrones (energía) en el suelo e insumos. Un suelo sano debe estar reducido (-100 a -300 mV).',
  },
  {
    termino: 'IASS',
    definicion:
      'Índice Agrícola de Sustentabilidad del Suelo. Cuantifica el patrimonio suelo. Un valor de 30-40% es óptimo para productividad sustentable.',
  },
  {
    termino: 'MPASi',
    definicion:
      'Minerales Primarios Amorfos ricos en Silicio. Componen la fracción cultivable del suelo (~4000 ton/ha).',
  },
  {
    termino: 'Biosilicificación',
    definicion:
      'Proceso biológico de conversión de H₄SiO₄ soluble en SiO₂ amorfo (fitolitos) en la planta.',
  },
  {
    termino: 'Quelatación',
    definicion:
      'Proceso químico donde un agente orgánico "encapsula" un ión mineral protegiéndolo de fijación en el suelo.',
  },
  {
    termino: 'Glomalina',
    definicion:
      'Glicoproteína producida por hongos micorrícicos. Actúa como "pegamento" biológico estabilizando agregados del suelo.',
  },
  {
    termino: 'rH',
    definicion:
      'Coeficiente que integra pH y ORP. rH = ((ORP + 200) / 30) + 2 × pH. Un rH bajo indica estado reducido (rico en energía).',
  },
  {
    termino: 'CICE',
    definicion:
      'Capacidad de Intercambio Catiónico. Capacidad del suelo para retener e intercambiar cationes (Ca²⁺, Mg²⁺, K⁺).',
  },
]

const videos = [
  {
    id: 1,
    titulo: 'Por México Hablemos del Maíz - Edgar Quero 1 de 2',
    autor: 'Edgar Quero Gutiérrez',
    duracion: '45 min',
    url: 'https://www.youtube.com/watch?v=8CI405BJX8g',
  },
  {
    id: 2,
    titulo: 'Por México Hablemos del Maíz - Edgar Quero 2 de 2',
    autor: 'Edgar Quero Gutiérrez',
    duracion: '42 min',
    url: 'https://www.youtube.com/watch?v=Qxsl330V05w',
  },
  {
    id: 3,
    titulo: 'La nueva Agricultura que Respeta la Naturaleza',
    autor: 'Edgar Quero Gutiérrez',
    duracion: '38 min',
    url: 'https://www.youtube.com/watch?v=JMEKvNghLvs',
  },
  {
    id: 4,
    titulo: 'Estación 3 de la Biofábrica Modelo Utopía',
    autor: 'Pedro Isabeles',
    duracion: '25 min',
    url: 'https://www.youtube.com/watch?v=n9uhRLhOp68',
  },
]

const bibliografia = [
  {
    id: 1,
    cita: 'CIENCIA DE FRONTERA: Innovaciones Tecnológicas al Servicio de la Milpa, al Servicio del Campo',
    fuente: 'SADER - INIFAP - 2024',
    url: 'https://delcampo.org.mx/.cm4all/uproc.php/0/Libros%20del%20Campo/6.%20Libro%20Quero.pdf',
  },
  {
    id: 2,
    cita: 'Guía de Microorganismos de Montaña - Manuales Prácticos para la Elaboración de Bioinsumos',
    fuente: 'Gobierno de México',
    url: 'https://www.gob.mx/cms/uploads/attachment/file/737319/13_Microorganismos_de_montan_a.pdf',
  },
  {
    id: 3,
    cita: 'Guía de Biofábricas - Asociación Nacional del Café',
    fuente: 'Anacafé',
    url: 'https://www.anacafe.org/uploads/file/173bc1b5beff42acae7209f6bf954628/Guia-Biofabrica-Anacafe.pdf',
  },
  {
    id: 4,
    cita: 'Protocolo de Pedro Isabeles para Agricultura Ecológica/Orgánica sobre Piedras',
    fuente: 'Ekkofood Blog',
    url: 'https://ekkofood.com/protocolo-de-pedro-isabeles-para-agricultura-ecologicaorganica-sobre-piedras/',
  },
]

const descargas = [
  {
    id: 1,
    titulo: 'Manual de Recetas de Bioinsumos',
    descripcion: 'Recetas completas de bioles, caldos y microorganismos',
    formato: 'PDF',
    icono: '📄',
    url: '#',
  },
  {
    id: 2,
    titulo: 'Guía de los 6 Mitos de la Agricultura',
    descripcion: 'Desmintiendo creencias erróneas del campo',
    formato: 'PDF',
    icono: '📄',
    url: '#',
  },
  {
    id: 3,
    titulo: 'Protocolo de Biofábrica Modelo Utopía',
    descripcion: 'Guía paso a paso de las 9 estaciones',
    formato: 'PDF',
    icono: '📄',
    url: '#',
  },
  {
    id: 4,
    titulo: 'Fichas Técnicas de Bioinsumos',
    descripcion: 'Fichas completas para aplicación en campo',
    formato: 'PDF',
    icono: '📄',
    url: '#',
  },
]
</script>

<style scoped>
.glosario-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.glosario-item {
  padding: 1.25rem;
}

.glosario-termino {
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color-primary);
  margin: 0 0 0.25rem 0;
}

.glosario-definicion {
  font-size: 0.9rem;
  color: var(--color-gray-600);
  margin: 0;
  line-height: 1.6;
}

.video-card {
  padding: 1.25rem;
}

.video-thumbnail {
  height: 120px;
  background: var(--color-gray-900);
  border-radius: var(--radius);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 0.75rem;
}

.video-play {
  font-size: 3rem;
  color: var(--color-white);
  opacity: 0.8;
}

.video-duracion {
  position: absolute;
  bottom: 8px;
  right: 8px;
  background: rgba(0, 0, 0, 0.8);
  color: var(--color-white);
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
}

.video-titulo {
  font-weight: 600;
  font-size: 1rem;
  margin: 0 0 0.25rem 0;
}

.video-autor {
  font-size: 0.85rem;
  color: var(--color-gray-600);
  margin: 0 0 0.5rem 0;
}

.video-link {
  font-weight: 600;
  color: var(--color-primary);
  font-size: 0.9rem;
}

.bibliografia-item {
  padding: 1.25rem;
  margin-bottom: 0.75rem;
}

.bibliografia-cita {
  font-style: italic;
  color: var(--color-gray-800);
  margin: 0 0 0.5rem 0;
}

.bibliografia-link {
  font-size: 0.85rem;
  color: var(--color-primary);
}

.descarga-card {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  padding: 1.25rem;
}

.descarga-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.descarga-titulo {
  font-weight: 600;
  font-size: 1rem;
  margin: 0 0 0.25rem 0;
}

.descarga-desc {
  font-size: 0.85rem;
  color: var(--color-gray-600);
  margin: 0 0 0.5rem 0;
}

.descarga-link {
  font-weight: 600;
  color: var(--color-primary);
  font-size: 0.85rem;
}

@media (max-width: 768px) {
  .glosario-grid {
    grid-template-columns: 1fr;
  }
}
</style>

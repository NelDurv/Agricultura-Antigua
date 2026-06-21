<template>
  <div class="view-casos">
    <section class="section">
      <div class="container">
        <div class="section-title scroll-animate">
          <h2>Casos de Éxito</h2>
          <p>Resultados reales que demuestran que la agricultura orgánica avanzada funciona</p>
        </div>

        <div class="grid-3">
          <TarjetaCaso
            v-for="caso in casosExito"
            :key="caso.id"
            :caso="caso"
            class="scroll-animate"
          />
        </div>

        <!-- Caso destacado -->
        <div v-if="casosExito.length > 0" class="caso-destacado scroll-animate">
          <h3 style="font-family: var(--font-display)">🌟 Caso Destacado</h3>
          <div class="card" style="padding: 2rem">
            <div style="display: flex; gap: 2rem; align-items: flex-start; flex-wrap: wrap">
              <div style="flex: 2">
                <h4>{{ casosExito[0].titulo }}</h4>
                <p style="color: var(--color-gray-600)">
                  📍 {{ casosExito[0].ubicacion }} · {{ casosExito[0].cultivo }}
                </p>
                <p>{{ casosExito[0].descripcion }}</p>
                <ul style="margin-top: 1rem; padding-left: 1.5rem">
                  <li v-for="resultado in casosExito[0].resultados" :key="resultado">
                    {{ resultado }}
                  </li>
                </ul>
              </div>
              <div
                style="
                  flex: 1;
                  text-align: center;
                  font-size: 4rem;
                  background: var(--color-gray-100);
                  padding: 2rem;
                  border-radius: var(--radius);
                "
              >
                {{ casosExito[0].icono }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Cómo replicar el éxito -->
    <section class="section" style="background: var(--color-gray-100)">
      <div class="container">
        <div class="scroll-animate">
          <h3 style="font-family: var(--font-display)">¿Cómo replicar estos casos en tu campo?</h3>
          <div class="grid-3">
            <div class="card">
              <h4>1️⃣ Prepara tu suelo</h4>
              <p>
                Descompacta, incorpora materia orgánica y aplica microorganismos 100 días antes de
                la siembra.
              </p>
            </div>
            <div class="card">
              <h4>2️⃣ Aplica silicio</h4>
              <p>
                El silicio es el elemento que la Revolución Verde olvidó. Aplica Silimotion® o agua
                de vidrio.
              </p>
            </div>
            <div class="card">
              <h4>3️⃣ Fabrica tus insumos</h4>
              <p>
                Con la Biofábrica Utopía puedes producir tus propios fertilizantes y controladores
                de plagas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import TarjetaCaso from '@/components/shared/TarjetaCaso.vue'
import { CASOS_EXITO } from '@/data/contenido.js'

const casosExito = CASOS_EXITO
</script>

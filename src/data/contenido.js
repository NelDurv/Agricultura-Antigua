// ============================================================
// AGRICULTURA ANTIGUA, PARA ¡HOY! - BASE DE DATOS COMPLETA
// ============================================================

// ------------------------------------------------------------
// 1. PILARES (con temas completos)
// ------------------------------------------------------------
export const PILARES = [
  {
    id: 'suelo-vivo',
    icono: '🌍',
    titulo: 'Suelo Vivo',
    subtitulo: 'El Ecosistema Invisible',
    descripcion: 'El suelo no es un sustrato inerte, sino un elemento vivo. Microbiología de consorcio, descompactación mecánica y biológica, y energía a través del ORP (Potencial Óxido-Reducción).',
    temas: [
      'Microbiología de Consorcio (600 microorganismos del bosque)',
      'Descompactación Mecánica y Biológica',
      'Energía y ORP (Potencial Óxido-Reducción)',
      'Salud Física del Suelo (porosidad, oxígeno)',
      'Infiltración y Retención de Agua (1% MO = 144,000 L/ha)',
      'Ciclos Físico-Químico-Biológicos',
      'IASS - Índice de Sustentabilidad del Suelo'
    ],
    color: '#2d5a27',
    bgColor: '#e8f0e6'
  },
  {
    id: 'nutricion-vegetal',
    icono: '☀️',
    titulo: 'Nutrición Vegetal Integral',
    subtitulo: 'Cosechando el Sol',
    descripcion: 'La agricultura como proceso de captación de energía lumínica. La Regla del 95/5, nutrición lumínica, carbónica, de hidrógeno y el Silicio como elemento maestro.',
    temas: [
      'La Regla del 95/5 (C-H-O: 95% de la planta es gratis)',
      'Nutrición Lumínica (Cuántica) - Captura de fotones',
      'Nutrición Carbónica (CO₂) - El fertilizante más importante',
      'Nutrición de Hidrógeno (Agua) - El vehículo de energía',
      'Bioquímica del Silicio - El "Padre del Silicio"',
      'Biosilicificación - Formación de fitolitos y tricomas',
      'Tricomas y Fitolitos - Defensa y captura de luz',
      'Fertilizantes Híbridos de Lenta Liberación'
    ],
    color: '#C49B6C',
    bgColor: '#f5eee6'
  },
  {
    id: 'bioinsumos',
    icono: '🧪',
    titulo: 'Bioinsumos',
    subtitulo: 'La Biofábrica Utopía',
    descripcion: 'Instrucciones prácticas para montar una biofábrica de alta concentración en solo 10 m². Procesos aeróbicos, minerales quelatados y ácidos orgánicos.',
    temas: [
      'Estación 1: Microorganismos de Montaña (Sólidos)',
      'Estación 2: Microorganismos Benéficos (Líquidos)',
      'Estación 3: Estiércol Falso (Sólido Nutritivo)',
      'Estación 4: Biol Potenciado',
      'Estación 5: Multimineral Quelado (60 minerales)',
      'Estación 6: Ácidos Húmicos y Fúlvicos',
      'Estación 7: Fungicidas Orgánicos (Sulfocálcico, Bordelés)',
      'Estación 8: Insecticidas Orgánicos (Jabón Potásico, Neem)',
      'Estación 9: Programa Integrado de Control'
    ],
    color: '#4a7a43',
    bgColor: '#e6efe5'
  },
  {
    id: 'agricultura-tradicional',
    icono: '🌾',
    titulo: 'Agricultura Tradicional',
    subtitulo: 'Sabiduría Ancestral',
    descripcion: 'Rescate de modelos que fueron ignorados por la Revolución Verde. El Sistema Milpa Maya, Terrazas Incas y el control de arvenses como aliadas.',
    temas: [
      'Sistema Milpa Maya - 9 mazorcas por planta',
      'Terrazas Incas y Diseño Hidrológico',
      'Control de Arvenses - La maleza como aliada',
      'Rescate de la Sabiduría Ancestral',
      'Descolonización Científica y Tecnológica',
      'El mito del maíz que se multiplicaba'
    ],
    color: '#8B6F47',
    bgColor: '#f0ebe0'
  },
  {
    id: 'ciencia-moderna',
    icono: '🔬',
    titulo: 'Ciencia Moderna',
    subtitulo: 'Tecnología de Frontera',
    descripcion: 'Herramientas para dejar de cultivar a ciegas. Metagenómica, microscopía electrónica, fertilización híbrida y dispositivos analíticos móviles.',
    temas: [
      'Metagenómica - ADN del suelo y microbiomas',
      'Microscopía Electrónica de Barrido (SEM)',
      'ORP - Medición de la Energía del Suelo',
      'Dispositivos Analíticos Móviles (pH, CE, ORP)',
      'Arado Yomex - Descompactación a 60-80 cm',
      'Innovaciones Tecnológicas (Apps, drones, sensores)',
      'SRI - Sistema de Intensificación del Arroz'
    ],
    color: '#1A3A5C',
    bgColor: '#e4ecf2'
  }
]

// ------------------------------------------------------------
// 2. MITOS (con realidad, evidencia y acción completos)
// ------------------------------------------------------------
export const MITOS = [
  {
    id: 'mito-1',
    titulo: 'Las plantas comen tierra',
    mito: '"Las plantas se alimentan de la tierra. Si quieres que una planta crezca grande y fuerte, necesitas darle más tierra o más fertilizante."',
    realidad: 'La planta NO come tierra. La planta se construye a sí misma a partir del AIRE y del AGUA.',
    evidencia: 'El experimento de Van Helmont (1624): un sauce creció de 2.28 kg a 85 kg en 5 años, mientras que la tierra solo perdió 56 gramos.',
    accion: 'El 95% de tu cosecha es GRATIS. Enfócate en optimizar la fotosíntesis, el CO₂ y el agua.',
    icono: '🌱',
    color: '#2d5a27'
  },
  {
    id: 'mito-2',
    titulo: 'Más fertilizante = más producción',
    mito: '"Si quieres más producción, aplica más fertilizante. Cuanto más NPK, más cosecha."',
    realidad: 'La producción NO es directamente proporcional a la cantidad de fertilizante. El 80% del fertilizante se pierde.',
    evidencia: 'La Ley del Mínimo (Liebig): el nutriente menos disponible es el que limita la producción.',
    accion: 'Identifica el factor más limitante (temperatura, agua, compactación, luz) y optimízalo.',
    icono: '💰',
    color: '#C49B6C'
  },
  {
    id: 'mito-3',
    titulo: 'El suelo es solo un soporte',
    mito: '"El suelo es solo el soporte físico donde la planta echa raíces. Es como una maceta gigante."',
    realidad: 'El suelo NO es un soporte inerte. El suelo es un ORGANISMO VIVO con millones de microorganismos.',
    evidencia: 'En 1 gramo de suelo fértil hay 100-500 millones de bacterias, 1-10 millones de hongos.',
    accion: 'Gestiona el suelo como el patrimonio más valioso que tienes.',
    icono: '🌍',
    color: '#4a7a43'
  },
  {
    id: 'mito-4',
    titulo: 'La M.O. solo sirve para nutrientes',
    mito: '"La materia orgánica es solo una fuente de nutrientes. Si pones suficiente fertilizante, no necesitas materia orgánica."',
    realidad: 'La materia orgánica es el MOTOR del suelo vivo: retiene agua, regula temperatura, alimenta microorganismos.',
    evidencia: '1% de materia orgánica = 144,000 litros de agua por hectárea.',
    accion: 'Reincorpora todos los residuos de cosecha y mantén cobertura vegetal permanente.',
    icono: '💧',
    color: '#8B6F47'
  },
  {
    id: 'mito-5',
    titulo: 'La agricultura orgánica produce menos',
    mito: '"La agricultura orgánica produce menos que la agricultura convencional."',
    realidad: 'La agricultura orgánica de última generación produce MÁS con MENOS insumos y MENOS costos.',
    evidencia: 'UABCS: 5 espigas por planta; Sumant Kumar: 22.4 t/ha de arroz (récord mundial).',
    accion: 'Aplica el protocolo de 100 días y la ciencia de frontera.',
    icono: '📈',
    color: '#1A3A5C'
  },
  {
    id: 'mito-6',
    titulo: 'El pH es el indicador más importante',
    mito: '"El pH es el indicador más importante del suelo. Si el pH no está en el rango correcto, los nutrientes no están disponibles."',
    realidad: 'El ORP (Potencial Óxido-Reducción) mide la ENERGÍA del suelo y es más importante que el pH.',
    evidencia: 'Un suelo con pH perfecto pero oxidado consume la energía de la planta.',
    accion: 'Mide el ORP de tu suelo y aplícale bioles con carga energética negativa.',
    icono: '⚡',
    color: '#D4A853'
  },
  // Mitos campesinos adicionales
  {
    id: 'mito-7',
    titulo: 'Las cabañuelas predicen el clima',
    mito: '"Los primeros 12 días de enero predicen el clima de todo el año."',
    realidad: 'Las cabañuelas no tienen sustento científico. La probabilidad de acierto es solo del 30%.',
    evidencia: 'Los meteorólogos confirman que la correlación es por casualidad, no por causalidad.',
    accion: 'La mejor predicción del clima es un suelo que retiene agua. 1% de MO = 144,000 L/ha.',
    icono: '🌤️',
    color: '#6B8C6B'
  },
  {
    id: 'mito-8',
    titulo: 'La milpa de dos puntas es sagrada',
    mito: '"La milpa que tiene dos puntas es una figura sagrada. Se le piden mazorcas para todo el año."',
    realidad: 'Una planta con dos espigas es el resultado de buena nutrición y condiciones favorables.',
    evidencia: 'El fósforo, zinc, silicio y micronutrientes determinan el número de espigas.',
    accion: 'Aprende a nutrir el suelo para que todas tus plantas sean productivas.',
    icono: '🌽',
    color: '#C49B6C'
  },
  {
    id: 'mito-9',
    titulo: 'Las gotas de rocío queman las plantas',
    mito: '"Las gotas de rocío actúan como lentes, quemando las plantas cuando el sol las atraviesa."',
    realidad: 'Las gotas de agua NO queman las hojas. El problema son los hongos.',
    evidencia: 'El efecto lupa no concentra suficiente energía; las manchas son síntomas de enfermedades fúngicas.',
    accion: 'Aplica silicio para fortalecer la planta y evitar que los hongos penetren la hoja.',
    icono: '💦',
    color: '#4A7A8C'
  }
]

// ------------------------------------------------------------
// 3. CASOS DE ÉXITO
// ------------------------------------------------------------
export const CASOS_EXITO = [
  {
    id: 'uabcs',
    titulo: 'UABCS: 5 Espigas por Planta',
    descripcion: 'La Universidad Autónoma de Baja California Sur aplicó el modelo Utopía al cultivo de maíz con resultados impresionantes.',
    icono: '🌽',
    cultivo: 'Maíz',
    ubicacion: 'Baja California Sur, México',
    resultados: [
      '5 espigas por planta (vs. 1-2 convencional)',
      '20 hileras por espiga (vs. 12-14 convencional)',
      '41 granos por hilera (vs. 30-35 convencional)',
      '8.7-11 toneladas/ha (vs. 4-6 convencional)'
    ]
  },
  {
    id: 'sumant-kumar',
    titulo: 'Sumant Kumar: Récord Mundial',
    descripcion: 'En Bihar, India, logró el récord mundial usando SRI (Sistema de Intensificación del Arroz).',
    icono: '🌾',
    cultivo: 'Arroz',
    ubicacion: 'Bihar, India',
    resultados: [
      '22.4 toneladas/ha (vs. 4-8 convencional)',
      '5 kg de semilla/ha (vs. 35-40 kg convencional)',
      '50% menos agua (vs. inundación continua)',
      '34.4 macollos/planta (vs. 19.4 convencional)'
    ]
  },
  {
    id: 'valle-cauca',
    titulo: 'Valle del Cauca: 50% Menos Costos',
    descripcion: 'Agricultores del Valle del Cauca redujeron sus costos de producción entre un 40-50% con el modelo Utopía.',
    icono: '🇨🇴',
    cultivo: 'Variados',
    ubicacion: 'Valle del Cauca, Colombia',
    resultados: [
      '40-50% menos costos de producción',
      'Suelo regenerado',
      'Mayor resiliencia a plagas',
      'Cosechas más abundantes'
    ]
  }
]

// ------------------------------------------------------------
// 4. NÚMEROS CLAVE
// ------------------------------------------------------------
export const NUMEROS_CLAVE = [
  { valor: '95%', label: 'de la planta es C-H-O (gratis del aire y el agua)' },
  { valor: '144,000', label: 'litros de agua retiene 1% de MO por hectárea' },
  { valor: '12°C', label: 'reduce la temperatura foliar el silicio' },
  { valor: '5', label: 'espigas por planta con el protocolo Utopía' },
  { valor: '22.4', label: 'toneladas de arroz por hectárea (récord mundial)' },
  { valor: '80%', label: 'del fertilizante convencional se pierde' },
  { valor: '40-50%', label: 'reducción de costos con el modelo Utopía' },
  { valor: '100', label: 'días antes de la siembra comienza el protocolo' }
]

// ------------------------------------------------------------
// 5. RECETAS
// ------------------------------------------------------------
export const RECETAS = [
  {
    id: 'biol-2',
    titulo: 'Microorganismos Benéficos (Estación 2)',
    descripcion: 'Cultivo líquido de microorganismos para aplicaciones al suelo y foliar.',
    ingredientes: ['5 kg de MM sólidos', '190 L de agua (sin cloro)', '4 kg de azúcar o melaza'],
    pasos: [
      'Llena el tambor con 190 L de agua',
      'Agrega 4 kg de azúcar y agita',
      'Cuelga el saco con 5 kg de MM sólidos',
      'Agita 10 min y tapa con tela',
      'Agita mañana y tarde por 10 min durante 8 días',
      'Día 9: LISTO PARA USAR'
    ],
    tiempo: '8 días',
    categoria: 'Bioinsumos',
    icono: '🧫'
  },
  {
    id: 'caldo-sulfocalcico',
    titulo: 'Caldo Sulfocálcico',
    descripcion: 'Fungicida, acaricida e insecticida orgánico. Controla más de 50 enfermedades fúngicas.',
    ingredientes: ['100 L de agua', '20 kg de azufre en polvo', '10 kg de cal'],
    pasos: [
      'Mezcla azufre y cal en seco',
      'Hierve el agua',
      'Añade la mezcla lentamente, agitando',
      'Cocina hasta color rojo vinotinto (20-30 min)',
      'Deja reposar y enfriar',
      'Guarda en recipientes opacos'
    ],
    tiempo: '1 hora',
    categoria: 'Caldos Minerales',
    icono: '🧪'
  },
  {
    id: 'empanizado-semillas',
    titulo: 'Empanizado de Semillas',
    descripcion: 'Tratamiento biológico y mineral para germinación uniforme y vigor inicial.',
    ingredientes: ['Estación 6', 'Estación 5', 'Estación 2', 'Melaza o azúcar', 'Roca fosfórica fina'],
    pasos: [
      'Mezcla partes iguales de Estaciones 6, 5 y 2',
      'Agrega melaza o azúcar',
      'Remoja las semillas',
      'Espolvorea con roca fosfórica',
      'Seca a la sombra por 24 h',
      '¡Siembra inmediatamente!'
    ],
    tiempo: '24 horas',
    categoria: 'Tratamiento de Semillas',
    icono: '🌱'
  }
]

// ------------------------------------------------------------
// 6. GLOSARIO TÉCNICO
// ------------------------------------------------------------
export const GLOSARIO = [
  { termino: 'ORP', definicion: 'Potencial Óxido-Reducción. Mide la carga de electrones (energía) en el suelo. Un suelo sano debe estar reducido (-100 a -300 mV).' },
  { termino: 'IASS', definicion: 'Índice Agrícola de Sustentabilidad del Suelo. Cuantifica el patrimonio suelo. Un valor de 30-40% es óptimo para productividad sustentable.' },
  { termino: 'MPASi', definicion: 'Minerales Primarios Amorfos ricos en Silicio. Componen la fracción cultivable del suelo (~4000 ton/ha).' },
  { termino: 'Biosilicificación', definicion: 'Proceso biológico de conversión de H₄SiO₄ soluble en SiO₂ amorfo (fitolitos) en la planta.' },
  { termino: 'Quelatación', definicion: 'Proceso químico donde un agente orgánico "encapsula" un ión mineral protegiéndolo de fijación en el suelo.' },
  { termino: 'Glomalina', definicion: 'Glicoproteína producida por hongos micorrícicos. Actúa como "pegamento" biológico estabilizando agregados del suelo.' },
  { termino: 'rH', definicion: 'Coeficiente que integra pH y ORP. rH = ((ORP + 200) / 30) + 2 × pH. Un rH bajo indica estado reducido (rico en energía).' },
  { termino: 'CICE', definicion: 'Capacidad de Intercambio Catiónico. Capacidad del suelo para retener e intercambiar cationes (Ca²⁺, Mg²⁺, K⁺).' }
]
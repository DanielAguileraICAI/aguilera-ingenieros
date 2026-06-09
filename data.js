// Data — Spanish (primary) + English (parallel)
// Translations follow the same content-fundamentals tone: institutional, technical, period-separated headlines.
window.AI_I18N = {
  es: {
    nav: [
      { id: "home",       label: "Inicio" },
      { id: "quienes",    label: "Quiénes somos" },
      { id: "proyectos",  label: "Proyectos" },
      { id: "personas",   label: "Personas" },
      { id: "talento",    label: "Talento" },
      { id: "newsletter", label: "Noticias" },
      { id: "contacto",   label: "Contacto" },
    ],

    /* Client logos shown on the home + projects pages in a rotating
       strip. Real logo files live in assets/clients/. Ordered alphabetically
       to avoid implying any hierarchy of importance between clients. */
    clients: [
      { name: "Banco Santander",         logo: "assets/clients/banco-santander.png" },
      { name: "BBVA",                    logo: "assets/clients/bbva.png",            scale: 0.65 },
      { name: "Beiersdorf",              logo: "assets/clients/beiersdorf.png" },
      { name: "Bloomberg",               logo: "assets/clients/bloomberg.png" },
      { name: "Boston Consulting Group", logo: "assets/clients/bcg.svg",             scale: 0.75 },
      { name: "BP Solar",                logo: "assets/clients/bp-solar.png" },
      { name: "Data4",                   logo: "assets/clients/data4.png" },
      { name: "El Corte Inglés",         logo: "assets/clients/el-corte-ingles.png", scale: 0.9, noBlend: true },
      { name: "GSK",                     logo: "assets/clients/gsk.png",             scale: 0.85 },
      { name: "Hyatt",                   logo: "assets/clients/hyatt.png" },
      { name: "J.P. Morgan",             logo: "assets/clients/jp-morgan.png" },
      { name: "Kempinski",               logo: "assets/clients/kempinski.png" },
      { name: "mAbxience",               logo: "assets/clients/mabxience.png" },
      { name: "Mapfre",                  logo: "assets/clients/mapfre.png",          scale: 1.3 },
      { name: "PharmaMar",               logo: "assets/clients/pharmamar.png",       scale: 1.35 },
    ],

    home: {
      /* Home carousel — full-bleed video reels (one per vertical), each a
         concatenation of multiple source cuts to keep the visual moving.
         The `img` field is preserved as the video `poster` so the still
         paints instantly before the clip buffers. Autoplay duration is
         driven by each video's natural length (~21–39s) via the `ended`
         event — no fixed timer. The dot ring fills via rAF reading
         video.currentTime / video.duration. */
      heroSlides: [
        { sectorId: "data-centers",          eyebrow: "Centros de Proceso de Datos", headline: "La ingeniería detrás de la IA y los datos.",       img: "assets/hero_bbva_noche.jpg", video: "assets/videos/home_clip_1_data_centers.mp4",  objectPosition: "center 0%" },
        { sectorId: "edificios-singulares",  eyebrow: "Edificios singulares",        headline: "Edificios singulares,\ningeniería sin compromisos.",  img: "assets/hero_edificios_singulares.jpg", video: "assets/videos/home_clip_3_buildings.mp4" },
        { sectorId: "farma-bio",             eyebrow: "Farma & Bioseguridad",        headline: "Ingeniería de instalaciones para entornos regulados.", img: "assets/bg_industrial_7.jpg", video: "assets/videos/home_clip_2_pharma.mp4?v=3" },
        { sectorId: "fabricacion-avanzada",  eyebrow: "Fabricación de alta precisión", headline: "Plantas industriales de vanguardia.",               img: "assets/bg_industrial_4.jpg", video: "assets/videos/home_clip_4_manufacturing.mp4" },
      ],
      heroEyebrow: "Tres verticales",
      heroTitle: "Ingeniería para los proyectos más exigentes.",
      heroSub: "Aguilera Ingenieros diseña las instalaciones críticas detrás de tres tipologías de proyecto que definen el sector.",
      verticals: [
        {
          id: "cpd",
          tag: "01",
          label: "Data Centers",
          short: "Infraestructura crítica diseñada para no fallar.",
          long: "Tier III y Tier IV. Redundancia total. Eficiencia energética. Más de 200 proyectos de CPD certificados para banca, telecomunicaciones y administración.",
          stats: [
            { k: "Certificaciones", v: "Tier I – IV" },
            { k: "Proyectos", v: "+200" },
            { k: "Referencias", v: "BBVA · Mapfre" },
          ],
          notes: [
            "Refrigeración por agua helada — N+1",
            "Tier IV · TIA-942 · ATD certified",
            "PUE objetivo ≤ 1.35",
          ],
        },
        {
          id: "farma",
          tag: "02",
          label: "Farma & Bioseguridad",
          short: "Ingeniería para entornos regulados.",
          long: "Salas blancas ISO 5–8. Laboratorios P2 y P3. Normativa GMP, FDA, ISPE. Diseño integral para industria farmacéutica, cosmética y centros de I+D.",
          stats: [
            { k: "Clases ISO", v: "5 · 6 · 7 · 8" },
            { k: "Normativa", v: "GMP · FDA · ISPE" },
            { k: "Referencias", v: "GSK · MSD · Biomagune" },
          ],
          notes: [
            "AHU — tratamiento de aire 100% exterior",
            "Filtros HEPA H14 · ULPA U15",
            "Cascada de presión +15Pa → +30Pa",
          ],
        },
        {
          id: "edif",
          tag: "03",
          label: "Edificios Singulares",
          short: "Torres, plantas industriales, instalaciones de gran escala.",
          long: "Edificios en altura, sedes corporativas y plantas industriales de primer nivel. Diseño y dirección de instalaciones para proyectos firmados por los principales estudios de arquitectura internacionales.",
          stats: [
            { k: "Tipologías", v: "Torres · Plantas · Sedes" },
            { k: "Sostenibilidad", v: "LEED · BREEAM" },
            { k: "Arquitectos", v: "Foster · Calatrava · SOM" },
          ],
          notes: [
            "Doble fachada ventilada de alta eficiencia",
            "VRV con recuperación de calor",
            "Iluminación KNX · BMS integrado",
          ],
        },
      ],
      viewProjects: "Ver proyectos",
      memo: {
        pullquote: "Ingeniería de vanguardia desde {1961}. Más de 1.000 proyectos. Compromiso total con los objetivos de nuestros clientes.",
      },
      stats: [
        { num: "+60",    desc: "años de experiencia en ingeniería de instalaciones" },
        { num: "+1.000", desc: "proyectos ejecutados en España e internacional" },
      ],
      featuredEyebrow: "Proyectos destacados",
      featuredTitle: "Selección de obras recientes",
      viewAllProjects: "Ver todos los proyectos",
      insightsEyebrow: "Últimas noticias e insights",
      insightsTitle: "Casos, certificaciones y perspectivas",
      readMore: "Leer más",
      viewAllNews: "Ver todas las noticias",
      clientsEyebrow: "Confían en nosotros",
    },

    featured: [
      { tag: "Data Center", name: "BBVA Tres Cantos CPD II", loc: "Tier IV · Madrid", img: "assets/hero_bbva_noche.jpg" },
      { tag: "Data Center", name: "BBVA Perú", loc: "Tier III · Lima",                 img: "assets/hero_bbva_noche.jpg" },
      { tag: "Farma",       name: "GSK — Proyecto Eagle", loc: "Tres Cantos, Madrid",  img: "assets/hero_farma.jpg" },
      { tag: "Fabricación", name: "Planta Beiersdorf Lechia", loc: "Poznań, Polonia",  img: "assets/hero_industriales.jpg" },
      { tag: "Oficinas",    name: "Torre Sacyr / PwC", loc: "Foster & Partners · Madrid", img: "assets/hero_oficinas.jpg" },
      { tag: "Clima y Sostenibilidad", name: "Banco Popular Abelias", loc: "LEED Gold · Madrid", img: "assets/hero_oficinas.jpg" },
    ],

    /* Unified news source — feeds the home "Latest news & insights" cards
       (first 3), the /newsletter page list, and the article detail pages.
       Each article has a `body` array of typed blocks; renderer maps the
       types to the brand typography tokens (--fs-h2, --fs-body, etc.).
       Block types: lede | p | h2 | h3 | image | quote. */
    news: [
      { id: "14-bbva-tres-cantos-tier-iv",
        n: "Nº 14", date: "Marzo 2026", read: "5 min", tag: "Caso de éxito",
        title: "BBVA Tres Cantos: primer CPD Tier IV certificado en España",
        excerpt: "Aguilera Ingenieros lideró el diseño y supervisión de las instalaciones del centro de datos más avanzado de la banca española.",
        img: "assets/hero_bbva_noche.jpg",
        body: [
          { type: "lede", text: "El centro de proceso de datos BBVA Tres Cantos II obtuvo en marzo la certificación Tier IV del Uptime Institute. Es el primer CPD bancario en España que alcanza el nivel más alto de tolerancia a fallos en construcción concurrente y mantenimiento sin interrupción del servicio." },
          { type: "h2", text: "El alcance del proyecto" },
          { type: "p", text: "El encargo cubrió el diseño completo de instalaciones mecánicas, eléctricas y de seguridad: cuatro salas blancas de 600 m² con densidades de hasta 18 kW por rack, redundancia 2N en alimentación y refrigeración, y un sistema de gestión integrado que unifica más de 9.000 puntos de monitorización." },
          { type: "p", text: "Aguilera Ingenieros acompañó al cliente desde el anteproyecto hasta la puesta en marcha y la auditoría final del Uptime Institute, en colaboración con los equipos internos de BBVA y la propiedad." },
          { type: "image", src: "assets/proj_aerial_dc.jpg", caption: "Vista aérea del campus técnico — fase de obra exterior, 2025." },
          { type: "h2", text: "Por qué Tier IV importa" },
          { type: "p", text: "Tier IV exige tolerancia simultánea a un fallo en cualquier componente y a la pérdida de un camino de distribución completo. En términos prácticos, el cliente puede sustituir un transformador, una enfriadora o un cuadro eléctrico sin parar ningún servicio crítico." },
          { type: "quote", text: "El reto técnico no es alcanzar Tier IV una vez. Es operarlo durante 25 años sin perder esa condición." },
          { type: "p", text: "El diseño contempla además un PUE objetivo de 1,35 en régimen anual, gracias a un sistema de free-cooling indirecto adiabático que aprovecha la baja humedad del entorno de Tres Cantos durante más de 6.000 horas al año." },
          { type: "h2", text: "Próximos pasos" },
          { type: "p", text: "BBVA prevé replicar el modelo en Latinoamérica durante 2027. Aguilera Ingenieros participará en el diseño base de las nuevas sedes en colaboración con los equipos locales." },
        ] },

      { id: "13-hepa-h14-gmp",
        n: "Nº 13", date: "Diciembre 2025", read: "7 min", tag: "Farma & Bioseguridad",
        title: "Filtración HEPA H14 en suites GMP de llenado aséptico",
        excerpt: "Notas técnicas sobre la cascada de presiones, integridad de filtros y validación periódica en entornos farmacéuticos.",
        img: "assets/hero_farma.jpg",
        body: [
          { type: "lede", text: "Las suites de llenado aséptico bajo Anexo 1 (EU GMP, revisión 2023) exigen una filtración terminal HEPA H14 sobre la zona de trabajo grado A. Resumimos las claves de diseño que aplicamos en los últimos proyectos para clientes del sector farmacéutico." },
          { type: "h2", text: "Cascada de presiones" },
          { type: "p", text: "El gradiente típico entre salas grado A → B → C → D es de 10–15 Pa por escalón. En suites pequeñas (<30 m²) trabajamos con 12 Pa nominales, con tolerancia de ±3 Pa monitorizada en tiempo real por el BMS." },
          { type: "p", text: "Las esclusas de personal usan presión intermedia con interbloqueo de puertas; las de material, en cambio, se diseñan presurizadas en pico (\"bubble\") para evitar arrastre desde la zona menos crítica durante la transferencia." },
          { type: "image", src: "assets/hero_farma.jpg", caption: "Suite de llenado aséptico bajo flujo laminar. Cliente confidencial, 2025." },
          { type: "h2", text: "Integridad de filtros" },
          { type: "p", text: "El test DOP/PAO de integridad se realiza in-situ tras la instalación, tras cualquier intervención sobre el plenum, y al menos semestralmente en producción. Aceptamos penetración máxima del 0,01 % en condición de servicio." },
          { type: "quote", text: "Una suite GMP no se valida una vez. Se revalida cada vez que algo cambia: filtro, AHU, set-point, procedimiento." },
          { type: "h2", text: "Validación periódica" },
          { type: "p", text: "El plan de cualificación incluye DQ, IQ, OQ y PQ. La PQ se repite anualmente con muestreo microbiológico (pasivo y activo) en condiciones de reposo y operación. Documentamos todos los datos en el sistema de gestión documental del cliente." },
        ] },

      { id: "12-leed-gold-sacyr-abelias",
        n: "Nº 12", date: "Septiembre 2025", read: "6 min", tag: "Clima y Sostenibilidad",
        title: "Certificación LEED Gold: Torre Sacyr y Banco Popular Abelias",
        excerpt: "Proyectos pioneros en España en eficiencia energética y sostenibilidad certificada por el USGBC.",
        img: "assets/hero_dc_green.jpg",
        body: [
          { type: "lede", text: "Aguilera Ingenieros firmó el diseño de instalaciones de los dos primeros edificios de oficinas en Madrid con certificación LEED Gold otorgada por el U.S. Green Building Council. Cinco años después, ambos siguen entre los más eficientes de su categoría." },
          { type: "h2", text: "Torre Sacyr / Sede PwC" },
          { type: "p", text: "Diseñada por Foster & Partners, la torre integra fachada de doble piel con cámara ventilada, recuperación entálpica en todas las UTAs y un sistema VRV de alta eficiencia con recuperación de calor entre zonas." },
          { type: "p", text: "El consumo medido tras dos años de operación se sitúa un 31 % por debajo de la referencia ASHRAE 90.1, suficiente para los créditos máximos en la categoría Energy & Atmosphere." },
          { type: "image", src: "assets/hero_oficinas.jpg", caption: "Torre Sacyr — fachada sur, Madrid." },
          { type: "h2", text: "Banco Popular C/ Abelias" },
          { type: "p", text: "El proyecto Abelias planteaba un reto distinto: un edificio existente de los años ochenta sobre el que ejecutar una rehabilitación profunda sin perder superficie útil. La estrategia se centró en la mejora de la envolvente y la sustitución completa de la maquinaria por equipos de clase A++." },
          { type: "quote", text: "Sostenibilidad medida, no declarada. Lo que importa es el consumo real cinco años después de la entrega." },
        ] },

      { id: "11-beiersdorf-lechia",
        n: "Nº 11", date: "Junio 2025", read: "6 min", tag: "Fabricación avanzada",
        title: "Plantas industriales de alta precisión: el caso Beiersdorf Lechia",
        excerpt: "De la viabilidad técnica a la puesta en marcha de una planta de fabricación de gran formato en Poznań.",
        img: "assets/hero_industriales.jpg",
        body: [
          { type: "lede", text: "La planta Beiersdorf Lechia de Poznań (Polonia) entró en producción a comienzos de 2025. Aguilera Ingenieros se encargó del diseño de instalaciones, supervisión y commissioning sobre una superficie construida de 38.000 m²." },
          { type: "h2", text: "Bases del diseño" },
          { type: "p", text: "El proceso requiere control simultáneo de temperatura (±1 °C), humedad (±5 % HR) y carga partícula en las salas de mezclado, envasado y almacén de producto terminado. La planta opera 24/7 con paradas planificadas trimestrales." },
          { type: "p", text: "La ingeniería se desarrolló íntegramente en modelo BIM federado entre tres disciplinas, lo que permitió detectar y resolver más de 1.400 interferencias antes de la fase de obra." },
          { type: "image", src: "assets/bim_baku_hotel.jpg", caption: "Modelo BIM federado al detalle LOD 300 — coordinación entre disciplinas mecánica, eléctrica y arquitectura." },
          { type: "h2", text: "Puesta en marcha" },
          { type: "p", text: "El protocolo de commissioning se ejecutó en cuatro fases (factory acceptance, site acceptance, operational qualification, performance qualification) durante un total de 14 semanas. Todos los sistemas críticos pasaron la PQ en la primera iteración." },
        ] },

      { id: "10-construccion-internacionalizacion",
        n: "Nº 10", date: "Marzo 2025", read: "4 min", tag: "Conferencia",
        title: "Edificación, infraestructuras e internacionalización",
        excerpt: "Casos de éxito con BBVA: cómo gestionar proyectos de instalaciones complejos a escala corporativa global.",
        img: "assets/hero_oficinas.jpg",
        body: [
          { type: "lede", text: "El pasado febrero, nuestro Director General participó en la jornada \"Construcción, infraestructuras e internacionalización\" organizada por el Colegio de Ingenieros Industriales de Madrid. Resumimos los puntos principales de su intervención." },
          { type: "h2", text: "Escalar sin diluir el criterio técnico" },
          { type: "p", text: "El reto al acompañar a un cliente corporativo a varios países no es replicar un proyecto: es replicar el criterio que llevó a un buen proyecto. Esto exige un marco interno de estándares, listas de comprobación y procesos de revisión que sobreviva al cambio de equipo, de geografía y de proveedores." },
          { type: "p", text: "En el caso de BBVA, ese marco se ha traducido en seis sedes corporativas y cuatro centros de datos en cinco países, con un mismo equipo técnico responsable del diseño base y equipos locales para la ejecución." },
          { type: "quote", text: "La internacionalización no es exportar planos. Es exportar el modo de pensar el proyecto." },
        ] },
    ],

    quienes: {
      eyebrow: "Quiénes somos",
      heroTitle: "Más de seis décadas construyendo infraestructura de referencia.",
      sectionLabel: "Quiénes somos",
      body: [
        "<strong>Aguilera Ingenieros</strong> es una empresa de ingeniería de proyectos complejos y de gran especialización. Su campo de actuación son las instalaciones de edificios singulares y edificios industriales.",
        "Fundada en 1961, cuenta con más de 1.000 referencias en proyectos de primer nivel en una amplia gama de sectores nacionales e internacionales. El 100% del capital pertenece a socios con dedicación exclusiva, garantizando independencia profesional y financiera total.",
      ],
      pillarsEyebrow: "Tres pilares",
      pillars: [
        { num: "01", t: "Trayectoria",    p: "Fundada en 1961. Más de mil proyectos ejecutados en España e internacional." },
        { num: "02", t: "Misión",         p: "Ofrecer soluciones de ingeniería con alto valor añadido, innovación de vanguardia y sólidos principios éticos, estableciendo relaciones a largo plazo con nuestros clientes." },
        { num: "03", t: "Independencia",  p: "El 100% del capital pertenece a socios con dedicación exclusiva. Sin conflictos de interés. Sin compromisos externos." },
      ],
      codeEthicEyebrow: "Código ético",
      codeProfEyebrow: "Código profesional",
      ethicalCode: [
        "Independencia, equidad y veracidad",
        "Integridad",
        "Máximo rigor profesional y responsabilidad",
        "Fidelidad y compromiso con los intereses de nuestros clientes",
        "Compromiso con el medio ambiente y la sostenibilidad",
        "Compromiso con la sociedad y el interés común",
      ],
      professionalCode: [
        "Identificación adecuada de las necesidades y objetivos del cliente",
        "Rigor y competencia técnica",
        "Rigor y competencia en la gestión del proyecto",
        "Diligencia, rapidez de respuesta y puntualidad",
        "Accesibilidad, flexibilidad, trato amable y respetuoso",
      ],
      accredEyebrow: "Acreditaciones y certificaciones",
      servicesEyebrow: "Servicios",
      services: [
        "Estudios de viabilidad técnica",
        "Diseño integral de proyectos de ingeniería de instalaciones",
        "Proyectos integrales de Centros de Proceso de Datos (Tier I–IV)",
        "Proyectos integrales de Laboratorios, Salas Blancas y Centros de I+D",
        "Proyectos integrales de Plantas Industriales",
        "Proyectos de implantación, adecuación, reforma y rehabilitación",
        "Proyectos de infraestructura y urbanización",
        "Proyectos de ingeniería de detalle y de coordinación",
        "Gestión de proyectos en entorno colaborativo (BIM)",
        "Gestión de concursos de licitación de obras",
        "Dirección de obra y dirección facultativa",
        "Ingeniería y supervisión a pie de obra",
        "Proyectos de legalización",
        "Organización, asesoría y auditoría de mantenimiento",
        "Consultoría de eficiencia energética y sostenibilidad (LEED, BREEAM)",
        "Inspección y auditoría técnica de edificios (Due Diligence)",
      ],
    },

    /* Labels for the project-detail page (PageProject). The values shown come
       from each AI_PROJECTS entry; these are just the field captions. */
    projectDetail: {
      back: "Volver",
      overview: "Ficha técnica",
      client: "Cliente",
      year: "Año",
      surface: "Superficie",
      architect: "Arquitectura",
      investment: "Inversión",
      cert: "Certificación",
      location: "Ubicación",
      scopeTitle: "Alcance de nuestro trabajo",
      relatedTitle: "Otros proyectos del sector",
      ctaTitle: "¿Tiene un proyecto similar?",
      ctaSub: "Hablemos de cómo podemos ayudarle.",
      ctaBtn: "Contactar",
    },

    categories: [
      { id: "todos",  label: "Todos" },
      { id: "cpd",    label: "Data Centers" },
      { id: "farma",  label: "Farma & Bioseguridad" },
      { id: "edif",   label: "Edificios singulares" },
      { id: "fab",    label: "Fabricación avanzada" },
      { id: "hos",    label: "Hospitales" },
      { id: "sos",    label: "Clima y Sostenibilidad" },
    ],
    catLabels: {
      cpd: "Data Center", farma: "Farma & Bioseguridad", fab: "Fabricación avanzada",
      edif: "Edificios singulares", hos: "Hospitales", sos: "Clima y Sostenibilidad",
    },

    /* Per-sector landing pages live at routes like {route:'sector',
       sectorId:'data-centers'}. The slug field is the URL/state id;
       it differs from the short `cat` key used internally to keep the
       project array compact. */
    /* SECTORS — adopted from the Claude Design bundle (Aguilera Ingenieros Design
       System). Each sector renders a 5-section landing page:
         hero (split — copy left, building drawing or photo panel right)
         "Qué diseñamos"   (numbered discipline cards)
         "Capacidades técnicas"  (spec list on dark)
         "Proyectos de referencia"  (top 6 + view-all CTA)
         "Certificaciones y estándares"  (4-cell grid)
         CTA accent band → contacto
       The three sectors already featured on the home verticals (cpd/farma/edif)
       carry an isometric line-drawing in the hero panel; the rest (fab/hos/sos)
       fall back to a photo panel of the same dimensions. */
    sectors: [
      {
        id: "data-centers", cat: "cpd",
        label: "Data Centers",
        img: "assets/hero_bbva_noche.jpg",
        building: { src: "assets/dc_isometric.png", ratio: 1.5, cap: "DATA CENTER · TIER IV · MADRID" },
        /* heroVariant — flips the sector hero from the framed media panel
           (default, used by farma/edif/hos/fab/sos) to a full-bleed video
           stage in the Foster + Partners style. The stage variant fills
           100vh, drops the eyebrow + h1 + sub at the bottom-left, and
           surfaces progress-ring dots at the bottom-centre — one per clip
           in the reel, with the active dot's outer ring filling clockwise
           as the clip plays. */
        heroVariant: "stage",
        /* heroHint — tiny "Discover our …" label + downward arrow that
           sits below the dots and scrolls past the stage hero into the
           sector content. Mirrors the Proyectos page's "Ver sectores"
           pattern, sized smaller and quieter. */
        heroHint: "Descubre nuestros data centers",
        /* Hero panel video — when present, replaces the line-drawing in the
           framed panel. Two shapes are supported:
             video: { src, poster?, cap? }                   — single looping clip
             video: { clips: [{src, cap?}, …], poster? }     — auto-cycling reel
           The panel advances to the next clip on the `ended` event of each
           one, so timing is exactly the clip's natural duration. Looping back
           to clip 0 from the last clip stitches the reel into an infinite loop. */
        video: {
          poster: "assets/hero_bbva_noche.jpg",
          clips: [
            { src: "assets/videos/dc_reel_01_exterior.mp4?v=2", cap: "DATA CENTER · EXTERIOR" },
            { src: "assets/videos/dc_reel_02_approach.mp4?v=2", cap: "DATA CENTER · ACCESO" },
            { src: "assets/videos/dc_reel_03_overview.mp4?v=2", cap: "DATA CENTER · VISTA GENERAL" },
            { src: "assets/videos/dc_reel_04_interior.mp4?v=2", cap: "SALA TÉCNICA · BBVA" },
          ],
        },
        eyebrow: "Centros de Proceso de Datos",
        h1: "La ingeniería detrás de la IA y los datos.",
        sub: "Diseñamos las instalaciones de los centros de datos más exigentes de la banca, las telecomunicaciones y la administración pública. Disponibilidad continua, redundancia total y eficiencia energética certificada.",
        stats: [
          { k: "Certificación", v: "Tier I – IV" },
          { k: "Proyectos CPD", v: "+200" },
          { k: "Referencias",   v: "BBVA · Mapfre" },
          { k: "PUE objetivo",  v: "≤ 1.35" },
        ],
        engineerTitle: "Qué diseñamos",
        engineerSub: "Ingeniería integral de instalaciones para infraestructura de misión crítica.",
        engineer: [
          { t: "Climatización de precisión", d: "Refrigeración por agua helada, free-cooling y contención de pasillo frío/caliente para densidades de hasta 30 kW/rack." },
          { t: "Electricidad y respaldo",    d: "Distribución redundante N+1 / 2N, grupos electrógenos, SAI y sistemas de conmutación automática." },
          { t: "Protección contra incendios", d: "Detección temprana por aspiración (VESDA) y extinción por gas inerte sin daño a equipos." },
          { t: "Monitorización y control",   d: "DCIM, BMS y sistemas SCADA integrados para gestión y trazabilidad 24/7." },
        ],
        capTitle: "Capacidades técnicas",
        caps: [
          "Refrigeración por agua helada — N+1",
          "Tier IV · TIA-942 · ATD certified",
          "PUE objetivo ≤ 1.35",
          "Densidad hasta 30 kW por rack",
          "Continuidad 2N en sistemas eléctricos",
        ],
        projTitle: "Proyectos de referencia",
        projCats: ["cpd"],
        certTitle: "Certificaciones y estándares",
        certs: [
          { label: "Uptime Tier IV",  sub: "Fault tolerant" },
          { label: "Uptime Tier III", sub: "Concurrently maintainable" },
          { label: "ATD",             sub: "Accredited Tier Designer" },
          { label: "TIA-942",         sub: "Infraestructura de telecomunicaciones" },
        ],
      },
      {
        id: "farma-bio", cat: "farma",
        label: "Farma & Bioseguridad",
        img: "assets/hero_farma.jpg",
        building: { src: "assets/farma_isometric.png", ratio: 1.5, cap: "LABORATORIO P3 · GMP · CLEANROOM" },
        heroVariant: "stage",
        heroHint: "Descubre nuestros proyectos farmacéuticos",
        /* 5-clip reel — same composition as home pharma. Master cuts (lab
           interiors) use BOT crop; farma_fuera cuts (exteriors) use TOP. */
        video: {
          poster: "assets/hero_farma.jpg",
          clips: [
            { src: "assets/videos/pharma_reel_01_lab.mp4",      cap: "LABORATORIO · BIM" },
            { src: "assets/videos/pharma_reel_02_facade.mp4",   cap: "PLANTA · FACHADA" },
            { src: "assets/videos/pharma_reel_03_aerial.mp4",   cap: "PLANTA · VISTA AÉREA" },
            { src: "assets/videos/pharma_reel_04_corridor.mp4", cap: "LABORATORIO · CORREDOR" },
            { src: "assets/videos/pharma_reel_05_approach.mp4", cap: "PLANTA · APROXIMACIÓN" },
          ],
        },
        eyebrow: "Farma & Bioseguridad",
        h1: "Ingeniería de instalaciones para entornos regulados.",
        sub: "Salas blancas, laboratorios de bioseguridad y plantas de producción farmacéutica diseñadas según normativa internacional. Control absoluto del aire, la presión y la contaminación cruzada.",
        stats: [
          { k: "Clases ISO",   v: "5 · 6 · 7 · 8" },
          { k: "Bioseguridad", v: "P2 · P3" },
          { k: "Normativa",    v: "GMP · FDA · ISPE" },
          { k: "Referencias",  v: "GSK · MSD" },
        ],
        engineerTitle: "Qué diseñamos",
        engineerSub: "Instalaciones para producción estéril, investigación y bioseguridad.",
        engineer: [
          { t: "Tratamiento de aire",    d: "Unidades AHU con aire 100% exterior, filtración HEPA H14 / ULPA U15 y control de humedad y temperatura por suite." },
          { t: "Cascada de presión",     d: "Diferenciales de presión controlados (+15 a +30 Pa) y esclusas para evitar contaminación cruzada." },
          { t: "Salas blancas",          d: "Diseño de envolvente, suelos técnicos y techos registrables para clasificación ISO 5–8 y entornos GMP." },
          { t: "Bioseguridad P2 / P3",   d: "Laboratorios de contención, autoclaves de doble puerta y sistemas de extracción dedicados." },
        ],
        capTitle: "Capacidades técnicas",
        caps: [
          "AHU — tratamiento de aire 100% exterior",
          "Filtros HEPA H14 · ULPA U15",
          "Cascada de presión +15Pa → +30Pa",
          "Salas blancas ISO 5 – 8",
          "Laboratorios de bioseguridad P2 y P3",
        ],
        projTitle: "Proyectos de referencia",
        projCats: ["farma"],
        certTitle: "Certificaciones y estándares",
        certs: [
          { label: "GMP",       sub: "Good Manufacturing Practice" },
          { label: "FDA",       sub: "U.S. Food & Drug Admin." },
          { label: "ISPE",      sub: "Baseline guides" },
          { label: "ISO 14644", sub: "Salas blancas" },
        ],
      },
      {
        id: "edificios-singulares", cat: "edif",
        label: "Edificios singulares",
        img: "assets/hero_edificios_singulares.jpg",
        building: { src: "assets/auditorio_tenerife.png", ratio: 1.19, cap: "AUDITORIO DE TENERIFE · CALATRAVA" },
        heroVariant: "stage",
        heroHint: "Descubre nuestros edificios",
        /* 6-clip reel of BB tower (Sáenz de Oiza) footage. Right 22% crop
           on every clip removes the project info block that lived on the
           right side of the source renders. */
        video: {
          poster: "assets/hero_edificios_singulares.jpg",
          clips: [
            { src: "assets/videos/edif_reel_03_facade.mp4",   cap: "TORRE BB · FACHADA" },
            { src: "assets/videos/edif_reel_02_corner.mp4",   cap: "TORRE BB · ESQUINA" },
            { src: "assets/videos/edif_reel_01_aerial.mp4",   cap: "TORRE BB · VISTA AÉREA" },
            { src: "assets/videos/edif_reel_04_approach.mp4", cap: "TORRE BB · APROXIMACIÓN" },
            { src: "assets/videos/edif_reel_05_interior.mp4", cap: "TORRE BB · INTERIOR" },
            { src: "assets/videos/edif_reel_06_volume.mp4",   cap: "TORRE BB · VOLUMEN" },
          ],
        },
        eyebrow: "Edificios singulares",
        h1: "Torres, sedes y edificios firmados.",
        sub: "Las instalaciones detrás de algunos de los edificios más reconocibles de España. Trabajamos con los principales estudios de arquitectura internacionales en proyectos firmados por Foster, Calatrava o SOM.",
        stats: [
          { k: "Tipologías",     v: "Torres · Sedes" },
          { k: "Sostenibilidad", v: "LEED · BREEAM" },
          { k: "Arquitectos",    v: "Foster · Calatrava" },
          { k: "Referencias",    v: "+1.000 proyectos" },
        ],
        engineerTitle: "Qué diseñamos",
        engineerSub: "Ingeniería de instalaciones para edificación singular y de gran altura.",
        engineer: [
          { t: "Climatización eficiente",        d: "Sistemas VRV con recuperación de calor, suelos radiantes y vigas frías para máxima eficiencia." },
          { t: "Envolvente y fachada",           d: "Doble fachada ventilada, control solar y simulación energética para certificación LEED / BREEAM." },
          { t: "Electricidad e iluminación",     d: "Iluminación KNX, gestión DALI y distribución eléctrica para edificios en altura." },
          { t: "Gestión integral del edificio",  d: "BMS integrado, control de accesos y sistemas de seguridad y comunicaciones." },
        ],
        capTitle: "Capacidades técnicas",
        caps: [
          "Doble fachada ventilada de alta eficiencia",
          "VRV con recuperación de calor",
          "Iluminación KNX · BMS integrado",
          "Certificación LEED · BREEAM",
          "Simulación energética y CFD",
        ],
        projTitle: "Proyectos de referencia",
        projCats: ["edif"],
        certTitle: "Certificaciones y estándares",
        certs: [
          { label: "LEED",      sub: "USGBC" },
          { label: "BREEAM",    sub: "Building research" },
          { label: "ISO 9001",  sub: "Calidad" },
          { label: "ISO 14001", sub: "Medio ambiente" },
        ],
      },
      {
        id: "fabricacion-avanzada", cat: "fab",
        label: "Fabricación avanzada",
        img: "assets/hero_industriales.jpg",
        heroVariant: "stage",
        heroHint: "Descubre nuestras plantas industriales",
        /* 4-clip reel from the same sources as the home manufacturing reel.
           TOP 12% crop on each removes the AGUILERA + partner mark that
           lives in the top-right of every fabricas render. */
        video: {
          poster: "assets/hero_industriales.jpg",
          clips: [
            { src: "assets/videos/fab_reel_01_plant.mp4",    cap: "PLANTA · VISTA AÉREA" },
            { src: "assets/videos/fab_reel_02_overview.mp4", cap: "PLANTA · CONJUNTO" },
            { src: "assets/videos/fab_reel_03_detail.mp4",   cap: "PROCESO · DETALLE" },
            { src: "assets/videos/fab_reel_04_systems.mp4",  cap: "INSTALACIONES · CORRIDOR" },
          ],
        },
        eyebrow: "Fabricación avanzada",
        h1: "Plantas industriales de alta precisión.",
        sub: "Microelectrónica, cosmética, energía y nuevas industrias. Diseño integral desde la viabilidad técnica hasta la puesta en marcha, con BIM coordinado y asistencia técnica continuada.",
        stats: [
          { k: "Disciplinas",  v: "MEP · proceso · BIM" },
          { k: "Referencias",  v: "Beiersdorf · Vestas" },
          { k: "Internacional",v: "ES · UE · LATAM" },
          { k: "Modelo",       v: "BIM LOD 400" },
        ],
        engineerTitle: "Qué diseñamos",
        engineerSub: "Instalaciones y servicios industriales para plantas de fabricación avanzada.",
        engineer: [
          { t: "Servicios de planta (MEP)", d: "Climatización industrial, electricidad media y baja tensión, fontanería y saneamiento, integrados desde el modelo BIM." },
          { t: "Procesos y utilidades",     d: "Aire comprimido, vapor, agua descalcificada, gases técnicos y sistemas de extracción de proceso." },
          { t: "Eficiencia energética",     d: "Recuperación de calor, cogeneración, paneles solares y monitorización del consumo para reducir OPEX." },
          { t: "Coordinación BIM",          d: "Modelo federado LOD 400, detección de interferencias y cuantificación para licitación y obra." },
        ],
        capTitle: "Capacidades técnicas",
        caps: [
          "BIM coordinado · LOD 400",
          "ATEX · zonas clasificadas",
          "Procesos limpios para microelectrónica",
          "Eficiencia energética industrial",
          "Asistencia técnica en obra (DEO)",
        ],
        projTitle: "Proyectos de referencia",
        projCats: ["fab"],
        certTitle: "Certificaciones y estándares",
        certs: [
          { label: "ISO 9001",  sub: "Calidad" },
          { label: "ISO 14001", sub: "Medio ambiente" },
          { label: "ISO 45001", sub: "Seguridad y salud" },
          { label: "ATEX",      sub: "Atmósferas explosivas" },
        ],
      },
      {
        id: "hospitales", cat: "hos",
        label: "Hospitales",
        heroTitle: "Descubre nuestros hospitales",
        img: "assets/hero_farma.jpg",
        heroVariant: "deck",
        /* 3 rectangular clips (1200×900, 4:3) from the master hospital
           sequence. Logos at the bottom of the source frame are excluded
           by the tighter height crop. Clip 01 is the long 12s opener
           (08:05-08:17); clips 02/03 follow the BIM beats. */
        video: {
          clips: [
            { src: "assets/videos/hos_reel_01_sq.mp4?v=4", cap: "PASILLO · QUIRÓFANO" },
            { src: "assets/videos/hos_reel_02_sq.mp4?v=4", cap: "BIM · CONJUNTO" },
            { src: "assets/videos/hos_reel_03_sq.mp4?v=4", cap: "PLANTA · INSTALACIONES" },
          ],
        },
        eyebrow: "Hospitales",
        h1: "Entornos críticos 24/7, sin margen.",
        sub: "Hospitales y clínicas diseñados para un servicio continuo: quirófanos, UCIs, áreas de aislamiento e imagen médica. Instalaciones redundantes, gases medicinales y BMS integrado.",
        stats: [
          { k: "Especialidades", v: "Quirófanos · UCI" },
          { k: "Disponibilidad", v: "24/7" },
          { k: "Referencias",    v: "Vigo · Quirónsalud" },
          { k: "Normativa",      v: "UNE 100713" },
        ],
        engineerTitle: "Qué diseñamos",
        engineerSub: "Ingeniería sanitaria para el entorno crítico de un hospital activo.",
        engineer: [
          { t: "Quirófanos y críticos",   d: "Salas con flujo laminar, presión positiva, redundancia eléctrica IT y gases medicinales según UNE-EN ISO 7396." },
          { t: "UCI y aislamiento",       d: "Habitaciones de presión negativa, filtración HEPA y SAI dedicado para soporte vital ininterrumpido." },
          { t: "Imagen médica",           d: "Salas RM/TC con blindajes específicos, refrigeración para He líquido y control electromagnético." },
          { t: "Servicios generales",     d: "Esterilización, lavandería, gases técnicos, cocinas, residuos y vapor con esquemas de mantenimiento concurrente." },
        ],
        capTitle: "Capacidades técnicas",
        caps: [
          "Quirófanos tipo A · flujo laminar",
          "Aislamiento N — presión negativa · HEPA",
          "Esquemas IT médicos · SAI dedicado",
          "Gases medicinales — UNE-EN ISO 7396",
          "BMS integrado y mantenimiento concurrente",
        ],
        projTitle: "Proyectos de referencia",
        projCats: ["hos"],
        certTitle: "Certificaciones y estándares",
        certs: [
          { label: "UNE 100713",   sub: "Climatización en hospitales" },
          { label: "ISO 7396",     sub: "Gases medicinales" },
          { label: "ISO 14644",    sub: "Salas limpias" },
          { label: "RD 614/2001",  sub: "Riesgo eléctrico" },
        ],
      },
      {
        id: "sostenibilidad", cat: "sos",
        label: "Clima y Sostenibilidad",
        heroTitle: "Impulsando un mundo más sostenible",
        img: "assets/hero_dc_green.jpg",
        heroVariant: "deck",
        /* 3 clips at 1200x900 (4:3), matching the hospitales template.
           Order opens on the field shot for a human entry point, then
           moves into the BIM render, then the aerial:
           01 = Aisa drone-pilot field shot (13s),
           02 = the sector tile clip (BIM rooftop + solar array, 4s),
           03 = Loeches aerial drone over the photovoltaic field (12s). */
        video: {
          clips: [
            { src: "assets/videos/sos_reel_01_sq.mp4?v=2", cap: "AISA · CAMPO" },
            { src: "assets/videos/sos_reel_02_sq.mp4?v=2", cap: "BIM · FOTOVOLTAICA" },
            { src: "assets/videos/sos_reel_03_sq.mp4?v=2", cap: "LOECHES · AÉREO" },
          ],
        },
        eyebrow: "Clima y Sostenibilidad",
        h1: "Sostenibilidad medida, no declarada.",
        sub: "Eficiencia energética, recuperación de calor, paneles solares, movilidad eléctrica y certificación LEED / BREEAM. La sostenibilidad como una decisión de ingeniería sometida a métrica anual.",
        stats: [
          { k: "Certificación", v: "LEED Gold · BREEAM" },
          { k: "Recuperación",  v: "VRV · placas" },
          { k: "Movilidad",     v: "Cargadores AC/DC" },
          { k: "Energía",       v: "Solar · geotermia" },
        ],
        engineerTitle: "Qué diseñamos",
        engineerSub: "Estrategias técnicas para reducir el consumo real del edificio durante toda su vida útil.",
        engineer: [
          { t: "Eficiencia energética",     d: "Optimización de la envolvente, recuperación de calor en climatización y monitorización del consumo en operación." },
          { t: "Energías renovables",       d: "Fotovoltaica de autoconsumo, geotermia, aerotermia y producción térmica solar para ACS." },
          { t: "Certificación LEED / BREEAM", d: "Acompañamiento desde el diseño hasta la certificación final, con simulación energética y CFD." },
          { t: "Movilidad eléctrica",       d: "Distribución eléctrica para flotas EV, cargadores AC/DC y gestión inteligente de la potencia contratada." },
        ],
        capTitle: "Capacidades técnicas",
        caps: [
          "Simulación energética dinámica",
          "Fotovoltaica de autoconsumo",
          "Recuperación de calor en climatización",
          "Cargadores EV — AC 22 kW y DC 50 kW",
          "Monitorización y reporting ESG",
        ],
        projTitle: "Proyectos de referencia",
        projCats: ["sos"],
        certTitle: "Certificaciones y estándares",
        certs: [
          { label: "LEED Gold", sub: "USGBC" },
          { label: "BREEAM",    sub: "Building research" },
          { label: "ISO 50001", sub: "Gestión de la energía" },
          { label: "EDGE",      sub: "IFC · World Bank" },
        ],
      },
    ],

    sectorCommon: {
      videoLabel: "Vídeo del sector",
      videoNote: "Espacio reservado para vídeo",
      viewAll: "Ver portfolio completo",
      ctaTitle: "¿Tiene un proyecto en este sector?",
      ctaSub: "Hablemos de cómo podemos ayudarle.",
      ctaBtn: "Contactar",
    },

    proyectos: {
      eyebrow: "Portfolio", title: "Proyectos",
      sectorsEyebrow: "Sectores",
      viewSector: "Ver proyectos del sector",
      backToProyectos: "Volver a Proyectos",
      navAll: "Portfolio",
      archiveEyebrow: "Todos los proyectos",
      /* Top-of-page hero — 4 photo slides cycling through the verticals
         (without labelling them; the sector tiles below do the naming).
         A constant "Proyectos" overlay carries the page title. */
      heroSlides: [
        { img: "assets/proj_hero_bbva_noche.jpg", objectPosition: "center top" },
        { img: "assets/bg_industrial_7.jpg", objectPosition: "center top" },
        { img: "assets/hero_edificios_singulares.jpg", objectPosition: "center top" },
        { img: "assets/proj_hero_bs_noche.jpg", objectPosition: "center top" },
      ],
      scrollHint: "Ver sectores",
    },

    personas: {
      eyebrow: "Personas", title: "El equipo",
      teamEyebrow: "Socios y responsables",
      quote: "Más de 60 años de experiencia colectiva. Un equipo multidisciplinar de ingenieros, técnicos y gestores.",
      heroImg: "assets/bg_industrial_4.jpg",
      scrollHint: "Conoce al equipo",
    },

    talento: {
      eyebrow: "Talento", title: "Únete a Aguilera Ingenieros.",
      sub: "Buscamos ingenieros con excelencia técnica y compromiso con nuestros clientes.",
      pillarsEyebrow: "Por qué unirse",
      pillars: [
        { num: "01", t: "Proyectos de referencia", p: "Trabaja en los proyectos más complejos y exigentes del mercado español e internacional." },
        { num: "02", t: "Desarrollo profesional",  p: "Formación continua y exposición a proyectos en España, Europa y América Latina." },
        { num: "03", t: "Cultura y valores",       p: "Independencia, integridad, excelencia. Una empresa con carácter." },
      ],
      positionsEyebrow: "Posiciones abiertas",
      noPosTitle: "¿No encuentras tu posición?",
      noPosSub: "Envíanos tu candidatura espontánea.",
      contactCta: "Contactar",
      applyCta: "Enviar candidatura",

      manifestoEyebrow: "Nuestro compromiso",
      manifestoQuote: "Damos prioridad al desarrollo continuo, al crecimiento personal y profesional de nuestro equipo.",

      momentsEyebrow: "Cómo trabajamos",
      momentsTitle: "Tres momentos del día a día.",
      moments: [
        { img: "assets/talento/people-cross-discipline.jpg", t: "Equipos multidisciplinares", p: "Ingenieros, arquitectos y técnicos sobre el mismo proyecto." },
        { img: "assets/talento/people-women-plans.jpg",      t: "Sobre planos reales",        p: "El trabajo no termina en la pantalla. Lo revisamos sobre el papel." },
        { img: "assets/talento/people-drawings.jpg",         t: "Generaciones que conviven",  p: "Décadas de experiencia compartidas entre socios y recién incorporados." },
      ],

      mentorEyebrow: "Mentoría",
      mentorTitle: "Aprende de quien firmó el proyecto.",
      mentorBody: "Los socios fundadores siguen activos en el día a día. Cada propuesta, cada revisión, cada visita a obra es una oportunidad para trabajar codo con codo con ingenieros que han firmado los proyectos más exigentes del sector.",
      mentorImg: "assets/talento/people-laptop-mentor.jpg",

      beyondEyebrow: "Más allá del proyecto",
      beyondTitle: "Lo que pasa fuera de la mesa de trabajo.",
      beyondShots: [
        { img: "assets/talento/team-bernabeu.jpg",  caption: "Visita técnica al nuevo Santiago Bernabéu, 2026." },
        { img: "assets/talento/team-induforum.jpg", caption: "Stand Aguilera Ingenieros en Induforum 2026." },
      ],

      heroImg: "assets/bg_industrial_2.jpg",
    },

    positions: [
      { title: "Ingeniero/a de Instalaciones — Data Centers", dept: "Data Centers", loc: "Madrid", desc: "Diseño de instalaciones para proyectos CPD Tier III y IV. Coordinación con cliente y dirección facultativa." },
      { title: "Ingeniero/a de Proyectos — Farma & Laboratorios", dept: "Farma", loc: "Madrid", desc: "Diseño de salas blancas, laboratorios P2/P3 y entornos GMP para clientes farmacéuticos internacionales." },
      { title: "Project Manager — Plantas Industriales", dept: "Fabricación", loc: "Madrid", desc: "Gestión integral de proyectos en industria microelectrónica, cosmética y farmacéutica." },
      { title: "BIM Coordinator", dept: "BIM", loc: "Madrid", desc: "Coordinación de modelos BIM y flujos de trabajo multi-disciplinar en Revit." },
      { title: "Prácticas — Ingeniería de Instalaciones", dept: "Formación", loc: "Madrid", desc: "Prácticas remuneradas para últimos cursos de ingeniería. Tutorización por socios." },
    ],

    team: [
      { name: "Pedro Aguilera",       role: "Dr. Ingeniero Industrial", photo: "assets/team/pedro-aguilera.jpg" },
      { name: "Camilo Corbí",         role: "Arquitecto",               photo: "assets/team/camilo-corbi.jpg" },
      { name: "Pablo Aguilera",       role: "Ingeniero Industrial",     photo: "assets/team/pablo-aguilera.jpg" },
      { name: "Joaquín Cerrato",      role: "Ingeniero Industrial",     photo: "assets/team/joaquin-cerrato.jpg" },
      { name: "Almudena Aguilera",    role: "Abogada",                  photo: "assets/team/almudena-aguilera.jpg" },
      { name: "Lucía Estébanez",      role: "Ingeniera Industrial",     photo: "assets/team/lucia-estebanez.jpg" },
      { name: "Alberto García Ramos", role: "Ingeniero Industrial",     photo: "assets/team/alberto-garcia.jpg" },
    ],

    contacto: {
      eyebrow: "Contacto", company: "Aguilera Ingenieros S.A.",
      mapCta: "Ver en Google Maps",
      addressNote: "A 5 minutos del Metro Islas Filipinas (L1) · Ciudad Universitaria (L6)",
    },

    newsletter: {
      eyebrow: "Noticias",
      sub: "Casos de estudio, notas técnicas y proyectos destacados. Publicación trimestral. Sin marketing, sin frecuencia indebida.",
      archiveEyebrow: "Todas las ediciones",
      backToList: "Volver a Noticias",
      notFound: "Esta edición no está disponible.",
    },

    footer: {
      meta: "Madrid · Desde 1961",
      headNav: "Navegación", headSectors: "Sectores", headContact: "Contacto",
      sectors: ["Data Centers", "Farma & Bioseguridad", "Fabricación avanzada", "Edificios singulares", "Hospitales", "Clima y Sostenibilidad"],
      legalLeft: "© 2026 Aguilera Ingenieros S.A. — Todos los derechos reservados",
      legalRight: "Política de Cookies · Aviso Legal",
    },

    cookie: { msg: "Utilizamos cookies para ofrecerle la mejor experiencia. Más información en nuestra ", link: "Política de Cookies", accept: "Aceptar" },

    accreditations: [
      { label: "Uptime Institute", sub: "Tier IV · BBVA Tres Cantos CPD I" },
      { label: "Uptime Institute", sub: "Tier IV · BBVA Tres Cantos CPD II" },
      { label: "Uptime Institute", sub: "Tier III · BBVA Perú" },
      { label: "Uptime Institute", sub: "Tier III · Mapfre" },
      { label: "ATD", sub: "Accredited Tier Designer" },
      { label: "LEED", sub: "USGBC Certified" },
      { label: "LEED AP", sub: "Professional credential" },
      { label: "ISO 9001", sub: "BSI" },
      { label: "ISO 14001", sub: "BSI" },
      { label: "ASHRAE", sub: "Member" },
    ],
  },

  // -------------------- ENGLISH --------------------
  en: {
    nav: [
      { id: "home",       label: "Home" },
      { id: "quienes",    label: "About" },
      { id: "proyectos",  label: "Projects" },
      { id: "personas",   label: "People" },
      { id: "talento",    label: "Careers" },
      { id: "newsletter", label: "News" },
      { id: "contacto",   label: "Contact" },
    ],

    /* Same client list as ES — names are identical brand-wise. */
    clients: [
      { name: "Banco Santander",         logo: "assets/clients/banco-santander.png" },
      { name: "BBVA",                    logo: "assets/clients/bbva.png",            scale: 0.65 },
      { name: "Beiersdorf",              logo: "assets/clients/beiersdorf.png" },
      { name: "Bloomberg",               logo: "assets/clients/bloomberg.png" },
      { name: "Boston Consulting Group", logo: "assets/clients/bcg.svg",             scale: 0.75 },
      { name: "BP Solar",                logo: "assets/clients/bp-solar.png" },
      { name: "Data4",                   logo: "assets/clients/data4.png" },
      { name: "El Corte Inglés",         logo: "assets/clients/el-corte-ingles.png", scale: 0.9, noBlend: true },
      { name: "GSK",                     logo: "assets/clients/gsk.png",             scale: 0.85 },
      { name: "Hyatt",                   logo: "assets/clients/hyatt.png" },
      { name: "J.P. Morgan",             logo: "assets/clients/jp-morgan.png" },
      { name: "Kempinski",               logo: "assets/clients/kempinski.png" },
      { name: "mAbxience",               logo: "assets/clients/mabxience.png" },
      { name: "Mapfre",                  logo: "assets/clients/mapfre.png",          scale: 1.3 },
      { name: "PharmaMar",               logo: "assets/clients/pharmamar.png",       scale: 1.35 },
    ],

    home: {
      heroSlides: [
        { sectorId: "data-centers",          eyebrow: "Data Centers",                 headline: "Engineering the backbone of AI and data.",         img: "assets/hero_bbva_noche.jpg", video: "assets/videos/home_clip_1_data_centers.mp4",  objectPosition: "center 0%" },
        { sectorId: "edificios-singulares",  eyebrow: "Singular buildings",           headline: "Iconic buildings,\nengineered without compromise.",  img: "assets/hero_edificios_singulares.jpg", video: "assets/videos/home_clip_3_buildings.mp4" },
        { sectorId: "farma-bio",             eyebrow: "Pharma & Biosafety",           headline: "Engineering for regulated environments.",          img: "assets/bg_industrial_7.jpg", video: "assets/videos/home_clip_2_pharma.mp4?v=3" },
        { sectorId: "fabricacion-avanzada",  eyebrow: "High-precision manufacturing", headline: "Industrial plants, engineered to a standard.",     img: "assets/bg_industrial_4.jpg", video: "assets/videos/home_clip_4_manufacturing.mp4" },
      ],
      heroEyebrow: "Three verticals",
      heroTitle: "Engineering for the most demanding projects.",
      heroSub: "Aguilera Ingenieros designs the critical building services behind three project typologies that define the sector.",
      verticals: [
        {
          id: "cpd",
          tag: "01",
          label: "Data Centers",
          short: "Critical infrastructure engineered to never fail.",
          long: "Tier III and Tier IV. Full redundancy. Energy efficiency. Over 200 certified data-center projects for banking, telecommunications and government.",
          stats: [
            { k: "Certifications", v: "Tier I – IV" },
            { k: "Projects",       v: "+200" },
            { k: "References",     v: "BBVA · Mapfre" },
          ],
          notes: [
            "Chilled-water cooling — N+1 redundancy",
            "Tier IV · TIA-942 · ATD certified",
            "Target PUE ≤ 1.35",
          ],
        },
        {
          id: "farma",
          tag: "02",
          label: "Pharma & Biosafety",
          short: "Engineering for regulated environments.",
          long: "ISO 5–8 cleanrooms. P2 and P3 labs. GMP, FDA, ISPE standards. End-to-end design for pharmaceutical, cosmetic and R&D facilities.",
          stats: [
            { k: "ISO classes", v: "5 · 6 · 7 · 8" },
            { k: "Standards",   v: "GMP · FDA · ISPE" },
            { k: "References",  v: "GSK · MSD · Biomagune" },
          ],
          notes: [
            "AHU — 100% outdoor air treatment",
            "HEPA H14 / ULPA U15 filtration",
            "Pressure cascade +15Pa → +30Pa",
          ],
        },
        {
          id: "edif",
          tag: "03",
          label: "Singular Buildings",
          short: "Towers, industrial plants, large-scale facilities.",
          long: "High-rises, corporate headquarters and first-tier industrial plants. Building-services design and supervision for projects by leading international architecture studios.",
          stats: [
            { k: "Typologies",    v: "Towers · Plants · HQ" },
            { k: "Sustainability",v: "LEED · BREEAM" },
            { k: "Architects",    v: "Foster · Calatrava · SOM" },
          ],
          notes: [
            "Double ventilated facade, high-efficiency",
            "VRV with heat recovery",
            "KNX lighting · integrated BMS",
          ],
        },
      ],
      viewProjects: "View projects",
      memo: {
        pullquote: "Engineering at the leading edge since {1961}. More than 1,000 projects. Total commitment to our clients' objectives.",
      },
      stats: [
        { num: "+60",    desc: "years of experience in engineering services" },
        { num: "+1,000", desc: "projects delivered in Spain and internationally" },
      ],
      featuredEyebrow: "Featured projects",
      featuredTitle: "Selected recent work",
      viewAllProjects: "View all projects",
      insightsEyebrow: "Latest news & insights",
      insightsTitle: "Cases, certifications and perspectives",
      readMore: "Read more",
      viewAllNews: "View all news",
      clientsEyebrow: "Trusted by",
    },

    featured: [
      { tag: "Data Center", name: "BBVA Tres Cantos DC II", loc: "Tier IV · Madrid",          img: "assets/hero_bbva_noche.jpg" },
      { tag: "Data Center", name: "BBVA Perú",              loc: "Tier III · Lima",            img: "assets/hero_bbva_noche.jpg" },
      { tag: "Pharma",      name: "GSK — Project Eagle",    loc: "Tres Cantos, Madrid",        img: "assets/hero_farma.jpg" },
      { tag: "Manufacturing", name: "Beiersdorf Lechia Plant", loc: "Poznań, Poland",          img: "assets/hero_industriales.jpg" },
      { tag: "Offices",     name: "Sacyr Tower / PwC",      loc: "Foster & Partners · Madrid", img: "assets/hero_oficinas.jpg" },
      { tag: "Climate & Sustainability", name: "Banco Popular Abelias", loc: "LEED Gold · Madrid",       img: "assets/hero_oficinas.jpg" },
    ],

    /* Unified news source — see ES block above for the schema. */
    news: [
      { id: "14-bbva-tres-cantos-tier-iv",
        n: "Nº 14", date: "March 2026", read: "5 min", tag: "Case study",
        title: "BBVA Tres Cantos: the first Tier IV-certified data center in Spain",
        excerpt: "Aguilera Ingenieros led the design and supervision of installations for Spanish banking's most advanced data center.",
        img: "assets/hero_bbva_noche.jpg",
        body: [
          { type: "lede", text: "The BBVA Tres Cantos II data center received Uptime Institute Tier IV certification in March. It is the first banking data center in Spain to reach the highest fault-tolerance level for concurrent maintenance and construction without service interruption." },
          { type: "h2", text: "Project scope" },
          { type: "p", text: "The assignment covered the full design of mechanical, electrical and security installations: four 600 m² white-space halls with densities of up to 18 kW per rack, 2N redundancy on power and cooling, and an integrated building management system unifying more than 9,000 monitoring points." },
          { type: "p", text: "Aguilera Ingenieros accompanied the client from preliminary design through commissioning and final Uptime Institute audit, working alongside BBVA's internal teams and the property." },
          { type: "image", src: "assets/proj_aerial_dc.jpg", caption: "Aerial view of the technical campus — external works phase, 2025." },
          { type: "h2", text: "Why Tier IV matters" },
          { type: "p", text: "Tier IV requires simultaneous tolerance to a failure of any component and to the loss of a complete distribution path. In practical terms, the client can replace a transformer, a chiller or an electrical switchboard without halting any critical service." },
          { type: "quote", text: "The technical challenge isn't reaching Tier IV once. It's operating it for 25 years without losing that condition." },
          { type: "p", text: "The design also targets a 1.35 annual PUE, achieved via an indirect adiabatic free-cooling system that takes advantage of the low ambient humidity around Tres Cantos for more than 6,000 hours per year." },
          { type: "h2", text: "What's next" },
          { type: "p", text: "BBVA plans to replicate the model in Latin America during 2027. Aguilera Ingenieros will participate in the base design of the new sites in collaboration with local teams." },
        ] },

      { id: "13-hepa-h14-gmp",
        n: "Nº 13", date: "December 2025", read: "7 min", tag: "Pharma & Biosafety",
        title: "HEPA H14 filtration in aseptic-fill GMP suites",
        excerpt: "Engineering notes on pressure cascades, filter integrity testing, and periodic validation in pharmaceutical environments.",
        img: "assets/hero_farma.jpg",
        body: [
          { type: "lede", text: "Aseptic-fill suites under Annex 1 (EU GMP, 2023 revision) require terminal HEPA H14 filtration above the Grade A work zone. We summarise the design keys applied in recent projects for pharmaceutical clients." },
          { type: "h2", text: "Pressure cascade" },
          { type: "p", text: "The typical gradient between Grades A → B → C → D is 10–15 Pa per step. In small suites (<30 m²) we work with 12 Pa nominal, with a ±3 Pa tolerance monitored in real time by the BMS." },
          { type: "p", text: "Personnel airlocks use intermediate pressure with door interlock; material airlocks, by contrast, are designed with peak (\"bubble\") pressure to prevent carry-over from the less critical area during transfer." },
          { type: "image", src: "assets/hero_farma.jpg", caption: "Aseptic-fill suite under laminar flow. Confidential client, 2025." },
          { type: "h2", text: "Filter integrity" },
          { type: "p", text: "DOP/PAO integrity testing is performed in-situ after installation, after any intervention on the plenum, and at minimum every six months in production. Maximum allowed penetration is 0.01 % under service conditions." },
          { type: "quote", text: "A GMP suite isn't validated once. It's revalidated every time something changes: filter, AHU, set-point, procedure." },
          { type: "h2", text: "Periodic validation" },
          { type: "p", text: "The qualification plan includes DQ, IQ, OQ and PQ. PQ is repeated annually with microbiological sampling (passive and active) under at-rest and operational conditions. All data is documented in the client's document management system." },
        ] },

      { id: "12-leed-gold-sacyr-abelias",
        n: "Nº 12", date: "September 2025", read: "6 min", tag: "Climate & Sustainability",
        title: "LEED Gold certification: Sacyr Tower and Banco Popular Abelias",
        excerpt: "Pioneering projects in Spain on energy efficiency and sustainability, certified by USGBC.",
        img: "assets/hero_dc_green.jpg",
        body: [
          { type: "lede", text: "Aguilera Ingenieros signed the installations design for the first two Madrid office buildings to receive LEED Gold certification from the U.S. Green Building Council. Five years on, both remain among the most efficient in their category." },
          { type: "h2", text: "Sacyr Tower / PwC headquarters" },
          { type: "p", text: "Designed by Foster & Partners, the tower integrates a double-skin façade with ventilated cavity, enthalpic recovery on every AHU, and a high-efficiency VRV system with cross-zone heat recovery." },
          { type: "p", text: "Measured consumption after two years of operation sits 31 % below the ASHRAE 90.1 baseline, sufficient for maximum credits under the Energy & Atmosphere category." },
          { type: "image", src: "assets/hero_oficinas.jpg", caption: "Sacyr Tower — south façade, Madrid." },
          { type: "h2", text: "Banco Popular C/ Abelias" },
          { type: "p", text: "The Abelias project posed a different challenge: an existing 1980s building requiring deep refurbishment without losing usable floor area. Strategy focused on envelope improvement and full replacement of equipment with class A++ units." },
          { type: "quote", text: "Measured sustainability, not declared. What matters is the actual consumption five years after handover." },
        ] },

      { id: "11-beiersdorf-lechia",
        n: "Nº 11", date: "June 2025", read: "6 min", tag: "Advanced manufacturing",
        title: "High-precision industrial plants: the Beiersdorf Lechia case",
        excerpt: "From technical feasibility through to commissioning of a large-format manufacturing plant in Poznań.",
        img: "assets/hero_industriales.jpg",
        body: [
          { type: "lede", text: "The Beiersdorf Lechia plant in Poznań (Poland) entered production in early 2025. Aguilera Ingenieros handled installations design, supervision and commissioning across 38,000 m² of built area." },
          { type: "h2", text: "Design basis" },
          { type: "p", text: "The process requires simultaneous control of temperature (±1 °C), humidity (±5 % RH) and particle load across the mixing, filling and finished-product storage halls. The plant operates 24/7 with planned quarterly shutdowns." },
          { type: "p", text: "The engineering was developed entirely in a federated BIM model across three disciplines, which allowed more than 1,400 clashes to be detected and resolved before the construction phase." },
          { type: "image", src: "assets/bim_baku_hotel.jpg", caption: "Federated BIM model at LOD 300 detail — coordination across mechanical, electrical and architectural disciplines." },
          { type: "h2", text: "Commissioning" },
          { type: "p", text: "The commissioning protocol ran in four phases (factory acceptance, site acceptance, operational qualification, performance qualification) over a total of 14 weeks. All critical systems passed PQ on the first iteration." },
        ] },

      { id: "10-construccion-internacionalizacion",
        n: "Nº 10", date: "March 2025", read: "4 min", tag: "Conference",
        title: "Construction, infrastructure and internationalisation",
        excerpt: "Case studies with BBVA: managing complex installation projects at corporate global scale.",
        img: "assets/hero_oficinas.jpg",
        body: [
          { type: "lede", text: "Last February our Managing Director took part in the \"Construction, infrastructure and internationalisation\" session organised by Madrid's Industrial Engineers Association. We summarise the key points of his intervention." },
          { type: "h2", text: "Scaling without diluting technical judgement" },
          { type: "p", text: "The challenge in following a corporate client to several countries isn't replicating a project: it's replicating the judgement that produced a good project. That demands an internal framework of standards, checklists and review processes that survives team, geography and supplier turnover." },
          { type: "p", text: "In BBVA's case, that framework has translated into six corporate headquarters and four data centers across five countries, with one technical team responsible for the base design and local teams for execution." },
          { type: "quote", text: "Internationalisation isn't exporting drawings. It's exporting the way you think about the project." },
        ] },
    ],

    quienes: {
      eyebrow: "About",
      heroTitle: "Six decades building reference infrastructure.",
      sectionLabel: "About",
      body: [
        "<strong>Aguilera Ingenieros</strong> is an engineering firm working on complex, highly specialised projects. Our focus is the building services of singular and industrial facilities.",
        "Founded in 1961, we have delivered over 1,000 first-rank projects across national and international sectors. 100% of the capital is held by partners with exclusive dedication, guaranteeing complete professional and financial independence.",
      ],
      pillarsEyebrow: "Three pillars",
      pillars: [
        { num: "01", t: "Track record", p: "Founded 1961. Over a thousand projects delivered in Spain and internationally." },
        { num: "02", t: "Mission",      p: "Offer high value-added engineering with leading innovation and sound ethical principles, building long-term relationships with our clients." },
        { num: "03", t: "Independence", p: "100% of the capital is held by partners with exclusive dedication. No conflicts of interest. No external commitments." },
      ],
      codeEthicEyebrow: "Code of ethics",
      codeProfEyebrow: "Professional code",
      ethicalCode: [
        "Independence, fairness and truth",
        "Integrity",
        "Highest professional rigour and accountability",
        "Loyalty to our clients' interests",
        "Commitment to the environment and sustainability",
        "Commitment to society and the common good",
      ],
      professionalCode: [
        "Clear identification of client needs and goals",
        "Technical rigour and competence",
        "Rigour and competence in project management",
        "Diligence, responsiveness and punctuality",
        "Accessibility, flexibility, respectful conduct",
      ],
      accredEyebrow: "Accreditations and certifications",
      servicesEyebrow: "Services",
      services: [
        "Technical feasibility studies",
        "Integral building-services engineering design",
        "Full data-center projects (Tier I–IV)",
        "Full laboratory, cleanroom and R&D centre projects",
        "Full industrial plant projects",
        "Fit-out, retrofit and refurbishment projects",
        "Infrastructure and urbanisation projects",
        "Detailed-design and coordination engineering",
        "Collaborative project delivery (BIM)",
        "Tender management",
        "Construction management and site supervision",
        "On-site engineering and supervision",
        "Regulatory and legalisation projects",
        "Maintenance organisation, advisory and audit",
        "Energy efficiency and sustainability consulting (LEED, BREEAM)",
        "Building technical inspection and audit (Due Diligence)",
      ],
    },

    projectDetail: {
      back: "Back",
      overview: "Project facts",
      client: "Client",
      year: "Year",
      surface: "Floor area",
      architect: "Architecture",
      investment: "Investment",
      cert: "Certification",
      location: "Location",
      scopeTitle: "Scope of our work",
      relatedTitle: "More projects in this sector",
      ctaTitle: "Have a similar project?",
      ctaSub: "Let's talk about how we can help.",
      ctaBtn: "Get in touch",
    },

    categories: [
      { id: "todos",  label: "All" },
      { id: "cpd",    label: "Data Centers" },
      { id: "farma",  label: "Pharma & Biosafety" },
      { id: "edif",   label: "Singular Buildings" },
      { id: "fab",    label: "Advanced Manufacturing" },
      { id: "hos",    label: "Hospitals" },
      { id: "sos",    label: "Climate & Sustainability" },
    ],
    catLabels: {
      cpd: "Data Center", farma: "Pharma & Biosafety", fab: "Advanced Manufacturing",
      edif: "Singular Buildings", hos: "Hospitals", sos: "Climate & Sustainability",
    },

    /* SECTORS — parallel to ES. See the comment above the Spanish block for
       the section-by-section structure rendered by PageSector. */
    sectors: [
      {
        id: "data-centers", cat: "cpd",
        label: "Data Centers",
        img: "assets/hero_bbva_noche.jpg",
        building: { src: "assets/dc_isometric.png", ratio: 1.5, cap: "DATA CENTER · TIER IV · MADRID" },
        heroVariant: "stage",
        heroHint: "Discover our data centers",
        video: {
          poster: "assets/hero_bbva_noche.jpg",
          clips: [
            { src: "assets/videos/dc_reel_01_exterior.mp4?v=2", cap: "DATA CENTER · EXTERIOR" },
            { src: "assets/videos/dc_reel_02_approach.mp4?v=2", cap: "DATA CENTER · APPROACH" },
            { src: "assets/videos/dc_reel_03_overview.mp4?v=2", cap: "DATA CENTER · OVERVIEW" },
            { src: "assets/videos/dc_reel_04_interior.mp4?v=2", cap: "TECHNICAL ROOM · BBVA" },
          ],
        },
        eyebrow: "Data Centers",
        h1: "Engineering the backbone of AI and data.",
        sub: "We engineer the installations of the most demanding data centers in banking, telecommunications and government. Continuous availability, full redundancy and certified energy efficiency.",
        stats: [
          { k: "Certification", v: "Tier I – IV" },
          { k: "DC projects",   v: "+200" },
          { k: "References",    v: "BBVA · Mapfre" },
          { k: "Target PUE",    v: "≤ 1.35" },
        ],
        engineerTitle: "What we engineer",
        engineerSub: "End-to-end building-services engineering for mission-critical infrastructure.",
        engineer: [
          { t: "Precision cooling",   d: "Chilled-water cooling, free-cooling and hot/cold aisle containment for densities up to 30 kW/rack." },
          { t: "Power & backup",      d: "Redundant N+1 / 2N distribution, generators, UPS and automatic transfer systems." },
          { t: "Fire protection",     d: "Early aspirating smoke detection (VESDA) and inert-gas suppression with no equipment damage." },
          { t: "Monitoring & control",d: "Integrated DCIM, BMS and SCADA systems for 24/7 management and traceability." },
        ],
        capTitle: "Technical capabilities",
        caps: [
          "Chilled-water cooling — N+1",
          "Tier IV · TIA-942 · ATD certified",
          "Target PUE ≤ 1.35",
          "Density up to 30 kW per rack",
          "2N continuity on electrical systems",
        ],
        projTitle: "Reference projects",
        projCats: ["cpd"],
        certTitle: "Certifications & standards",
        certs: [
          { label: "Uptime Tier IV",  sub: "Fault tolerant" },
          { label: "Uptime Tier III", sub: "Concurrently maintainable" },
          { label: "ATD",             sub: "Accredited Tier Designer" },
          { label: "TIA-942",         sub: "Telecom infrastructure" },
        ],
      },
      {
        id: "farma-bio", cat: "farma",
        label: "Pharma & Biosafety",
        img: "assets/hero_farma.jpg",
        building: { src: "assets/farma_isometric.png", ratio: 1.5, cap: "P3 LAB · GMP · CLEANROOM" },
        heroVariant: "stage",
        heroHint: "Discover our pharmaceutical projects",
        video: {
          poster: "assets/hero_farma.jpg",
          clips: [
            { src: "assets/videos/pharma_reel_01_lab.mp4",      cap: "LAB · BIM" },
            { src: "assets/videos/pharma_reel_02_facade.mp4",   cap: "PLANT · FACADE" },
            { src: "assets/videos/pharma_reel_03_aerial.mp4",   cap: "PLANT · AERIAL" },
            { src: "assets/videos/pharma_reel_04_corridor.mp4", cap: "LAB · CORRIDOR" },
            { src: "assets/videos/pharma_reel_05_approach.mp4", cap: "PLANT · APPROACH" },
          ],
        },
        eyebrow: "Pharma & Biosafety",
        h1: "Engineering for regulated environments.",
        sub: "Cleanrooms, biosafety laboratories and pharmaceutical production plants designed to international standards. Absolute control of air, pressure and cross-contamination.",
        stats: [
          { k: "ISO classes", v: "5 · 6 · 7 · 8" },
          { k: "Biosafety",   v: "P2 · P3" },
          { k: "Standards",   v: "GMP · FDA · ISPE" },
          { k: "References",  v: "GSK · MSD" },
        ],
        engineerTitle: "What we engineer",
        engineerSub: "Installations for sterile production, research and biosafety.",
        engineer: [
          { t: "Air handling",      d: "AHU units with 100% outdoor air, HEPA H14 / ULPA U15 filtration and per-suite humidity and temperature control." },
          { t: "Pressure cascade",  d: "Controlled pressure differentials (+15 to +30 Pa) and airlocks to prevent cross-contamination." },
          { t: "Cleanrooms",        d: "Envelope design, technical floors and accessible ceilings for ISO 5–8 classification and GMP environments." },
          { t: "Biosafety P2 / P3", d: "Containment laboratories, double-door autoclaves and dedicated extraction systems." },
        ],
        capTitle: "Technical capabilities",
        caps: [
          "AHU — 100% outdoor air treatment",
          "HEPA H14 · ULPA U15 filtration",
          "Pressure cascade +15Pa → +30Pa",
          "ISO 5 – 8 cleanrooms",
          "P2 and P3 biosafety laboratories",
        ],
        projTitle: "Reference projects",
        projCats: ["farma"],
        certTitle: "Certifications & standards",
        certs: [
          { label: "GMP",       sub: "Good Manufacturing Practice" },
          { label: "FDA",       sub: "U.S. Food & Drug Admin." },
          { label: "ISPE",      sub: "Baseline guides" },
          { label: "ISO 14644", sub: "Cleanrooms" },
        ],
      },
      {
        id: "edificios-singulares", cat: "edif",
        label: "Singular Buildings",
        img: "assets/hero_edificios_singulares.jpg",
        building: { src: "assets/auditorio_tenerife.png", ratio: 1.19, cap: "AUDITORIO DE TENERIFE · CALATRAVA" },
        heroVariant: "stage",
        heroHint: "Discover our buildings",
        video: {
          poster: "assets/hero_edificios_singulares.jpg",
          clips: [
            { src: "assets/videos/edif_reel_03_facade.mp4",   cap: "BB TOWER · FACADE" },
            { src: "assets/videos/edif_reel_02_corner.mp4",   cap: "BB TOWER · CORNER" },
            { src: "assets/videos/edif_reel_01_aerial.mp4",   cap: "BB TOWER · AERIAL" },
            { src: "assets/videos/edif_reel_04_approach.mp4", cap: "BB TOWER · APPROACH" },
            { src: "assets/videos/edif_reel_05_interior.mp4", cap: "BB TOWER · INTERIOR" },
            { src: "assets/videos/edif_reel_06_volume.mp4",   cap: "BB TOWER · VOLUME" },
          ],
        },
        eyebrow: "Singular Buildings",
        h1: "Towers, headquarters and signature buildings.",
        sub: "The installations behind some of Spain's most recognisable buildings. We work with leading international architecture studios on projects signed by Foster, Calatrava and SOM.",
        stats: [
          { k: "Typologies",     v: "Towers · HQ" },
          { k: "Sustainability", v: "LEED · BREEAM" },
          { k: "Architects",     v: "Foster · Calatrava" },
          { k: "References",     v: "+1,000 projects" },
        ],
        engineerTitle: "What we engineer",
        engineerSub: "Building-services engineering for singular and high-rise construction.",
        engineer: [
          { t: "Efficient HVAC",                d: "VRV systems with heat recovery, radiant floors and chilled beams for maximum efficiency." },
          { t: "Envelope & facade",             d: "Double ventilated facade, solar control and energy simulation for LEED / BREEAM certification." },
          { t: "Power & lighting",              d: "KNX lighting, DALI management and electrical distribution for high-rise buildings." },
          { t: "Integrated building management",d: "Integrated BMS, access control and security and communications systems." },
        ],
        capTitle: "Technical capabilities",
        caps: [
          "Double ventilated facade, high-efficiency",
          "VRV with heat recovery",
          "KNX lighting · integrated BMS",
          "LEED · BREEAM certification",
          "Energy simulation and CFD",
        ],
        projTitle: "Reference projects",
        projCats: ["edif"],
        certTitle: "Certifications & standards",
        certs: [
          { label: "LEED",      sub: "USGBC" },
          { label: "BREEAM",    sub: "Building research" },
          { label: "ISO 9001",  sub: "Quality" },
          { label: "ISO 14001", sub: "Environment" },
        ],
      },
      {
        id: "fabricacion-avanzada", cat: "fab",
        label: "Advanced Manufacturing",
        img: "assets/hero_industriales.jpg",
        heroVariant: "stage",
        heroHint: "Discover our industrial plants",
        video: {
          poster: "assets/hero_industriales.jpg",
          clips: [
            { src: "assets/videos/fab_reel_01_plant.mp4",    cap: "PLANT · AERIAL" },
            { src: "assets/videos/fab_reel_02_overview.mp4", cap: "PLANT · OVERVIEW" },
            { src: "assets/videos/fab_reel_03_detail.mp4",   cap: "PROCESS · DETAIL" },
            { src: "assets/videos/fab_reel_04_systems.mp4",  cap: "SYSTEMS · CORRIDOR" },
          ],
        },
        eyebrow: "Advanced Manufacturing",
        h1: "High-precision industrial plants.",
        sub: "Microelectronics, cosmetics, energy and new industries. End-to-end design from technical feasibility through commissioning, with coordinated BIM and ongoing technical assistance.",
        stats: [
          { k: "Disciplines", v: "MEP · process · BIM" },
          { k: "References",  v: "Beiersdorf · Vestas" },
          { k: "Geography",   v: "ES · EU · LATAM" },
          { k: "Model",       v: "BIM LOD 400" },
        ],
        engineerTitle: "What we engineer",
        engineerSub: "Services and utilities for advanced manufacturing plants.",
        engineer: [
          { t: "Plant services (MEP)",  d: "Industrial HVAC, MV/LV power, plumbing and drainage — integrated from the BIM model." },
          { t: "Process utilities",     d: "Compressed air, steam, demineralised water, technical gases and process extraction systems." },
          { t: "Energy efficiency",     d: "Heat recovery, cogeneration, PV and consumption monitoring to reduce OPEX." },
          { t: "BIM coordination",      d: "Federated LOD 400 model, clash detection and quantity take-off for tender and execution." },
        ],
        capTitle: "Technical capabilities",
        caps: [
          "Coordinated BIM · LOD 400",
          "ATEX · classified zones",
          "Clean processes for microelectronics",
          "Industrial energy efficiency",
          "On-site technical assistance",
        ],
        projTitle: "Reference projects",
        projCats: ["fab"],
        certTitle: "Certifications & standards",
        certs: [
          { label: "ISO 9001",  sub: "Quality" },
          { label: "ISO 14001", sub: "Environment" },
          { label: "ISO 45001", sub: "Health & safety" },
          { label: "ATEX",      sub: "Explosive atmospheres" },
        ],
      },
      {
        id: "hospitales", cat: "hos",
        label: "Hospitals",
        heroTitle: "Discover our hospitals",
        img: "assets/hero_farma.jpg",
        heroVariant: "deck",
        video: {
          clips: [
            { src: "assets/videos/hos_reel_01_sq.mp4?v=4", cap: "CORRIDOR · OR" },
            { src: "assets/videos/hos_reel_02_sq.mp4?v=4", cap: "BIM · OVERVIEW" },
            { src: "assets/videos/hos_reel_03_sq.mp4?v=4", cap: "WARD · MEP" },
          ],
        },
        eyebrow: "Hospitals",
        h1: "Critical 24/7 environments, no margin for error.",
        sub: "Hospitals and clinics engineered for continuous service: operating rooms, ICUs, isolation areas and medical imaging. Redundant installations, medical gases and integrated BMS.",
        stats: [
          { k: "Specialties",  v: "OR · ICU" },
          { k: "Availability", v: "24/7" },
          { k: "References",   v: "Vigo · Quirónsalud" },
          { k: "Standards",    v: "UNE 100713" },
        ],
        engineerTitle: "What we engineer",
        engineerSub: "Healthcare engineering for the critical environment of a live hospital.",
        engineer: [
          { t: "Operating rooms & critical care", d: "Laminar-flow rooms, positive pressure, IT medical electrical redundancy and medical gases per UNE-EN ISO 7396." },
          { t: "ICU & isolation",                 d: "Negative-pressure rooms, HEPA filtration and dedicated UPS for uninterrupted life-support." },
          { t: "Medical imaging",                 d: "MRI/CT suites with specific shielding, liquid helium cooling and electromagnetic control." },
          { t: "General services",                d: "Sterilisation, laundry, technical gases, kitchens, waste and steam with concurrent-maintenance schemes." },
        ],
        capTitle: "Technical capabilities",
        caps: [
          "Type-A operating rooms · laminar flow",
          "Negative-pressure isolation · HEPA",
          "Medical IT electrical schemes · dedicated UPS",
          "Medical gases — UNE-EN ISO 7396",
          "Integrated BMS · concurrent maintenance",
        ],
        projTitle: "Reference projects",
        projCats: ["hos"],
        certTitle: "Certifications & standards",
        certs: [
          { label: "UNE 100713",  sub: "Hospital HVAC" },
          { label: "ISO 7396",    sub: "Medical gases" },
          { label: "ISO 14644",   sub: "Cleanrooms" },
          { label: "RD 614/2001", sub: "Electrical risk" },
        ],
      },
      {
        id: "sostenibilidad", cat: "sos",
        label: "Climate & Sustainability",
        heroTitle: "Powering a more sustainable world",
        img: "assets/hero_dc_green.jpg",
        heroVariant: "deck",
        video: {
          clips: [
            { src: "assets/videos/sos_reel_01_sq.mp4?v=2", cap: "AISA · FIELD" },
            { src: "assets/videos/sos_reel_02_sq.mp4?v=2", cap: "BIM · SOLAR" },
            { src: "assets/videos/sos_reel_03_sq.mp4?v=2", cap: "LOECHES · AERIAL" },
          ],
        },
        eyebrow: "Climate & Sustainability",
        h1: "Sustainability measured, not declared.",
        sub: "Energy efficiency, heat recovery, PV, electric mobility and LEED / BREEAM certification. Sustainability as an engineering decision held to annual metrics.",
        stats: [
          { k: "Certification", v: "LEED Gold · BREEAM" },
          { k: "Recovery",      v: "VRV · plates" },
          { k: "EV",            v: "AC / DC chargers" },
          { k: "Energy",        v: "Solar · geothermal" },
        ],
        engineerTitle: "What we engineer",
        engineerSub: "Technical strategies to cut the building's real consumption across its whole life-cycle.",
        engineer: [
          { t: "Energy efficiency",        d: "Envelope optimisation, heat recovery in HVAC and operational consumption monitoring." },
          { t: "Renewable energy",         d: "Self-consumption PV, geothermal, aerothermal and solar thermal for DHW." },
          { t: "LEED / BREEAM certification", d: "Support from design through final certification, with energy simulation and CFD." },
          { t: "Electric mobility",        d: "Electrical distribution for EV fleets, AC/DC chargers and smart load management of contracted power." },
        ],
        capTitle: "Technical capabilities",
        caps: [
          "Dynamic energy simulation",
          "Self-consumption PV",
          "Heat recovery in HVAC",
          "EV chargers — AC 22 kW and DC 50 kW",
          "ESG monitoring and reporting",
        ],
        projTitle: "Reference projects",
        projCats: ["sos"],
        certTitle: "Certifications & standards",
        certs: [
          { label: "LEED Gold", sub: "USGBC" },
          { label: "BREEAM",    sub: "Building research" },
          { label: "ISO 50001", sub: "Energy management" },
          { label: "EDGE",      sub: "IFC · World Bank" },
        ],
      },
    ],

    sectorCommon: {
      videoLabel: "Sector film",
      videoNote: "Video placeholder",
      viewAll: "View full portfolio",
      ctaTitle: "Have a project in this sector?",
      ctaSub: "Let's talk about how we can help.",
      ctaBtn: "Get in touch",
    },

    proyectos: {
      eyebrow: "Portfolio", title: "Projects",
      sectorsEyebrow: "Sectors",
      viewSector: "View sector projects",
      backToProyectos: "Back to Projects",
      navAll: "Portfolio",
      archiveEyebrow: "All projects",
      heroSlides: [
        { img: "assets/proj_hero_bbva_noche.jpg", objectPosition: "center top" },
        { img: "assets/bg_industrial_7.jpg", objectPosition: "center top" },
        { img: "assets/hero_edificios_singulares.jpg", objectPosition: "center top" },
        { img: "assets/proj_hero_bs_noche.jpg", objectPosition: "center top" },
      ],
      scrollHint: "Explore sectors",
    },

    personas: {
      eyebrow: "People", title: "The team",
      teamEyebrow: "Partners and leads",
      quote: "Over 60 years of collective experience. A multidisciplinary team of engineers, technicians and managers.",
      heroImg: "assets/bg_industrial_4.jpg",
      scrollHint: "Meet the team",
    },

    talento: {
      eyebrow: "Careers", title: "Join Aguilera Ingenieros.",
      sub: "We're looking for engineers with technical excellence and commitment to our clients.",
      pillarsEyebrow: "Why join",
      pillars: [
        { num: "01", t: "Reference projects",   p: "Work on the most complex, demanding projects in the Spanish and international market." },
        { num: "02", t: "Career development",   p: "Continuous training and international exposure across projects in Spain, Europe and Latin America." },
        { num: "03", t: "Culture and values",   p: "Independence, integrity, excellence. A firm with character." },
      ],
      positionsEyebrow: "Open positions",
      noPosTitle: "Don't see your role?",
      noPosSub: "Send us a spontaneous application.",
      contactCta: "Get in touch",
      applyCta: "Apply",

      manifestoEyebrow: "Our commitment",
      manifestoQuote: "We prioritise continuous development, personal and professional growth for our team.",

      momentsEyebrow: "How we work",
      momentsTitle: "Three moments from the day-to-day.",
      moments: [
        { img: "assets/talento/people-cross-discipline.jpg", t: "Multidisciplinary teams", p: "Engineers, architects and technicians on the same project." },
        { img: "assets/talento/people-women-plans.jpg",      t: "On real drawings",        p: "The work doesn't end on the screen — we review it on paper." },
        { img: "assets/talento/people-drawings.jpg",         t: "Generations side by side", p: "Decades of experience shared between partners and recent joiners." },
      ],

      mentorEyebrow: "Mentorship",
      mentorTitle: "Learn from the engineers who signed the project.",
      mentorBody: "Our founding partners are still active in the day-to-day. Every proposal, every review, every site visit is an opportunity to work shoulder to shoulder with engineers who have signed the most demanding projects in the sector.",
      mentorImg: "assets/talento/people-laptop-mentor.jpg",

      beyondEyebrow: "Beyond the project",
      beyondTitle: "What happens away from the drawing board.",
      beyondShots: [
        { img: "assets/talento/team-bernabeu.jpg",  caption: "Technical visit to the new Santiago Bernabéu, 2026." },
        { img: "assets/talento/team-induforum.jpg", caption: "Aguilera Ingenieros stand at Induforum 2026." },
      ],

      heroImg: "assets/bg_industrial_2.jpg",
    },

    positions: [
      { title: "Engineer — Data Centers",        dept: "Data Centers", loc: "Madrid", desc: "Building-services design for Tier III and IV data center projects. Client and site-management coordination." },
      { title: "Project Engineer — Pharma & Labs", dept: "Pharma",     loc: "Madrid", desc: "Design of cleanrooms, P2/P3 laboratories and GMP environments for international pharmaceutical clients." },
      { title: "Project Manager — Industrial Plants", dept: "Manufacturing", loc: "Madrid", desc: "End-to-end project management in microelectronics, cosmetics and pharmaceutical industries." },
      { title: "BIM Coordinator",                dept: "BIM",          loc: "Madrid", desc: "Coordination of BIM models and multi-discipline workflows in Revit." },
      { title: "Internship — Building Services", dept: "Training",     loc: "Madrid", desc: "Paid internships for engineering students in their final year. Mentored by partners." },
    ],

    team: [
      { name: "Pedro Aguilera",       role: "Dr. Industrial Engineer", photo: "assets/team/pedro-aguilera.jpg" },
      { name: "Camilo Corbí",         role: "Architect",               photo: "assets/team/camilo-corbi.jpg" },
      { name: "Pablo Aguilera",       role: "Industrial Engineer",     photo: "assets/team/pablo-aguilera.jpg" },
      { name: "Joaquín Cerrato",      role: "Industrial Engineer",     photo: "assets/team/joaquin-cerrato.jpg" },
      { name: "Almudena Aguilera",    role: "Lawyer",                  photo: "assets/team/almudena-aguilera.jpg" },
      { name: "Lucía Estébanez",      role: "Industrial Engineer",     photo: "assets/team/lucia-estebanez.jpg" },
      { name: "Alberto García Ramos", role: "Industrial Engineer",     photo: "assets/team/alberto-garcia.jpg" },
    ],

    contacto: {
      eyebrow: "Contact", company: "Aguilera Ingenieros S.A.",
      mapCta: "Open in Google Maps",
      addressNote: "5 min from Metro Islas Filipinas (L1) · Ciudad Universitaria (L6)",
    },

    newsletter: {
      eyebrow: "News",
      sub: "Case studies, engineering notes, and featured projects. Quarterly publication. No marketing, no spam.",
      archiveEyebrow: "All issues",
      backToList: "Back to News",
      notFound: "This issue is not available.",
    },

    footer: {
      meta: "Madrid · Since 1961",
      headNav: "Navigation", headSectors: "Sectors", headContact: "Contact",
      sectors: ["Data Centers", "Pharma & Biosafety", "Advanced Manufacturing", "Singular Buildings", "Hospitals", "Climate & Sustainability"],
      legalLeft: "© 2026 Aguilera Ingenieros S.A. — All rights reserved",
      legalRight: "Cookie Policy · Legal Notice",
    },

    cookie: { msg: "We use cookies to give you the best experience. Read our ", link: "Cookie Policy", accept: "Accept" },

    accreditations: [
      { label: "Uptime Institute", sub: "Tier IV · BBVA Tres Cantos DC I" },
      { label: "Uptime Institute", sub: "Tier IV · BBVA Tres Cantos DC II" },
      { label: "Uptime Institute", sub: "Tier III · BBVA Perú" },
      { label: "Uptime Institute", sub: "Tier III · Mapfre" },
      { label: "ATD",              sub: "Accredited Tier Designer" },
      { label: "LEED",             sub: "USGBC Certified" },
      { label: "LEED AP",          sub: "Professional credential" },
      { label: "ISO 9001",         sub: "BSI" },
      { label: "ISO 14001",        sub: "BSI" },
      { label: "ASHRAE",           sub: "Member" },
    ],
  },
};

// Project catalogue is language-agnostic for `name` (proper nouns) + `loc`.
// `cat` is keyed and resolved through catLabels at render time.
// Reference projects shown on each sector page. cat/name/loc/img drive the
// card today; client/year/surface/architect/investment/cert/scope are
// structured fields recovered from the live-site project pages
// (see scraped-site/) — used as the data source of truth and ready for a
// future project-detail view. `scope` stays in Spanish (the service we
// delivered) and should be translated when a detail view ships.
window.AI_PROJECTS = [
  // Data Centers
  { cat:"cpd", name:"BBVA Tres Cantos CPD I", loc:"Tier IV · Madrid",  img:"assets/hero_bbva_noche.jpg",
    client:"BBVA", year:"2012–2015", cert:"Uptime Tier IV · LEED Gold", scope:"Diseño integral de las instalaciones del CPD de misión crítica" },
  { cat:"cpd", name:"BBVA Tres Cantos CPD II",loc:"Tier IV · Madrid",  img:"assets/hero_bbva_noche.jpg",
    client:"BBVA", cert:"Uptime Tier IV", scope:"Diseño integral de las instalaciones del CPD de misión crítica" },
  { cat:"cpd", name:"BBVA Perú",              loc:"Tier III · Lima",   img:"assets/hero_cpd.jpg",
    client:"BBVA", cert:"Uptime Institute (CPD Perú)" },
  { cat:"cpd", name:"Mapfre Tales de Mileto", loc:"Tier III · Madrid", img:"assets/hero_cpd.jpg" },

  // Farma & Bio
  { cat:"farma", name:"GSK — Proyecto Eagle",       loc:"Tres Cantos, Madrid", img:"assets/hero_farma.jpg" },
  { cat:"farma", name:"MSD — Laboratorio de Calidad", loc:"Madrid",            img:"assets/hero_farma.jpg" },
  { cat:"farma", name:"Biomagune — Laboratorio I+D", loc:"San Sebastián",      img:"assets/hero_farma.jpg" },

  // Fabricación avanzada
  { cat:"fab", name:"Planta Beiersdorf Lechia", loc:"Poznań, Polonia",         img:"assets/hero_industriales.jpg",
    client:"Beiersdorf (BDF)", year:"1998–2009 · Plan Director 2017", surface:"40.000 m²", investment:">30 M€",
    scope:"Diseño de la fábrica, dirección de obra y asistencia técnica" },
  { cat:"fab", name:"Planta BDF Nivea",         loc:"Tres Cantos, Madrid",     img:"assets/hero_industriales.jpg" },
  { cat:"fab", name:"Vestas Nacelles",          loc:"Villadangos, León",       img:"assets/hero_industriales.jpg",
    investment:"40 M€", scope:"Gestión integral de proyecto y obra; diseño de las instalaciones de proceso" },
  { cat:"fab", name:"Vestas Blades",            loc:"Daimiel, Ciudad Real",    img:"assets/hero_industriales.jpg",
    surface:"200.000 m²", investment:">30 M€", scope:"Diseño y dirección de obra de las instalaciones electromecánicas" },
  { cat:"fab", name:"Flex do Brasil",           loc:"Limeira, São Paulo",      img:"assets/hero_industriales.jpg" },

  // Edificios singulares — absorbs oficinas + hoteles + retail + transporte + museos / auditorios
  { cat:"edif", name:"Torre Sacyr / Sede PwC",     loc:"Foster & Partners · Madrid",   img:"assets/hero_oficinas.jpg",
    client:"CBRE", cert:"LEED Oro", investment:"1,8 M€ (instalaciones)", scope:"Diseño de instalaciones y dirección de obra del fit-out de oficinas de PwC" },
  { cat:"edif", name:"Torre Foster — Fitout Bankia", loc:"Foster & Partners · Madrid", img:"assets/hero_oficinas.jpg",
    year:"2003–2009", surface:"90.000 m²", scope:"Proyecto y dirección de obra de las instalaciones electromecánicas" },
  { cat:"edif", name:"Banco Popular C/ Abelias",   loc:"Arq. Ayala · Madrid",          img:"assets/hero_oficinas.jpg" },
  { cat:"edif", name:"Caja Vital",                 loc:"Arq. J. Mozas · Vitoria",      img:"assets/hero_oficinas.jpg",
    client:"Caja Vital", architect:"Javier Mozas · Eduardo Aguirre", surface:"6.000 m²", investment:">8 M€",
    scope:"Diseño y dirección de obra de las instalaciones electromecánicas" },
  { cat:"edif", name:"Delegación de Hacienda",     loc:"Arq. BSV · Zaragoza",          img:"assets/hero_oficinas.jpg" },
  { cat:"edif", name:"Edificio Hines Pórtico",     loc:"SOM & R. de la Hoz · Madrid",  img:"assets/hero_oficinas.jpg",
    client:"Hines · Monthisa", architect:"Rafael de la Hoz · SOM", surface:"20.000 m²", investment:"10 M€",
    scope:"Diseño y dirección de obra de las instalaciones electromecánicas" },
  { cat:"edif", name:"Abama Country Club 5* GL",   loc:"Guía de Isora, Tenerife",      img:"assets/hero_oficinas.jpg",
    client:"Tropical Hoteles", surface:"160 ha (resort)", investment:">300 M€ · >60 M€ instalaciones",
    scope:"Proyecto y dirección de obra de las instalaciones electromecánicas y urbanización" },
  { cat:"edif", name:"Sheraton La Caleta 5*",      loc:"Adeje, Tenerife",              img:"assets/hero_oficinas.jpg",
    client:"DISA", year:"2003–2005", surface:"60.000 m²", scope:"Diseño y dirección de obra de las instalaciones electromecánicas" },
  { cat:"edif", name:"Hotel Kempinski Bahía 5* GL", loc:"Estepona, Málaga",            img:"assets/hero_oficinas.jpg",
    client:"Kempinski", architect:"Melvin Villarroel", surface:"45.000 m² (resort)", investment:">8 M€ (instalaciones)",
    scope:"Diseño y dirección de obra de las instalaciones electromecánicas" },
  { cat:"edif", name:"Eurostars Madrid Tower 5*",  loc:"Pº de la Castellana, Madrid",  img:"assets/hero_oficinas.jpg",
    client:"Testa", year:"2004–2007", investment:">32 M€ (instalaciones)" },
  { cat:"edif", name:"H2Ocio Rivas",               loc:"Chapman Taylor · Rivas, Madrid", img:"assets/hero_oficinas.jpg",
    architect:"Chapman Taylor", surface:"52.000 m²", investment:">140 M€", scope:"Diseño de instalaciones y dirección de obra" },
  { cat:"edif", name:"El Corte Inglés",            loc:"Eibar y Albacete",             img:"assets/hero_oficinas.jpg",
    client:"El Corte Inglés", surface:"60.000 m²", investment:">5 M€", scope:"Instalaciones de climatización" },
  { cat:"edif", name:"Marks & Spencer",            loc:"Madrid · Sevilla · Bilbao",    img:"assets/hero_oficinas.jpg" },
  { cat:"edif", name:"Aeropuerto de Sondica",      loc:"Calatrava · Bilbao",           img:"assets/hero_oficinas.jpg",
    surface:"18.000 m²", investment:"25 M€", scope:"Diseño de las instalaciones electromecánicas · asistencia técnica en obra" },
  { cat:"edif", name:"Gare do Oriente",            loc:"Calatrava · Lisboa",           img:"assets/hero_oficinas.jpg",
    year:"1996–1998", investment:"10 M€", scope:"Proyecto de ejecución de las instalaciones electromecánicas" },
  { cat:"edif", name:"Autoridad Portuaria de Bilbao", loc:"Arq. R. Losada",            img:"assets/hero_oficinas.jpg" },
  { cat:"edif", name:"Ciudad de las Artes y las Ciencias", loc:"Calatrava · Valencia", img:"assets/hero_edificios_singulares.jpg",
    architect:"Santiago Calatrava", surface:"37.000 m²", scope:"Proyecto básico" },
  { cat:"edif", name:"Auditorio de Tenerife",      loc:"Calatrava · Tenerife",         img:"assets/auditorio_tenerife.png",
    client:"Cabildo Insular de Tenerife", architect:"Santiago Calatrava", surface:"6.471 m²", investment:"110 M€" },

  // Hospitales
  { cat:"hos", name:"Hospital de Vigo",            loc:"Valode & Pistre · Vigo",       img:"assets/hero_farma.jpg",
    client:"SERGAS", surface:"170.000 m²", cert:"BREEAM", scope:"Proyecto básico de instalaciones electromecánicas" },
  { cat:"hos", name:"Clínica Quirón Erandio",      loc:"Erandio, Bizkaia",             img:"assets/hero_farma.jpg",
    surface:"20.500 m²", investment:">14 M€", scope:"Proyecto de instalaciones y dirección de obra" },
  { cat:"hos", name:"Hospital Fremap Majadahonda", loc:"M. de Lorenzo · Madrid",       img:"assets/hero_farma.jpg",
    investment:">30 M€", scope:"Proyecto de instalaciones y dirección de obra" },

  // Sostenibilidad
  { cat:"sos", name:"Banco Popular Abelias",       loc:"LEED Gold · Madrid",           img:"assets/hero_dc_green.jpg",
    cert:"LEED Gold (2011)", scope:"Data center sostenible · certificación LEED Gold" },
  { cat:"sos", name:"Edificio Hines Tripark",      loc:"LEED · Las Rozas, Madrid",     img:"assets/hero_dc_green.jpg",
    client:"Hines", architect:"Gabriel Allende", year:"2007–2009", surface:"72.000 m²", investment:">15 M€" },
  { cat:"sos", name:"Torre Sacyr / PwC",           loc:"LEED · Madrid",                img:"assets/hero_dc_green.jpg",
    client:"CBRE", cert:"LEED Oro", scope:"Fit-out de oficinas de PwC · dirección de obra" },
];

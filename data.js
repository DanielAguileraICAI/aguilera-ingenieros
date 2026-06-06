// Data — Spanish (primary) + English (parallel)
// Translations follow the same content-fundamentals tone: institutional, technical, period-separated headlines.
window.AI_I18N = {
  es: {
    nav: [
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
        { eyebrow: "Centros de Proceso de Datos", headline: "Infraestructura crítica. Diseñada para no fallar.", sub: "Tier III y Tier IV. Redundancia total. Eficiencia energética.", img: "assets/hero_bbva_noche.jpg", objectPosition: "center 0%" },
        { eyebrow: "Farma & Bioseguridad",        headline: "Ingeniería de instalaciones para entornos regulados.", sub: "Salas blancas, laboratorios P2/P3, GMP, FDA, ISPE.",        img: "assets/hero_farma.jpg" },
        { eyebrow: "Fabricación de alta precisión", headline: "Plantas industriales de vanguardia.",                 sub: "Desde la viabilidad técnica hasta la puesta en marcha.",     img: "assets/bg_industrial_4.jpg" },
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
        foot: "Independencia profesional y financiera — el 100% del capital pertenece a socios con dedicación exclusiva.",
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
      { tag: "Sostenibilidad", name: "Banco Popular Abelias", loc: "LEED Gold · Madrid", img: "assets/hero_oficinas.jpg" },
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
        n: "Nº 12", date: "Septiembre 2025", read: "6 min", tag: "Sostenibilidad",
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
        "Gestión de concursos de licitación de obras",
        "Dirección de obra y dirección facultativa",
        "Ingeniería y supervisión a pie de obra",
        "Proyectos de legalización",
        "Organización, asesoría y auditoría de mantenimiento",
        "Consultoría de eficiencia energética y sostenibilidad (LEED, BREEAM)",
        "Inspección y auditoría técnica de edificios (Due Diligence)",
      ],
    },

    categories: [
      { id: "todos",  label: "Todos" },
      { id: "cpd",    label: "Data Centers" },
      { id: "farma",  label: "Farma & Bioseguridad" },
      { id: "fab",    label: "Fabricación avanzada" },
      { id: "ofi",    label: "Oficinas" },
      { id: "hot",    label: "Hoteles" },
      { id: "cc",     label: "Centros comerciales" },
      { id: "tra",    label: "Transporte" },
      { id: "hos",    label: "Hospitales" },
      { id: "sos",    label: "Sostenibilidad" },
      { id: "mus",    label: "Museos & Auditorios" },
      { id: "bim",    label: "BIM" },
    ],
    catLabels: {
      cpd: "Data Center", farma: "Farma", fab: "Fabricación", ofi: "Oficinas",
      hot: "Hoteles", cc: "Centros Comerciales", tra: "Transporte",
      hos: "Hospitales", sos: "Sostenibilidad", mus: "Museos", bim: "BIM",
    },

    proyectos: { eyebrow: "Portfolio", title: "Proyectos" },

    personas: {
      eyebrow: "Personas", title: "El equipo",
      teamEyebrow: "Socios y responsables",
      quote: "Más de 60 años de experiencia colectiva. Un equipo multidisciplinar de ingenieros, técnicos y gestores con presencia en España, Europa y Latinoamérica.",
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
    },

    positions: [
      { title: "Ingeniero/a de Instalaciones — Data Centers", dept: "Data Centers", loc: "Madrid", desc: "Diseño de instalaciones para proyectos CPD Tier III y IV. Coordinación con cliente y dirección facultativa." },
      { title: "Ingeniero/a de Proyectos — Farma & Laboratorios", dept: "Farma", loc: "Madrid", desc: "Diseño de salas blancas, laboratorios P2/P3 y entornos GMP para clientes farmacéuticos internacionales." },
      { title: "Project Manager — Plantas Industriales", dept: "Fabricación", loc: "Madrid", desc: "Gestión integral de proyectos en industria microelectrónica, cosmética y farmacéutica." },
      { title: "BIM Coordinator", dept: "BIM", loc: "Madrid", desc: "Coordinación de modelos BIM y flujos de trabajo multi-disciplinar en Revit." },
      { title: "Prácticas — Ingeniería de Instalaciones", dept: "Formación", loc: "Madrid", desc: "Prácticas remuneradas para últimos cursos de ingeniería. Tutorización por socios." },
    ],

    team: [
      { name: "D. García",     role: "Director General" },
      { name: "M. Fernández",  role: "Director Técnico — Data Centers" },
      { name: "A. Soler",      role: "Responsable — Farma & Bioseguridad" },
      { name: "J. Ruiz",       role: "Director — Fabricación" },
      { name: "L. Cabrera",    role: "BIM Manager" },
      { name: "P. Moreno",     role: "Gestión de Calidad & Sostenibilidad" },
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
      sectors: ["Data Centers", "Farma & Bioseguridad", "Fabricación avanzada", "Oficinas", "Hospitales", "Sostenibilidad"],
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
        { eyebrow: "Data Centers",                 headline: "Critical infrastructure. Designed to never fail.", sub: "Tier III and Tier IV. Full redundancy. Energy-efficient.",   img: "assets/hero_bbva_noche.jpg", objectPosition: "center 0%" },
        { eyebrow: "Pharma & Biosafety",           headline: "Engineering for regulated environments.",          sub: "Cleanrooms, P2/P3 labs, GMP, FDA, ISPE.",                     img: "assets/hero_farma.jpg" },
        { eyebrow: "High-precision manufacturing", headline: "Industrial plants, engineered to a standard.",     sub: "From technical feasibility through commissioning.",          img: "assets/bg_industrial_4.jpg" },
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
        foot: "Professional and financial independence — 100% of the capital is held by partners with exclusive dedication.",
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
      { tag: "Sustainability", name: "Banco Popular Abelias", loc: "LEED Gold · Madrid",       img: "assets/hero_oficinas.jpg" },
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
        n: "Nº 12", date: "September 2025", read: "6 min", tag: "Sustainability",
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
        "Tender management",
        "Construction management and site supervision",
        "On-site engineering and supervision",
        "Regulatory and legalisation projects",
        "Maintenance organisation, advisory and audit",
        "Energy efficiency and sustainability consulting (LEED, BREEAM)",
        "Building technical inspection and audit (Due Diligence)",
      ],
    },

    categories: [
      { id: "todos",  label: "All" },
      { id: "cpd",    label: "Data Centers" },
      { id: "farma",  label: "Pharma & Biosafety" },
      { id: "fab",    label: "Advanced Manufacturing" },
      { id: "ofi",    label: "Offices" },
      { id: "hot",    label: "Hotels" },
      { id: "cc",     label: "Retail" },
      { id: "tra",    label: "Transport" },
      { id: "hos",    label: "Hospitals" },
      { id: "sos",    label: "Sustainability" },
      { id: "mus",    label: "Museums & Auditoriums" },
      { id: "bim",    label: "BIM" },
    ],
    catLabels: {
      cpd: "Data Center", farma: "Pharma", fab: "Manufacturing", ofi: "Offices",
      hot: "Hotels", cc: "Retail", tra: "Transport",
      hos: "Hospitals", sos: "Sustainability", mus: "Museums", bim: "BIM",
    },

    proyectos: { eyebrow: "Portfolio", title: "Projects" },

    personas: {
      eyebrow: "People", title: "The team",
      teamEyebrow: "Partners and leads",
      quote: "Over 60 years of collective experience. A multidisciplinary team of engineers, technicians and managers with presence in Spain, Europe and Latin America.",
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
    },

    positions: [
      { title: "Engineer — Data Centers",        dept: "Data Centers", loc: "Madrid", desc: "Building-services design for Tier III and IV data center projects. Client and site-management coordination." },
      { title: "Project Engineer — Pharma & Labs", dept: "Pharma",     loc: "Madrid", desc: "Design of cleanrooms, P2/P3 laboratories and GMP environments for international pharmaceutical clients." },
      { title: "Project Manager — Industrial Plants", dept: "Manufacturing", loc: "Madrid", desc: "End-to-end project management in microelectronics, cosmetics and pharmaceutical industries." },
      { title: "BIM Coordinator",                dept: "BIM",          loc: "Madrid", desc: "Coordination of BIM models and multi-discipline workflows in Revit." },
      { title: "Internship — Building Services", dept: "Training",     loc: "Madrid", desc: "Paid internships for engineering students in their final year. Mentored by partners." },
    ],

    team: [
      { name: "D. García",     role: "Managing Director" },
      { name: "M. Fernández",  role: "Technical Director — Data Centers" },
      { name: "A. Soler",      role: "Lead — Pharma & Biosafety" },
      { name: "J. Ruiz",       role: "Director — Manufacturing" },
      { name: "L. Cabrera",    role: "BIM Manager" },
      { name: "P. Moreno",     role: "Quality & Sustainability Manager" },
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
      sectors: ["Data Centers", "Pharma & Biosafety", "Advanced Manufacturing", "Offices", "Hospitals", "Sustainability"],
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
window.AI_PROJECTS = [
  // CPD
  { cat:"cpd", name:"BBVA Tres Cantos CPD I", loc:"Tier IV · Madrid",  img:"assets/hero_bbva_noche.jpg" },
  { cat:"cpd", name:"BBVA Tres Cantos CPD II",loc:"Tier IV · Madrid",  img:"assets/hero_bbva_noche.jpg" },
  { cat:"cpd", name:"BBVA Perú",              loc:"Tier III · Lima",   img:"assets/hero_cpd.jpg" },
  { cat:"cpd", name:"Mapfre Tales de Mileto", loc:"Tier III · Madrid", img:"assets/hero_cpd.jpg" },
  // Farma
  { cat:"farma", name:"GSK — Proyecto Eagle",       loc:"Tres Cantos, Madrid", img:"assets/hero_farma.jpg" },
  { cat:"farma", name:"MSD — Laboratorio de Calidad", loc:"Madrid",            img:"assets/hero_farma.jpg" },
  { cat:"farma", name:"Biomagune — Laboratorio I+D", loc:"San Sebastián",      img:"assets/hero_farma.jpg" },
  // Fabricación
  { cat:"fab", name:"Planta Beiersdorf Lechia", loc:"Poznań, Polonia",         img:"assets/hero_industriales.jpg" },
  { cat:"fab", name:"Planta BDF Nivea",         loc:"Tres Cantos, Madrid",     img:"assets/hero_industriales.jpg" },
  { cat:"fab", name:"Vestas Nacelles",          loc:"Villadangos, León",       img:"assets/hero_industriales.jpg" },
  { cat:"fab", name:"Vestas Blades",            loc:"Daimiel, Ciudad Real",    img:"assets/hero_industriales.jpg" },
  { cat:"fab", name:"Flex do Brasil",           loc:"Limeira, São Paulo",      img:"assets/hero_industriales.jpg" },
  // Oficinas
  { cat:"ofi", name:"Torre Sacyr / Sede PwC",     loc:"Foster & Partners · Madrid", img:"assets/hero_oficinas.jpg" },
  { cat:"ofi", name:"Torre Foster — Fitout Bankia", loc:"Foster & Partners · Madrid", img:"assets/hero_oficinas.jpg" },
  { cat:"ofi", name:"Banco Popular C/ Abelias",   loc:"Arq. Ayala · Madrid",        img:"assets/hero_oficinas.jpg" },
  { cat:"ofi", name:"Caja Vital",                 loc:"Arq. J. Mozas · Vitoria",    img:"assets/hero_oficinas.jpg" },
  { cat:"ofi", name:"Delegación de Hacienda",     loc:"Arq. BSV · Zaragoza",        img:"assets/hero_oficinas.jpg" },
  { cat:"ofi", name:"Edificio Hines Pórtico",     loc:"SOM & R. de la Hoz · Madrid", img:"assets/hero_oficinas.jpg" },
  // Hoteles
  { cat:"hot", name:"Abama Country Club 5* GL", loc:"Guía de Isora, Tenerife", img:"assets/hero_oficinas.jpg" },
  { cat:"hot", name:"Sheraton La Caleta 5*",    loc:"Adeje, Tenerife",         img:"assets/hero_oficinas.jpg" },
  { cat:"hot", name:"Hotel Kempinski Bahía 5* GL", loc:"Estepona, Málaga",     img:"assets/hero_oficinas.jpg" },
  { cat:"hot", name:"Eurostars Madrid Tower 5*", loc:"Madrid",                 img:"assets/hero_oficinas.jpg" },
  // Centros comerciales
  { cat:"cc", name:"H2Ocio Rivas",       loc:"Chapman Taylor · Madrid",   img:"assets/hero_oficinas.jpg" },
  { cat:"cc", name:"El Corte Inglés",    loc:"Eibar y Albacete",          img:"assets/hero_oficinas.jpg" },
  { cat:"cc", name:"Marks & Spencer",    loc:"Madrid · Sevilla · Bilbao", img:"assets/hero_oficinas.jpg" },
  // Transporte
  { cat:"tra", name:"Aeropuerto de Sondica", loc:"Calatrava · Bilbao",  img:"assets/hero_oficinas.jpg" },
  { cat:"tra", name:"Gare do Oriente",       loc:"Calatrava · Lisboa",  img:"assets/hero_oficinas.jpg" },
  { cat:"tra", name:"Autoridad Portuaria de Bilbao", loc:"Arq. R. Losada", img:"assets/hero_oficinas.jpg" },
  // Hospitales
  { cat:"hos", name:"Hospital de Vigo",        loc:"Valode & Pistre",       img:"assets/hero_farma.jpg" },
  { cat:"hos", name:"Clínica Quirón Erandio",  loc:"Vizcaya",               img:"assets/hero_farma.jpg" },
  { cat:"hos", name:"Hospital Fremap Majadahonda", loc:"M. de Lorenzo · Madrid", img:"assets/hero_farma.jpg" },
  // Sostenibilidad
  { cat:"sos", name:"Banco Popular Abelias",   loc:"LEED Gold · Madrid",        img:"assets/hero_oficinas.jpg" },
  { cat:"sos", name:"Edificio Hines Tripark",  loc:"LEED · Las Rozas, Madrid",  img:"assets/hero_oficinas.jpg" },
  { cat:"sos", name:"Torre Sacyr / PwC",       loc:"LEED · Madrid",             img:"assets/hero_oficinas.jpg" },
  // Museos
  { cat:"mus", name:"Ciudad de las Artes y las Ciencias", loc:"Calatrava · Valencia", img:"assets/hero_oficinas.jpg" },
  { cat:"mus", name:"Auditorio de Tenerife",   loc:"Calatrava · Tenerife",       img:"assets/hero_oficinas.jpg" },
  // BIM
  { cat:"bim", name:"Building Information Modeling", loc:"Modelo BIM · Madrid", img:"assets/hero_bim.jpg" },
  { cat:"bim", name:"BIM — Planta industrial", loc:"Modelo BIM",                img:"assets/hero_bim.jpg" },
  { cat:"bim", name:"BIM — Edificio en altura", loc:"Modelo BIM",               img:"assets/hero_bim.jpg" },
];

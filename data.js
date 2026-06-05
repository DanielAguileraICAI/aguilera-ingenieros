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

    home: {
      heroSlides: [
        { eyebrow: "Centros de Proceso de Datos", headline: "Infraestructura crítica. Diseñada para no fallar.", sub: "Tier III y Tier IV. Redundancia total. Eficiencia energética.", img: "assets/hero_cpd.jpg" },
        { eyebrow: "Farma & Bioseguridad",        headline: "Ingeniería de instalaciones para entornos regulados.", sub: "Salas blancas, laboratorios P2/P3, GMP, FDA, ISPE.",        img: "assets/hero_farma.jpg" },
        { eyebrow: "Fabricación de alta precisión", headline: "Plantas industriales de vanguardia.",                 sub: "Desde la viabilidad técnica hasta la puesta en marcha.",     img: "assets/hero_industriales.jpg" },
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
        { num: "1989",   desc: "fundamos TopE, red europea de ingenierías con +1.500 profesionales" },
      ],
      featuredEyebrow: "Proyectos destacados",
      featuredTitle: "Selección de obras recientes",
      viewAllProjects: "Ver todos los proyectos",
      insightsEyebrow: "Últimas noticias e insights",
      insightsTitle: "Casos, certificaciones y perspectivas",
      readMore: "Leer más",
    },

    featured: [
      { tag: "Data Center", name: "BBVA Tres Cantos CPD II", loc: "Tier IV · Madrid", img: "assets/hero_cpd.jpg" },
      { tag: "Data Center", name: "BBVA Perú", loc: "Tier III · Lima",                 img: "assets/hero_cpd.jpg" },
      { tag: "Farma",       name: "GSK — Proyecto Eagle", loc: "Tres Cantos, Madrid",  img: "assets/hero_farma.jpg" },
      { tag: "Fabricación", name: "Planta Beiersdorf Lechia", loc: "Poznań, Polonia",  img: "assets/hero_industriales.jpg" },
      { tag: "Oficinas",    name: "Torre Sacyr / PwC", loc: "Foster & Partners · Madrid", img: "assets/hero_oficinas.jpg" },
      { tag: "Sostenibilidad", name: "Banco Popular Abelias", loc: "LEED Gold · Madrid", img: "assets/hero_oficinas.jpg" },
    ],

    articles: [
      { tag: "Caso de éxito", title: "BBVA Tres Cantos: primer CPD Tier IV certificado en España", excerpt: "Aguilera Ingenieros lideró el diseño y supervisión de las instalaciones del centro de datos más avanzado de la banca española.", img: "assets/hero_cpd.jpg" },
      { tag: "Sostenibilidad", title: "Certificación LEED Gold: Torre Sacyr y Banco Popular Abelias", excerpt: "Nuestros proyectos pioneros en España en eficiencia energética y sostenibilidad certificada por USGBC.", img: "assets/hero_oficinas.jpg" },
      { tag: "Conferencia", title: "Edificación, infraestructuras e internacionalización", excerpt: "Casos de éxito con BBVA: cómo gestionar proyectos de instalaciones complejos a escala corporativa global.", img: "assets/hero_oficinas.jpg" },
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
        { num: "01", t: "Trayectoria",    p: "Fundada en 1961. Más de mil proyectos ejecutados. Red internacional TopE desde 1989 con +1.500 profesionales en Europa y EE.UU." },
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
      networkEyebrow: "Red internacional",
      networkTitle: "TopE — red europea de consultoría en ingeniería, fundada en 1989.",
      networkBody: "+1.500 profesionales en Europa y EE.UU. Acceso a experiencia multi-disciplinar para proyectos internacionales.",
    },

    talento: {
      eyebrow: "Talento", title: "Únete a Aguilera Ingenieros.",
      sub: "Buscamos ingenieros con excelencia técnica y compromiso con nuestros clientes.",
      pillarsEyebrow: "Por qué unirse",
      pillars: [
        { num: "01", t: "Proyectos de referencia", p: "Trabaja en los proyectos más complejos y exigentes del mercado español e internacional." },
        { num: "02", t: "Desarrollo profesional",  p: "Formación continua y exposición internacional a través de la red TopE." },
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
      formEyebrow: "Escríbanos",
      formTitle: "Cuéntenos sobre su proyecto.",
      labels: { name: "Nombre", company: "Empresa", email: "Email", phone: "Teléfono", subject: "Asunto", message: "Mensaje", send: "Enviar mensaje" },
      subjects: ["Nuevo proyecto", "Información", "Candidatura", "Otro"],
      successEyebrow: "Enviado",
      successMsg: "Mensaje enviado. Le contactaremos en breve.",
      addressNote: "A 5 minutos del Metro Islas Filipinas (L1) · Ciudad Universitaria (L6)",
    },

    newsletter: {
      eyebrow: "Noticias",
      title: "Aguilera Ingenieros · Boletín técnico.",
      sub: "Casos de estudio, notas técnicas y proyectos destacados. Publicación trimestral. Sin marketing, sin frecuencia indebida.",
      archiveEyebrow: "Ediciones recientes",
      archive: [
        { n: "Nº 14", date: "Marzo 2026",     title: "Tier IV en la práctica: lecciones de BBVA Tres Cantos II.", read: "5 min" },
        { n: "Nº 13", date: "Diciembre 2025", title: "Filtración HEPA H14 en suites GMP de llenado aséptico.",   read: "7 min" },
        { n: "Nº 12", date: "Septiembre 2025", title: "Plantas industriales de alta precisión: el caso Beiersdorf Lechia.", read: "6 min" },
      ],
      noteEyebrow: "Sobre el contenido",
      noteBody: "Cada edición está escrita por nuestro equipo técnico. Sin contenido patrocinado. Datos verificados, fuentes citadas, conclusiones propias.",
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

    home: {
      heroSlides: [
        { eyebrow: "Data Centers",                 headline: "Critical infrastructure. Designed to never fail.", sub: "Tier III and Tier IV. Full redundancy. Energy-efficient.",   img: "assets/hero_cpd.jpg" },
        { eyebrow: "Pharma & Biosafety",           headline: "Engineering for regulated environments.",          sub: "Cleanrooms, P2/P3 labs, GMP, FDA, ISPE.",                     img: "assets/hero_farma.jpg" },
        { eyebrow: "High-precision manufacturing", headline: "Industrial plants, engineered to a standard.",     sub: "From technical feasibility through commissioning.",          img: "assets/hero_industriales.jpg" },
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
        { num: "1989",   desc: "founded TopE, European engineering network with +1,500 professionals" },
      ],
      featuredEyebrow: "Featured projects",
      featuredTitle: "Selected recent work",
      viewAllProjects: "View all projects",
      insightsEyebrow: "Latest news & insights",
      insightsTitle: "Cases, certifications and perspectives",
      readMore: "Read more",
    },

    featured: [
      { tag: "Data Center", name: "BBVA Tres Cantos DC II", loc: "Tier IV · Madrid",          img: "assets/hero_cpd.jpg" },
      { tag: "Data Center", name: "BBVA Perú",              loc: "Tier III · Lima",            img: "assets/hero_cpd.jpg" },
      { tag: "Pharma",      name: "GSK — Project Eagle",    loc: "Tres Cantos, Madrid",        img: "assets/hero_farma.jpg" },
      { tag: "Manufacturing", name: "Beiersdorf Lechia Plant", loc: "Poznań, Poland",          img: "assets/hero_industriales.jpg" },
      { tag: "Offices",     name: "Sacyr Tower / PwC",      loc: "Foster & Partners · Madrid", img: "assets/hero_oficinas.jpg" },
      { tag: "Sustainability", name: "Banco Popular Abelias", loc: "LEED Gold · Madrid",       img: "assets/hero_oficinas.jpg" },
    ],

    articles: [
      { tag: "Case study",     title: "BBVA Tres Cantos: the first Tier IV-certified data center in Spain", excerpt: "Aguilera Ingenieros led the design and supervision of installations for Spanish banking's most advanced data center.", img: "assets/hero_cpd.jpg" },
      { tag: "Sustainability", title: "LEED Gold certification: Sacyr Tower and Banco Popular Abelias",     excerpt: "Our pioneering projects in Spain on energy efficiency and sustainability certified by USGBC.",                       img: "assets/hero_oficinas.jpg" },
      { tag: "Conference",     title: "Construction, infrastructure and internationalisation",              excerpt: "Case studies with BBVA: managing complex installation projects at corporate global scale.",                           img: "assets/hero_oficinas.jpg" },
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
        { num: "01", t: "Track record", p: "Founded 1961. Over a thousand projects delivered. TopE international network since 1989, with +1,500 professionals across Europe and the US." },
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
      networkEyebrow: "International network",
      networkTitle: "TopE — European engineering consulting network, founded 1989.",
      networkBody: "+1,500 professionals in Europe and the US. Access to multi-disciplinary expertise for international projects.",
    },

    talento: {
      eyebrow: "Careers", title: "Join Aguilera Ingenieros.",
      sub: "We're looking for engineers with technical excellence and commitment to our clients.",
      pillarsEyebrow: "Why join",
      pillars: [
        { num: "01", t: "Reference projects",   p: "Work on the most complex, demanding projects in the Spanish and international market." },
        { num: "02", t: "Career development",   p: "Continuous training and international exposure through the TopE network." },
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
      formEyebrow: "Write to us",
      formTitle: "Tell us about your project.",
      labels: { name: "Name", company: "Company", email: "Email", phone: "Phone", subject: "Subject", message: "Message", send: "Send message" },
      subjects: ["New project", "Information", "Application", "Other"],
      successEyebrow: "Sent",
      successMsg: "Message sent. We'll be in touch shortly.",
      addressNote: "5 min from Metro Islas Filipinas (L1) · Ciudad Universitaria (L6)",
    },

    newsletter: {
      eyebrow: "News",
      title: "Aguilera Ingenieros · Technical bulletin.",
      sub: "Case studies, engineering notes, and featured projects. Quarterly publication. No marketing, no spam.",
      archiveEyebrow: "Recent issues",
      archive: [
        { n: "Nº 14", date: "March 2026",     title: "Tier IV in practice: lessons from BBVA Tres Cantos II.", read: "5 min" },
        { n: "Nº 13", date: "December 2025",  title: "HEPA H14 filtration in aseptic-fill GMP suites.",        read: "7 min" },
        { n: "Nº 12", date: "September 2025", title: "High-precision industrial plants: the Beiersdorf Lechia case.", read: "6 min" },
      ],
      noteEyebrow: "About the content",
      noteBody: "Each issue is written by our technical team. No sponsored content. Verified data, cited sources, our own conclusions.",
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
  { cat:"cpd", name:"BBVA Tres Cantos CPD I", loc:"Tier IV · Madrid",  img:"assets/hero_cpd.jpg" },
  { cat:"cpd", name:"BBVA Tres Cantos CPD II",loc:"Tier IV · Madrid",  img:"assets/hero_cpd.jpg" },
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

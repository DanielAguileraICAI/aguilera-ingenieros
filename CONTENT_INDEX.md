# Live Site Content Index

Scrape of **https://www.aguilera-ingenieros.com** captured on May 2026.
Source-of-truth for content migration decisions. Nothing in this file is
shipped to the site.

---

## Source stack

- **CMS**: WordPress
- **Theme / page-builder**: Elegant Themes (Divi)
- **Asset path**: `/wp-content/uploads/YYYY/MM/<filename>`
- **Sitemaps**: `/sitemap_index.xml` (split into post / page / project / project_category / project_tag / category / tag / awl_filter_gallery / author)
- **Custom post types** in use: `project` (56 entries), plus standard WP `post` for blog
- **Languages**: Spanish primary, English partial (only Inicio English + policy docs translated)

---

## Page map (24 pages)

| URL | Notes |
|---|---|
| `/` | Home — hero + history + ethical/professional code + ISO certs |
| `/inicio-english/` | English home (partial, separate page rather than i18n plug-in) |
| `/servicios/` | Services list (8 main categories + 8 standalone) |
| `/proyectos/` | Project hub — tabbed by 11 categories |
| `/data-center/`, `/pharma-id/`, `/hoteles/`, `/sostenibilidad/`, `/bim-revit/`, `/centros-comerciales/`, `/transporte/`, `/hospitales/`, `/proyectos-emblematicos/`, `/oficinas-y-edificios-corporativos/`, `/sector-industrial/` | One landing page per category (11 pages) |
| `/equipo/` | Team / leadership (7 members) |
| `/blog/` | News index |
| `/contacto/` | Contact page |
| `/acreditaciones/` | Certifications page |
| `/portfolio/` | Project portfolio (likely an older view) |
| `/politica-de-privacidad/`, `/aviso-legal/`, `/politica-de-cookies/` | Legal |
| `/sample-page/` | Default WP page (probably orphan) |

**No careers / talent / "join us" page** exists on the live site. The
`Talento` section in our redesign needs **fresh content**.

---

## Project categories (the canonical taxonomy)

11 categories, slug → label (Spanish):

```
data-center                      → Data Center
pharma-id                        → Pharma & I+D
plantas-industriales             → Sector industrial / Plantas industriales
proyectos-emblematicos           → Proyectos emblemáticos
centros-comerciales              → Centros Comerciales
hoteles                          → Hoteles
hospitales                       → Hospitales
bim-revit                        → BIM / REVIT
oficinas-edificios-corporativos  → Oficinas y Edificios corporativos
transporte                       → Transporte
sostenibilidad                   → Sostenibilidad
```

---

## Projects (56 total)

All discovered at `/project/<slug>/`. Date column is the WP `lastmod` —
useful only as an ordering hint, not the real project year.

Category column is **inferred from the slug** (the WP project_category
sitemap doesn't expose per-project category mapping; that mapping lives
inside each post). Items marked `?` need a manual second pass.

| Slug | Inferred category |
|---|---|
| `nueva-sede-banco-popular` | oficinas |
| `planta-ariadne-6-airbus` | plantas-industriales |
| `hotel-sheraton-abandoibarra` | hoteles |
| `centro-comercial-ploiesti` | centros-comerciales |
| `planta-beiersdorf-polska-poznan` | plantas-industriales |
| `planta-beiersdorf-norwalk-usa` | plantas-industriales |
| `aranda-recuperacion-emisiones-propelente-hfa` | sostenibilidad |
| `sostenibilidad-bp-abelias` | sostenibilidad |
| `paneles-solares-fotovoltaicos` | sostenibilidad |
| `cargadores-de-vehiculos-electricos` | sostenibilidad |
| `vestas-daimiel-caldera-biomasa` | sostenibilidad |
| `centro-de-proceso-de-datos-banco-de-espana` | data-center |
| `planta-beiersdorf-bmtc` | plantas-industriales |
| `centro-comercial-h2ocio` | centros-comerciales |
| `torre-de-uso-mixto-iran-zamin` | oficinas |
| `centro-comercial-vanak` | centros-comerciales |
| `el-corte-ingles-albacete` | centros-comerciales |
| `el-corte-ingles-eibar` | centros-comerciales |
| `centro-comercial-xanadu` | centros-comerciales |
| `aeropuerto-de-bilbao` | transporte |
| `estacion-de-tren-gare-de-oriente` | transporte |
| `nueva-terminal-aeropuerto-de-argel` | transporte |
| `hospital-helios-klinik` | hospitales |
| `hospital-de-vigo-alvaro-cunqueiro` | hospitales |
| `hospital-quironsalud-bizkaia` | hospitales |
| `hospital-fremap` | hospitales |
| `la-gran-mezquita-de-argel` | proyectos-emblematicos |
| `cpd-campus` | data-center |
| `torre-foster` | oficinas |
| `auditorio-de-tenerife` | proyectos-emblematicos |
| `conservatorio-ciudad-de-las-artes-y-las-ciencias` | proyectos-emblematicos |
| `reformas-edificios-singulares` | proyectos-emblematicos |
| `bbva-azca` | oficinas |
| `casino-gran-madrid` | proyectos-emblematicos |
| `amtega-ciberseguridad` | data-center |
| `torre-sacyr` | oficinas |
| `nueva-sede-social-banco-de-santander` | oficinas |
| `sede-banco-santander-abelias` | oficinas |
| `reforma-edificio-torre-europa` | oficinas |
| `edificio-portico` | oficinas |
| `reforma-edificio-de-oficinas-castellana-66` | oficinas |
| `rehabilitacion-edificio-de-oficinas-hermosilla-3` | oficinas |
| `edificio-oficinas-nationale-nederlanden` | oficinas |
| `sede-social-caja-vital-kutxa` | oficinas |
| `centro-de-operaciones-barclays` | oficinas |
| `oficinas-real-madrid-valdebebas` | oficinas |
| `edificio-tripark` | oficinas |
| `edificio-de-oficinas-cristalia-9` | oficinas |
| `hotel-ritz-carlton-abama` | hoteles |
| `hotel-grand-hyatt` | hoteles |
| `hotel-el-puertito-de-adeje` | hoteles |
| `diseno-conceptual-glamping` | hoteles |
| `hotel-eurostars-madrid-tower` | hoteles |
| `hotel-sheraton-la-caleta` | hoteles |
| `hotel-kempinski-bahia-resort` | hoteles |

### Per-category headline counts (inferred)

| Category | Count |
|---|---|
| oficinas | 19 |
| hoteles | 7 |
| centros-comerciales | 6 |
| sostenibilidad | 5 |
| proyectos-emblematicos | 5 |
| hospitales | 4 |
| plantas-industriales | 4 |
| data-center | 3 |
| transporte | 3 |
| pharma-id | 0 (likely merged into plantas-industriales on the live site) |
| bim-revit | 0 (likely a methodology tag rather than a category with projects) |

---

## Project detail data shape

Fields observed across sampled projects (`centro-de-proceso-de-datos-banco-de-espana`,
`planta-beiersdorf-polska-poznan`, `torre-sacyr`, `hotel-ritz-carlton-abama`).
Not every project has every field.

```yaml
title:                  str    # always present
client:                 str    # almost always present (the company / commissioning entity)
location:               str    # free-form: "C/ Alcalá, Madrid" or "Guía de Isora, Tenerife"
year:                   str    # single year, range, or multiple ranges with phases — keep as string
architect:              str?   # sometimes attributed (Rubio & Álvarez Sala, Melvin Villarroel, etc.)
surface:                str?   # free-form because units vary: m², hectares, "500m² @1.15 kW/m²"
investment_total:       str?   # free-form: "16,3 M €", ">300M €"
investment_mep:         str?   # MEP-installations-only investment, separate field on some pages
certifications:         str[]  # ["LEED ORO", "TIER III", ...]
tier_level:             str?   # specific to data centers ("TIER III", "TIER IV")
scope_of_work:          str[]  # free-form bullets (verbatim Spanish): "Proyecto de ejecución",
                               # "Asistencia técnica y Dirección de Obra", "Documentación para licitación",
                               # "Modelo BIM LOD 300"
description:            str?   # short prose, sometimes blank
images:                 str[]  # `/wp-content/uploads/YYYY/MM/<name>.{jpg,png,webp}` — 1 to 7 per project
category_slug:          str    # from the URL taxonomy (one of the 11)
```

### Field idiosyncrasies worth flagging

- **`year`** is free-form on the live site. Multiple phases get written as
  `"1998–2001 (original); 2006–2009 (expansion); 2017 (Master Plan)"`. Our
  schema should accept either a single int or a free-form string.
- **`surface`** mixes units (m², hectares) and sometimes carries technical
  context (`"500m² @ 1.15 kW/m², TIER III"`). Keep as string OR split into
  `surface_value: number, surface_unit: enum, surface_note: str`.
- **`investment`** has two flavours (total project cost, MEP installations
  only). Worth modelling as `investment.{total, mep, currency}`.
- **`scope_of_work`** is a list of short bullets in Spanish — these are the
  service offerings we provided on the project (project execution, technical
  assistance, BIM model, etc.). Worth a controlled vocabulary later.
- **`images`**: first image often serves as the hero / thumbnail. The rest
  are gallery shots.

---

## Team (7 members)

All at `/equipo/`. Fields shown: name + title + photo. No bio, no
department grouping, no LinkedIn link, no contact email visible.

| # | Name | Title | Photo |
|---|---|---|---|
| 1 | Pedro Aguilera     | Dr. Ingeniero Industrial | `2023/11/Pedro-Aguilera-1-scaled-1.jpg` |
| 2 | Camilo Corbí       | Arquitecto               | `2023/11/Camilo-Corbi-2-scaled-1.jpg` |
| 3 | Pablo Aguilera     | Ingeniero Industrial     | `2023/11/Pablo-Aguilera-scaled-1.jpg` |
| 4 | Joaquín Cerrato    | Ingeniero Industrial     | `2023/11/Joaquin-Cerrtato-scaled-1.jpg` |
| 5 | Almudena Aguilera  | Abogada                  | `2023/11/Almudena-Aguilera-1-scaled-1.jpg` |
| 6 | Lucía Estébanez    | Ingeniera Industrial     | `2023/11/Lucia-Estebanez-1-scaled-1.jpg` |
| 7 | Alberto García Ramos | Ingeniero Industrial   | `2023/11/Alberto-Garcia-1-scaled-1.jpg` |

### Team data shape (live site)

```yaml
name:                str   # full name
title:               str   # "Ingeniero Industrial", "Arquitecto", "Abogada", "Dr. Ingeniero Industrial"
photo:               str   # /wp-content/uploads/...
```

### Team data shape (suggested for ours — richer)

```yaml
id:                  str   # slug, e.g. "pedro-aguilera"
name:                str
title:               str
department:          str?  # "Dirección", "Data Centers", "Farma", "BIM", "Sostenibilidad", ...
order:               int   # for sorting on the team page
bio:                 str?  # short paragraph
linkedin:            str?  # URL
email:               str?  # mailto
photo:               str   # asset path
photo_alt:           str?  # accessibility
```

---

## News / blog (9 posts in 2024–2026)

`/blog/` index, individual posts at `/YYYY/MM/DD/<slug>/`. Mostly news /
press mentions / event participation.

| Date | Title |
|---|---|
| 2026-05 | Artículo de Aguilera Ingenieros en Spain DC |
| 2026-04 | Participamos en la IV edición de la jornada Construcción de Data Centers en Madrid |
| 2026-04 | Visitamos el nuevo estadio Santiago Bernabéu |
| 2026-03 | Drones aplicados a la inspección de instalaciones: precisión, seguridad y eficiencia |
| 2026-03 | Aguilera Ingenieros participa en Induforum 2026 |
| 2024-04 | Aguilera Ingenieros en la radio Capital Radio |
| 2024-04 | La AEO publica un artículo de Pablo Aguilera sobre el impacto de la IA |
| 2024-02 | Un reportaje de El Mundo recoge los 60 años de liderazgo e innovación |
| 2024-01 | La Razón recoge nuestro proyecto de 400 cargadores eléctricos para el Banco Santander |

Our redesign's news system can absorb these directly as additional `news`
entries with `tag: "Prensa"` or `"Evento"`. The article body schema already
supports the kind of content here (lede + paragraphs + maybe an image).

---

## Services (live site list)

8 main categories shown as the spine of the services page, plus 8
standalone services listed as a flat list below. Useful for the
`/quienes-somos/` or a dedicated `/servicios/` page later.

**Main**:
1. Diseño de proyectos
2. Proyectos de Ingeniería de Instalaciones
3. Proyectos integrales de Centros de Proceso de Datos
4. Proyectos integrales de Laboratorios y Centros de I+D
5. Proyectos integrales de Plantas Industriales
6. Proyectos de implantación y adecuación
7. Proyectos de infraestructura y urbanización
8. Proyectos de ingeniería de detalle

**Standalone**:
- Consultoría de ingeniería de instalaciones
- Dirección de obra y dirección facultativa
- Consultoría de eficiencia energética
- Gestión de proyectos colaborativa
- Gestión de concursos de licitación
- Proyectos de legalización
- Estudios de viabilidad técnica
- Inspección y auditoría técnica

---

## Gaps to fill (no live-site source)

These need to be authored fresh — there is nothing to scrape:

- **Talento / Careers page** — no `/talento/`, `/empleo/`, `/join/` URL exists
- **Team bios** — only name + title + photo on the live site
- **Project descriptions** — many projects have only the structured fields, no prose
- **English translations** of projects, team bios, news posts
- **Mission / values long-form text** — homepage has fragments, no dedicated about page beyond the ethical code

---

## Migration recommendation (not a decision yet)

Don't bulk-port everything. The live site is a 56-project archive that's
mostly stale-by-fields and missing prose. For the new site, prefer:

1. **Hand-pick ~20 flagship projects** from the 56, write proper
   descriptions for each, drop the rest. Volume isn't the goal — the
   editorial design needs each project to feel curated.
2. **Use the live-site project URLs as the source list** — already in
   `CONTENT_INDEX.md` above — and tag them with the team's "include / skip"
   decision before any code change.
3. **Adopt the canonical 11-category taxonomy** verbatim, but consider
   collapsing `bim-revit` (methodology, not a project type) into a
   per-project boolean flag and merging `pharma-id` into
   `plantas-industriales` or splitting them more cleanly.
4. **Keep the live news posts as our `tag: "Prensa"` items** — fits the
   article schema as-is, no rework.

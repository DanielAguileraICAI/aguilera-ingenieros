# DB strategy for dynamic content

Companion to **CONTENT_INDEX.md**. Same data, viewed as storage. Three
content types are dynamic — they grow over time and the team will edit
them via the future CMS:

1. **News / articles** (already has a working schema, see `t.news` in `data.js`)
2. **Projects** (56 on the live site, ~20 curated for the new one)
3. **Team members** (~7–15 over time)
4. **Talent opportunities** (open positions; fresh content, no live source)

Plus mostly-static content kept in the same store for consistency:

5. **Project categories** (the 11-category taxonomy)
6. **Article tags** (Caso de éxito, Conferencia, Prensa, etc.)

---

## Recommended strategy: **content-as-files, JSON-on-disk**

For the size of this catalogue (low hundreds of items, two languages, a
team of ≤5 editors), running a real database is overkill. The pattern that
fits is **content-as-files**:

- Each content type lives in a folder of JSON (or MDX) files, one file per item
- The site renders by reading the files at build time
- The future editor (Decap / TipTap / custom) writes back to these files,
  commits to the git repo, and the static site rebuilds

Why this beats a database here:

| Concern | DB (Postgres / Supabase / Firebase) | Files-on-disk |
|---|---|---|
| Hosting cost | Always-on instance to pay for | Zero — lives in the repo |
| Backup | Separate concern, can be neglected | Git history *is* the backup |
| Diffability | Schema migrations, opaque snapshots | Every change is a reviewable diff |
| Offline edits | Hard | Trivial (edit the JSON locally) |
| Multi-author | Needs row-level lock or last-write-wins | Git merges normally |
| Scale ceiling | High | ~10k items before it gets uncomfortable |
| Editor UX | Custom UI required | Decap CMS exists, off-the-shelf |

The **only** reason to add a real DB is dynamic write traffic (subscriber
forms, comments, application submissions). When that comes, we add a tiny
table for *just that data* — articles / projects / team stay as files.

---

## Folder layout (proposed)

```
aguilera-ingenieros/
└─ content/
   ├─ news/
   │   ├─ 14-bbva-tres-cantos-tier-iv.es.json
   │   ├─ 14-bbva-tres-cantos-tier-iv.en.json
   │   └─ ...
   ├─ projects/
   │   ├─ torre-sacyr.json                  # single file, language-bilingual inside
   │   ├─ centro-de-proceso-de-datos-banco-de-espana.json
   │   └─ ...
   ├─ team/
   │   ├─ pedro-aguilera.json
   │   ├─ camilo-corbi.json
   │   └─ ...
   ├─ careers/
   │   ├─ ingeniero-instalaciones-mep-madrid.json
   │   └─ ...
   └─ taxonomies/
       ├─ project_categories.json
       └─ article_tags.json
```

Why a folder per type rather than one giant JSON: each item gets its own
git history, the editor can lock just one file at a time, and the diffs
are small enough to read.

### Bilingual: one file vs split files

Two reasonable patterns:

- **A. Two files per item** (`*.es.json`, `*.en.json`)
  - Pro: independent translation workflows, no chance of accidentally
    overwriting one language while editing the other
  - Con: harder to keep parallel content in sync
- **B. One file with language objects**
  - Pro: parallel translation is visually obvious; one source of truth
  - Con: bigger files, both languages locked when editing

I'd pick **B for projects and team** (the structured fields are mostly
identical between languages — only names, descriptions, scope-of-work are
translated), and **A for news/articles** (the body prose diverges
substantially and the editor will load one language at a time).

---

## Schemas

### 1. `news/*` — already live, captured for reference

```ts
type ArticleBlock =
  | { type: "lede" | "p" | "h2" | "h3" | "quote"; text: string }
  | { type: "image"; src: string; caption?: string }

type Article = {
  id:        string        // slug
  n:         string        // "Nº 14"
  date:      string        // "Marzo 2026"
  read:      string        // "5 min"
  tag:       string        // one of article_tags
  title:     string
  excerpt:   string        // 1–2 sentences for cards + list
  img:       string        // hero / thumbnail
  body:      ArticleBlock[]
}
```

File: `content/news/14-bbva-tres-cantos-tier-iv.es.json`.
One per language because the body diverges.

### 2. `projects/*` — proposed

```ts
type Project = {
  id:          string        // slug (matches live URL: "torre-sacyr")
  category:    string        // slug from project_categories
  flagship:    boolean       // shown on home / featured strips
  order:       number        // manual sort

  // bilingual top-level fields (one file, two language objects):
  i18n: {
    es: ProjectLocale
    en: ProjectLocale
  }

  // language-independent structured fields:
  year:        string         // "2023" or "1998–2001 (original); 2006–2009 (expansion)"
  client:      string         // "BANCO DE ESPAÑA"
  architect?:  string         // "Rubio & Álvarez Sala"
  location:    { city: string; region?: string; country: string }
  surface?:    { value?: number; unit?: "m2" | "ha"; note?: string }
  investment?: { total?: string; mep?: string; currency: string }   // strings to preserve "16,3 M €" formatting
  certifications: string[]    // ["LEED ORO", "TIER III"]
  tier?:       "I" | "II" | "III" | "IV"
  uses_bim:    boolean        // replaces bim-revit "category"

  hero_image:  string         // path under /content/projects/_assets/
  gallery:     { src: string; alt?: string; caption?: string }[]
}

type ProjectLocale = {
  title:         string
  subtitle?:     string
  description:   string        // free prose, may be empty
  scope_of_work: string[]      // list of bullets ("Proyecto de ejecución", ...)
}
```

### 3. `team/*` — proposed

```ts
type TeamMember = {
  id:          string         // slug ("pedro-aguilera")
  order:       number
  active:      boolean        // soft delete

  name:        string         // identical across languages
  photo:       string
  photo_alt?:  string
  linkedin?:   string
  email?:      string

  i18n: {
    es: { title: string; department?: string; bio?: string }
    en: { title: string; department?: string; bio?: string }
  }
}
```

### 4. `careers/*` — proposed

```ts
type Opportunity = {
  id:          string         // slug
  status:      "open" | "closed" | "draft"
  posted_at:   string         // ISO date
  closes_at?:  string         // ISO date
  location:    string         // "Madrid", "Madrid / remoto"
  experience:  string         // "Senior", "Junior", "3–5 años"
  department?: string         // "Data Centers", "BIM", ...

  i18n: {
    es: OpportunityLocale
    en: OpportunityLocale
  }
}

type OpportunityLocale = {
  title:           string                  // "Ingeniero de instalaciones MEP"
  summary:         string                  // 1–2 sentences for the list
  responsibilities: string[]
  requirements:    string[]
  nice_to_have?:   string[]
  apply_to:        string                  // email or URL
}
```

### 5. `taxonomies/project_categories.json` — proposed

```json
[
  { "slug": "data-center",                     "label": { "es": "Data Centers",                  "en": "Data Centers" },                   "order": 1 },
  { "slug": "pharma-id",                       "label": { "es": "Farma & I+D",                    "en": "Pharma & R&D" },                   "order": 2 },
  { "slug": "plantas-industriales",            "label": { "es": "Plantas industriales",           "en": "Industrial plants" },              "order": 3 },
  { "slug": "oficinas-edificios-corporativos", "label": { "es": "Oficinas y corporativos",        "en": "Offices & corporate" },            "order": 4 },
  { "slug": "hospitales",                      "label": { "es": "Hospitales",                     "en": "Hospitals" },                      "order": 5 },
  { "slug": "hoteles",                         "label": { "es": "Hoteles",                        "en": "Hotels" },                         "order": 6 },
  { "slug": "centros-comerciales",             "label": { "es": "Centros comerciales",            "en": "Shopping centers" },               "order": 7 },
  { "slug": "transporte",                      "label": { "es": "Transporte",                     "en": "Transportation" },                 "order": 8 },
  { "slug": "sostenibilidad",                  "label": { "es": "Sostenibilidad",                 "en": "Sustainability" },                 "order": 9 },
  { "slug": "proyectos-emblematicos",          "label": { "es": "Proyectos emblemáticos",         "en": "Landmark projects" },              "order": 10 }
]
```

Note: `bim-revit` dropped as a category; replaced by the `uses_bim`
boolean on individual projects.

### 6. `taxonomies/article_tags.json` — proposed

```json
[
  { "slug": "caso-de-exito",   "label": { "es": "Caso de éxito",   "en": "Case study" } },
  { "slug": "sostenibilidad",  "label": { "es": "Sostenibilidad",  "en": "Sustainability" } },
  { "slug": "farma",           "label": { "es": "Farma",           "en": "Pharma" } },
  { "slug": "fabricacion",     "label": { "es": "Fabricación",     "en": "Manufacturing" } },
  { "slug": "conferencia",     "label": { "es": "Conferencia",     "en": "Conference" } },
  { "slug": "prensa",          "label": { "es": "Prensa",          "en": "Press" } }
]
```

---

## How the site loads it (runtime)

The current site is React-via-Babel served as static files from GitHub
Pages. There are two ways the content reaches the page:

### Option A — bundle at build (no runtime fetch)

A small build step concatenates every `content/*.json` into a single
`data.js`-style bundle, replacing the hand-written content. Editor
commits files → CI runs the bundler → Pages rebuilds.

- **Pro**: zero runtime cost, no extra requests, works offline
- **Con**: requires a build step (Node script) — first piece of tooling
  to add to the repo

### Option B — fetch at runtime

The site loads `/content/index.json` (a manifest) and then individual
content files on demand via `fetch()`.

- **Pro**: no build step, content updates without a redeploy
- **Con**: extra HTTP requests, needs a service to host the JSON, breaks
  the current static-file simplicity

**Recommendation: A.** Matches the current static-site architecture. The
build step is ~30 lines of Node.

---

## The editor side (when we get there)

Given the file-based store, the realistic editor options narrow:

| Editor | Storage | Auth | Notion-feel | Setup |
|---|---|---|---|---|
| **Decap CMS** | git commits to repo | GitHub OAuth | Decent (markdown + media), not block-based | ~½ day |
| **TipTap-based custom** | git commits via serverless function | GitHub OAuth or magic link | **Yes** — true block editor | ~3–5 days |
| **Sanity** | Sanity-hosted | Sanity Studio | Yes | ~1 day, but content lives off-repo |

For "feels like Notion" exactly, **TipTap with a thin serverless writer**
is the path. Decap is faster to set up but the editor experience is more
markdown-textarea than Notion.

If we want the Notion feel and don't want to host anything, the realistic
combo is:

```
Editor (TipTap, in the browser)
   ↓ writes ProjectFile / ArticleFile JSON
Serverless function (Cloudflare Worker)
   ↓ commits the file via GitHub API
GitHub repo (main branch)
   ↓ push triggers GitHub Pages rebuild
Static site, updated
```

Auth: GitHub OAuth via the Worker — only people the team adds as repo
collaborators can log in.

---

## Migration plan (when we're ready to act)

1. **Build the `content/` folder structure** with the 6 schemas above
2. **Curate the 20 flagship projects** from the 56 on the live site;
   port them by hand (Spanish first, English later)
3. **Port the 7 team members** with the existing photos + flesh out bios
4. **Write the talent opportunities** content (no live source)
5. **Wire a build script** to bundle `content/*` into the runtime
   `data.js` (Option A above)
6. **Hold off on the editor** until #1–#5 are done — easier to design
   the editor against real schemas than against speculation

Steps 1–5 are achievable in our current static workflow with zero
backend. Only step 6 introduces a serverless dependency, and we can stay
on GitHub Pages for it (the Worker lives on Cloudflare separately).

---

## Open decisions for you

1. **One file or two files per project for ES/EN?** I'd default to one
   bilingual file (Option B above) — fewer files, easier to keep
   parallel — but happy to do two if your translation workflow prefers
   it.
2. **bim-revit**: drop as a category and make it a per-project boolean,
   or keep as a filter? Live site treats it as both.
3. **pharma-id vs plantas-industriales**: merge or keep separate? Live
   site lists `pharma-id` in the page sitemap but zero projects in that
   slug — they all sit under `plantas-industriales`.
4. **Number of projects to migrate**: all 56 (warts and all), or curated
   ~20 with proper editorial polish?

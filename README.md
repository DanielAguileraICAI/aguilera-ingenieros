# Aguilera Ingenieros — Website UI Kit

Interactive single-file React recreation of the marketing website. Open `index.html` to see the full system.

## Structure
- `index.html` — entry point; wires components into a multi-page prototype with client-side routing (home, quiénes somos, proyectos, personas, talento, contacto).
- `components/` — individual React components (one file each), exposed on `window` to be composed in `index.html`.
- Assets referenced via `../../assets/`.

## Components
- `BrandMark.jsx` / `Wordmark.jsx` — logo mark + lockup
- `Nav.jsx` — fixed top navigation with transparent → solid on scroll, mobile overlay
- `Footer.jsx`
- `HeroCarousel.jsx` — 3-slide auto-advance hero
- `ProjectCard.jsx` — image tile with overlay
- `ArticleCard.jsx` — insight card w/ blue top border
- `FilterTabs.jsx` — pill-shaped category filters
- `TeamCard.jsx` — person card
- `ContactForm.jsx` — validated form
- `SectionLabel.jsx` — editorial sticky label for 2-col layouts
- `Stat.jsx` / `Accordion.jsx` — small helpers
- `Page*.jsx` — per-route page compositions

## Data
- `data.js` — projects, team, positions, articles — all derived from the original `www/textos.php` + `www/titulos.php`.

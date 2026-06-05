# Hosting & backend plan

Companion to `CONTENT_INDEX.md` and `DB_STRATEGY.md`. This doc decides
the storage / editor / hosting question given a concrete constraint:

> The site is currently on **Movistar Presencia** (Telefónica's SME
> hosting bundle) with **WordPress + MySQL** behind it. The team has
> years of content already living in the WP database — 56 projects,
> 7 team members, 9 blog posts, a full media library.

---

## Recommendation: WordPress stays. Use it headless.

Keep WordPress on Movistar exactly where it is, but **stop using it as
the frontend**. The new design we've built becomes the only thing
visitors see. WordPress becomes a backend the team logs into to edit
content, and our frontend pulls that content via WordPress's built-in
REST API.

Why this is the right call:

1. **We don't lose the years of existing content.** Migrating 56
   projects + 7 team members + 9 posts + a media library by hand is a
   bad use of time. They're already structured in WP — just consume
   them.
2. **The team keeps the editor UI they already know.** No retraining,
   no new tool, no separate login. WP admin / Gutenberg is the editor.
3. **Movistar's constraints don't matter.** Movistar only has to keep
   running WordPress (which it does today). Our new frontend deploys
   somewhere else (GitHub Pages, Cloudflare Pages, Vercel — all free).
4. **Zero new infrastructure to host or pay for.** No serverless
   functions, no Supabase account, no Sanity project, no Decap setup.
5. **Risk is bounded.** If WP goes down, the new site keeps working
   from its last build until WP comes back.

---

## Architecture

```
┌──────────────────────────────────────────────────────────────────┐
│  presencia.movistar (existing, no changes to hosting plan)       │
│                                                                  │
│    cms.aguilera-ingenieros.com                                   │
│      └─ WordPress + MySQL                                        │
│           ├─ /wp-admin/   ← editors log in here                  │
│           └─ /wp-json/wp/v2/...  ← REST API (read-only public)  │
└──────────────────────────────────────────────────────────────────┘
                                │
                                │ fetch on build (every hour, or via webhook)
                                ▼
┌──────────────────────────────────────────────────────────────────┐
│  GitHub Actions                                                  │
│    └─ Node script: WP REST API → JSON files in repo              │
│       └─ commits to main if anything changed                     │
└──────────────────────────────────────────────────────────────────┘
                                │
                                │ push to main triggers Pages rebuild
                                ▼
┌──────────────────────────────────────────────────────────────────┐
│  GitHub Pages (or Cloudflare Pages)                              │
│                                                                  │
│    aguilera-ingenieros.com  ← public site, the new design        │
│      └─ static React + JSON content                              │
└──────────────────────────────────────────────────────────────────┘
```

Three layers, each one doing one job:

- **Movistar/WordPress** — storage + editor UI. Already exists.
- **GitHub Actions** — runs on a schedule, pulls the WP REST API down
  to JSON files in `content/`, commits the diff. ~50 lines of Node.
- **GitHub Pages** — serves the static React build. Already set up.

---

## Domain & DNS plan

The aguilera-ingenieros.com domain is currently pointing to Movistar.
After the switch:

- `aguilera-ingenieros.com`  → **new frontend** (GitHub Pages or Cloudflare Pages)
- `cms.aguilera-ingenieros.com` → **existing WordPress on Movistar**

This is a one-line change at the DNS layer (move the A/CNAME for the
apex; add a CNAME for `cms.`). The WP files don't move at all.

Email (`sec@aguilera-ingenieros.com`) is on the MX records, which are
separate from the website A records. Won't be affected by the switch.

---

## What we need from the existing WordPress

Before writing any code we need to confirm a few things on the live WP.
Most are likely already true (WP has had REST API since 2016) but the
custom post type for projects sometimes needs a one-line PHP fix to
expose itself.

### Sanity checks (open these URLs in a browser)

1. **REST API is alive**
   `https://www.aguilera-ingenieros.com/wp-json/wp/v2/posts`
   Should return JSON with the blog posts. If 404 → REST API is disabled
   by a security plugin and we need to re-enable it (small fix in the
   WP admin or a plugin setting).

2. **Project custom post type is REST-exposed**
   `https://www.aguilera-ingenieros.com/wp-json/wp/v2/project`
   Should return JSON with project objects. If empty array or 404 →
   the custom post type needs `show_in_rest: true` set. One-line PHP
   fix in `functions.php` (or in whichever plugin defines the project
   post type).

3. **Project categories are REST-exposed**
   `https://www.aguilera-ingenieros.com/wp-json/wp/v2/project_category`
   Should return the 11 categories. Same fix as #2 if not.

4. **Custom fields come back in the REST response**
   `https://www.aguilera-ingenieros.com/wp-json/wp/v2/project?per_page=1`
   Look at the JSON. We need fields like `client`, `location`, `year`,
   `surface`, `scope_of_work` to be present. If not, the WP installation
   uses ACF (Advanced Custom Fields) and we need to install
   **ACF to REST API** plugin or set `show_in_rest: true` on each ACF
   field group.

5. **Media URLs work**
   `https://www.aguilera-ingenieros.com/wp-json/wp/v2/media?per_page=1`
   Each media item has a `source_url`. Confirm those URLs load images
   from `/wp-content/uploads/`.

### Credentials to gather (for the team)

- WP admin URL (probably `https://www.aguilera-ingenieros.com/wp-admin/`)
- Username + password of an editor account
- Whether ACF / Custom Post Type UI / other content plugins are
  installed (just look at the Plugins menu in admin)
- Movistar control panel access (only needed for DNS change later, not
  for day-to-day content)

---

## What changes on our side

Our current `aguilera-ingenieros/` repo doesn't talk to WordPress at
all — content is hardcoded in `data.js`. Three changes:

### 1. A build-time WP fetcher (~50 lines of Node)

A new file `scripts/sync-content.mjs` that:

```js
// pseudo-code
const WP = "https://cms.aguilera-ingenieros.com/wp-json/wp/v2";

const [posts, projects, team, categories, media] = await Promise.all([
  fetch(`${WP}/posts?per_page=100&_embed`).then(r => r.json()),
  fetch(`${WP}/project?per_page=100&_embed`).then(r => r.json()),
  fetch(`${WP}/team?per_page=50&_embed`).then(r => r.json()),     // if team has its own CPT
  fetch(`${WP}/project_category`).then(r => r.json()),
  fetch(`${WP}/media?per_page=200`).then(r => r.json()),
]);

// Transform each WP response into the schema we already designed in
// DB_STRATEGY.md, write to content/*.json
writeFileSync("content/projects.json", JSON.stringify(transform(projects)));
writeFileSync("content/team.json",     JSON.stringify(transform(team)));
writeFileSync("content/news.json",     JSON.stringify(transform(posts)));
writeFileSync("content/categories.json", JSON.stringify(categories));
```

That's it. No persistent connection, no auth — public WP REST endpoints
are open by default.

### 2. The site reads from `content/*.json` instead of `data.js`

The hard-coded arrays in `data.js` go away. The existing React
components read from the same shapes (see `DB_STRATEGY.md`), so the UI
doesn't change at all — only where the data comes from.

### 3. GitHub Actions to run the fetcher

`.github/workflows/sync-content.yml`:

```yaml
on:
  schedule: [{ cron: "0 * * * *" }]    # every hour
  workflow_dispatch: {}                 # manual trigger
jobs:
  sync:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - run: node scripts/sync-content.mjs
      - run: |
          git config user.name "content-sync"
          git config user.email "bot@aguilera-ingenieros.com"
          git add -A
          git diff --staged --quiet || git commit -m "sync: content from WP"
          git push
```

When a commit happens, Pages auto-rebuilds in ~30 s. Total lag from "team
edits in WP" to "live on the site" is at most an hour, usually under
two minutes if we wire a webhook from WP (next-step nice-to-have, not
required for v1).

---

## Editor experience

For now: **straight WordPress admin (Gutenberg)**. It's not Notion, but
it's competent, the team almost certainly already knows it, and it
costs nothing to use.

If we want the Notion feel later, the upgrade path is:

1. Install a custom Gutenberg block library (e.g. EditorsKit, Stackable,
   Kadence Blocks) — keeps WP, gives nicer authoring UI
2. Or replace the Gutenberg editor with TipTap mounted inside WP
   admin (more work, more Notion-like)
3. Or build a separate editor app that hits the WP REST API for
   reads/writes — most flexible, but a real project

None of those are needed for v1. Start with Gutenberg, see what hurts.

---

## Talent opportunities (the one type WP doesn't have today)

The live WordPress doesn't have a careers page or custom post type for
opportunities. Two ways to add it:

- **Easy**: install "Custom Post Type UI" plugin in WP, click-create a
  `careers` post type with the fields from `DB_STRATEGY.md`, expose
  to REST. 10 minutes.
- **Easier still**: add ~30 lines to the WP theme's `functions.php`
  defining the CPT directly. No plugin needed.

Either way, opportunities then flow through the same WP → JSON →
GitHub Pages pipeline as everything else.

---

## What this gets us in week-by-week phases

**Week 1** (sanity checks + plumbing, no content move yet):
- Verify the five REST endpoints above all work
- Write `scripts/sync-content.mjs` and run it locally — see if the WP
  data shape matches what we expect
- Convert one content type (probably `team`, smallest) from
  hard-coded → JSON → render from JSON

**Week 2** (move the other types):
- News → JSON
- Projects → JSON (this is the big one — 56 items)
- Categories → JSON
- Wire GitHub Actions to run the sync hourly

**Week 3** (DNS + opportunities):
- Add the `careers` custom post type in WP
- Move the apex domain to point at GitHub Pages
- Move WP to `cms.aguilera-ingenieros.com`
- Verify nothing breaks

**Week 4+** (polish):
- WP → GitHub webhook for instant updates (optional)
- Notion-feel editor upgrade if needed (optional)
- New content authoring by the team

---

## Decisions still open

1. **Subdomain naming**: `cms.aguilera-ingenieros.com` for the WP
   admin? Or something else (`admin.`, `editor.`, `backend.`)?
2. **Sync frequency**: hourly cron is the safe default. Webhook is
   nicer but needs a small change on the WP side (a plugin or a
   functions.php hook to call GitHub's `repository_dispatch` endpoint).
3. **First content type to migrate**: I'd start with `team` (7 items,
   simple structure, easy to verify) before tackling `projects`
   (56 items, complex fields).
4. **What to do with the existing WP frontend** during the transition:
   leave it serving on the apex until cutover, or take it down first?
   I'd leave it up — no downtime that way.

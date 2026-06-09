/* Pages — composed from blocks. All copy resolved via useLang() / t. */

const PageHome = ({ setRoute }) => {
  const { t } = useLang();
  const H = t.home;
  return (
    <>
      <HeroCarousel setRoute={setRoute} />
      <VerticalsHero setRoute={setRoute} />

      {/* Client trust strip — desaturated logos, marquee */}
      <ClientStrip />

      {/* Vision memo — photo full-bleed on the left, everything else stacked
          on the right (pullquote + stats + rule + foot). No more container
          constraint on the photo column. */}
      <section className="section--memo">
        <div className="memo">
          <Reveal className="memo__photo">
            <img src="assets/hero_santander_noche.jpg" alt="" loading="lazy" />
          </Reveal>
          <div className="memo__col">
            <Reveal className="memo__l">
              <span className="pullquote" dangerouslySetInnerHTML={{
                __html: H.memo.pullquote.replace(/\{(\d+)\}/g, '<span class="accent">$1</span>')
              }} />
            </Reveal>
            <div className="memo__r">
              {H.stats.map((s,i) => (
                <Reveal key={i} delay={i * 100}>
                  <Stat {...s} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="section section--dark">
        <div className="container">
          <Reveal className="section__head">
            <Eyebrow onDark>{H.featuredEyebrow}</Eyebrow>
            <h2 className="section__title section__title--light">{H.featuredTitle}</h2>
          </Reveal>
          <div className="h-scroll">
            {t.featured.map((p,i) => (
              <Reveal key={i} delay={i * 80} className="h-scroll__item">
                <ProjectCard p={p} onClick={() => setRoute("proyectos")} />
              </Reveal>
            ))}
          </div>
          <Reveal className="section__foot">
            <ArrowCTA onClick={() => setRoute("proyectos")}>{H.viewAllProjects}</ArrowCTA>
          </Reveal>
        </div>
      </section>

      {/* Insights — first 3 entries of the unified news source */}
      <section className="section section--alt">
        <div className="container">
          <Reveal className="section__head">
            <Eyebrow>{H.insightsEyebrow}</Eyebrow>
            <h2 className="section__title">{H.insightsTitle}</h2>
          </Reveal>
          <div className="grid-3">
            {t.news.slice(0, 3).map((a,i) => (
              <Reveal key={i} delay={i * 100}>
                <ArticleCard a={a} onClick={() => setRoute({route:"article", articleId:a.id})} />
              </Reveal>
            ))}
          </div>
          <Reveal delay={400} className="grid-3__cta">
            <ArrowCTA onClick={() => setRoute("newsletter")}>{H.viewAllNews}</ArrowCTA>
          </Reveal>
        </div>
      </section>

      <SocialStrip />
    </>
  );
};

const PageQuienes = () => {
  const { t } = useLang();
  const Q = t.quienes;
  return (
    <>
      <section className="page-hero page-hero--parallax" style={{backgroundImage:`url(assets/hero_santander_noche.jpg)`}}>
        <div className="page-hero__ov"/>
        <div className="container page-hero__inner">
          <Reveal><Eyebrow onDark>{Q.eyebrow}</Eyebrow></Reveal>
          <Reveal delay={100}><h1 className="display" style={{color:"#F5F5F3",maxWidth:980}}>{Q.heroTitle}</h1></Reveal>
        </div>
      </section>

      <section className="section section--light">
        <div className="container editorial">
          <SectionLabel>{Q.sectionLabel}</SectionLabel>
          <div className="editorial__body">
            {Q.body.map((html, i) => (
              <Reveal key={i} delay={i * 80}>
                <p className="body-lg" dangerouslySetInnerHTML={{__html: html}} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <Reveal className="section__head"><Eyebrow onDark>{Q.pillarsEyebrow}</Eyebrow></Reveal>
          <div className="pillars">
            {Q.pillars.map((p, i) => (
              <Reveal key={i} delay={i * 120} className="pillar">
                <div className="pillar__num">{p.num}</div>
                <h3 className="pillar__t">{p.t}</h3>
                <p>{p.p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container codes">
          <Reveal>
            <Eyebrow>{Q.codeEthicEyebrow}</Eyebrow>
            <ul className="code-list">
              {Q.ethicalCode.map((e,i) => <li key={i}>{e}</li>)}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <Eyebrow>{Q.codeProfEyebrow}</Eyebrow>
            <ul className="code-list">
              {Q.professionalCode.map((e,i) => <li key={i}>{e}</li>)}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <Reveal className="section__head"><Eyebrow>{Q.accredEyebrow}</Eyebrow></Reveal>
          <div className="accred-grid">
            {t.accreditations.map((a,i) => (
              <Reveal key={i} delay={i * 50} className="accred">
                <div className="accred__label">{a.label}</div>
                <div className="accred__sub">{a.sub}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <Reveal className="section__head"><Eyebrow onDark>{Q.servicesEyebrow}</Eyebrow></Reveal>
          <ul className="svc-list">
            {Q.services.map((s,i) => (
              <Reveal key={i} delay={i * 30} as="li">
                <span className="svc-list__n">{String(i+1).padStart(2,"0")}</span>{s}
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

const PageProyectos = ({ setRoute }) => {
  const { t } = useLang();
  const [cat, setCat] = React.useState("todos");
  const items = cat === "todos" ? window.AI_PROJECTS : window.AI_PROJECTS.filter(p => p.cat === cat);
  return (
    <>
      <section className="page-hero page-hero--parallax" style={{backgroundImage:`url(assets/bg_industrial_7.jpg)`}}>
        <div className="page-hero__ov"/>
        <div className="container page-hero__inner">
          <Reveal><Eyebrow onDark>{t.proyectos.eyebrow}</Eyebrow></Reveal>
          <Reveal delay={100}><h1 className="display" style={{color:"#F5F5F3"}}>{t.proyectos.title}</h1></Reveal>
        </div>
      </section>

      {/* Sector tiles — six landing-page entry points, sit above the all-portfolio
          filter grid. Click a tile to jump into a sector-specific landing page;
          stay on this page to use the filter tabs across the whole portfolio. */}
      <section className="section section--light">
        <div className="container">
          <Reveal className="section__head"><Eyebrow>{t.proyectos.sectorsEyebrow}</Eyebrow></Reveal>
          <div className="sector-grid">
            {(t.sectors || []).map((s, i) => (
              <Reveal key={s.id} delay={(i % 3) * 80}>
                <a className="sector-tile"
                   onClick={() => setRoute({route:"sector", sectorId: s.id})}>
                  <div className="sector-tile__imgwrap">
                    <img className="sector-tile__img" src={s.img} alt={s.label} loading="lazy" />
                  </div>
                  <div className="sector-tile__ov">
                    <div className="sector-tile__row">
                      <h3 className="sector-tile__title">{s.label}</h3>
                      <span className="sector-tile__arrow">→</span>
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <FilterTabs items={t.categories} active={cat} onChange={setCat} />
          <div className="proj-grid">
            {items.map((p,i) => (
              <Reveal key={p.name + i} delay={(i % 6) * 60}>
                <ProjectCard p={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Client trust strip at the bottom of the projects grid */}
      <ClientStrip />
    </>
  );
};

/* PageSector — sector landing page. Reached via setRoute({route:"sector", sectorId}).
 *
 * Layout (adopted from the Aguilera Ingenieros Design System bundle, Claude
 * Design handoff):
 *   1. SectorHero — split panel. Left: eyebrow, h1, sub, 4-stat strip.
 *      Right: framed media panel with engineering-grid background and corner
 *      brackets. Holds the isometric line-drawing (cpd / farma / edif) or a
 *      photo (fab / hos / sos) — the panel is reserved as a future video slot.
 *   2. "Qué diseñamos" — 4 numbered discipline cards on a 2-col bordered grid.
 *   3. "Capacidades técnicas" — dark section with a numbered spec list.
 *   4. "Proyectos de referencia" — top 6 projects in this vertical + view-all.
 *   5. "Certificaciones y estándares" — 4-cell bordered grid.
 *   6. CTA accent band → contacto.
 */
/* SectorHeroPanel — the framed media panel on the right of every sector hero.
 *
 * Three flavours, picked in priority order:
 *   1. video   (sector.video present) — full-bleed clip inside the frame. Two
 *              shapes are supported:
 *                video: { src, poster?, cap? }                  → single loop
 *                video: { clips:[{src,cap?}, …], poster? }      → auto-cycling reel
 *              In the reel shape, each clip plays end-to-end and the panel
 *              advances on the `ended` event — so the rotation matches each
 *              clip's natural duration without us hardcoding a timer.
 *   2. drawing (sector.building present) — isometric line-drawing on the
 *              engineered grid background; the panel reads as a technical
 *              elevation.
 *   3. photo   (fallback) — sector.img dropped in full-bleed with a dimming
 *              overlay so the caption strip stays legible.
 *
 * The chrome (frame, corners, caption strip, video CTA) is identical across
 * all three flavours so the visual language of every sector page stays in sync. */
const SectorHeroPanel = ({ sector, common }) => {
  const useVideo    = !!sector.video;
  const useBuilding = !useVideo && !!sector.building;
  const usePhoto    = !useVideo && !useBuilding;

  const v = sector.video;
  const b = sector.building;
  // Normalise both video shapes into a uniform `clips[]` array of length ≥1.
  // If `sector.video.src` is present we treat it as a single-clip reel; the
  // playlist logic below loops automatically once it advances back to index 0.
  const clips = useVideo
    ? (Array.isArray(v.clips) && v.clips.length > 0
        ? v.clips
        : [{ src: v.src, cap: v.cap }])
    : [];
  const isReel = useVideo && clips.length > 1;
  const [clipIdx, setClipIdx] = React.useState(0);
  const videoRef = React.useRef(null);

  // On clip change, kick the video to (re)load the new src and play. The
  // browser won't autoplay across src swaps without this on Safari/iOS.
  React.useEffect(() => {
    if (!useVideo) return;
    const el = videoRef.current;
    if (!el) return;
    // The <video> src is bound declaratively below so React will swap it for
    // us; we just need to nudge the element to load and play afterwards.
    el.load();
    const p = el.play();
    if (p && typeof p.catch === "function") p.catch(() => {});
  }, [clipIdx, useVideo]);

  const onEnded = () => {
    if (!isReel) return;
    setClipIdx((i) => (i + 1) % clips.length);
  };

  const currentClip = clips[clipIdx] || {};
  const photoStyle = usePhoto ? { backgroundImage: `url(${sector.img})` } : null;
  const variant    = useVideo ? "shero__media--video"
                    : useBuilding ? "shero__media--drawing"
                    : "shero__media--photo";
  const cap = useVideo ? (currentClip.cap || sector.label.toUpperCase())
            : useBuilding ? b.cap
            : sector.label.toUpperCase();

  return (
    <Reveal delay={160} className="shero__right">
      <div className={"shero__media " + variant}
           data-video-slot={sector.cat}
           style={photoStyle}>
        {useVideo && (
          /* muted + playsInline + autoPlay is the standard contract for a
             silent loop browsers won't block. `loop` only applies in the
             single-clip case; for a reel we let `ended` fire so we can advance
             the index. `poster` paints instantly so the panel isn't blank
             while the next clip buffers. */
          <video ref={videoRef}
                 className="shero__video"
                 src={currentClip.src}
                 poster={v.poster || sector.img}
                 autoPlay
                 muted
                 playsInline
                 preload="auto"
                 loop={!isReel}
                 onEnded={onEnded}
                 aria-hidden="true" />
        )}
        {useBuilding && <div className="shero__grid-bg" />}
        {useBuilding && (
          <img className="shero__building"
               src={b.src} alt=""
               style={{aspectRatio: String(b.ratio)}} />
        )}
        {/* Tick row — one notch per clip in a reel; the active clip's notch
            is bright. Sits inside the panel near the bottom so it reads as
            "you are on shot N of M" without dominating the frame. */}
        {isReel && (
          <div className="shero__reel-ticks" aria-hidden="true">
            {clips.map((_, i) => (
              <span key={i} className={"shero__reel-tick " + (i === clipIdx ? "is-on" : "")} />
            ))}
          </div>
        )}
        <div className="shero__media-foot">
          <span className="shero__media-cap">{cap}</span>
          <span className="shero__media-video">
            <span className="shero__play">
              <svg width="11" height="13" viewBox="0 0 11 13" fill="currentColor"><path d="M0 0l11 6.5L0 13z"/></svg>
            </span>
            {common.videoLabel}
          </span>
        </div>
        <div className="shero__corner shero__corner--tl" />
        <div className="shero__corner shero__corner--tr" />
        <div className="shero__corner shero__corner--bl" />
        <div className="shero__corner shero__corner--br" />
      </div>
    </Reveal>
  );
};

/* SectorStageHero — full-bleed 100vh video hero in the Foster + Partners
 * cadence. Used when sector.heroVariant === "stage" (Data Centers).
 *
 * Layout:
 *   - Background <video> at object-fit:cover, autoplaying through sector.video.clips
 *   - Top-to-bottom darkening gradient for legibility under the nav + over the copy
 *   - Bottom-left copy column: Eyebrow + h1 + sub
 *   - Bottom-centre dot strip: one small filled dot per clip; the active dot is
 *     surrounded by a thin SVG ring whose stroke-dashoffset fills clockwise as
 *     the clip plays. The fill is driven by requestAnimationFrame mutating the
 *     circle's style.strokeDashoffset directly — no React re-render per frame.
 *
 * Clicking a dot jumps to that clip; the rAF loop resets and the new clip's
 * ring starts from empty. The `ended` event advances index automatically. */
const SectorStageHero = ({ sector, common, setRoute }) => {
  const v = sector.video || {};
  const clips = Array.isArray(v.clips) && v.clips.length > 0
    ? v.clips
    : (v.src ? [{ src: v.src, cap: v.cap }] : []);
  const [clipIdx, setClipIdx] = React.useState(0);
  const videoRef = React.useRef(null);
  const ringRef  = React.useRef(null);
  const RADIUS = 9;
  const RING_C = 2 * Math.PI * RADIUS;   // ~56.55 — full-circle stroke length

  // Load + play the current clip when clipIdx changes, and drive the progress
  // ring via rAF. Mutating the SVG circle's style directly avoids 60 React
  // re-renders per second; the only state change is on `ended` (clip swap).
  React.useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    vid.load();
    const p = vid.play();
    if (p && typeof p.catch === "function") p.catch(() => {});
    // Reset ring to empty at the start of the new clip.
    if (ringRef.current) ringRef.current.style.strokeDashoffset = String(RING_C);
    let raf;
    const tick = () => {
      const v2 = videoRef.current;
      const r  = ringRef.current;
      if (v2 && r && v2.duration > 0) {
        const pct = Math.min(1, Math.max(0, v2.currentTime / v2.duration));
        r.style.strokeDashoffset = String(RING_C * (1 - pct));
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [clipIdx, RING_C]);

  const onEnded = () => {
    if (clips.length <= 1) return;
    setClipIdx((i) => (i + 1) % clips.length);
  };

  const currentClip = clips[clipIdx] || {};
  return (
    <section className="shero shero--stage" aria-label={sector.label}>
      <video ref={videoRef}
             className="shero__bg-video"
             src={currentClip.src}
             poster={v.poster || sector.img}
             autoPlay
             muted
             playsInline
             preload="auto"
             loop={clips.length <= 1}
             onEnded={onEnded}
             aria-hidden="true" />
      {/* Top-to-bottom darkening pass: heavier at top (so the nav + corner brackets
          read) and at the bottom (so the copy stays legible regardless of footage). */}
      <div className="shero__bg-overlay" />

      <div className="container shero__stage-inner">
        <div className="shero__stage-content">
          {/* Stage hero copy stays tight on purpose — just an eyebrow and a
              short headline. Sector descriptions live below the hero, not on
              top of the footage. The `sub` field on the sector is preserved
              for the framed hero variants (other sectors) but not rendered
              here, so we can shorten without touching the schema. */}
          <Reveal><Eyebrow onDark>{sector.eyebrow || sector.label}</Eyebrow></Reveal>
          <Reveal delay={90}><h1 className="shero__stage-h1">{sector.h1 || sector.label}</h1></Reveal>
        </div>
      </div>

      {/* Dot strip — one per clip in the reel. The active dot wears the
          progress-ring SVG; the others are static filled dots. */}
      {clips.length > 1 && (
        <div className="shero__stage-dots" role="tablist" aria-label="Reel clips">
          {clips.map((_, i) => {
            const isActive = i === clipIdx;
            return (
              <button key={i}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      className={"shero__stage-dot " + (isActive ? "is-on" : "")}
                      onClick={() => setClipIdx(i)}
                      aria-label={"Clip " + (i + 1) + " de " + clips.length}>
                <span className="shero__stage-dot-core" />
                {isActive && (
                  <svg className="shero__stage-dot-ring" width="28" height="28" viewBox="0 0 28 28" aria-hidden="true">
                    <circle ref={ringRef}
                            cx="14" cy="14" r={RADIUS}
                            fill="none"
                            stroke="#FFFFFF"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeDasharray={RING_C}
                            strokeDashoffset={RING_C}
                            style={{transform: "rotate(-90deg)", transformOrigin: "50% 50%"}} />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      )}
    </section>
  );
};

const PageSector = ({ sectorId, setRoute }) => {
  const { t } = useLang();
  const sector = (t.sectors || []).find(s => s.id === sectorId);
  const common = t.sectorCommon || {};
  if (!sector) {
    return (
      <section className="section section--light">
        <div className="container">
          <p>—</p>
          <a className="back-link" onClick={() => setRoute("proyectos")}>← {t.proyectos.backToProyectos}</a>
        </div>
      </section>
    );
  }
  // The vertical's projects come from the new projCats array; fall back to
  // sector.cat if older data is in play. Top 6 by current order in AI_PROJECTS.
  const cats = sector.projCats || [sector.cat];
  const items = window.AI_PROJECTS.filter(p => cats.includes(p.cat));
  const featured = items.slice(0, 6);

  return (
    <>
      {/* ── 1. Hero ───────────────────────────────────────────────────
          Default: split panel (copy left, framed media right).
          heroVariant === "stage": full-bleed 100vh video stage with
          progress-ring dots (Foster + Partners cadence). */}
      {sector.heroVariant === "stage" ? (
        <SectorStageHero sector={sector} common={common} setRoute={setRoute} />
      ) : (
        <section className="shero">
          <div className="shero__inner container">
            <div className="shero__left">
              <Reveal><Eyebrow onDark>{sector.eyebrow || t.proyectos.sectorsEyebrow}</Eyebrow></Reveal>
              <Reveal delay={90}><h1 className="shero__h1">{sector.h1 || sector.label}</h1></Reveal>
              <Reveal delay={180}><p className="shero__sub">{sector.sub || sector.intro}</p></Reveal>
              {sector.stats && sector.stats.length > 0 && (
                <Reveal delay={260}>
                  <div className="shero__stats">
                    {sector.stats.map((s, i) => (
                      <div key={i} className="shero__stat">
                        <div className="shero__stat-v">{s.v}</div>
                        <div className="shero__stat-k">{s.k}</div>
                      </div>
                    ))}
                  </div>
                </Reveal>
              )}
            </div>
            <SectorHeroPanel sector={sector} common={common} />
          </div>
        </section>
      )}


      {/* ── 2. What we engineer — disciplines ──────────────────────── */}
      {sector.engineer && sector.engineer.length > 0 && (
        <section className="section section--light">
          <div className="container">
            <Reveal className="section__head">
              <Eyebrow>{sector.engineerTitle}</Eyebrow>
              {sector.engineerSub && <h2 className="section__title">{sector.engineerSub}</h2>}
            </Reveal>
            <div className="eng-grid">
              {sector.engineer.map((e, i) => (
                <Reveal key={i} delay={i * 80} className="eng-card">
                  <div className="eng-card__n">{String(i + 1).padStart(2, "0")}</div>
                  <h3 className="eng-card__t">{e.t}</h3>
                  <p className="eng-card__d">{e.d}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 3. Technical capabilities — spec list on dark ──────────── */}
      {sector.caps && sector.caps.length > 0 && (
        <section className="section section--dark">
          <div className="container caps">
            <Reveal className="caps__head">
              <Eyebrow onDark>{sector.capTitle}</Eyebrow>
            </Reveal>
            <ul className="caps__list">
              {sector.caps.map((c, i) => (
                <Reveal key={i} delay={i * 60} as="li" className="caps__item">
                  <span className="caps__n">{String(i + 1).padStart(2, "0")}</span>
                  <span className="caps__t">{c}</span>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ── 4. Reference projects ─────────────────────────────────── */}
      <section className="section section--alt">
        <div className="container">
          <Reveal className="section__head">
            <Eyebrow>{sector.projTitle || t.proyectos.title}</Eyebrow>
          </Reveal>
          <div className="proj-grid">
            {featured.map((p, i) => (
              <Reveal key={p.name + i} delay={(i % 3) * 70}>
                <ProjectCard p={p} onClick={() => setRoute("proyectos")} />
              </Reveal>
            ))}
          </div>
          <Reveal className="section__foot">
            <ArrowCTA onClick={() => setRoute("proyectos")}>{common.viewAll || t.proyectos.backToProyectos}</ArrowCTA>
          </Reveal>
        </div>
      </section>

      {/* ── 5. Certifications ──────────────────────────────────────── */}
      {sector.certs && sector.certs.length > 0 && (
        <section className="section section--light">
          <div className="container">
            <Reveal className="section__head"><Eyebrow>{sector.certTitle}</Eyebrow></Reveal>
            <div className="cert-grid">
              {sector.certs.map((c, i) => (
                <Reveal key={i} delay={i * 60} className="cert">
                  <div className="cert__label">{c.label}</div>
                  <div className="cert__sub">{c.sub}</div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 6. CTA accent band ─────────────────────────────────────── */}
      <section className="section section--accent">
        <div className="container cta-band">
          <Reveal><h2 className="section__title section__title--light">{common.ctaTitle}</h2></Reveal>
          <Reveal delay={80}><p className="body-lg" style={{color:"rgba(255,255,255,.88)"}}>{common.ctaSub}</p></Reveal>
          <Reveal delay={160}><ArrowCTA outline dark onClick={() => setRoute("contacto")}>{common.ctaBtn}</ArrowCTA></Reveal>
        </div>
      </section>
    </>
  );
};

const PagePersonas = () => {
  const { t } = useLang();
  const P = t.personas;
  return (
    <>
      <section className="page-hero page-hero--parallax" style={{backgroundImage:`url(assets/bg_industrial_5.jpg)`}}>
        <div className="page-hero__ov"/>
        <div className="container page-hero__inner">
          <Reveal><Eyebrow onDark>{P.eyebrow}</Eyebrow></Reveal>
          <Reveal delay={100}><h1 className="display" style={{color:"#F5F5F3"}}>{P.title}</h1></Reveal>
        </div>
      </section>
      <section className="section section--light">
        <div className="container">
          <Reveal className="section__head"><Eyebrow>{P.teamEyebrow}</Eyebrow></Reveal>
          <div className="team-grid">
            {t.team.map((person,i) => (
              <Reveal key={i} delay={i * 80}>
                <TeamCard t={person} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section section--alt">
        <div className="container" style={{maxWidth:880,textAlign:"left"}}>
          <Reveal><span className="pullquote">{P.quote}</span></Reveal>
        </div>
      </section>
    </>
  );
};

const PageTalento = ({ setRoute }) => {
  const { t } = useLang();
  const T = t.talento;
  return (
    <>
      {/* Hero — full team group photo as background */}
      <section className="page-hero page-hero--parallax" style={{backgroundImage:`url(${T.heroImg})`}}>
        <div className="page-hero__ov"/>
        <div className="container page-hero__inner">
          <Reveal><Eyebrow onDark>{T.eyebrow}</Eyebrow></Reveal>
          <Reveal delay={100}><h1 className="display" style={{color:"#F5F5F3",maxWidth:900}}>{T.title}</h1></Reveal>
          <Reveal delay={200}><p className="body-lg" style={{color:"rgba(245,245,243,.85)",marginTop:16,maxWidth:680}}>{T.sub}</p></Reveal>
        </div>
      </section>

      {/* Manifesto — dark band with the actual office-wall quote */}
      <section className="section section--dark section--manifesto">
        <div className="container manifesto">
          <Reveal><Eyebrow onDark>{T.manifestoEyebrow}</Eyebrow></Reveal>
          <Reveal delay={120}>
            <p className="manifesto__quote">{T.manifestoQuote}</p>
          </Reveal>
        </div>
      </section>

      {/* Why join — pillars */}
      <section className="section section--light">
        <div className="container">
          <Reveal className="section__head"><Eyebrow>{T.pillarsEyebrow}</Eyebrow></Reveal>
          <div className="pillars pillars--light">
            {T.pillars.map((p,i) => (
              <Reveal key={i} delay={i * 120} className="pillar">
                <div className="pillar__num">{p.num}</div>
                <h3 className="pillar__t">{p.t}</h3>
                <p>{p.p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How we work — three moments, three photos */}
      <section className="section section--alt">
        <div className="container">
          <Reveal className="section__head">
            <Eyebrow>{T.momentsEyebrow}</Eyebrow>
            <h2 className="section__title">{T.momentsTitle}</h2>
          </Reveal>
          <div className="moments">
            {T.moments.map((m,i) => (
              <Reveal key={i} delay={i * 100} className="moments__item">
                <div className="moments__ph"><img src={m.img} alt="" loading="lazy" /></div>
                <h3 className="moments__t">{m.t}</h3>
                <p className="moments__p">{m.p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mentorship — editorial 2-col */}
      <section className="section section--light section--mentor">
        <div className="mentor">
          <Reveal className="mentor__ph">
            <img src={T.mentorImg} alt="" loading="lazy" />
          </Reveal>
          <div className="mentor__col">
            <Reveal><Eyebrow>{T.mentorEyebrow}</Eyebrow></Reveal>
            <Reveal delay={80}><h2 className="section__title" style={{marginTop:12}}>{T.mentorTitle}</h2></Reveal>
            <Reveal delay={160}><p className="body-lg" style={{marginTop:18,color:"var(--fg-mid)",maxWidth:540,lineHeight:1.55}}>{T.mentorBody}</p></Reveal>
          </div>
        </div>
      </section>

      {/* Beyond the project — two-photo strip */}
      <section className="section section--alt">
        <div className="container">
          <Reveal className="section__head">
            <Eyebrow>{T.beyondEyebrow}</Eyebrow>
            <h2 className="section__title">{T.beyondTitle}</h2>
          </Reveal>
          <div className="beyond">
            {T.beyondShots.map((s,i) => (
              <Reveal key={i} delay={i * 120} className="beyond__item">
                <div className="beyond__ph"><img src={s.img} alt="" loading="lazy" /></div>
                <p className="beyond__cap">{s.caption}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Open positions */}
      <section className="section section--light">
        <div className="container">
          <Reveal className="section__head"><Eyebrow>{T.positionsEyebrow}</Eyebrow></Reveal>
          <Accordion items={t.positions} applyLabel={T.applyCta} />
        </div>
      </section>

      {/* CTA */}
      <section className="section section--accent">
        <div className="container cta-band">
          <Reveal><h2 className="section__title section__title--light">{T.noPosTitle}</h2></Reveal>
          <Reveal delay={80}><p className="body-lg" style={{color:"rgba(255,255,255,.85)"}}>{T.noPosSub}</p></Reveal>
          <Reveal delay={160}><ArrowCTA outline dark onClick={() => setRoute("contacto")}>{T.contactCta}</ArrowCTA></Reveal>
        </div>
      </section>
    </>
  );
};

const PageContacto = () => {
  const { t } = useLang();
  const C = t.contacto;
  return (
    <section className="contacto">
      <div className="contacto__inner">
        <Reveal><Eyebrow onDark>{C.eyebrow}</Eyebrow></Reveal>
        <Reveal delay={80}><h1 className="h1" style={{color:"#F5F5F3",marginTop:20}}>{C.company}</h1></Reveal>
        <Reveal delay={160}>
          <div className="contacto__addr">
            Calle de Guzmán el Bueno, 133<br/>
            Edificio Skandia — Pral. C<br/>
            Madrid 28003 — España
          </div>
          <div className="contacto__row">Tel. +34 915 33 67 04</div>
          <a className="contacto__mail" href="mailto:sec@aguilera-ingenieros.com">sec@aguilera-ingenieros.com</a>
        </Reveal>
        <Reveal delay={240}>
          <div className="contacto__map">
            <img src="assets/mapa.jpg" alt="" />
            <a className="link-inline" style={{marginTop:12,display:"inline-block",color:"#F5F5F3"}}>{C.mapCta} →</a>
          </div>
          <div className="contacto__social">
            <a className="social-strip__ic" aria-label="LinkedIn"><Icon.LinkedIn/></a>
            <a className="social-strip__ic" aria-label="Vimeo"><Icon.Vimeo/></a>
          </div>
          <div className="contacto__note">{C.addressNote}</div>
        </Reveal>
      </div>
    </section>
  );
};

/* -------------------- Newsletter -------------------- */

const PageNewsletter = ({ setRoute }) => {
  const { t } = useLang();
  const N = t.newsletter;
  const open = (id) => setRoute({route:"article", articleId:id});
  return (
    <>
      <section className="page-hero page-hero--parallax" style={{backgroundImage:`url(assets/bg_industrial_1.jpg)`}}>
        <div className="page-hero__ov"/>
        <div className="container page-hero__inner">
          <Reveal>
            <Eyebrow onDark style={{fontSize:28,letterSpacing:".08em",color:"#F5F5F3"}}>{N.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={120}><p className="body-lg" style={{color:"rgba(245,245,243,.85)",marginTop:24,maxWidth:680}}>{N.sub}</p></Reveal>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container newsletter">
          <Reveal className="section__head"><Eyebrow>{N.archiveEyebrow}</Eyebrow></Reveal>

          <ul className="newsletter__archive">
            {t.news.map((a, i) => (
              <Reveal key={i} delay={80 + i * 80}>
                <li className="newsletter__issue" onClick={() => open(a.id)} style={{cursor:"pointer"}}>
                  <a className="newsletter__issue-thumb">
                    <img src={a.img} alt="" loading="lazy" />
                  </a>
                  <div className="newsletter__issue-body">
                    <div className="newsletter__issue-meta">
                      <span className="newsletter__issue-n">{a.n}</span>
                      <span className="newsletter__issue-date">{a.date}</span>
                      <span className="newsletter__issue-tag">{a.tag}</span>
                      <span className="newsletter__issue-read">{a.read}</span>
                    </div>
                    <a className="newsletter__issue-title">{a.title} <span className="arr">→</span></a>
                    <p className="newsletter__issue-excerpt">{a.excerpt}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

/* -------------------- Article body renderer + Article page -------------------- */

/* Renders one block from an article body. Maps block.type → the brand
   typography token. Adding a new type (e.g. "list", "code") is just one case
   here plus a matching .article-block--* CSS rule. The future editor will
   produce this same shape. */
const ArticleBlock = ({ block, i }) => {
  switch (block.type) {
    case "lede":
      return <p className="article-block article-block--lede" key={i}>{block.text}</p>;
    case "p":
      return <p className="article-block article-block--p" key={i}>{block.text}</p>;
    case "h2":
      return <h2 className="article-block article-block--h2" key={i}>{block.text}</h2>;
    case "h3":
      return <h3 className="article-block article-block--h3" key={i}>{block.text}</h3>;
    case "image":
      return (
        <figure className="article-block article-block--image" key={i}>
          <img src={block.src} alt={block.caption || ""} loading="lazy" />
          {block.caption && <figcaption>{block.caption}</figcaption>}
        </figure>
      );
    case "quote":
      return <blockquote className="article-block article-block--quote" key={i}>{block.text}</blockquote>;
    default:
      return null;
  }
};

const PageArticle = ({ articleId, setRoute }) => {
  const { t } = useLang();
  const N = t.newsletter;
  const article = t.news.find(a => a.id === articleId);

  // Defensive — if someone lands here with no/bad id, send them back to the list.
  if (!article) return (
    <section className="section section--alt">
      <div className="container" style={{textAlign:"center",padding:"80px 0"}}>
        <Eyebrow>{N.eyebrow}</Eyebrow>
        <p className="body-lg" style={{marginTop:16}}>{N.notFound}</p>
        <a className="article__back" onClick={() => setRoute("newsletter")} style={{marginTop:24,display:"inline-block"}}>← {N.backToList}</a>
      </div>
    </section>
  );

  return (
    <article className="article">
      <div className="article__hero" style={{backgroundImage:`url(${article.img})`}}>
        <div className="article__hero-ov"/>
        <div className="container article__hero-inner">
          <a className="article__back" onClick={() => setRoute("newsletter")}>← {N.backToList}</a>
          <Reveal delay={120}>
            <div className="article__meta">
              <span className="article__meta-n">{article.n}</span>
              <span className="article__meta-date">{article.date}</span>
              <span className="article__meta-tag">{article.tag}</span>
              <span className="article__meta-read">{article.read}</span>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <h1 className="article__title">{article.title}</h1>
          </Reveal>
        </div>
      </div>

      <div className="container article__body">
        {article.body && article.body.map((block, i) => (
          <Reveal key={i} delay={Math.min(i * 40, 240)}>
            <ArticleBlock block={block} i={i} />
          </Reveal>
        ))}
      </div>
    </article>
  );
};

Object.assign(window, { PageHome, PageQuienes, PageProyectos, PageSector, PagePersonas, PageTalento, PageNewsletter, PageArticle, PageContacto });

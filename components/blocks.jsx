/* HeroCarousel — full-bleed video carousel.
 *
 * Each slide carries a `video` field (an .mp4 path, concatenation of several
 * source cuts). The carousel plays one slide's clip in full, then advances
 * via the `ended` event — no fixed setTimeout. Manual navigation (arrow / dot
 * click) sets the index and the new slide's video autoplays immediately;
 * `videoRef.load() + .play()` covers Safari/iOS which don't restart playback
 * on src swaps reliably.
 *
 * The dot progress ring on the active dot is driven by requestAnimationFrame:
 * a loop reads `video.currentTime / video.duration` every frame and mutates
 * the SVG circle's `stroke-dashoffset` directly via ref — no React re-renders
 * per frame, smooth at 60fps. When the active slide changes the ref points
 * at the new active dot's circle and the loop continues seamlessly.
 *
 * Backward-compatible: if a slide ever omits `video`, it falls back to the
 * `img` poster + a fixed 6s setTimeout for that slide only.
 */
const HeroCarousel = ({ setRoute }) => {
  const { t } = useLang();
  const slides = t.home.heroSlides;
  const [i, setI] = React.useState(0);
  /* Refs to ALL slide videos — keyed by slide index. We mount one <video>
     per slide and control play/pause through these refs (rather than only
     rendering the active video and swapping it back to an <img> on
     deactivation). Keeping every video mounted means the cross-fade between
     slides is video↔video — no more freeze-frame of the poster image while
     the old slide fades out. */
  const videoRefs = React.useRef([]);
  const ringRef   = React.useRef(null);
  const RING_R = 9;
  const RING_C = 2 * Math.PI * RING_R;   // ≈ 56.55

  // Slide-change orchestration:
  //   • Pause every inactive video — but DON'T rewind it. We want the
  //     outgoing slide to fade out on the frame it was just showing,
  //     not snap back to frame 0 mid-transition.
  //   • Reset + play the active video so it starts from the beginning.
  //   • Drive the active dot's ring via rAF reading currentTime/duration.
  React.useEffect(() => {
    videoRefs.current.forEach((vid, idx) => {
      if (!vid) return;
      if (idx === i) {
        vid.currentTime = 0;
        const p = vid.play();
        if (p && typeof p.catch === "function") p.catch(() => {});
      } else {
        vid.pause();
      }
    });
    if (ringRef.current) ringRef.current.style.strokeDashoffset = String(RING_C);
    let raf;
    const tick = () => {
      const v = videoRefs.current[i];
      const r = ringRef.current;
      if (v && r && v.duration > 0) {
        const pct = Math.min(1, Math.max(0, v.currentTime / v.duration));
        r.style.strokeDashoffset = String(RING_C * (1 - pct));
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [i, RING_C]);

  // Image-only fallback: if the active slide has no video, advance after 6s.
  // Live-only when the current slide actually lacks `video`, so video-driven
  // slides never run this timer in parallel with their own ended event.
  React.useEffect(() => {
    if (slides[i] && slides[i].video) return;
    const tm = setTimeout(() => setI(x => (x + 1) % slides.length), 6000);
    return () => clearTimeout(tm);
  }, [i, slides]);

  const advance = () => setI(x => (x + 1) % slides.length);
  const next = () => advance();
  const prev = () => setI(x => (x - 1 + slides.length) % slides.length);

  /* CTA target — if the active slide carries a `sectorId`, the "View projects"
     button drops into that sector landing page; otherwise falls back to
     /proyectos. */
  const goSlide = (slide) => {
    if (slide && slide.sectorId) setRoute({route: "sector", sectorId: slide.sectorId});
    else setRoute("proyectos");
  };

  return (
    <section className="hero">
      {slides.map((s, idx) => {
        const isActive = idx === i;
        return (
          <div key={idx} className={"hero__slide " + (isActive ? "is-active" : "")}>
            {/* Every video-bearing slide mounts its <video> permanently —
                inactive ones stay paused on frame 0 (which renders as the
                poster image). On a cross-fade the OUTGOING slide keeps
                showing its video (now paused) instead of swapping to a
                still <img>, so the transition is genuinely video↔video.
                Slides without a video field fall back to <img>. */}
            {s.video ? (
              <video ref={el => { videoRefs.current[idx] = el; }}
                     className="hero__video"
                     src={s.video}
                     muted playsInline preload="auto"
                     onEnded={isActive ? advance : undefined}
                     style={s.objectPosition ? {objectPosition: s.objectPosition} : null}
                     aria-hidden="true" />
            ) : (
              <img src={s.img} alt="" className="hero__img" style={s.objectPosition ? {objectPosition: s.objectPosition} : null} />
            )}
            <div className="hero__overlay" />
            <div className="hero__inner">
              <div className={"hero__content " + (isActive ? "is-shown" : "")}>
                <Eyebrow onDark>{s.eyebrow}</Eyebrow>
                {/* Headline supports `\n` for forced line breaks (per-slide
                    control over wrap point that text-wrap:balance can't give). */}
                <h1 className="hero__headline">
                  {s.headline.split("\n").map((line, li, arr) => (
                    <React.Fragment key={li}>
                      {line}
                      {li < arr.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </h1>
                <div className="hero__cta">
                  <ArrowCTA outline dark onClick={() => goSlide(s)}>{t.home.viewProjects}</ArrowCTA>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <button className="hero__arrow hero__arrow--l" onClick={prev} aria-label="Prev"><Icon.Chevron dir="left" s={22} c="#fff"/></button>
      <button className="hero__arrow hero__arrow--r" onClick={next} aria-label="Next"><Icon.Chevron s={22} c="#fff"/></button>
      {/* Dot strip — ref-driven progress ring. The ring SVG is rendered only
          for the active dot; the rAF loop above mutates its strokeDashoffset
          based on video.currentTime/duration each frame. Clicking another dot
          jumps + resets via the same effect. */}
      <div className="hero__dots">
        {slides.map((_, idx) => {
          const isActive = idx === i;
          return (
            <button key={idx}
                    type="button"
                    className={"hero__dot " + (isActive ? "is-on" : "")}
                    onClick={() => setI(idx)}
                    aria-label={"Slide " + (idx + 1)}>
              <span className="hero__dot-core" />
              {isActive && (
                <svg className="hero__dot-ring" width="28" height="28" viewBox="0 0 28 28" aria-hidden="true">
                  <circle ref={ringRef}
                          cx="14" cy="14" r={RING_R}
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
    </section>
  );
};

const ProjectCard = ({ p, onClick, setRoute }) => {
  const { t } = useLang();
  const label = p.tag || t.catLabels[p.cat] || p.cat || "";
  // Default action: open the project-detail view. An explicit onClick (or the
  // absence of setRoute) overrides this — keeps older call sites working.
  const handleClick = onClick || (setRoute
    ? () => setRoute({ route: "project", projectId: window.projSlug(p.name) })
    : undefined);
  return (
    <a className="pcard" onClick={handleClick}>
      <div className="pcard__imgwrap">
        <img className="pcard__img" src={p.img} alt={p.name} loading="lazy" />
      </div>
      <div className="pcard__ov">
        <div className="pcard__row">
          <div>
            <span className="pcard__cat">{label}</span>
            <div className="pcard__name">{p.name}</div>
            <div className="pcard__loc">{p.loc}</div>
          </div>
          <span className="pcard__arrow">→</span>
        </div>
      </div>
    </a>
  );
};

const ArticleCard = ({ a, onClick }) => {
  const { t } = useLang();
  return (
    <a className="acard" onClick={onClick} style={onClick ? {cursor:"pointer"} : null}>
      <div className="acard__ph"><img src={a.img} alt="" loading="lazy" /></div>
      <div className="acard__body">
        <span className="acard__tag">{a.tag}</span>
        <h3 className="acard__title">{a.title}</h3>
        <p className="acard__excerpt">{a.excerpt}</p>
        <span className="acard__cta">{t.home.readMore} →</span>
      </div>
    </a>
  );
};

const FilterTabs = ({ items, active, onChange }) => (
  <div className="ftabs">
    {items.map(c => (
      <button key={c.id} className={"ftab " + (active === c.id ? "is-active" : "")} onClick={() => onChange(c.id)}>
        {c.label}
      </button>
    ))}
  </div>
);

const TeamCard = ({ t }) => (
  <div className="tcard">
    <div className="tcard__photo">
      {t.photo
        ? <img src={t.photo} alt={t.name} loading="lazy" />
        : <span>{t.name.split(" ").map(w => w[0]).join("").slice(0,2)}</span>}
    </div>
    <div className="tcard__meta">
      <div className="tcard__name">{t.name}</div>
      <div className="tcard__role">{t.role}</div>
    </div>
  </div>
);

const Accordion = ({ items, applyLabel }) => {
  const [open, setOpen] = React.useState(0);
  return (
    <div className="acc">
      {items.map((it, i) => (
        <div key={i} className={"acc__item " + (open === i ? "is-open" : "")}>
          <button className="acc__head" onClick={() => setOpen(open === i ? -1 : i)}>
            <div className="acc__titlewrap">
              <span className="acc__title">{it.title}</span>
              <div className="acc__meta">
                <span className="acc__pill">{it.loc}</span>
                <span className="acc__dept">{it.dept}</span>
              </div>
            </div>
            <span className="acc__icon">{open === i ? "–" : "+"}</span>
          </button>
          <div className="acc__body" style={{maxHeight: open === i ? 360 : 0}}>
            <div className="acc__body-inner">
              <p>{it.desc}</p>
              <a className="acc__link">{applyLabel} →</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

/* ClientStrip — continuous left→right marquee of client logos.
   Each logo renders as an <img> when `logo` path is present in the data,
   else as a text placeholder using the client name. Both render through
   the same desaturated-by-default / colour-on-hover treatment, so the
   strip works the moment real logo files arrive (no component change). */
const ClientStrip = ({ eyebrowKey }) => {
  const { t } = useLang();
  const eyebrow = (t.home && t.home[eyebrowKey || "clientsEyebrow"]) || "";
  const clients = t.clients || [];
  if (clients.length === 0) return null;
  // Duplicate the list so the loop is seamless: when the first copy
  // scrolls fully off-screen, the second copy is already mid-track.
  const loop = [...clients, ...clients];
  return (
    <section className="client-strip">
      {eyebrow && (
        <div className="container client-strip__head">
          <Eyebrow muted>{eyebrow}</Eyebrow>
        </div>
      )}
      <div className="client-strip__viewport">
        <div className="client-strip__track">
          {loop.map((c, i) => {
            // Per-logo overrides:
            //  `scale`   — published as the `--logo-scale` CSS custom property
            //              on the slot. The CSS rule for the slot AND the img
            //              both reference this variable in `calc(... * var())`,
            //              so the box and the image grow together with no
            //              specificity battles.
            //  `noBlend` — disable mix-blend-mode (multiply). Needed for logos
            //              with WHITE marks on a coloured shape (e.g. El Corte
            //              Inglés' white text on a green pennant) — multiply
            //              would erase the white lettering.
            const slotStyle = c.scale ? { "--logo-scale": c.scale } : null;
            const imgStyle  = c.noBlend ? { mixBlendMode: "normal" } : null;
            return (
              <div key={i} className="client-strip__item" title={c.name} style={slotStyle}>
                {c.logo
                  ? <img src={c.logo} alt={c.name} loading="lazy" style={imgStyle} />
                  : <span className="client-strip__placeholder">{c.name}</span>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { HeroCarousel, ProjectCard, ArticleCard, FilterTabs, TeamCard, Accordion, ClientStrip });

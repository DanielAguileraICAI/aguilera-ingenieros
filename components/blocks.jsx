const HeroCarousel = ({ setRoute }) => {
  const { t } = useLang();
  const slides = t.home.heroSlides;
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    const tm = setInterval(() => setI(x => (x + 1) % slides.length), 6000);
    return () => clearInterval(tm);
  }, [slides.length]);
  return (
    <section className="hero">
      {slides.map((s, idx) => (
        <div key={idx} className={"hero__slide " + (idx === i ? "is-active" : "")}>
          <img src={s.img} alt="" className="hero__img" style={s.objectPosition ? {objectPosition: s.objectPosition} : null} />
          <div className="hero__overlay" />
          <div className="hero__inner">
            <div className={"hero__content " + (idx === i ? "is-shown" : "")}>
              <Eyebrow onDark>{s.eyebrow}</Eyebrow>
              <h1 className="hero__headline">{s.headline}</h1>
              <p className="hero__sub">{s.sub}</p>
              <div className="hero__cta">
                <ArrowCTA outline dark onClick={() => setRoute("proyectos")}>{t.home.viewProjects}</ArrowCTA>
              </div>
            </div>
          </div>
        </div>
      ))}
      <button className="hero__arrow hero__arrow--l" onClick={() => setI((i - 1 + slides.length) % slides.length)} aria-label="Prev"><Icon.Chevron dir="left" s={22} c="#fff"/></button>
      <button className="hero__arrow hero__arrow--r" onClick={() => setI((i + 1) % slides.length)} aria-label="Next"><Icon.Chevron s={22} c="#fff"/></button>
      <div className="hero__dots">
        {slides.map((_, idx) => (
          <button key={idx} className={"hero__dot " + (idx === i ? "on" : "")} onClick={() => setI(idx)} aria-label={"Slide " + (idx+1)} />
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({ p, onClick }) => {
  const { t } = useLang();
  const label = p.tag || t.catLabels[p.cat] || p.cat || "";
  return (
    <a className="pcard" onClick={onClick}>
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
      <a className="tcard__li" aria-label="LinkedIn"><Icon.LinkedIn s={14} /></a>
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

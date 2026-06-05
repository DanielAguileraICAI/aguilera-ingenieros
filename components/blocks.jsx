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
          <img src={s.img} alt="" className="hero__img" />
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
    <div className="tcard__photo"><span>{t.name.split(" ").map(w => w[0]).join("").slice(0,2)}</span></div>
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

const ContactForm = () => {
  const { t } = useLang();
  const L = t.contacto.labels;
  const [sent, setSent] = React.useState(false);
  const [err, setErr] = React.useState({});
  const submit = (e) => {
    e.preventDefault();
    const f = e.target;
    const errs = {};
    if (!f.name.value.trim()) errs.name = true;
    if (!/^\S+@\S+\.\S+$/.test(f.email.value)) errs.email = true;
    if (!f.message.value.trim()) errs.message = true;
    setErr(errs);
    if (!Object.keys(errs).length) setSent(true);
  };
  if (sent) return (
    <div className="form__success">
      <div className="eyebrow">{t.contacto.successEyebrow}</div>
      <h3 className="h3" style={{marginTop:8}}>{t.contacto.successMsg}</h3>
    </div>
  );
  return (
    <form className="form" onSubmit={submit}>
      <div className="form__row">
        <label className="form__field"><span>{L.name} *</span><input name="name" className={err.name ? "err" : ""} /></label>
        <label className="form__field"><span>{L.company}</span><input name="company" /></label>
      </div>
      <div className="form__row">
        <label className="form__field"><span>{L.email} *</span><input name="email" type="email" className={err.email ? "err" : ""} /></label>
        <label className="form__field"><span>{L.phone}</span><input name="phone" /></label>
      </div>
      <label className="form__field"><span>{L.subject}</span>
        <select name="subject">{t.contacto.subjects.map(s => <option key={s}>{s}</option>)}</select>
      </label>
      <label className="form__field"><span>{L.message} *</span><textarea name="message" rows="5" className={err.message ? "err" : ""} /></label>
      <button type="submit" className="btn btn-primary">{L.send} <span className="arr">→</span></button>
    </form>
  );
};

Object.assign(window, { HeroCarousel, ProjectCard, ArticleCard, FilterTabs, TeamCard, Accordion, ContactForm });

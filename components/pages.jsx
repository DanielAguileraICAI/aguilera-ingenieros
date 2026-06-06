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
            <div className="rule memo__rule" />
            <Reveal><p className="memo__foot">{H.memo.foot}</p></Reveal>
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

const PageProyectos = () => {
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
      <section className="section section--light">
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
      <section className="page-hero page-hero--parallax" style={{backgroundImage:`url(assets/bg_industrial_13.jpg)`}}>
        <div className="page-hero__ov"/>
        <div className="container page-hero__inner">
          <Reveal><Eyebrow onDark>{T.eyebrow}</Eyebrow></Reveal>
          <Reveal delay={100}><h1 className="display" style={{color:"#F5F5F3",maxWidth:900}}>{T.title}</h1></Reveal>
          <Reveal delay={200}><p className="body-lg" style={{color:"rgba(245,245,243,.8)",marginTop:16,maxWidth:680}}>{T.sub}</p></Reveal>
        </div>
      </section>
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
      <section className="section section--alt">
        <div className="container">
          <Reveal className="section__head"><Eyebrow>{T.positionsEyebrow}</Eyebrow></Reveal>
          <Accordion items={t.positions} applyLabel={T.applyCta} />
        </div>
      </section>
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

Object.assign(window, { PageHome, PageQuienes, PageProyectos, PagePersonas, PageTalento, PageNewsletter, PageArticle, PageContacto });

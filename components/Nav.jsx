/* Nav — top header with editorial dropdown on the Proyectos entry.
 *
 * The Proyectos item works as a normal click (jumps to the all-portfolio
 * page) AND opens a small panel on hover/focus listing the 6 sectors. Each
 * sector entry routes to its sector landing page via
 *   setRoute({route: "sector", sectorId})
 *
 * Mobile (≤900px) collapses the row nav into the fullscreen overlay. There,
 * the Proyectos entry is followed inline by an indented list of the same
 * sectors — no hover affordance, so we surface them statically.
 */
const Nav = ({ route, realRoute, sectorId, setRoute }) => {
  const { t } = useLang();
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  /* Which top-level nav item currently has its dropdown open. We track it on
     hover (mouseenter/leave) plus focus (keyboard tab) so the panel can also
     be reached without a pointer. Only "proyectos" has a dropdown today, but
     the shape generalises if more get added later. */
  const [openMenu, setOpenMenu] = React.useState(null);
  /* When the route changes (user picks a sector / page) the open dropdown
     should close; otherwise it lingers from the previous page state. */
  React.useEffect(() => { setOpenMenu(null); }, [route]);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => { setRoute(id); setOpen(false); setOpenMenu(null); window.scrollTo({top:0,behavior:"smooth"}); };
  const goSector = (sectorId) => {
    setRoute({route: "sector", sectorId});
    setOpen(false);
    setOpenMenu(null);
    window.scrollTo({top:0, behavior:"smooth"});
  };

  const sectors = t.sectors || [];

  const navItem = (n) => {
    // The Proyectos entry gets a hover-revealed dropdown panel listing the
    // 6 sectors. Everything else is a flat link.
    const hasDropdown = n.id === "proyectos" && sectors.length > 0;
    if (!hasDropdown) {
      return (
        <li key={n.id}>
          <a className={"ai-nav__link " + (route === n.id ? "is-active" : "")} onClick={() => go(n.id)}>
            {n.label}
          </a>
        </li>
      );
    }
    const isOpen = openMenu === n.id;
    // Treat /sector routes as still under "Proyectos" so the underline stays lit
    // while a sector landing page is open — same convention as articles → newsletter.
    const isActive = (route === n.id) || (route === "sector");
    return (
      <li key={n.id}
          className={"ai-nav__has-menu " + (isOpen ? "is-open" : "")}
          onMouseEnter={() => setOpenMenu(n.id)}
          onMouseLeave={() => setOpenMenu(null)}>
        <a className={"ai-nav__link " + (isActive ? "is-active" : "")}
           onClick={() => go(n.id)}
           onFocus={() => setOpenMenu(n.id)}>
          {n.label}
        </a>
        <div className="ai-nav__menu" role="menu" onMouseEnter={() => setOpenMenu(n.id)}>
          <div className="ai-nav__menu-inner">
            <a className="ai-nav__menu-all" onClick={() => go(n.id)}>
              {t.proyectos.navAll}
              <span className="ai-nav__menu-arrow">→</span>
            </a>
            <ul className="ai-nav__menu-list">
              {sectors.map(s => (
                <li key={s.id}>
                  <a onClick={() => goSector(s.id)}>
                    <span className="ai-nav__menu-label">{s.label}</span>
                    <span className="ai-nav__menu-arrow">→</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </li>
    );
  };

  return (
    <>
      {/* Transparent-at-top decision:
            - home / proyectos / personas / newsletter / contacto qualify —
              all open with a full-bleed dark hero (image, video stage, or
              dark section) that gives the nav the contrast it needs.
            - sector landings qualify ONLY when the active sector has
              heroVariant === "stage" (Data Centers, Singular Buildings).
              Sectors with framed split heros (Farma / Hos / Fab / Sos)
              keep the nav solid since their hero panel doesn't reach the
              top edge of the viewport.
            - everything else (about, careers, article) stays solid. */}
      <nav className={
        "ai-nav " +
        (() => {
          if (scrolled) return "ai-nav--solid";
          const TRANSPARENT_AT_TOP = ["home", "proyectos", "personas", "talento", "newsletter", "contacto"];
          if (TRANSPARENT_AT_TOP.includes(realRoute)) return "";
          if (realRoute === "sector" && sectorId) {
            const active = (t.sectors || []).find(s => s.id === sectorId);
            if (active && (active.heroVariant === "stage" || active.heroVariant === "deck")) return "";
          }
          return "ai-nav--solid";
        })()
      }>
        <div className="ai-nav__inner">
          <a className="ai-nav__logo" onClick={() => go("home")}>
            <Logo dark={true} size={34} />
          </a>
          <ul className="ai-nav__links" onMouseLeave={() => setOpenMenu(null)}>
            {t.nav.map(navItem)}
          </ul>
          <div className="ai-nav__right">
            <LangToggle onDark />
            <button className="ai-nav__burger" onClick={() => setOpen(true)} aria-label="Menu">
              <Icon.Menu s={22} c="#F5F5F3" />
            </button>
          </div>
        </div>
      </nav>
      {open && (
        <div className="ai-nav__overlay">
          <div className="ai-nav__overlay-top">
            <Logo dark size={34} />
            <button className="ai-nav__close" onClick={() => setOpen(false)} aria-label="Close">
              <Icon.Close s={26} c="#F5F5F3" />
            </button>
          </div>
          <ul className="ai-nav__overlay-links">
            {t.nav.map(n => (
              <React.Fragment key={n.id}>
                <li><a onClick={() => go(n.id)}>{n.label}</a></li>
                {/* Surface the sector list under Proyectos in the overlay too —
                    no hover on touch, so the sub-entries have to be inline. */}
                {n.id === "proyectos" && sectors.length > 0 && (
                  <li className="ai-nav__overlay-sub">
                    <ul>
                      {sectors.map(s => (
                        <li key={s.id}><a onClick={() => goSector(s.id)}>{s.label}</a></li>
                      ))}
                    </ul>
                  </li>
                )}
              </React.Fragment>
            ))}
          </ul>
          <div style={{marginTop:"auto",padding:"32px 0"}}>
            <LangToggle onDark />
          </div>
        </div>
      )}
    </>
  );
};

window.Nav = Nav;

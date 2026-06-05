const Nav = ({ route, setRoute }) => {
  const { t } = useLang();
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const go = (id) => { setRoute(id); setOpen(false); window.scrollTo({top:0,behavior:"smooth"}); };
  return (
    <>
      <nav className={"ai-nav " + (scrolled || route !== "home" ? "ai-nav--solid" : "")}>
        <div className="ai-nav__inner">
          <a className="ai-nav__logo" onClick={() => go("home")}>
            <Logo dark={true} size={55} />
          </a>
          <ul className="ai-nav__links">
            {t.nav.map(n => (
              <li key={n.id}>
                <a className={"ai-nav__link " + (route === n.id ? "is-active" : "")} onClick={() => go(n.id)}>
                  {n.label}
                </a>
              </li>
            ))}
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
            <Logo dark size={55} />
            <button className="ai-nav__close" onClick={() => setOpen(false)} aria-label="Close">
              <Icon.Close s={26} c="#F5F5F3" />
            </button>
          </div>
          <ul className="ai-nav__overlay-links">
            {t.nav.map(n => (
              <li key={n.id}><a onClick={() => go(n.id)}>{n.label}</a></li>
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

const Footer = ({ setRoute }) => {
  const { t, lang } = useLang();
  const followLabel = lang === "es" ? "Síguenos" : "Follow us";
  return (
    <footer className="ai-footer">
      <div className="ai-footer__inner">
        <div className="ai-footer__col ai-footer__col--brand">
          <Logo dark size={28} />
          <div className="ai-footer__meta">{t.footer.meta}</div>
          <div className="ai-footer__social">
            <span className="ai-footer__follow">{followLabel}</span>
            <div className="ai-footer__icons">
              <a className="ai-footer__ic" aria-label="LinkedIn"><Icon.LinkedIn /></a>
              <a className="ai-footer__ic" aria-label="Vimeo"><Icon.Vimeo /></a>
            </div>
          </div>
        </div>
        <div className="ai-footer__col">
          <div className="ai-footer__head">{t.footer.headNav}</div>
          {t.nav.map(n => (
            <a key={n.id} onClick={() => { setRoute(n.id); window.scrollTo({top:0, behavior:"smooth"}); }}>{n.label}</a>
          ))}
        </div>
        <div className="ai-footer__col">
          <div className="ai-footer__head">{t.footer.headSectors}</div>
          {t.footer.sectors.map((s,i) => <a key={i}>{s}</a>)}
        </div>
        <div className="ai-footer__col">
          <div className="ai-footer__head">{t.footer.headContact}</div>
          <div className="ai-footer__addr">
            Calle de Guzmán el Bueno, 133<br/>
            Edificio Skandia — Pral. C<br/>
            Madrid 28003
          </div>
          <div className="ai-footer__tel">Tel. +34 915 33 67 04</div>
          <a href="mailto:sec@aguilera-ingenieros.com">sec@aguilera-ingenieros.com</a>
        </div>
      </div>
      <div className="ai-footer__bottom">
        <span>{t.footer.legalLeft}</span>
        <span>{t.footer.legalRight}</span>
      </div>
    </footer>
  );
};

const SocialStrip = () => null;

const CookieBar = () => {
  const { t } = useLang();
  const [open, setOpen] = React.useState(true);
  if (!open) return null;
  return (
    <div className="cookie">
      <span>{t.cookie.msg}<a>{t.cookie.link}</a>.</span>
      <button onClick={() => setOpen(false)}>{t.cookie.accept}</button>
    </div>
  );
};

Object.assign(window, { Footer, SocialStrip, CookieBar });

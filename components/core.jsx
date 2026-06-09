/* Core React components — factored small, exposed on window */

const BrandMark = ({ size = 32 }) => (
  <img
    src="assets/logo_isotype.png"
    alt="Aguilera Ingenieros"
    style={{ display: "block", height: size, width: "auto", maxWidth: "none", flex: "none" }}
  />
);

const Logo = ({ dark = true, size = 30 }) => {
  const src = dark
    ? "assets/logo_main_dark.png"
    : "assets/logo_main_light.png";
  // Native PNG is 1055×467 — aspect ratio LOCKED via aspect-ratio CSS prop +
  // explicit width derived from height. Belt-and-braces against any global
  // img rule that would otherwise stretch one axis.
  const h = size * 1.6;
  const w = Math.round(h * (1055 / 467));
  return (
    <img
      src={src}
      alt="Aguilera Ingenieros"
      width={w}
      height={Math.round(h)}
      style={{
        display: "block",
        height: h + "px",
        width: w + "px",
        maxWidth: "none",
        flex: "none",
        aspectRatio: "1055 / 467",
        objectFit: "contain",
      }}
    />
  );
};

const Eyebrow = ({ children, onDark, muted, style }) => (
  <span className={"eyebrow" + (onDark ? " eyebrow--on-dark" : "") + (muted ? " eyebrow--muted" : "")} style={style}>
    {children}
  </span>
);

const ArrowCTA = ({ children, dark, outline, primary, onClick, href }) => {
  const Tag = href ? "a" : "button";
  let cls = "btn ";
  if (primary) cls += "btn-primary";
  else if (outline) cls += dark ? "btn-outline-white" : "btn-outline-dark";
  else cls += "btn-ghost";
  return (
    <Tag className={cls} onClick={onClick} href={href}>
      <span className={outline || primary ? "" : "u"}>{children}</span>
      <span className="arr">→</span>
    </Tag>
  );
};

const LangToggle = ({ onDark = true }) => {
  const { lang, setLang } = useLang();
  return (
    <div className={"lang-toggle" + (onDark ? " lang-toggle--dark" : "")}>
      {["es", "en"].map(l => (
        <span key={l} className={l === lang ? "on" : ""} onClick={() => setLang(l)}>{l.toUpperCase()}</span>
      ))}
    </div>
  );
};

// Animated stat — counts up on reveal
const Stat = ({ num, desc }) => {
  const { ref, display } = useCountUp(num, { duration: 1400 });
  return (
    <div className="stat-row" ref={ref}>
      <div className="stat-num">{display}</div>
      <div className="stat-desc">{desc}</div>
    </div>
  );
};

const SectionLabel = ({ children }) => (
  <div className="section-label">{children}</div>
);

const Icon = {
  Menu:   ({ s=20, c="currentColor" }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6"><path d="M3 6h18M3 12h18M3 18h18"/></svg>,
  Close:  ({ s=20, c="currentColor" }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6"><path d="M6 6l12 12M18 6l-12 12"/></svg>,
  Arrow:  ({ s=18, c="currentColor" }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>,
  Chevron:({ s=18, c="currentColor", dir="right" }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" style={{transform:dir==="left"?"rotate(180deg)":""}}><path d="M9 6l6 6-6 6"/></svg>,
  Plus:   ({ s=20, c="currentColor" }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5"><path d="M12 5v14M5 12h14"/></svg>,
  LinkedIn: ({ s=16, c="currentColor" }) => <svg width={s} height={s} viewBox="0 0 24 24" fill={c}><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0zm7.5 0h4.78v2.2h.07c.67-1.2 2.3-2.47 4.74-2.47 5.07 0 6 3.34 6 7.68V24h-5v-7.1c0-1.7-.03-3.88-2.37-3.88-2.37 0-2.73 1.85-2.73 3.75V24h-5z"/></svg>,
  Vimeo:    ({ s=16, c="currentColor" }) => <svg width={s} height={s} viewBox="0 0 24 24" fill={c}><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z"/></svg>,
  MapPin:   ({ s=16, c="currentColor" }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5"><path d="M12 22s8-8 8-13a8 8 0 10-16 0c0 5 8 13 8 13z"/><circle cx="12" cy="9" r="3"/></svg>,
};

/* Stable, URL-safe id for a project, derived from its name. Used by
   ProjectCard (to navigate) and PageProject (to look one up) so both sides
   agree without having to hand-author an id on every AI_PROJECTS entry. */
const projSlug = (name) => String(name || "")
  .toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "")
  .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

/* Resolve a project by slug across the enriched AI_PROJECTS list first, then
   the home `featured` list as a fallback. Returns the entry (with whatever
   detail fields it carries) or null. */
const findProject = (projectId, featured) => {
  const all = (window.AI_PROJECTS || []).concat(featured || []);
  return all.find(p => projSlug(p.name) === projectId) || null;
};

Object.assign(window, { BrandMark, Logo, Eyebrow, ArrowCTA, LangToggle, Stat, SectionLabel, Icon, projSlug, findProject });

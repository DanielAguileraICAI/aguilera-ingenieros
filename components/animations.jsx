/* animations.jsx — small motion helpers used across the site.
 *
 * useReveal(opts?): returns a ref + className you spread on an element.
 *   When it enters the viewport, the .is-revealed class is added,
 *   triggering CSS transitions defined in site.css (.reveal{} / .reveal.is-revealed{}).
 *
 * useCountUp(target, durationMs, formatter): animates a number on mount-reveal.
 *
 * StaggerChildren: wraps a list; each direct child reveals with a stepped delay. */

const useReveal = ({ threshold = 0.15, once = true, delay = 0 } = {}) => {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el || shown) return;
    if (!("IntersectionObserver" in window)) { setShown(true); return; }
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        if (delay) setTimeout(() => setShown(true), delay);
        else setShown(true);
        if (once) io.disconnect();
      }
    }, { threshold });
    io.observe(el);
    return () => io.disconnect();
  }, [shown, threshold, once, delay]);
  return { ref, revealed: shown, className: "reveal" + (shown ? " is-revealed" : "") };
};

// Parse "+60", "+1,000", "1989" → returns numeric part and prefix/suffix for re-render.
const parseStat = (s) => {
  const m = String(s).match(/^([^\d]*)([\d.,]+)(.*)$/);
  if (!m) return { prefix: "", n: 0, suffix: s };
  const cleaned = m[2].replace(/[.,]/g, "");
  return { prefix: m[1], n: parseInt(cleaned, 10) || 0, suffix: m[3], raw: m[2] };
};

const formatStat = (n, raw) => {
  // Preserve original separators by reflecting digit count
  const s = String(n);
  if (raw.includes(".")) return s.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  if (raw.includes(",")) return s.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return s;
};

const useCountUp = (target, { duration = 1200, ease = (t) => 1 - Math.pow(1 - t, 3) } = {}) => {
  const { prefix, n, suffix, raw } = React.useMemo(() => parseStat(target), [target]);
  const { ref, revealed } = useReveal();
  const [value, setValue] = React.useState(0);
  React.useEffect(() => {
    if (!revealed) return;
    let start;
    let raf;
    const tick = (ts) => {
      if (!start) start = ts;
      const elapsed = ts - start;
      const t = Math.min(1, elapsed / duration);
      setValue(Math.round(ease(t) * n));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [revealed, n, duration]);
  return { ref, display: prefix + formatStat(value, raw || "") + suffix };
};

// StaggerChildren — clones each child with an inline transition delay.
const StaggerChildren = ({ children, step = 90, start = 0, as: As = "div", className = "", ...rest }) => {
  const arr = React.Children.toArray(children);
  return (
    <As className={className} {...rest}>
      {arr.map((child, i) => {
        const delay = start + i * step;
        // Wrap each in a Reveal that applies CSS delay
        return <RevealInline key={i} delay={delay}>{child}</RevealInline>;
      })}
    </As>
  );
};

const RevealInline = ({ children, delay = 0, threshold }) => {
  const { ref, className } = useReveal({ threshold });
  // If the child is a single element, clone and add ref + className; else wrap.
  return (
    <div ref={ref} className={className} style={{ transitionDelay: delay + "ms" }}>
      {children}
    </div>
  );
};

const Reveal = ({ children, delay = 0, threshold, as: As = "div", className = "" }) => {
  const { ref, className: cls } = useReveal({ threshold });
  return (
    <As ref={ref} className={(className ? className + " " : "") + cls} style={{ transitionDelay: delay + "ms" }}>
      {children}
    </As>
  );
};

Object.assign(window, { useReveal, useCountUp, StaggerChildren, RevealInline, Reveal });

/* VerticalsHero — Isometric 3D building floors, with the engineering-drawing
 * chrome we built before (axis, callouts, title block, grid paper).
 *
 * Stack order (top→bottom):
 *   01 DATA   — server racks visible on top, refrigeration unit overhead
 *   02 FARMA  — sealed envelope with AHU on top, HEPA layout on top face
 *   03 EDIF   — taller podium block: mullions, floor plates, entry, mast
 *
 * Interaction: clicking a list item OR a 3D block selects it. The selected
 * block lifts ~16px, brightens to full opacity with white-blue edges, and
 * its annotation callouts fade in. The others dim to ~30% opacity. */

/* -------------------- Geometry helpers -------------------- */

// Isometric depth — controls perspective. Lower = flatter / more elevation-like.
const ISO_DX = 36;   // horizontal shift of back faces
const ISO_DY = 18;   // vertical shift of back faces (negative = up)

const isoTop = (W, H) => {
  // Top face polygon — back of slab is up and to the right
  const dx = ISO_DX, dy = -ISO_DY;
  return `0,0 ${W},0 ${W + dx},${dy} ${dx},${dy}`;
};
const isoSide = (W, H) => {
  // Right side face — front-right edge to back-right edge, down to bottom
  const dx = ISO_DX, dy = -ISO_DY;
  return `${W},0 ${W + dx},${dy} ${W + dx},${H + dy} ${W},${H}`;
};

/* -------------------- Floor renderers -------------------- */
/* Each renders a single 3D slab at origin (0,0) of its own <g transform>.
   Width is uniform per floor; height varies by typology character. */

const FLOOR_W = 480;   /* scaled up from 320 — bigger blocks to match the
                          tall menu rows on the left side */

/* Each floor renders its line-art image SELF-CONTAINED inside its slab.
   imgW spans the slab width; imgH derives from aspect; slab H = imgH + label.
   The previous design had the image at 1.5×FLOOR_W, which overhung the slab
   by ~200px and overlapped the neighbours once the per-block scale piled on. */

const FloorDC = ({ active }) => {
  // dc_isometric.png — 1248×832 ≈ 1.5:1
  const W = FLOOR_W;
  const imgW = W;
  const imgH = imgW / 1.5;
  const H = imgH + 18;                // small strip below for the kicker label
  return (
    <g className="vt-3d">
      <image
        href="assets/dc_isometric.png"
        x={0} y={0}
        width={imgW} height={imgH}
        preserveAspectRatio="xMidYMid meet"
        className="vt-iso-drawing"
      />
      <line x1="-8" y1={H} x2={W + ISO_DX + 8} y2={H} className="vt-floor-base" />
      <text x={W / 2} y={H - 4} className="vt-equip-sm" textAnchor="middle" style={{letterSpacing:".14em"}}>
        DATA CENTER · TIER IV · MADRID
      </text>
    </g>
  );
};

const FloorFarma = ({ active }) => {
  // farma_isometric.png — 1.5:1. Rendered 1.25× larger than DC so the lab
  // interior reads at parity, with the extra height absorbed upward — the
  // image's bottom edge stays just above the ground line.
  const W = FLOOR_W;
  const imgW = W * 1.25;
  const imgH = imgW / 1.5;
  const H = (W / 1.5) + 18;          // slab height matches DC so layout is uniform
  // Bottom of the image sits 4px above the ground line; the rest of the
  // 1.25× growth (54px tall) is absorbed upward, into the gap above the slab.
  const yOffset = (H - 4) - imgH;
  return (
    <g className="vt-3d">
      <image
        href="assets/farma_isometric.png"
        x={(W - imgW) / 2} y={yOffset}
        width={imgW} height={imgH}
        preserveAspectRatio="xMidYMid meet"
        className="vt-iso-drawing"
      />
      <line x1="-8" y1={H} x2={W + ISO_DX + 8} y2={H} className="vt-floor-base" />
      <text x={W / 2} y={H - 4} className="vt-equip-sm" textAnchor="middle" style={{letterSpacing:".14em"}}>
        LABORATORIO P3 · GMP · CLEANROOM
      </text>
    </g>
  );
};

const FloorEdif = ({ active }) => {
  // auditorio_tenerife.png — ≈1.19:1
  const W = FLOOR_W;
  const imgW = Math.round(W * 0.92);
  const imgH = Math.round(imgW / 1.19);
  const H = imgH + 18;
  return (
    <g className="vt-3d">
      <image
        href="assets/auditorio_tenerife.png"
        x={(W - imgW) / 2} y={0}
        width={imgW} height={imgH}
        preserveAspectRatio="xMidYMid meet"
        className="vt-ten-drawing"
      />
      <line x1="-8" y1={H} x2={W + ISO_DX + 8} y2={H} className="vt-floor-base" />
      <text x={W / 2} y={H - 4} className="vt-equip-sm" textAnchor="middle" style={{letterSpacing:".14em"}}>
        AUDITORIO DE TENERIFE · S. CALATRAVA · 2003
      </text>
    </g>
  );
};

// Slab heights — kept in sync with the FloorXxx renderers above.
const DC_H    = Math.round(FLOOR_W / 1.5) + 18;            // = 231
const FARMA_H = DC_H;
const EDIF_H  = Math.round(Math.round(FLOOR_W * 0.92) / 1.19) + 18;

/* -------------------- Block (wraps a floor renderer w/ chrome) -------------------- */

const Block = ({ id, y, isActive, label, codeShort, codeNum, onSelect, children }) => {
  // When active: lift up by 16px. When another is active: dim heavily.
  const dy = isActive ? -16 : 0;
  return (
    <g
      className={"vt-block " + (isActive ? "is-active" : "")}
      transform={`translate(80, ${y + dy})`}
      onClick={() => onSelect(id)}
      style={{cursor:"pointer"}}
      data-id={id}
    >
      {children}
      {/* Block identifier on the left edge */}
      <g className="vt-block-id" transform="translate(-44, 0)">
        <line x1="0" y1="-4" x2="36" y2="-4" className="vt-block-id-line" />
        <text x="32" y="-8" className="vt-block-id-num" textAnchor="end">{codeNum}</text>
        <text x="32" y="-20" className="vt-block-id-lbl" textAnchor="end">{codeShort}</text>
      </g>
    </g>
  );
};

/* -------------------- Callouts (live annotation overlay) -------------------- */

const Callout = ({ x, y, anchorX, anchorY, label, delay = 0 }) => (
  <g className="vt-callout" style={{animationDelay: delay + "ms"}}>
    <circle cx={anchorX} cy={anchorY} r="2.5" className="vt-callout-dot" />
    <polyline
      points={`${anchorX},${anchorY} ${x - 8},${anchorY} ${x},${y}`}
      className="vt-callout-leader"
      fill="none"
    />
    <line x1={x} y1={y} x2={x + 128} y2={y} className="vt-callout-base" />
    <text x={x + 4} y={y - 5} className="vt-callout-text">{label}</text>
  </g>
);

/* -------------------- Title block (engineering corner) -------------------- */

/* The .vt-title CSS animation animates `transform: translateX(...)`, which in
   modern browsers overrides any SVG `transform` attribute applied to the same
   element — that's why the title block was rendering at (0,0). Wrap the
   .vt-title group inside an outer positioning <g> so the SVG transform lives
   on the outer group (unaffected by CSS) and the animation lives on the
   inner one. */
/* The outer wrapper uses CSS `transform` (not the SVG transform attribute) so
   it can transition smoothly when the title block follows the active drawing.
   SVG attribute transforms don't animate via CSS; CSS transforms on SVG
   elements do, in modern browsers. The inner .vt-title keeps its own fade-in
   animation independent of the position. */
const TitleBlock = ({ activeLabel, dwg, scale, loc, x, y }) => (
  <g
    className="vt-title-wrap"
    style={{transform: `translate(${x}px, ${y}px)`}}
  >
    <g className="vt-title">
      <rect x="0" y="0" width="260" height="100" className="vt-title-box" />
      <line x1="0" y1="34" x2="260" y2="34" />
      <line x1="0" y1="60" x2="260" y2="60" />
      <line x1="150" y1="34" x2="150" y2="100" />
      {/* Brand mark (isotype) — sits in the header band on the left;
          wordmark text moved right to make room. */}
      <image
        href="assets/logo_isotype.png"
        x="8" y="8" width="34" height="18"
        preserveAspectRatio="xMidYMid meet"
      />
      <text x="48" y="22" className="vt-title-h">AGUILERA INGENIEROS</text>
      <text x="10" y="50" className="vt-title-k">DWG</text>
      <text x="40" y="50" className="vt-title-v">{dwg}</text>
      <text x="160" y="50" className="vt-title-k">SCALE</text>
      <text x="200" y="50" className="vt-title-v">{scale}</text>
      <text x="10" y="76" className="vt-title-k">SECTION</text>
      <text x="10" y="92" className="vt-title-v" style={{fontSize:9}}>{activeLabel}</text>
      <text x="160" y="76" className="vt-title-k">REV</text>
      <text x="200" y="76" className="vt-title-v">02</text>
      <text x="164" y="92" className="vt-title-k" style={{letterSpacing:".08em"}}>{loc}</text>
    </g>
  </g>
);

const DimensionAxis = ({ marks }) => (
  <g className="vt-axis" transform="translate(80, 0)">
    <line x1="0" y1={marks[0].y - 6} x2="0" y2={marks[marks.length-1].y + 6} />
    {marks.map((m, i) => (
      <g key={i} transform={`translate(0, ${m.y})`}>
        <line x1="-5" y1="0" x2="5" y2="0" />
        <text x="-10" y="3" className="vt-axis-l">{m.l}</text>
      </g>
    ))}
  </g>
);

/* -------------------- The drawing itself -------------------- */

const ElevationDrawing = ({ activeId, verticals, onSelect }) => {
  // Floor heights come from the renderers above (DC_H / FARMA_H / EDIF_H).
  // Gaps between slabs — modest at rest, wider when a slab is active so the
  // "exploded technical drawing" effect reads cleanly. With the images now
  // contained inside their slabs, gaps no longer have to absorb image overhang.
  const GAP        = 24;
  const GAP_OPEN   = 56;

  const gap = (a, b) =>
    (activeId === a || activeId === b) ? GAP_OPEN : GAP;
  // TOP gives clearance for the "01 / DATA" block-id label that sits above
  // the first slab (label text extends ~20 px above yDC, so TOP needs ≥ ~24).
  const TOP = 50;
  const yDC    = TOP;
  const yFarma = yDC + DC_H    + gap("cpd",   "farma");
  const yEdif  = yFarma + FARMA_H + gap("farma","edif");

  // Section markers on the left axis — one per block, not altitudes.
  const dimMarks = [
    { l: "001", y: yDC },
    { l: "002", y: yFarma },
    { l: "003", y: yEdif },
  ];

  // Callout coords — per active vertical; positioned in absolute SVG space.
  // We point at structures on the active block and line them up to the right gutter.
  const v = (id) => verticals.find(x => x.id === id);
  const callouts = {
    cpd: [
      { anchorX: 440 + 250, anchorY: yDC + 18,           x: 580, y: yDC + 8,   label: v("cpd").notes[0] },
      { anchorX: 200, anchorY: yDC + 70,                  x: 580, y: yDC + 56,  label: v("cpd").notes[1] },
      { anchorX: 320, anchorY: yDC + 22,                  x: 580, y: yDC + 104, label: v("cpd").notes[2] },
    ],
    farma: [
      { anchorX: 320, anchorY: yFarma - 4,                x: 580, y: yFarma + 8,    label: v("farma").notes[0] },
      { anchorX: 240, anchorY: yFarma + 50,               x: 580, y: yFarma + 62,   label: v("farma").notes[1] },
      { anchorX: 200, anchorY: yFarma + FARMA_H - 26,     x: 580, y: yFarma + 110,  label: v("farma").notes[2] },
    ],
    edif: [
      { anchorX: 460, anchorY: yEdif - 20,                x: 580, y: yEdif + 8,    label: v("edif").notes[0] },
      { anchorX: 380, anchorY: yEdif + 100,               x: 580, y: yEdif + 100,  label: v("edif").notes[1] },
      { anchorX: 220, anchorY: yEdif + EDIF_H - 12,       x: 580, y: yEdif + 200,  label: v("edif").notes[2] },
    ],
  };
  const activeCallouts = callouts[activeId] || [];

  const activeLabel = (v(activeId) || {}).label || "";

  // Title block follows the active drawing — vertically centred on its slab,
  // pinned to the right gutter. Per-drawing DWG number and project location.
  const slabY = { cpd: yDC,    farma: yFarma,    edif: yEdif    };
  const slabH = { cpd: DC_H,   farma: FARMA_H,   edif: EDIF_H   };
  const meta  = {
    cpd:   { dwg: "AI-2026-01", scale: "1:100", loc: "MADRID · ESP"   },
    farma: { dwg: "AI-2026-02", scale: "1:100", loc: "MADRID · ESP"   },
    edif:  { dwg: "AI-2026-03", scale: "1:200", loc: "TENERIFE · ESP" },
  };
  const titleY = (slabY[activeId] ?? yEdif) + (slabH[activeId] ?? EDIF_H) / 2 - 50;
  const titleMeta = meta[activeId] || meta.cpd;
  const titleX = 620;
  return (
    <svg
      viewBox="0 0 900 1240"
      className="vt-svg"
      role="img"
      aria-label="Aguilera Ingenieros — verticals isometric"
    >
      <defs>
        <pattern id="vt-grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(245,245,243,0.05)" strokeWidth="0.4"/>
        </pattern>
      </defs>
      <rect x="0" y="0" width="900" height="1240" fill="url(#vt-grid)" />

      {/* Corner registration marks — kept clear of the dimension axis (x=80)
          and the first section marker (y=50) so they don't clash with "001". */}
      <g transform="translate(40, 30)">
        <line x1="0" y1="0" x2="14" y2="0" className="vt-corner" />
        <line x1="0" y1="0" x2="0" y2="14" className="vt-corner" />
      </g>
      <g transform="translate(860, 30)">
        <line x1="0" y1="0" x2="-14" y2="0" className="vt-corner" />
        <line x1="0" y1="0" x2="0" y2="14" className="vt-corner" />
      </g>
      <g transform="translate(40, 1220)">
        <line x1="0" y1="0" x2="14" y2="0" className="vt-corner" />
        <line x1="0" y1="0" x2="0" y2="-14" className="vt-corner" />
      </g>

      {/* Live dimension axis on the left */}
      <DimensionAxis marks={dimMarks} />

      <Block id="cpd"   y={yDC}    isActive={activeId === "cpd"}   label="Data Centers"        codeShort="DATA"  codeNum="01" onSelect={onSelect}>
        <FloorDC active={activeId === "cpd"} />
      </Block>

      <Block id="farma" y={yFarma} isActive={activeId === "farma"} label="Farma & Bioseguridad" codeShort="FARMA" codeNum="02" onSelect={onSelect}>
        <FloorFarma active={activeId === "farma"} />
      </Block>

      <Block id="edif"  y={yEdif}  isActive={activeId === "edif"}  label="Edificios Singulares" codeShort="EDIF"  codeNum="03" onSelect={onSelect}>
        <FloorEdif active={activeId === "edif"} />
      </Block>

      {/* Engineering title block — follows the active drawing vertically */}
      <TitleBlock
        activeLabel={activeLabel}
        dwg={titleMeta.dwg}
        scale={titleMeta.scale}
        loc={titleMeta.loc}
        x={titleX}
        y={titleY}
      />
    </svg>
  );
};

/* -------------------- Hero — list on left, drawing on right -------------------- */

const VerticalsHero = ({ setRoute }) => {
  const { t } = useLang();
  const H = t.home;
  const verticals = H.verticals;
  const [active, setActive] = React.useState(verticals[0].id);

  /* Scroll activation — stable version. Previous IntersectionObserver used a
     narrow centre band and picked "highest intersection ratio" of whatever
     intersected at any frame, which oscillated between adjacent rows. Here we
     compute the menu row whose vertical centre is *closest* to the viewport
     centre on every scroll frame. There is always exactly one winner, so no
     flip-flopping. Hover doesn't affect any of this.
     —
     Below 900px the layout collapses to a vertical stack (see CSS @media at
     900px), the SVG sits above the menu, and pinning the active row to the
     viewport centre stops making any visual sense — yet the rAF + getBCR
     loop kept firing on every scroll frame, which is the lag the user saw on
     a minimised window / phone. We now skip the listener entirely below
     900px, and re-attach if the window grows back over the breakpoint. */
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const DESKTOP_BP = 900;
    let raf = 0;
    let attached = false;
    let cleanupAttached = null;

    const compute = () => {
      raf = 0;
      const items = document.querySelectorAll(".vhero__item[data-id]");
      if (items.length === 0) return;
      const vpCentre = window.innerHeight / 2;
      let closestId = null;
      let closestDist = Infinity;
      items.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.bottom < 0 || r.top > window.innerHeight) return;
        const c = r.top + r.height / 2;
        const d = Math.abs(c - vpCentre);
        if (d < closestDist) { closestDist = d; closestId = el.getAttribute("data-id"); }
      });
      if (closestId) {
        setActive((prev) => (prev === closestId ? prev : closestId));
      }
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(compute); };

    const attach = () => {
      if (attached) return;
      attached = true;
      window.addEventListener("scroll", onScroll, { passive: true });
      compute();
      cleanupAttached = () => {
        window.removeEventListener("scroll", onScroll);
        if (raf) { cancelAnimationFrame(raf); raf = 0; }
      };
    };
    const detach = () => {
      if (!attached) return;
      attached = false;
      if (cleanupAttached) cleanupAttached();
      cleanupAttached = null;
    };

    const evaluate = () => {
      if (window.innerWidth >= DESKTOP_BP) attach();
      else detach();
    };
    evaluate();
    window.addEventListener("resize", evaluate, { passive: true });
    return () => {
      window.removeEventListener("resize", evaluate);
      detach();
    };
  }, []);

  /* Click: set active immediately + smooth-scroll the page to centre that row.
     The scroll listener will keep tracking as the page glides into place and
     ultimately settle on the clicked row. */
  const selectAndScroll = (id, el) => {
    setActive(id);
    if (el && typeof el.scrollIntoView === "function") {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section className="vhero">
      <div className="vhero__intro-wrap">
        <Eyebrow onDark>{H.heroEyebrow}</Eyebrow>
        <h1 className="vhero__title">{H.heroTitle}</h1>
        <p className="vhero__sub">{H.heroSub}</p>
      </div>

      <div className="vhero__inner">
        <ul className="vhero__list">
          {verticals.map((v, i) => {
            const isActive = v.id === active;
            return (
              <li key={v.id}
                data-id={v.id}
                data-pos={i}
                className={"vhero__item " + (isActive ? "is-active" : "")}
                onClick={(e) => selectAndScroll(v.id, e.currentTarget)}>
                <span className="vhero__num">{v.tag}</span>
                <div className="vhero__body">
                  <div className="vhero__label">{v.label}</div>
                  <div className="vhero__short">{v.short}</div>
                  <div className="vhero__expand">
                    <p className="vhero__long">{v.long}</p>
                    <div className="vhero__stats">
                      {v.stats.map((s, k) => (
                        <div key={k} className="vhero__stat">
                          <span className="vhero__stat-k">{s.k}</span>
                          <span className="vhero__stat-v">{s.v}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <span className="vhero__arrow">→</span>
              </li>
            );
          })}
        </ul>

        <div className="vhero__right">
          <ElevationDrawing
            activeId={active}
            verticals={verticals}
            onSelect={(id) => {
              const el = document.querySelector(`.vhero__item[data-id="${id}"]`);
              selectAndScroll(id, el);
            }}
          />
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { VerticalsHero, ElevationDrawing });

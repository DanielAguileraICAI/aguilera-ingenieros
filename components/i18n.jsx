/* i18n.jsx — language context + hook
 * Wraps the app; exposes useLang() returning { lang, t, setLang }.
 * Persists to localStorage; re-renders all consumers on change. */

const AILangContext = React.createContext({ lang: "es", t: window.AI_I18N.es, setLang: () => {} });

const AILangProvider = ({ children }) => {
  const [lang, setLangState] = React.useState(() => {
    const saved = localStorage.getItem("ai_lang");
    return (saved === "es" || saved === "en") ? saved : "es";
  });
  const setLang = React.useCallback((l) => {
    setLangState(l);
    localStorage.setItem("ai_lang", l);
    document.documentElement.lang = l;
  }, []);
  React.useEffect(() => { document.documentElement.lang = lang; }, [lang]);
  const value = React.useMemo(() => ({
    lang, setLang, t: window.AI_I18N[lang],
  }), [lang, setLang]);
  return <AILangContext.Provider value={value}>{children}</AILangContext.Provider>;
};

const useLang = () => React.useContext(AILangContext);

Object.assign(window, { AILangProvider, useLang, AILangContext });
